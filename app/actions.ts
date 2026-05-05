"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createTodo(task: string, description: string) {
    await prisma.todo.create({ data: { task, description } })
    revalidatePath("/todos")
    redirect("/todos")
}

export async function updateTodo(id: number, task: string, description: string) {
    await prisma.todo.update({ where: { id }, data: { task, description } })
    revalidatePath("/todos")
    redirect("/todos")
}

export async function deleteTodo(id: number) {
    await prisma.todo.delete({ where: { id } })
    revalidatePath("/todos")
    redirect("/todos")
}

