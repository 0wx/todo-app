import { todoAPI } from '../../libs/axios'
import { AddActivitiesResponse } from 'todo-types'

interface Data {
  title: string
  email: string
}
export const addActivities = async (data: Data) => {
  const response = await todoAPI.post<AddActivitiesResponse>(
    '/activity-groups/',
    data
  )
  return response.data
}
