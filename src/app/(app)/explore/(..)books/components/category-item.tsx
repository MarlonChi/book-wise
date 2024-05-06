'use client'

import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { CategoryButton } from '@/components/category-button'
import { createQueryString } from '@/utils/createQueryString'
import { Category } from '@/interfaces/category'

interface CategoryItemsProps {
  items: Category[]
}

export function CategoryItems({ items }: CategoryItemsProps) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category')

  const createQuery = useCallback(createQueryString, [searchParams])

  function handleSelectCategory(name: string) {
    const url = createQuery('category', name, searchParams, pathName)

    router.replace(url)
  }

  function handleListAllBooks() {
    const url = createQuery('category', null, searchParams, pathName)
    router.replace(url)
  }

  return (
    <>
      <CategoryButton
        name="Tudo"
        active={!currentCategory}
        onClick={handleListAllBooks}
      />
      {items &&
        items.map((category) => {
          return (
            <CategoryButton
              key={category.id}
              name={category.name}
              active={currentCategory === category.name}
              onClick={() => handleSelectCategory(category.name)}
            />
          )
        })}
    </>
  )
}
