import { todoAPI } from '../../libs/axios'

export const removeActivity = async (id: number): Promise<boolean> => {
  try {
    await todoAPI.delete('/activity-groups/' + id)
    return true
  } catch (error) {
    return false
  }
}
