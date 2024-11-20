import { apiClient } from './apiClient.js'
export async function fetchCategories() {
  return apiClient({ endPoint: 'products/categories' })
}
