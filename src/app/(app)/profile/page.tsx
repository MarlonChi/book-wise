import { Suspense } from 'react'
import { User } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { serverSession } from '@/lib/auth/get-server-session'
import { LoaderUserRatings } from "@/components/loading/user-rating";
import { LoaderUserInfo } from "@/components/loading/user-info";

import { SearchForm } from './components/search-form';
import { UserInfo } from './components/user-info';
import { UserRatings } from './components/user-rating';


export type UserRatingsSearchParams = {
  q?: string
}

interface ProfileProps {
  searchParams: UserRatingsSearchParams
}

export const metadata: Metadata = {
  title: 'Perfil',
}

export default async function Profile({ searchParams }: ProfileProps) {
  const session = await serverSession()

  if (!session) {
    notFound()
  }

  return (
    <div className="mx-auto my-0 flex h-screen max-w-[1600px] flex-1 flex-col p-10 max-xl:p-6">
      <header className="sticky top-0 mt-5 flex items-center gap-3 bg-gray-800/15 py-3 backdrop-blur-md">
        <User className="text-3xl text-green-100" />
        <h1 className="text-2xl font-bold leading-tight">Perfil</h1>
      </header>
      <div className="mb-5 mt-7 grid grid-cols-3 gap-16 max-2xl:grid-cols-5 max-xl:grid-cols-5 max-xl:gap-10 max-lg:flex max-lg:grid-cols-none max-lg:flex-col-reverse">
        <div className="col-span-2 flex h-full w-full flex-col gap-8 max-2xl:col-span-3 max-xl:col-span-3">
          <SearchForm />
          <Suspense fallback={<LoaderUserRatings />}>
            <UserRatings
              userId={session?.user.id}
              searchParams={searchParams}
            />
          </Suspense>
        </div>
        <div className="col-span-1 h-full w-full border-l-2 border-l-gray-700 max-2xl:col-span-2 max-xl:col-span-2 max-lg:h-1/2 max-lg:border-l-0">
          <Suspense fallback={<LoaderUserInfo />}>
            <UserInfo userId={session?.user.id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
