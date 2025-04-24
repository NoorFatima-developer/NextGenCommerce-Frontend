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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const orders = [
  {
    id: "ORD-7652",
    customer: "John Doe",
    email: "john.doe@example.com",
    date: "2023-04-23",
    total: 249.99,
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD-7653",
    customer: "Sarah Miller",
    email: "sarah.miller@example.com",
    date: "2023-04-22",
    total: 399.0,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-7654",
    customer: "Robert Kim",
    email: "robert.kim@example.com",
    date: "2023-04-21",
    total: 129.0,
    status: "Shipped",
    items: 1,
  },
  {
    id: "ORD-7655",
    customer: "Emma Johnson",
    email: "emma.johnson@example.com",
    date: "2023-04-20",
    total: 199.0,
    status: "Delivered",
    items: 4,
  },
  {
    id: "ORD-7656",
    customer: "Michael Park",
    email: "michael.park@example.com",
    date: "2023-04-19",
    total: 499.0,
    status: "Delivered",
    items: 2,
  },
  {
    id: "ORD-7657",
    customer: "Lisa Chen",
    email: "lisa.chen@example.com",
    date: "2023-04-18",
    total: 149.99,
    status: "Cancelled",
    items: 1,
  },
  {
    id: "ORD-7658",
    customer: "David Wilson",
    email: "david.wilson@example.com",
    date: "2023-04-17",
    total: 89.99,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-7659",
    customer: "Jessica Brown",
    email: "jessica.brown@example.com",
    date: "2023-04-16",
    total: 299.99,
    status: "Shipped",
    items: 3,
  },
  {
    id: "ORD-7660",
    customer: "Kevin Lee",
    email: "kevin.lee@example.com",
    date: "2023-04-15",
    total: 179.99,
    status: "Delivered",
    items: 2,
  },
  {
    id: "ORD-7661",
    customer: "Amanda Garcia",
    email: "amanda.garcia@example.com",
    date: "2023-04-14",
    total: 129.99,
    status: "Refunded",
    items: 1,
  },
]

export function OrdersTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const statuses = [...new Set(orders.map((order) => order.status))]

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            placeholder="Search orders..."
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
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-9 w-full sm:w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="hidden sm:table-cell">Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>{order.customer}</div>
                    <div className="text-xs text-muted-foreground">{order.email}</div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{order.date}</TableCell>
                  <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                  <TableCell className="hidden sm:table-cell">{order.items}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        order.status === "Delivered"
                          ? "default"
                          : order.status === "Processing"
                            ? "outline"
                            : order.status === "Shipped"
                              ? "secondary"
                              : order.status === "Cancelled"
                                ? "destructive"
                                : "warning"
                      }
                      className={order.status === "Delivered" ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {order.status}
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
                        <DropdownMenuItem>
                          <Link href={`/dashboard/orders/${order.id}`} className="w-full">
                            View details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Update status</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Cancel order</DropdownMenuItem>
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
          Showing <span className="font-medium">{filteredOrders.length}</span> of{" "}
          <span className="font-medium">{orders.length}</span> orders
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
