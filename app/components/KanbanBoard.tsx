'use client'

import { Task } from "@/types/kanban"
import { KanbanColumn } from "./KanbanColumn"
import { useState } from "react"
import { TaskDialog } from "./TaskDialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function KanbanBoard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | undefined>(undefined)
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

  const handleCreateTask = (values: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...values,
      id: Math.random().toString(36).substr(2, 9),
    }
    setTasks(prev => ({
      ...prev,
      todos: [...prev.todos, newTask],
    }))
  }

  const handleEditTask = (values: Omit<Task, 'id'>) => {
    if (!editingTask) return
    setTasks(prev => ({
      todos: prev.todos.map(task => 
        task.id === editingTask.id ? { ...task, ...values } : task
      ),
      inProgress: prev.inProgress.map(task => 
        task.id === editingTask.id ? { ...task, ...values } : task
      ),
      done: prev.done.map(task => 
        task.id === editingTask.id ? { ...task, ...values } : task
      ),
    }))
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Fixed Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kanban Board</h1>
          <Button onClick={() => setIsDialogOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </Button>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-x-auto overflow-y-auto p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[calc(100vh-10rem)]">
            <KanbanColumn 
              title="Todo" 
              tasks={tasks.todos} 
              onEditTask={setEditingTask}
            />
            <KanbanColumn 
              title="In Progress" 
              tasks={tasks.inProgress} 
              onEditTask={setEditingTask}
            />
            <KanbanColumn 
              title="Done" 
              tasks={tasks.done} 
              onEditTask={setEditingTask}
            />
          </div>
        </div>
      </main>

      <TaskDialog
        open={isDialogOpen || !!editingTask}
        onOpenChange={(open) => {
          setIsDialogOpen(open)
          if (!open) setEditingTask(undefined)
        }}
        onSubmit={editingTask ? handleEditTask : handleCreateTask}
        task={editingTask}
      />
    </div>
  )
} 