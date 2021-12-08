import { CSSProperties, useEffect, useRef } from 'react'
import styles from './styles.module.scss'

interface ModalProps {
  onClickOutSide?: () => void
  style?: CSSProperties
}
const { container } = styles

const Modal: React.FC<ModalProps> = ({ children, style, onClickOutSide }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node)
      ) {
        if (onClickOutSide) onClickOutSide()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickOutSide])

  return (
    <div className={container}>
      <div ref={ref} style={style}>
        {children}
      </div>
    </div>
  )
}

export default Modal
