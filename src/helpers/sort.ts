import { ActivitiesData, TodoItem } from 'todo-types'

export const sortByNewId = (a: ActivitiesData, b: ActivitiesData): number => {
  return b.id - a.id
}

export const sortTerbaru = (a: TodoItem, b: TodoItem): number => {
  return b.id - a.id
}
export const sortTerlama = (a: TodoItem, b: TodoItem): number => {
  return a.id - b.id
}
export const sortAZ = (a: TodoItem, b: TodoItem): number => {
  if (a.title < b.title) return -1
  if (a.title > b.title) return 1
  return 0
}
export const sortZA = (a: TodoItem, b: TodoItem): number => {
  if (a.title > b.title) return -1
  if (a.title < b.title) return 1
  return 0
}
export const sortBelumSelesai = (a: TodoItem, _b: TodoItem): number => {
  return a.is_active ? -1 : 1
}
