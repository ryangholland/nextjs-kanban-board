import KanbanBoard from './components/KanbanBoard'
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <KanbanBoard />
    </main>
  )
}
