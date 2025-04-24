"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ImagePlus, Trash } from "lucide-react"

export function ProductForm() {
  const [images, setImages] = useState([{ id: 1, url: "/placeholder.svg" }])

  const addImage = () => {
    const newId = images.length > 0 ? Math.max(...images.map((img) => img.id)) + 1 : 1
    setImages([...images, { id: newId, url: "/placeholder.svg" }])
  }

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id))
  }

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="images">Images</TabsTrigger>
        <TabsTrigger value="pricing">Pricing</TabsTrigger>
        <TabsTrigger value="inventory">Inventory</TabsTrigger>
      </TabsList>

      <TabsContent value="general" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>General Information</CardTitle>
            <CardDescription>Basic product details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" placeholder="Enter product name" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter product description" className="min-h-[120px]" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="fitness">Fitness</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" placeholder="Enter brand name" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="featured" />
                <Label htmlFor="featured">Featured Product</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="published" defaultChecked />
                <Label htmlFor="published">Published</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="images" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
            <CardDescription>Upload and manage product images</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative border rounded-md overflow-hidden group">
                  <img
                    src={image.url || "/placeholder.svg"}
                    alt="Product"
                    className="w-full aspect-square object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => removeImage(image.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                className="h-full min-h-[150px] flex flex-col items-center justify-center border-dashed"
                onClick={addImage}
              >
                <ImagePlus className="h-8 w-8 mb-2" />
                <span>Add Image</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="pricing" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Pricing Information</CardTitle>
            <CardDescription>Set product pricing and discounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="price">Regular Price ($)</Label>
                  <Input id="price" type="number" placeholder="0.00" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sale-price">Sale Price ($)</Label>
                  <Input id="sale-price" type="number" placeholder="0.00" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="on-sale" />
                <Label htmlFor="on-sale">On Sale</Label>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tax-class">Tax Class</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tax class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="reduced">Reduced Rate</SelectItem>
                    <SelectItem value="zero">Zero Rate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="inventory" className="space-y-4 mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Inventory Management</CardTitle>
            <CardDescription>Manage product stock and availability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="sku">SKU (Stock Keeping Unit)</Label>
                <Input id="sku" placeholder="Enter product SKU" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="barcode">Barcode (ISBN, UPC, GTIN, etc.)</Label>
                <Input id="barcode" placeholder="Enter product barcode" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="quantity">Quantity in stock</Label>
                <Input id="quantity" type="number" placeholder="0" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="low-stock">Low stock threshold</Label>
                <Input id="low-stock" type="number" placeholder="10" />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="track-inventory" defaultChecked />
                <Label htmlFor="track-inventory">Track Inventory</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="allow-backorders" />
                <Label htmlFor="allow-backorders">Allow Backorders</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <div className="mt-6 flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Product</Button>
      </div>
    </Tabs>
  )
}
