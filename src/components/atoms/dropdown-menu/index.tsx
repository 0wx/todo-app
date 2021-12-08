import styles from './styles.module.scss'
import { sortMenu, defaultSortMenu } from '../../../const'
import { nanoid } from 'nanoid'
import { Selected } from '../../../assets/sort-menu'
import { SortMenuTypes } from 'todo-types'
import { useEffect, useRef } from 'react'

const { dropDownMenuContainer, menuContainer, menuLeft, menuRight, icon } = styles

interface DropmenuProps {
  selectedValue?: SortMenuTypes
  onClose: () => void
  onSelect: (value: SortMenuTypes) => void
}
const DropdownMenu: React.FC<DropmenuProps> = ({
  selectedValue = defaultSortMenu,
  onClose,
  onSelect,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose, ref])
  return (
    <div ref={ref} data-cy="sort-parent" className={dropDownMenuContainer}>
      {sortMenu.map((menu) => {
        const { label, Icon, value } = menu
        const isSelected = selectedValue.value === value
        return (
          <div
            data-cy="sort-selection"
            onClick={() => onSelect(menu)}
            key={nanoid()}
            className={menuContainer}
          >
            <div className={menuLeft}>
              <div
              className={icon}
               data-cy="sort-selection-icon">
                <Icon />
              </div>

              <span data-cy="sort-selection-title">{label}</span>
            </div>
            <div className={menuRight}>{isSelected && <Selected />}</div>
          </div>
        )
      })}
    </div>
  )
}

export default DropdownMenu
