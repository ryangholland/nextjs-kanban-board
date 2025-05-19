'use client'

import { Task } from "@/types/kanban"
import { KanbanColumn } from "./KanbanColumn"
import { useState } from "react"

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<{
    todos: Task[]
    inProgress: Task[]
    done: Task[]
  }>({
    todos: [
      { id: '1', title: 'Task 1', description: 'Description for task 1' },
    ],
    inProgress: [
      { id: '2', title: 'Task 2', description: 'Description for task 2' },
    ],
    done: [
      { id: '3', title: 'Task 3', description: 'Description for task 3' },
    ],
  })

  const handleUpdateAssignee = (taskId: string, assignee: string) => {
    setTasks(prev => ({
      todos: prev.todos.map(task => 
        task.id === taskId ? { ...task, assignee } : task
      ),
      inProgress: prev.inProgress.map(task => 
        task.id === taskId ? { ...task, assignee } : task
      ),
      done: prev.done.map(task => 
        task.id === taskId ? { ...task, assignee } : task
      ),
    }))
  }

  return (
    <div className="flex justify-center gap-6 p-6 overflow-x-auto min-h-screen">
      <KanbanColumn title="Todo" tasks={tasks.todos} onUpdateAssignee={handleUpdateAssignee} />
      <KanbanColumn title="In Progress" tasks={tasks.inProgress} onUpdateAssignee={handleUpdateAssignee} />
      <KanbanColumn title="Done" tasks={tasks.done} onUpdateAssignee={handleUpdateAssignee} />
    </div>
  )
} 