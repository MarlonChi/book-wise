import dayjs from 'dayjs'
import {
  Book,
  Books,
  BookOpen,
  UserList ,
} from "@phosphor-icons/react/dist/ssr"

import { Avatar } from '@/components/avatar'
import { api } from '@/utils/api'
import { UserInformation } from '@/interfaces/user'

interface UserInfoProps {
  userId?: string
}

async function getUserInfo(
  id?: string,
): Promise<{ message?: string; userInfo?: UserInformation }> {
  try {
    const response = await api(`/users/${id}`, {
      next: {
        revalidate: 60 * 30,
        tags: ['user-info'],
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    return {
      message: 'Não foi possível encontrar as informações do usuário',
    }
  }
}

export async function UserInfo({ userId }: UserInfoProps) {
  const { userInfo, message } = await getUserInfo(userId)

  if (!userInfo) {
    return (
      <div className="sticky top-32 flex h-[calc(100vh-88px)] flex-col items-center justify-center gap-5 max-2xl:top-16 max-lg:static">
        <Books className="h-12 w-12 text-gray-400" />
        <p className="max-w-60 select-none text-center text-gray-400">
          {message}
        </p>
      </div>
    )
  }

  return (
    <section className="sticky top-32 flex flex-col items-center gap-8 max-2xl:top-16 max-lg:static max-lg:top-0 max-lg:flex-row max-sm:flex-col">
      <div className="flex flex-1 flex-col items-center gap-5 max-lg:flex-auto">
        <Avatar image={userInfo.image} redirectToProfile={false} size="xl" />
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-gray-100">
            {userInfo.name}
          </h1>
          <span className="text-sm text-gray-400">
            membro desde {dayjs(userInfo.createdAt).get('year')}
          </span>
        </div>
      </div>

      <div className="h-1 w-10 rounded-md bg-gradient-vertical max-lg:h-20 max-lg:w-1 max-sm:h-1 max-sm:w-20" />

      <div className="flex flex-col items-center gap-10 px-14 py-5 max-lg:flex-wrap">
        <div className="flex w-full items-center justify-start gap-5">
          <BookOpen className="h-8 w-8 text-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-gray-100">
              {userInfo.totalPagesRead}
            </span>
            <span className="text-sm text-gray-300">Páginas lidas</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <Books className="h-8 w-8 text-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-gray-100">
              {userInfo.evaluatedBooks}
            </span>
            <span className="text-sm text-gray-300">Livros avaliados</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <UserList className="h-8 w-8 text-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-gray-100">
              {userInfo.authorsRead}
            </span>
            <span className="text-sm text-gray-300">Autores lidos</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <Book className="h-8 w-8 text-green-100" />
          <div className="flex flex-col">
            <span className="line-clamp-3 text-xl font-bold text-gray-100">
              {userInfo.categoryMoreRead ?? 'Ainda não possui'}
            </span>
            <span className="text-sm text-gray-300">
              Categoria mais lida
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
