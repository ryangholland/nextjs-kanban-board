import { Task } from "@/types/kanban"
import { KanbanCard } from "./KanbanCard"
import { Card } from "@/components/ui/card"

interface KanbanColumnProps {
  title: string
  tasks: Task[]
  onUpdateAssignee: (taskId: string, assignee: string) => void
}

export function KanbanColumn({ title, tasks, onUpdateAssignee }: KanbanColumnProps) {
  return (
    <Card className="bg-muted/50 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-sm font-medium">
          {tasks.length}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} onUpdateAssignee={onUpdateAssignee} />
        ))}
        {tasks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No tasks yet
          </div>
        )}
      </div>
    </Card>
  )
} 