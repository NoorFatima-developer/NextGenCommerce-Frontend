import { Star } from "lucide-react"; 

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <Star size={14} className="text-gray-300" />
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: "50%" }}
        >
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    );
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={`empty-${i}`} size={14} className="text-gray-300" />
    );
  }

  return stars;
};

export default renderStars;