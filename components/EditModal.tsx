"use client"

import { useState } from "react"
import { updateTodo } from "@/app/actions"

export default function EditModal({ id, currentTask, currentDescription }: {
    id: number; currentTask: string; currentDescription: string
}) {

    const [open, setOpen] = useState(false)
    const [form, setForm] = useState({ task: currentTask, description: currentDescription })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm(prev => (
            { ...prev, [name]: value }
        ))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setOpen(false)
        await updateTodo(id, form.task, form.description)
        
    }

    return (
        <>
            <button onClick={() => setOpen(true)} className="border border-black/20 px-3 py-1.5 rounded-lg text-xs hover:bg-black/5">
                Edit
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                        <h2 className="text-lg font-bold mb-4">Edit Task</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                className="border border-black/20 px-3 py-2 rounded-lg text-sm outline-none focus:border-black"
                                value={form.task}
                                name="task"
                                onChange={handleChange}
                            />
                            <textarea
                                className="border border-black/20 px-3 py-2 rounded-lg text-sm outline-none focus:border-black resize-none"
                                value={form.description}
                                name="description"
                                onChange={handleChange}
                                rows={4}
                            />
                            <div className="flex gap-2 mt-1">
                                <button type="submit" className="flex-1 bg-black text-white py-2 rounded-lg text-sm">Save</button>
                                <button type="button" onClick={() => setOpen(false)} className="flex-1 border border-black/20 py-2 rounded-lg text-sm">Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            )}
        </>
    )
}