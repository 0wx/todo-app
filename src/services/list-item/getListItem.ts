import { todoAPI } from '../../libs/axios'
import { ListItemAPIResponse } from 'todo-types'

export const getListItem = async (id: number) => {
  const response = await todoAPI.get<ListItemAPIResponse>(
    '/todo-items?activity_group_id=' + id
  )

  return response.data
}
