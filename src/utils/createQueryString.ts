import { ReadonlyURLSearchParams } from 'next/navigation'

export const createQueryString = (
  name: string,
  value: string | null | undefined,
  searchParams: ReadonlyURLSearchParams,
  pathName: string,
) => {
  const params = new URLSearchParams(searchParams.toString())
  if (!value) {
    params.delete(name)
  } else {
    params.set(name, value)
  }

  return pathName + '?' + params.toString()
}
