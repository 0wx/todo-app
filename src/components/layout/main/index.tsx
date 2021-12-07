import styles from './styles.module.scss'
import MainHeader from './header'

const { root, content, wrapper } = styles
const MainLayout: React.FC = ({ children }) => {
  return (
    <section className={root}>
      <MainHeader />
      <div className={content}>
        <div className={wrapper}>{children}</div>
      </div>
    </section>
  )
}

export default MainLayout
