import { useState } from 'react'
import { EditButton } from '../../atoms'
import styles from './styles.module.scss'

const { container } = styles
interface EditableTextProps {
  text: string
  className?: string
  onChange: (text: string) => void
}
const EditableText: React.FC<EditableTextProps> = ({
  text,
  className,
  onChange,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [textValue, setTextValue] = useState<string>(text)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value)
  }

  const handleOutFocus = () => {
    if (!!textValue) {
      onChange(textValue)
      setIsEditing(false)
      return
    }
    setIsEditing(false)
  }
  if (!isEditing)
    return (
      <div className={container}>
        <span
          data-cy="todo-title"
          onClick={() => setIsEditing(true)}
          className={className || ''}
        >
          {text}
        </span>
        <EditButton
          data-cy="todo-title-edit-button"
          onClick={() => {
            setIsEditing(true)
          }}
        />
      </div>
    )

  return (
    <div className={container}>
      <input
        autoFocus
        onBlur={handleOutFocus}
        type={'text'}
        value={textValue}
        className={className || ''}
        onChange={handleChange}
      />
      <EditButton
        data-cy="todo-title-edit-button"
        onClick={() => {
          setIsEditing(true)
        }}
      />
    </div>
  )
}

export default EditableText
