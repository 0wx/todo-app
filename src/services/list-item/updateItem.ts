import { todoAPI } from '../../libs/axios'
import { UpdateItemPayload, UpdateItemResponse } from 'todo-types'

export const updateItem = async (
  id: number,
  payload: UpdateItemPayload
): Promise<UpdateItemResponse | null> => {
  try {
    const response = await todoAPI.patch<UpdateItemResponse>(
      '/todo-items/' + id,
      payload
    )
    return response.data
  } catch (error) {
    return null
  }
}
