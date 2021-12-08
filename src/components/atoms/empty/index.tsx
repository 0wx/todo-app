import { ReactComponent as PersonActivity } from '../../../assets/person.svg'
import { ReactComponent as PersonList } from '../../../assets/person2.svg'
import styles from './styles.module.scss'

interface EmptyProps {
  type: 'Activity' | 'List Item'
  onClick: () => void
}
const { person } = styles
const Empty: React.FC<EmptyProps> = ({ onClick, type }) => {
  return (
    <div className={person}>
      {type === 'Activity' && <PersonActivity onClick={onClick} />}
      {type === 'List Item' && <PersonList onClick={onClick} />}
    </div>
  )
}

export default Empty
