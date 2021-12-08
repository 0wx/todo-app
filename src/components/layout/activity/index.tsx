import { ButtonAdd } from '../../atoms'
import styles from './styles.module.scss'

const { container, header, activity, content } = styles

interface Ac {
  onAdd: () => void
  isDisabled: boolean
}
const ActivityLayout: React.FC<Ac> = ({ children, onAdd, isDisabled }) => {
  return (
    <div className={container}>
      <div className={header}>
        <span data-cy="activity-title" className={activity}>Activity</span>
        <ButtonAdd dataCy="activity-add-button" isDisabled={isDisabled} onClick={onAdd} />
      </div>
      <div className={content}>{children}</div>
    </div>
  )
}

export default ActivityLayout
