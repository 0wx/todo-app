import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { CSSProperties } from 'react'
import { Link } from 'react-router-dom'

interface BackProps {
  to: string
  size?: SizeProp
  style?: CSSProperties
}

const { icon } = styles
const ButtonBack: React.FC<BackProps> = ({ to, size, style }) => {
  return (
    <Link to={to}>
      <FontAwesomeIcon
        className={icon}
        icon={faChevronLeft}
        size={size}
        style={style}
      />
    </Link>
  )
}

export default ButtonBack
