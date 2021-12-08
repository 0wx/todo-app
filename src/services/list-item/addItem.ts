import { todoAPI } from '../../libs/axios'
import { AddItemResponse, ItemPayload } from 'todo-types'

export const addItem = async (data: ItemPayload) => {
  const response = await todoAPI.post<AddItemResponse>('/todo-items', data)
  return response.data
}
