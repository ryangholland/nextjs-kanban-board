import { Task } from "@/types/kanban"
import { KanbanCard } from "./KanbanCard"

interface KanbanColumnProps {
  title: string
  tasks: Task[]
  onUpdateAssignee: (taskId: string, assignee: string) => void
}

export function KanbanColumn({ title, tasks, onUpdateAssignee }: KanbanColumnProps) {
  return (
    <div className="flex flex-col gap-4 min-w-[300px]">
      <div className="text-xl font-semibold">{title}</div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} onUpdateAssignee={onUpdateAssignee} />
        ))}
      </div>
    </div>
  )
} 