// components/TodoList.tsx
import EditModal from "./EditModal"
import DeleteButton from "./DeleteButton"
import Link from "next/link"

type Todo = {
    id: number
    task: string
    description: string
}

export default async function TodoList() {
    const res = await fetch("http://localhost:3000/api/todos", { cache: "no-store" })
    const todos: Todo[] = await res.json()

    return (
        <div className="flex flex-col gap-3">
            {todos.map(todo => (
                <div key={todo.id} className="border border-black/10 p-4 rounded-xl">
                    <Link href={`/todos/${todo.id}`}>
                        <p className="font-semibold text-sm cursor-pointer hover:underline">{todo.task}</p>
                    </Link>
                    <p className="text-black/50 text-sm mt-0.5">{todo.description}</p>
                    <div className="flex gap-2 mt-3">
                        <EditModal id={todo.id} currentTask={todo.task} currentDescription={todo.description} />
                        <DeleteButton id={todo.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}