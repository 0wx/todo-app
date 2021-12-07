import styles from './styles.module.scss'

const { header, title } = styles
const MainHeader: React.FC = () => {
  return (
    <div className={header}>
      <div>
        <span className={title}>TO DO LIST APP</span>
      </div>
    </div>
  )
}

export default MainHeader
