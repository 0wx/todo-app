import styles from './styles.module.scss'
import { ButtonAdd, DropdownMenu } from '../../atoms'
import { EditableText } from '../../drawer'
import { ButtonBack, SortButton } from '../../atoms'
import { useState } from 'react'
import { SortMenuTypes } from 'todo-types'
import { defaultSortMenu } from '../../../const'

interface DetailProps {
  title?: string
  onAdd: () => void
  onTitleChange: (text: string) => void
  onSort: (value: SortMenuTypes) => void
}

const {
  container,
  header,
  content,
  text,
  headerLeft,
  headerRight,
  sortButton,
  dropMenu,
  sortButtonIcon,
} = styles

const DetailLayout: React.FC<DetailProps> = ({
  title,
  children,
  onAdd,
  onTitleChange,
  onSort,
}) => {
  const [show, setShow] = useState<boolean>(false)
  const [sortValue, setSortValue] = useState<SortMenuTypes>(defaultSortMenu)
  const closeDropdown = () => setShow(false)

  const handlingSelect = (value: SortMenuTypes) => {
    setSortValue(value)
    onSort(value)
  }
  return (
    <div className={container}>
      <div className={header}>
        <div className={headerLeft}>
          <ButtonBack to={'/'} size={'2x'} />
          {title && (
            <EditableText
              text={title}
              className={text}
              onChange={onTitleChange}
            />
          )}
        </div>
        <div className={headerRight}>
          <div className={sortButton}>
            <div className={sortButtonIcon}>
              <SortButton onClick={() => setShow((v) => !v)} />
            </div>
            <div className={dropMenu}>
              {show && (
                <DropdownMenu
                  selectedValue={sortValue}
                  onClose={closeDropdown}
                  onSelect={handlingSelect}
                />
              )}
            </div>
          </div>
          <ButtonAdd isDisabled={!title} onClick={onAdd} />
        </div>
      </div>
      <div className={content}>{children}</div>
    </div>
  )
}

export default DetailLayout
