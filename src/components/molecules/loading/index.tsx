import ReactLoading from 'react-loading'
import styles from './styles.module.scss'

const { loader } = styles
const Loading: React.FC = () => {
  return (
    <div className={loader}>
      <ReactLoading type="bubbles" color="#ccc" />
    </div>
  )
}

export default Loading