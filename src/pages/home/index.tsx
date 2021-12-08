import { MainLayout, ActivityLayout } from '../../components/layout'
import { useEffect, useState } from 'react'
import { Activities } from 'todo-types'
import { addActivities, getActivities } from '../../services'
import {
  ActivityCard,
  Loading,
  Error,
  AlertSuccess,
} from '../../components/molecules'
import { nanoid } from 'nanoid'
import { removeActivity } from '../../services/activity/removeActivity'
import { Empty } from '../../components/atoms'
import { sortByNewId } from '../../helpers/sort'
import { intialActivities } from '../../const'
import { Modal } from '../../components/drawer'

const Home: React.FC = () => {
  const [activities, setActivities] = useState<Activities | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const [showRemoveStatus, setShowRemoveStatus] = useState<boolean>(false)
  const handlingAdd = async () => {
    if (activities) {
      if (activities.total < activities.limit) {
        const { created_at, title, id } = await addActivities(intialActivities)

        const newData = [{ created_at, title, id }, ...activities.data]
        setActivities({ ...activities, data: newData })
      } else alert('Limit')
    }
  }

  const handlingRemove = async (id: number) => {
    setLoading(true)
    setShowRemoveStatus(true)
    const response = await removeActivity(id)
    setLoading(false)
    

    if (activities && response) {
      const newData = activities.data.filter((act) => act.id !== id)
      setActivities({ ...activities, data: newData })
    }
  }
  useEffect(() => {
    if (!activities)
      getActivities()
        .then((act) => {
          setActivities(act)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
          setError(true)
        })
  }, [activities])

  return (
    <MainLayout>
      <ActivityLayout onAdd={handlingAdd} isDisabled={error || loading}>
        {loading && <Loading />}
        {!loading &&
          activities &&
          activities.data.length > 0 &&
          activities.data.sort(sortByNewId).map((act) => {
            return (
              <ActivityCard
                key={nanoid()}
                {...act}
                onRemove={() => {
                  handlingRemove(act.id)
                }}
              />
            )
          })}
        {!loading && activities && activities.data.length < 1 && (
          <Empty type="Activity" onClick={handlingAdd} />
        )}
        {showRemoveStatus && <Modal onClickOutSide={() => setShowRemoveStatus(false)}><AlertSuccess label="Activity berhasil dihapus" /></Modal>}
        {error && <Error />}
      </ActivityLayout>
    </MainLayout>
  )
}

export default Home
