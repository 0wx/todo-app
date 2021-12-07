declare module 'todo-types' {
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
}
