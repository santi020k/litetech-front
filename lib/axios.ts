import axios from 'axios'

export const api = axios.create({
  // TODO: Move to env
  // Base URL for the API
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`
})
