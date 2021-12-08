import { useState } from 'react'
import styles from './styles.module.scss'

interface InputTextProps {
  label?: string
  onChange: (text: string) => void
  placeholder?: string
  value?: string
}
const { container, inputText, _label } = styles
const InputText: React.FC<InputTextProps> = ({
  label,
  onChange,
  placeholder,
  value,
}) => {
  const [textValue, setTextValue] = useState<string>(value || '')
  return (
    <div className={container}>
      {label && <span className={_label}>{label}</span>}
      <input
        autoFocus
        className={inputText}
        type="text"
        onChange={(e) => {
          setTextValue(e.currentTarget.value)
          onChange(e.currentTarget.value)
        }}
        placeholder={placeholder}
        value={textValue}
      />
    </div>
  )
}

export default InputText
