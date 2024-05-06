import { ReactNode } from 'react'

import { Menu } from '@/components/menu'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen gap-6 max-xl:gap-2 max-lg:flex-col max-lg:gap-0">
      <div className="p-5 max-lg:h-16 max-lg:w-full max-lg:p-0">
        <Menu />
      </div>
      <div className="flex-1 overflow-y-scroll">{children}</div>
    </main>
  )
}
