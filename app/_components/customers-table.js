"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const customers = [
  {
    id: "CUST-1001",
    name: "John Doe",
    email: "john.doe@example.com",
    orders: 12,
    spent: 1249.99,
    status: "Active",
    lastOrder: "2023-04-23",
  },
  {
    id: "CUST-1002",
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    orders: 8,
    spent: 899.0,
    status: "Active",
    lastOrder: "2023-04-22",
  },
  {
    id: "CUST-1003",
    name: "Robert Kim",
    email: "robert.kim@example.com",
    orders: 5,
    spent: 429.0,
    status: "Active",
    lastOrder: "2023-04-21",
  },
  {
    id: "CUST-1004",
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    orders: 15,
    spent: 1599.0,
    status: "Active",
    lastOrder: "2023-04-20",
  },
  {
    id: "CUST-1005",
    name: "Michael Park",
    email: "michael.park@example.com",
    orders: 7,
    spent: 899.0,
    status: "Active",
    lastOrder: "2023-04-19",
  },
  {
    id: "CUST-1006",
    name: "Lisa Chen",
    email: "lisa.chen@example.com",
    orders: 3,
    spent: 249.99,
    status: "Inactive",
    lastOrder: "2023-03-18",
  },
  {
    id: "CUST-1007",
    name: "David Wilson",
    email: "david.wilson@example.com",
    orders: 9,
    spent: 789.99,
    status: "Active",
    lastOrder: "2023-04-17",
  },
  {
    id: "CUST-1008",
    name: "Jessica Brown",
    email: "jessica.brown@example.com",
    orders: 6,
    spent: 599.99,
    status: "Active",
    lastOrder: "2023-04-16",
  },
  {
    id: "CUST-1009",
    name: "Kevin Lee",
    email: "kevin.lee@example.com",
    orders: 4,
    spent: 379.99,
    status: "Inactive",
    lastOrder: "2023-02-15",
  },
  {
    id: "CUST-1010",
    name: "Amanda Garcia",
    email: "amanda.garcia@example.com",
    orders: 2,
    spent: 129.99,
    status: "Active",
    lastOrder: "2023-04-14",
  },
]

export function CustomersTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "" || customer.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9"
          />
          <Button variant="outline" size="sm" className="h-9 px-2 lg:px-3">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant={statusFilter === "" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("")}>
            All
          </Button>
          <Button
            variant={statusFilter === "Active" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("Active")}
          >
            Active
          </Button>
          <Button
            variant={statusFilter === "Inactive" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("Inactive")}
          >
            Inactive
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">ID</TableHead>
              <TableHead className="hidden md:table-cell">Last Order</TableHead>
              <TableHead className="text-right">Orders</TableHead>
              <TableHead className="text-right">Total Spent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No customers found.
                </TableCell>
              </TableRow>
            ) : (
              filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg" alt={customer.name} />
                        <AvatarFallback>
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-xs text-muted-foreground">{customer.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{customer.id}</TableCell>
                  <TableCell className="hidden md:table-cell">{customer.lastOrder}</TableCell>
                  <TableCell className="text-right">{customer.orders}</TableCell>
                  <TableCell className="text-right">${customer.spent.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={customer.status === "Active" ? "default" : "secondary"}
                      className={customer.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View orders</DropdownMenuItem>
                        <DropdownMenuItem>Edit details</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete customer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredCustomers.length}</span> of{" "}
          <span className="font-medium">{customers.length}</span> customers
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="h-8 w-8 p-0">
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
