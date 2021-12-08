// /todo-items/:id

import { todoAPI } from '../../libs/axios'

export const removeItem = async (id: number) => {
  try {
    await todoAPI.delete('/todo-items/' + id)
    return true
  } catch (error) {
    return false
  }
}
