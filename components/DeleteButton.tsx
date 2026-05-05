"use client"

import { deleteTodo } from "@/app/actions"

export default function DeleteButton({ id }: { id: number }) {

    async function handleDelete() {
        await deleteTodo(id)
    }
    return (
        <button onClick={handleDelete} className="border border-red-200 text-red-500 px-3 py-1.5 rounded-lg text-xs hover:bg-red-50">
            Delete
        </button>
    )
}