"use client"
import { useEffect, useRef, useState } from "react";
import { User, LogOut, ShoppingBag, Star, XCircle, Settings } from "lucide-react";

export default function ProfileMenu() {
  const [isopen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null)       //to refer dropdown...

  const handleClickOutside = (event) => {
    if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setIsOpen(false);
    }
  };

  useEffect(()=> {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.addEventListener("mousedown", handleClickOutside);
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/*Profile Icon */}
      <div
        onClick={() => setIsOpen(!isopen)}
        className="w-7 h-7 rounded-full bg-[#e24646] text-white flex items-center justify-center cursor-pointer"
      >
        <User className="w-5 h-5" />
      </div>

      {/*Dropdown (Only if open) */}
      {isopen && (
        <div className="absolute right-0 mt-2 w-52 bg-gray-100 shadow-lg rounded-md border z-50">
          <ul className="text-sm text-gray-700 p-2 space-y-1 rounded-sm">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Settings className="w-4 h-4" />
              Manage My Account
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <ShoppingBag className="w-4 h-4" />
              My Orders
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <XCircle className="w-4 h-4" />
              My Cancellations
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <Star className="w-4 h-4" />
              My Reviews
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
              <LogOut className="w-4 h-4" />
              My Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
