import CreateTodo from "@/components/CreatetoDo"
import TodoList from "@/components/TodoList"

export default async function TodosPage() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            <h1 className="text-2xl font-bold tracking-tight mb-8">Tasks</h1>

            <div className="grid grid-cols-3 gap-8 items-start">

                <div className="col-span-1">
                    <CreateTodo />
                </div>

                <div className="col-span-2">
                    <TodoList />
                </div>

            </div>

        </div>
    )
}


// async function getTodos() {
//     const res = await fetch("http://localhost:3000/api/todos", { cache: "no-store" })
//     return res.json()
// }

// export default async function TodosPage() {
//     const todos = await getTodos()

//     return (
//         <div className="max-w-6xl mx-auto px-6 py-12">

//             <h1 className="text-2xl font-bold tracking-tight mb-8">Tasks</h1>

//             <div className="grid grid-cols-3 gap-8 items-start">

//                 <div className="col-span-1">
//                     <CreateTodo />
//                 </div>

//                 <div className="col-span-2">
//                     <TodoList todos={todos} />
//                 </div>

//             </div>

//         </div>
//     )
// }