'use client'

import { memo } from 'react'
import { usePathname } from 'next/navigation'

import { GoogleAuthButton } from '@/app/(auth)/sign-in/components/google-auth-button'
import { GithubAuthButton } from '@/app/(auth)/sign-in/components/github-auth-button'

import { env } from '@/env'


function SignInRequestComponent() {
  const path = usePathname()
  const basePath = env.NEXT_PUBLIC_API_BASE_URL

  const callbackUrl = new URL(path, basePath)

  return (
    <div className="absolute flex h-full w-full flex-col justify-center gap-10 rounded-lg bg-gray-700/40 px-8 py-6 backdrop-blur-md">
      <div className="mx-auto flex flex-col items-center justify-center gap-5">
        <GoogleAuthButton
          signInOptions={{
            redirect: true,
            callbackUrl: callbackUrl.href,
          }}
        />
        <GithubAuthButton
          signInOptions={{
            redirect: true,
            callbackUrl: callbackUrl.href,
          }}
        />
      </div>
    </div>
  )
}

export const SignInRequest = memo(SignInRequestComponent)
