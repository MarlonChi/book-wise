import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const rates = await prisma.rating.findMany({
      orderBy: {
        created_at: "desc",
      },
      take: 10,
      include: {
        user: {
          select: {
            image: true,
            name: true,
          },
        },
        book: {
          select: {
            id: true,
            author: true,
            name: true,
            cover_url: true,
            summary: true,
            ratings: {
              select: {
                rate: true,
              },
            },
          },
        },
      },
    });

    return Response.json({ rates });
  } catch (error) {
    return Response.json(
      { message: "Não foi possível carregar o feed" },
      { status: 400 }
    );
  }
}
