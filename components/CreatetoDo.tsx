"use client"

import { useState } from "react"
import { createTodo } from "@/app/actions"

export default function CreateTodo() {
    const [value, setValue] = useState({ task: '', description: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setValue(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setValue({ task: '', description: '' })
        await createTodo(value.task, value.description)
    }

    return (
        <div className="w-full border border-black/10 rounded-2xl p-6">

            <h2 className="text-lg font-bold mb-1">Create New Task</h2>
            <p className="text-black/50 text-sm mb-4">Add a title and description for your task</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Task</label>
                    <input
                        className="border border-black/20 px-3 py-2 rounded-lg text-sm outline-none focus:border-black"
                        placeholder="Write your task.."
                        value={value.task}
                        name="task"
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Description</label>
                    <textarea
                        className="border border-black/20 px-3 py-2 rounded-lg text-sm outline-none focus:border-black resize-none"
                        placeholder="Write task details..."
                        value={value.description}
                        name="description"
                        onChange={handleChange}
                        rows={4}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-black/80"
                >
                    Create Task
                </button>

            </form>
        </div>
    )
}