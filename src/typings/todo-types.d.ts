declare module 'todo-types' {
  export type Priority = 'very-high' | 'high' | 'normal' | 'low' | 'very-low'
  export type UpdateItemPayloadWithId = UpdateItemPayload & { id: number }
  export type IsActive = 1 | 0
  export interface ActivitiesData {
    id: number
    title: string
    created_at: Date
  }

  export interface Activities {
    total: number
    limit: number
    skip: number
    data: ActivitiesData[]
  }

  export interface AddActivitiesResponse {
    created_at: Date
    updated_at: Date
    id: number
    title: string
    email: string
  }
  export interface TodoItem {
    id: number
    title: string
    activity_group_id: number
    is_active: IsActive
    priority: Priority
  }

  export interface GetActivityGroupAPIResponse {
    id: number
    title: string
    created_at: Date
    todo_items: TodoItem[]
  }

  export interface ListItemAPIResponse {
    total: number
    limit: number
    skip: number
    data: TodoItem[]
  }

  export interface OptionsValue {
    label: string | JSX.Element
    selected: boolean
    value: Priority
    color: string
  }

  export interface ItemPayload {
    activity_group_id: number
    title: string
    priority: Priority
  }

  export interface AddItemResponse {
    is_active: boolean
    priority: Priority
    created_at: Date
    updated_at: Date
    id: number
    activity_group_id: number
    title: string
  }

  export interface UpdateItemPayload {
    title: string
    is_active: IsActive
    priority: Priority
  }

  export interface UpdateItemResponse {
    id: number
    activity_group_id: number
    title: string
    is_active: IsActive
    priority: Priority
    created_at: Date
    updated_at: Date
  }

  export type SortValue =
    | 'terlama'
    | 'terbaru'
    | 'a-z'
    | 'z-a'
    | 'belum-selesai'
  export interface SortMenuTypes {
    value: SortValue
    label: string
    Icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined
      }
    >
  }
}
