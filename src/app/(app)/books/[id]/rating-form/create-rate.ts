'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { z } from 'zod'

import { serverSession } from '@/lib/auth/get-server-session'
import { prisma } from '@/lib/prisma'

const createRateSchema = z.object({
  rate: z.number().min(0).max(6),
  description: z.string(),
  userId: z.string(),
  bookId: z.string(),
})

type CreateRate = z.infer<typeof createRateSchema>

type CreateRateResponse = {
  success: boolean
  message?: string
}

export async function createRate(
  data: CreateRate,
): Promise<CreateRateResponse> {
  const session = await serverSession()

  if (!session) {
    return {
      success: false,
      message: 'É necessário estar logado para publicar uma avaliação!',
    }
  }

  try {
    const { bookId, description, rate, userId } = createRateSchema.parse(data)

    await prisma.rating.create({
      data: {
        description,
        rate,
        book_id: bookId,
        user_id: userId,
      },
    })

    revalidateTag('ratings')
    revalidateTag('book')
    revalidateTag('user-ratings')
    revalidateTag('user-info')
    revalidatePath('/home')

    return { success: true, message: 'Avaliação feita com sucesso!' }
  } catch (error) {
    return { success: false, message: 'Erro ao criar avaliação' }
  }
}
