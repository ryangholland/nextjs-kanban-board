import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Task } from "@/types/kanban"
import { Button } from "@/components/ui/button"
import { UserCircle, Pencil } from "lucide-react"

interface KanbanCardProps {
  task: Task
  onEditTask: (task: Task) => void
}

export function KanbanCard({ task, onEditTask }: KanbanCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <CardTitle className="text-base">{task.title}</CardTitle>
        <Button
          size="icon"
          variant="ghost"
          className="h-7 w-7"
          onClick={() => onEditTask(task)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <p className="text-sm text-muted-foreground">{task.description}</p>
        
        <div className="flex items-center gap-2 pt-2">
          <UserCircle className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">
            {task.assignee || "Unassigned"}
          </span>
        </div>
      </CardContent>
    </Card>
  )
} 