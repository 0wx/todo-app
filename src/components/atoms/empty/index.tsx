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
    <div className={person} onClick={onClick}>
      {type === 'Activity' && <PersonActivity />}
      {type === 'List Item' && <PersonList />}
    </div>
  )
}

export default Empty
