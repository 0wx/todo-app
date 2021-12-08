import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
const { header, title } = styles
const MainHeader: React.FC = () => {
  return (
    <div data-cy="header-background" className={header}>
      <div>
        <Link to="/" style={{textDecoration: 'none'}}>
          <span data-cy="header-title" className={title}>TO DO LIST APP</span>
        </Link>
      </div>
    </div>
  )
}

export default MainHeader
