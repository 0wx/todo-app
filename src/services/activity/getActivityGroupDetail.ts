import { GetActivityGroupAPIResponse } from 'todo-types'
import { todoAPI } from '../../libs/axios'

export const getActivityGroupDetail = async (id: number) => {
  const { data } = await todoAPI.get<GetActivityGroupAPIResponse>(
    '/activity-groups/' + id
  )

  return data
}
