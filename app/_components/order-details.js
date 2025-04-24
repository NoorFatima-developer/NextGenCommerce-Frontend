"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

// Mock data for a specific order
const orderData = {
  id: "ORD-7652",
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
  },
  date: "2023-04-23",
  status: "Delivered",
  paymentMethod: "Credit Card",
  paymentStatus: "Paid",
  shippingMethod: "Express Shipping",
  trackingNumber: "TRK123456789",
  subtotal: 229.99,
  shipping: 10.0,
  tax: 10.0,
  total: 249.99,
  items: [
    {
      id: "PROD-1234",
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      total: 199.99,
    },
    {
      id: "PROD-5678",
      name: "Leather Wallet",
      price: 15.0,
      quantity: 2,
      total: 30.0,
    },
  ],
}

export function OrderDetails({ orderId }) {
  const [status, setStatus] = useState(orderData.status)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Order details and status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Order ID</div>
                <div>{orderData.id}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Date</div>
                <div>{orderData.date}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Status</div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      status === "Delivered"
                        ? "default"
                        : status === "Processing"
                          ? "outline"
                          : status === "Shipped"
                            ? "secondary"
                            : status === "Cancelled"
                              ? "destructive"
                              : "warning"
                    }
                    className={status === "Delivered" ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {status}
                  </Badge>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-muted-foreground">Payment</div>
                <div>{orderData.paymentStatus}</div>
              </div>
            </div>
            <Separator />
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Update Status</div>
              <div className="flex gap-2">
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Processing">Processing</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                    <SelectItem value="Refunded">Refunded</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Name</div>
              <div>{orderData.customer.name}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Contact</div>
              <div>{orderData.customer.email}</div>
              <div>{orderData.customer.phone}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Shipping Address</div>
              <div>{orderData.customer.address.street}</div>
              <div>
                {orderData.customer.address.city}, {orderData.customer.address.state} {orderData.customer.address.zip}
              </div>
              <div>{orderData.customer.address.country}</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Customer Profile
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Items</CardTitle>
            <CardDescription>Products in this order</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderData.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">{item.id}</div>
                    </TableCell>
                    <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{item.quantity}</TableCell>
                    <TableCell className="text-right">${item.total.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment & Shipping</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Payment Method</div>
              <div>{orderData.paymentMethod}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Shipping Method</div>
              <div>{orderData.shippingMethod}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Tracking Number</div>
              <div>{orderData.trackingNumber}</div>
            </div>
            <Separator />
            <div className="space-y-1">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div>${orderData.subtotal.toFixed(2)}</div>
              </div>
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>${orderData.shipping.toFixed(2)}</div>
              </div>
              <div className="flex justify-between">
                <div>Tax</div>
                <div>${orderData.tax.toFixed(2)}</div>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <div>Total</div>
                <div>${orderData.total.toFixed(2)}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Print Invoice</Button>
            <Button>Send Receipt</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
