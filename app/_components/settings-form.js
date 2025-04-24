"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export function SettingsForm() {
  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="payment">Payment</TabsTrigger>
        <TabsTrigger value="shipping">Shipping</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
            <CardDescription>Basic information about your store</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" defaultValue="E-Shop Store" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="store-url">Store URL</Label>
                <Input id="store-url" defaultValue="https://eshop-store.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="store-email">Contact Email</Label>
                <Input id="store-email" type="email" defaultValue="contact@eshop-store.com" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="store-phone">Contact Phone</Label>
                <Input id="store-phone" defaultValue="+1 (555) 123-4567" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="store-address">Store Address</Label>
                <Textarea id="store-address" defaultValue="123 E-Commerce St, New York, NY 10001, United States" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Currency Settings</CardTitle>
            <CardDescription>Configure your store's currency options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="currency-position">Currency Position</Label>
                <Select defaultValue="before">
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="before">Before - $99.99</SelectItem>
                    <SelectItem value="after">After - 99.99$</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="thousand-separator">Thousand Separator</Label>
                <Select defaultValue="comma">
                  <SelectTrigger>
                    <SelectValue placeholder="Select separator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="comma">Comma (,)</SelectItem>
                    <SelectItem value="period">Period (.)</SelectItem>
                    <SelectItem value="space">Space</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="decimal-separator">Decimal Separator</Label>
                <Select defaultValue="period">
                  <SelectTrigger>
                    <SelectValue placeholder="Select separator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="period">Period (.)</SelectItem>
                    <SelectItem value="comma">Comma (,)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="payment" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>Configure available payment methods</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Credit Card</Label>
                  <div className="text-sm text-muted-foreground">Accept Visa, Mastercard, Amex, etc.</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">PayPal</Label>
                  <div className="text-sm text-muted-foreground">Accept payments via PayPal</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Apple Pay</Label>
                  <div className="text-sm text-muted-foreground">Accept payments via Apple Pay</div>
                </div>
                <Switch />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Google Pay</Label>
                  <div className="text-sm text-muted-foreground">Accept payments via Google Pay</div>
                </div>
                <Switch />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Bank Transfer</Label>
                  <div className="text-sm text-muted-foreground">Accept direct bank transfers</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="shipping" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Shipping Options</CardTitle>
            <CardDescription>Configure shipping methods and rates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Free Shipping</Label>
                  <div className="text-sm text-muted-foreground">For orders over $50</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Standard Shipping</Label>
                  <div className="text-sm text-muted-foreground">$5.99 - Delivery in 3-5 business days</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Express Shipping</Label>
                  <div className="text-sm text-muted-foreground">$14.99 - Delivery in 1-2 business days</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">International Shipping</Label>
                  <div className="text-sm text-muted-foreground">$24.99 - Delivery in 7-14 business days</div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
            <CardDescription>Configure automated email notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">New Order</Label>
                  <div className="text-sm text-muted-foreground">Send email when a new order is placed</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Order Status Update</Label>
                  <div className="text-sm text-muted-foreground">Send email when order status changes</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Low Stock Alert</Label>
                  <div className="text-sm text-muted-foreground">Send email when product stock is low</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Customer Account</Label>
                  <div className="text-sm text-muted-foreground">
                    Send email for account creation and password reset
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Marketing Emails</Label>
                  <div className="text-sm text-muted-foreground">Send promotional emails and newsletters</div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
