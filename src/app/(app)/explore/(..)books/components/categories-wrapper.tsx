import { api } from '@/utils/api'
import { Category } from '@/interfaces/category'
import { CategoryItems } from './category-item'


async function getCategories(): Promise<{
  message?: string
  categories: Category[]
}> {
  try {
    const response = await api('/books/categories')
    const categories = await response.json()

    return categories
  } catch (error) {
    return {
      categories: [],
      message: 'Não foi possível carregar as categorias',
    }
  }
}

export async function CategoriesWrapper() {
  const data = await getCategories()
  return (
    <div className="mb-4 flex max-h-56 items-center justify-start gap-3 overflow-x-scroll bg-gray-800 py-2">
      <CategoryItems items={data.categories} />
    </div>
  )
}
