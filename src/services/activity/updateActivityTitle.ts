import { todoAPI } from '../../libs/axios'

interface Payload {
  title: string
}

export const updateActivityTitle = async (
  id: number,
  payload: Payload
): Promise<boolean> => {
  try {
    await todoAPI.patch('/activity-groups/' + id, payload)
    return true
  } catch (error) {
    return false
  }
}
