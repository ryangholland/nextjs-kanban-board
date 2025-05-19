import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Task } from "@/types/kanban"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, ChangeEvent } from "react"
import { UserCircle, Edit2, Check } from "lucide-react"

interface KanbanCardProps {
  task: Task
  onUpdateAssignee?: (taskId: string, assignee: string) => void
}

export function KanbanCard({ task, onUpdateAssignee }: KanbanCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [assigneeInput, setAssigneeInput] = useState(task.assignee || "")

  const handleSaveAssignee = () => {
    onUpdateAssignee?.(task.id, assigneeInput)
    setIsEditing(false)
  }

  return (
    <Card className="bg-card">
      <CardHeader className="p-4">
        <CardTitle className="text-base">{task.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-3">
        <p className="text-sm text-muted-foreground">{task.description}</p>
        
        <div className="flex items-center gap-2 pt-2">
          <UserCircle className="h-4 w-4 text-muted-foreground" />
          {isEditing ? (
            <div className="flex items-center gap-2 flex-1">
              <Input
                value={assigneeInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAssigneeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSaveAssignee()
                  }
                }}
                className="h-7 text-sm"
                placeholder="Enter assignee name"
              />
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7"
                onClick={handleSaveAssignee}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between flex-1">
              <span className="text-sm">
                {task.assignee || "Unassigned"}
              </span>
              <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7"
                onClick={() => setIsEditing(true)}
              >
                <Edit2 className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 