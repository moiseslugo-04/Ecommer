'https://dummyjson.com/products/category-list'
const URL_BASE = 'https://dummyjson.com/'
export async function apiClient({ endPoint }) {
  try {
    const request = await fetch(`${URL_BASE}${endPoint}`)
    if (!request.ok) throw new Error('Error getting data from server')
    const response = await request.json()
    return response
  } catch (error) {
    console.error(error)
  }
}
