import React from 'react'
import { ReactComponent as Cloud } from '../../../assets/cloud.svg'
import styles from './styles.module.scss'

const { container } = styles
const Error: React.FC = () => {
  return (
    <div className={container}>
      <Cloud />
      <span>Can't connect to server</span>
    </div>
  )
}
export default Error
