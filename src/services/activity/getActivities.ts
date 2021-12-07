import { todoAPI } from '../../libs/axios'
import { Activities } from 'todo-types'

export const getActivities = async () => {
  const { data } = await todoAPI.get<Activities>(
    '/activity-groups?email=xvnyan@gmail.com'
  )
  return data
}
