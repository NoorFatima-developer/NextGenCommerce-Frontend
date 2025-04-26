"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { usePathname } from "next/navigation"

export default function AccountManagement() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  useEffect(() => {
    // Simulate fetching user data from an API
    const fetchUserData = async () => {
      const fetchedData = {
        firstName: "Ma",
        lastName: "Rimel",
        email: "rimel111@gmail.com",
        address: "Kingston, 5236, United States",
      };
      setFormData(fetchedData);
    };

    fetchUserData();
  }, []);

  const handleChange = () => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const pathname = usePathname();

  return (
    <div className="container mx-auto p-4 max-w-6xl">
        {/* Breadcrumb & Welcome Bar */}
      <div className="flex justify-between items-center pb-2 mb-0 text-sm text-gray-600">
        <div className="space-x-1">
          <span>Home</span>
          <span>/</span>
          <span className="text-[#DB4444] capitalize">{pathname.split("/")[1]}</span>
        </div>
        <div>
          Welcome! <span className="text-[#DB4444]">Ma Rimel</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Manage My Account</h3>
              <nav className="flex flex-col space-y-1">
                <a href="#" className="text-[#DB4444] hover:text-rose-800 py-1">
                  My Profile
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 py-1">
                  Address Book
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 py-1">
                  My Payment Options
                </a>
              </nav>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">My Orders</h3>
              <nav className="flex flex-col space-y-1">
                <a href="#" className="text-gray-500 hover:text-gray-800 py-1">
                  My Returns
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-800 py-1">
                  My Cancellations
                </a>
              </nav>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">My Wishlist</h3>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-medium text-[#DB4444]">Edit Your Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-100"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">Password Changes</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="currentPassword" className="block text-sm font-medium">
                    Current Password
                  </label>
                  <Input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="w-full bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="newPassword" className="block text-sm font-medium">
                    New Password
                  </label>
                  <Input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full bg-gray-100"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium">
                    Confirm New Password
                  </label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full bg-gray-100"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <div className="flex gap-2">
                    <Button type="submit" className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-15 w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-center items-center rounded-tl-[2px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[3px]">
                      View All
                    </Button>
                  </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
