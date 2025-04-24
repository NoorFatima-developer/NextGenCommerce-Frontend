"use client";

import React from "react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "women", name: "Woman's Fashion" },
  { id: "men", name: "Men's Fashion" },
  { id: "electronics", name: "Electronics" },
  { id: "home", name: "Home & Lifestyle" },
  { id: "medicine", name: "Medicine" },
  { id: "sports", name: "Sports & Outdoor" },
  { id: "baby", name: "Baby's & Toys" },
  { id: "groceries", name: "Groceries" },
  { id: "health", name: "Health & Beauty" },
];

const CategorySidebar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white shadow-sm rounded-md p-4">
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between",
                activeCategory === category.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              <span>{category.name}</span>
              {category.id === "electronics" && (
                <span className="inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded-sm">
                  Today's
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
