import { apiClient } from './apiClient.js'
export async function fetchProduct() {
  return apiClient({ endPoint: 'products' })
}
export async function fetchProductByCategory({ category }) {
  return await apiClient({ endPoint: `products/category/${category}` })
}
