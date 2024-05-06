import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const categories = await prisma.category.findMany()

    return Response.json({ categories })
  } catch (error) {
    return Response.json({
      message: 'Não foi possível carregar as categorias',
      categories: [],
    })
  }
}
