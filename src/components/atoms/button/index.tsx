import styles from './styles.module.scss'

const { btn, _label, disable } = styles

interface ButtonProps {
  onClick: () => void
  isDisabled?: boolean
  label: string | JSX.Element
  style?: React.CSSProperties
}
const Button: React.FC<ButtonProps> = ({ onClick, label, isDisabled = false, style }) => {
  return (
    <button
      style={style}
      className={`${btn} ${isDisabled ? disable : ''}`.trim()}
      onClick={onClick}
      disabled={isDisabled}
    >
      <span className={_label}>{label}</span>
    </button>
  )
}

export default Button
