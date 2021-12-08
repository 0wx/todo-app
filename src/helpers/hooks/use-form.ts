import { useState } from 'react'

export const useForm = <T>(initialState: T) => {
  const [state, setState] = useState(initialState)

  const handleStateSchange = (key: string, value: any) => {
    setState((prev) => {
      return {
        ...prev,
        [key]: value,
      }
    })
  }

  return {
    state,
    handleStateSchange,
  }
}
