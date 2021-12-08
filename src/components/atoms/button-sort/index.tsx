import styles from './styles.module.scss'

import { ReactComponent as SortButtonSVG } from '../../../assets/sort.svg'
interface SortButtonProps {
  onClick: () => void
}
const { sortButtonContainer } = styles
const SortButton: React.FC<SortButtonProps> = ({ onClick }) => {
  return (
    <div data-cy="todo-sort-button" className={sortButtonContainer} onClick={onClick}>
      <SortButtonSVG />
    </div>
  )
}

export default SortButton
