import { NextRequest } from 'next/server'

import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params

    const bookRatings = await prisma.rating.findMany({
      where: {
        book_id: id,
      },
      select: {
        id: true,
        created_at: true,
        description: true,
        rate: true,
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    })

    return Response.json({ ratings: bookRatings })
  } catch (error) {
    return Response.json(
      {
        ratings: [],
        message: 'Não foi possível encontrar as avaliações do livro.',
      },
      { status: 400 },
    )
  }
}
