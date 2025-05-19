'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Task {
  id: string
  title: string
  description: string
}

interface KanbanColumnProps {
  title: string
  tasks: Task[]
}

const KanbanColumn = ({ title, tasks }: KanbanColumnProps) => {
  return (
    <div className="flex flex-col gap-4 min-w-[300px]">
      <div className="text-xl font-semibold">{title}</div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Card key={task.id} className="bg-card">
            <CardHeader className="p-4">
              <CardTitle className="text-base">{task.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
              {task.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function KanbanBoard() {
  // Example tasks - you can replace this with your actual data
  const todos: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description for task 1' },
  ]
  const inProgress: Task[] = [
    { id: '2', title: 'Task 2', description: 'Description for task 2' },
  ]
  const done: Task[] = [
    { id: '3', title: 'Task 3', description: 'Description for task 3' },
  ]

  return (
    <div className="flex justify-center gap-6 p-6 overflow-x-auto min-h-screen">
      <KanbanColumn title="Todo" tasks={todos} />
      <KanbanColumn title="In Progress" tasks={inProgress} />
      <KanbanColumn title="Done" tasks={done} />
    </div>
  )
} 