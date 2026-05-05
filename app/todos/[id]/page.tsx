// app/todos/[id]/page.tsx
import { prisma } from "@/lib/prisma"
import EditModal from "@/components/EditModal"
import DeleteButton from "@/components/DeleteButton"
import { notFound } from "next/navigation"

export default async function TaskPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const todo = await prisma.todo.findUnique({
        where: { id: Number(id) }
    })

    if (!todo) return notFound()

    return (
        <div className="max-w-xl mx-auto px-6 py-12">

            <div className="border border-black/10 rounded-2xl p-6">

                <h1 className="text-2xl font-bold mb-1">{todo.task}</h1>
                <p className="text-black/50 text-sm mb-6">{todo.description}</p>

                <div className="flex gap-2">
                    <EditModal id={todo.id} currentTask={todo.task} currentDescription={todo.description} />
                    <DeleteButton id={todo.id} />
                </div>

            </div>

        </div>
    )
}