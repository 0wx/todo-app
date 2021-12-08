import styles from './styles.module.scss'

interface InputCheckboxProps {
  onCheck: () => void
  is_active: boolean
}

const { inputContainer } = styles
const InputCheckbox: React.FC<InputCheckboxProps> = ({ onCheck, is_active }) => {

  
  return (
    <div className={inputContainer}>
      <input type={'checkbox'} defaultChecked={!is_active} onChange={onCheck} />
    </div>
  )
}

export default InputCheckbox