import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Kanban Board</h1>
          <ThemeToggle />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Kanban</CardTitle>
              <CardDescription>A modern task management system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This is a test of shadcn/ui components with dark mode support.</p>
              <Button>Get Started</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Dark Mode Support</CardTitle>
              <CardDescription>Built with next-themes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Click the sun/moon icon in the top right to toggle between light and dark modes.</p>
              <Button variant="secondary">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Modern UI Components</CardTitle>
              <CardDescription>Powered by shadcn/ui</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Beautiful, accessible components for your Next.js application.</p>
              <Button variant="outline">Explore</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
