import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface ButtonProps {
  onClick?: () => void
  [key: string]: any
}

const ButtonClose: React.FC<ButtonProps> = (props) => {
  return (
    <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faTimes} {...props} />
  )
}

export default ButtonClose
