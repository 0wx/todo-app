import { MainLayout, ActivityLayout } from '../../components/layout'
import { useEffect, useState } from 'react'
import { Activities } from 'todo-types'
import { addActivities, getActivities } from '../../services'
import { ActivityCard, Loading, Error } from '../../components/molecules'
import { nanoid } from 'nanoid'
const intialActivities = { title: 'New Activity', email: 'xvnyan@gmail.com' }

const Home: React.FC = () => {
  const [activities, setActivities] = useState<Activities | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const handlingAdd = async () => {
    if (activities) {
      if (activities.total < activities.limit) {
        const { created_at, title, id } = await addActivities(intialActivities)

        const newData = [...activities.data, { created_at, title, id }]
        setActivities({ ...activities, data: newData })
      } else alert('Limit')
    }
  }
  useEffect(() => {
    if (!activities)
      getActivities()
        .then((act) => {
          console.log(act)
          setActivities(act)
          setLoading(false)
        })
        .catch((e) => {
          setLoading(false)
          setError(true)
        })
  }, [activities])

  return (
    <MainLayout>
      <ActivityLayout onAdd={handlingAdd} isDisabled={error || loading}>
        {loading && <Loading />}
        {activities &&
          activities.data.map((act) => {
            return <ActivityCard key={nanoid()} {...act} onRemove={() => {
              
              console.log(act)
            }}/>
          })}
        {error && <Error />}
      </ActivityLayout>
    </MainLayout>
  )
}

export default Home
