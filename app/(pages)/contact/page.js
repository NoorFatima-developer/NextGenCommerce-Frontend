import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 mb-15 mt-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-12">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <span>Contact</span>
      </nav>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1">
          <div className="space-y-6">
            {/* Call Us Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#DB4444] text-white p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">Call To Us</h3>
              </div>
              <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
              <p className="text-gray-600">Phone: +8801611112222</p>
            </div>

            <hr className="my-6" />

            {/* Write To Us Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#DB4444] text-white p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">Write To US</h3>
              </div>
              <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-gray-600">Emails: customer@exclusive.com</p>
              <p className="text-gray-600">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
  <form className="space-y-4">
    <div className="grid md:grid-cols-3 gap-4">
      {/* Name Field */}
      <div className="relative">
        <Input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-gray-100"
          required
        />
        <span className="absolute top-2 right-43 text-red-500 text-sm">*</span>
      </div>

      {/* Email Field */}
      <div className="relative">
        <Input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-gray-100"
          required
        />
        <span className="absolute top-2 right-43 text-red-500 text-sm">*</span>
      </div>

      {/* Phone Field */}
      <div className="relative">
        <Input
          type="tel"
          placeholder="Your Phone"
          className="w-full px-4 py-3"
          required
        />
        <span className="absolute top-2 right-43 text-red-500 text-sm">*</span>
      </div>
    </div>

    {/* Message Field */}
    <div>
      <textarea
        placeholder="Your Message"
        rows={6}
        className="w-full px-4 py-3 bg-gray-100"
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="flex justify-end">
      <Button
        type="submit"
        className="bg-[#DB4444] hover:bg-red-400 text-white px-8 py-3 rounded-md transition-colors"
      >
        Send Message
      </Button>
    </div>
  </form>
</div>



      </div>
    </div>
  )
}
