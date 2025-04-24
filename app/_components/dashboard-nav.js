"use client"

import { cn } from "@/lib/utils"
import { BarChart3, Package, ShoppingCart, Users, Settings, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <div className="group flex h-screen w-16 flex-col items-center border-r bg-background py-4 transition-all duration-300 hover:w-64 md:w-64">
      <div className="flex h-16 items-center justify-center">
        <h1 className="hidden text-xl font-bold group-hover:block md:block">E-Shop Admin</h1>
        <span className="block text-xl font-bold group-hover:hidden md:hidden">E</span>
      </div>
      <nav className="flex flex-1 flex-col gap-2 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex h-10 items-center gap-2 rounded-md px-3 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === item.href && "bg-accent text-accent-foreground",
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="hidden truncate group-hover:block md:block">{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
