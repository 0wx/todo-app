import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { ActivitiesData } from 'todo-types'
import { dateFormater } from '../../../helpers/dateFormater'
import { TrashButton } from '../../atoms'
import { Alert } from '../'
import '../../../styles/react-confirm-alert.scss'
import { useState } from 'react'
import { Modal } from '../../drawer'

const { activityCard, activityBody, cardFooter, activityTime, link } = styles

const ActivityCard: React.FC<ActivitiesData & { onRemove: () => void }> = ({
  id,
  title,
  created_at,
  onRemove,
}) => {
  const [show, setShow] = useState<boolean>(false)

  const handleClose = () => setShow(false)
  return (
    <div data-cy="activity-item" className={activityCard}>
      <Link className={link} to={`/detail/${id}`} title={title}>
        <div className={activityBody}>
          <h4 data-cy="activity-item-title">{title}</h4>
        </div>
      </Link>
      <div className={cardFooter}>
        <div data-cy="activity-item-date" className={activityTime}>
          {dateFormater(created_at)}
        </div>
        {show && (
          <Modal onClickOutSide={handleClose}>
            <Alert
              onNo={handleClose}
              title={title}
              type={'Activity'}
              onYes={() => {
                onRemove()
                handleClose()
              }}
            />
          </Modal>
        )}
        <TrashButton
          dataCy="activity-item-delete-button"
          onClick={() => setShow(true)}
        />
      </div>
    </div>
  )
}

export default ActivityCard
