"use client";
import Link from "next/link";

const CategoryCard = ({ icon, name, count, active }) => {
  return (
    <Link href={`/category/${name.toLowerCase()}`} className="group">
      <div
        className={`flex flex-col items-center p-4 rounded-lg border shadow-sm transition-all hover:shadow-md hover:scale-105 
        ${active ? "bg-[#DB4444] text-white" : "bg-card text-card-foreground hover:bg-[#DB4444] hover:text-white"}`}
      >
        <div  
        
          className={`p-3 rounded-full mb-3 transition-all 
            ${active ? "bg-white/20 text-white" : "bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white"}`}
        >
          {icon}
        </div>

        <h3 className="font-medium text-sm">{name}</h3>

        <p className={`text-xs mt-1 transition-all ${active ? "text-white" : "text-muted-foreground group-hover:text-white"}`}>
          {count} items
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
