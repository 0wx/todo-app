import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface ButtonProps {
  onClick?: () => void
  [key: string]: any
}

const ButtonClose: React.FC<ButtonProps> = (props) => {
  return (
    <div {...props} style={{ cursor: 'pointer' }}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  )
}

export default ButtonClose
