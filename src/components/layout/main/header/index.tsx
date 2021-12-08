import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
const { header, title } = styles
const MainHeader: React.FC = () => {
  return (
    <div className={header}>
      <div>
        <Link to="/" style={{textDecoration: 'none'}}>
          <span className={title}>TO DO LIST APP</span>
        </Link>
      </div>
    </div>
  )
}

export default MainHeader
