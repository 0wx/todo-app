import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'

const { btn, label, disable } = styles

interface Button {
  onClick: () => void
  isDisabled: boolean
  dataCy: string
}
const ButtonAdd: React.FC<Button> = ({ dataCy, onClick, isDisabled }) => {
  return (
    <button
      data-cy={dataCy}
      className={`${btn} ${isDisabled ? disable : ''}`.trim()}
      onClick={onClick}
      disabled={isDisabled}
    >
      <FontAwesomeIcon icon={faPlus} size={'1x'} color="#fff" />
      <span className={label}>Tambah</span>
    </button>
  )
}

export default ButtonAdd
