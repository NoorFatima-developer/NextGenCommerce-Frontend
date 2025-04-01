"use client";
import { Button } from "@/components/ui/button";
import FeaturedBanner from "./(pages)/FeaturedBanner/page";
import ProductCard from "./(pages)/products/components/ProductCard";
import { useFormikForm } from "./_common/hooks/useFormikForm";
import {
  homeUserInitialValues,
  homeUserSchema,
} from "./_validationSchemas/home";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Computer,
  Headphones,
  Phone,
  Watch,
  Gamepad,
} from "lucide-react";
import CategorySidebar from "./(pages)/categories/components/categorySidebar";
import CategoryCard from "./(pages)/categories/components/categoryCard";


const Home = () => {
  const { values, setFieldValue } = useFormikForm(
    homeUserInitialValues,
    onSubmit,
    homeUserSchema
  );

  function onSubmit(values) {
    console.log("Selected Category:", values.activeCategory);
  }

  const handleCategoryChange = (category) => {
    setFieldValue("activeCategory", category); // ✅ Fixed typo
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar Categories */}
            <div className="lg:w-1/5">
              <CategorySidebar
                activeCategory={values.activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>

            {/* Main Content */}
            <div className="lg:w-4/5">
              {/* Featured Banner */}
              <FeaturedBanner />

              {/* Flash Sales Section */}
              <section className="mt-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Flash Sales</h2>
                  <button className="text-sm font-medium text-primary hover:underline">
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <ProductCard
                    image="/Game.jpeg"
                    name="HAVIT HV-G92 Gamepad"
                    price={120}
                    originalPrice={160}
                    discount={40}
                    rating={5}
                    reviewCount={88}
                  />
                  <ProductCard
                    image="/Keyboard.jpeg"
                    name="AK-900 Wired Keyboard"
                    price={980}
                    originalPrice={1160}
                    discount={35}
                    rating={4.5}
                    reviewCount={75}
                  />
                  <ProductCard
                    image="/Monitor.jpeg"
                    name="IPS LCD Gaming Monitor"
                    price={370}
                    originalPrice={400}
                    discount={30}
                    rating={4.7}
                    reviewCount={99}
                  />
                  <ProductCard
                    image="/Chair.jpeg"
                    name="S-Series Comfort Chair"
                    price={375}
                    originalPrice={400}
                    discount={25}
                    rating={4.8}
                    reviewCount={99}
                  />
                </div>
              </section>

              {/* View All products... */}
              <div className="w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-center items-center pt-20">
                <Button className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-8">
                  View All products
                </Button>
              </div>

              {/* Categories Section */}
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-500 w-1 h-6 mr-2"></div>
                    <span className="text-red-500 font-medium">Categories</span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Browse By Category</h2>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 border rounded-md flex items-center justify-center">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button className="w-8 h-8 border rounded-md flex items-center justify-center">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 ">
                    <CategoryCard icon={<Phone className="h-6 w-6" />} name="Phones" count={10} />
                    <CategoryCard icon={<Computer className="h-6 w-6" />} name="Computers" count={8} />
                    <CategoryCard icon={<Watch className="h-6 w-6" />} name="SmartWatch" count={5} />
                    <CategoryCard icon={<Camera className="h-6 w-6" />} name="Camera" count={12} active={true} />
                    <CategoryCard icon={<Headphones className="h-6 w-6" />} name="HeadPhones" count={7} />
                    <CategoryCard icon={<Gamepad className="h-6 w-6" />} name="Gaming" count={6} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
