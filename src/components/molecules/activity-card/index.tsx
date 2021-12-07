import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { ActivitiesData } from 'todo-types'
import { dateFormater } from '../../../helpers/dateFormater'
import { TrashButton } from '../../atoms'
import { Alert } from '../'
import { confirmAlert } from 'react-confirm-alert'
import '../../../styles/react-confirm-alert.scss'

const { activityCard, activityBody, cardFooter, activityTime, link } =
  styles
const ActivityCard: React.FC<ActivitiesData & { onRemove: () => void }> = ({
  id,
  title,
  created_at,
  onRemove,
}) => {
  return (
    <div className={activityCard}>
      <Link className={link} to={`/detail/${id}`}>
        <div className={activityBody}>
          <h4>{title}</h4>
        </div>
      </Link>
      <div className={cardFooter}>
        <div className={activityTime}>{dateFormater(created_at)}</div>
        <TrashButton
          onClick={() => {
            confirmAlert({
              customUI: ({ onClose }) => (
                <Alert
                  onNo={onClose}
                  title={title}
                  type={'Activity'}
                  onYes={() => {
                    onRemove()
                    onClose()
                  }}
                />
              ),
            })
          }}
        />
      </div>
    </div>
  )
}

export default ActivityCard
