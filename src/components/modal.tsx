'use client'

import { X } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'
import { type ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <div className="absolute bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-black/10 backdrop-blur-md transition">
      <dialog
        ref={dialogRef}
        className="position relative flex h-[720px] w-[50%] animate-[show-modal_200ms_ease-out] justify-center rounded-lg border-none bg-gray-800 p-5 pt-12 transition max-xl:w-9/12 max-md:h-full max-md:w-full"
      >
        {children}
        <button
          onClick={onDismiss}
          className="absolute right-4 top-3 border-none bg-transparent"
        >
          <X className="text-gray-200" />
        </button>
      </dialog>
    </div>,
    document.getElementById('modal-root')!,
  )
}
