import { DashboardHeader } from "@/app/_components/dashboard-header"
import { DashboardNav } from "@/app/_components/dashboard-nav"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}


