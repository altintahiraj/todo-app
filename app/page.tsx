import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-4">Todo App</h1>
      <p className="text-black/60 mb-8">manage your tasks</p>
      <Link href="/todos" className="block mt-2">
        <button className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black/80">
          Your Dashboard 
        </button>
      </Link>
    </main>
  );
}