import axios from 'axios'

export const BASE_URL = 'https://todo.api.devcode.gethired.id'

export const todoAPI = axios.create({ baseURL: BASE_URL })
