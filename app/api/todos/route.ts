import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
    const todos =await prisma.todo.findMany({
            orderBy: {createdAt: "desc"}
        })
    return Response.json(todos)
}


// export async function POST(request: Request) {
//     const body = await request.json()
//     await prisma.todo.create({ data: body })
//     return Response.json({ ok: true })
// }