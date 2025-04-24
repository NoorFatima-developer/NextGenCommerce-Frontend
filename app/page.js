"use client";
import { Button } from "@/components/ui/button";
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
  Package,
  ShieldCheck,
} from "lucide-react";

import FeaturedBanner from "./_components/featuredBanner";
import CategoryCard from "./_components/categoryCard";
import CategorySidebar from "./_components/categorySidebar";
import ProductCard from "./_common/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "./_contexts/CartContext";
import dummyProductData from "./data/dummydata";

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
    setFieldValue("activeCategory", category);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "gamepad001",
      name: dummyProductData.title,
      price: dummyProductData.price,
      quantity: 1,
      image: dummyProductData.products[0],
    });
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
                  <div className="flex gap-2">
                    <Button className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-15 w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-center items-center rounded-tl-[2px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[3px]">
                      View All
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {dummyProductData.productdata.map((product) => (
                    <ProductCard
                      key={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      discount={product.discount}
                      rating={product.rating}
                      reviewCount={product.reviewCount}
                      onAddToCart={() => handleAddToCart(product)} // Send full product data to cart
                    />
                  ))}
                </div>
              </section>

              {/* View All products... */}
              <div className="w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-center items-center pt-20">
                <Button
                  className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-8 
            rounded-tl-[2px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px]"
                >
                  View All products
                </Button>
              </div>

              <div className="w-full mx-auto h-[0.5px] bg-gray-200 my-10" />

              {/* Categories Section */}
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DB4444] w-3 h-6 mr-2 rounded"></div>
                    <span className="text-[#DB4444] font-medium">
                      Categories
                    </span>
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
                    <CategoryCard
                      icon={<Phone className="h-6 w-6" />}
                      name="Phones"
                      count={10}
                    />
                    <CategoryCard
                      icon={<Computer className="h-6 w-6" />}
                      name="Computers"
                      count={8}
                    />
                    <CategoryCard
                      icon={<Watch className="h-6 w-6" />}
                      name="SmartWatch"
                      count={5}
                    />
                    <CategoryCard
                      icon={<Camera className="h-6 w-6" />}
                      name="Camera"
                      count={12}
                      active={true}
                    />
                    <CategoryCard
                      icon={<Headphones className="h-6 w-6" />}
                      name="HeadPhones"
                      count={7}
                    />
                    <CategoryCard
                      icon={<Gamepad className="h-6 w-6" />}
                      name="Gaming"
                      count={6}
                    />
                  </div>
                </div>
              </div>

              {/* Selling Products */}
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DB4444] w-3 h-6 mr-2 rounded"></div>
                    <span className="text-[#DB4444] font-medium">
                      This Month
                    </span>
                  </div>

                  <section className="mt-4">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">
                        Best Selling Products
                      </h2>
                      <div className="flex gap-2">
                        <Button className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-15 w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-center items-center rounded-tl-[2px] rounded-tr-[3px] rounded-bl-[3px] rounded-br-[3px]">
                          View All
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {dummyProductData.productdata.map((product) => (
                        <ProductCard
                          key={product.id}
                          image={product.image}
                          name={product.name}
                          price={product.price}
                          originalPrice={product.originalPrice}
                          discount={product.discount}
                          rating={product.rating}
                          reviewCount={product.reviewCount}
                          onAddToCart={() => handleAddToCart(product)} // Send full product data to cart
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              {/* Hero Section */}
              <section className="relative bg-black text-white">
                <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
                  <div className="md:w-1/2 space-y-6 z-10 ml-8">
                    <p className="text-green-500 font-medium mb-6">
                      Categories
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      Enhance Your
                      <br />
                      Music Experience
                    </h1>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">23</span>
                        <span className="text-xs">Hours</span>
                      </div>
                      <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">05</span>
                        <span className="text-xs">Days</span>
                      </div>
                      <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">59</span>
                        <span className="text-xs">Minutes</span>
                      </div>
                      <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center">
                        <span className="font-bold">35</span>
                        <span className="text-xs">Seconds</span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="bg-green-500 hover:bg-[#DB4444] text-white rounded-md mt-6"
                    >
                      Buy Now!
                    </Button>
                  </div>

                  <div className="md:w-1/2 mt-10 md:mt-0">
                    <img
                      src="/jbl-boombox.png"
                      alt="JBL Speaker"
                      width={600}
                      height={400}
                      className="object-contain"
                    />
                  </div>
                </div>
              </section>

              {/* Explore Products... */}

              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="mb-12">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#DB4444] w-3 h-6 mr-2 rounded"></div>
                    <span className="text-[#DB4444] font-medium">
                      Our Products
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Explore Our Products</h2>
                    <div className="flex gap-2">
                      <Button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-black text-sm font-bold hover:bg-gray-200">
                        &#8592; {/* Left Arrow */}
                      </Button>

                      {/* Right Circle with Right Arrow */}
                      <Button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-black text-sm font-bold hover:bg-gray-200">
                        &#8594; {/* Right Arrow */}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                      image="/breed.jpeg"
                      name="Breed Dry Dog Food"
                      price={120}
                      originalPrice={160}
                      discount={40}
                      rating={5}
                      reviewCount={88}
                    />
                    <ProductCard
                      image="/camera.jpeg"
                      name="CANON EOS DSLR CAMERA"
                      price={980}
                      originalPrice={1160}
                      discount={35}
                      rating={4.5}
                      reviewCount={75}
                    />
                    <ProductCard
                      image="/laptop.jpeg"
                      name="ASUS FHD Gaming Laptop"
                      price={370}
                      originalPrice={400}
                      discount={30}
                      rating={4.7}
                      reviewCount={99}
                    />
                    <ProductCard
                      image="/product.jpeg"
                      name="Curology Product Set"
                      price={375}
                      originalPrice={400}
                      discount={25}
                      rating={4.8}
                      reviewCount={99}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard
                      image="/car.jpeg"
                      name="Kids Electric Car"
                      price={120}
                      originalPrice={160}
                      discount={40}
                      rating={5}
                      reviewCount={88}
                    />
                    <ProductCard
                      image="/soccer.jpeg"
                      name="Jr. Zoom Soccer Cleats"
                      price={980}
                      originalPrice={1160}
                      discount={35}
                      rating={4.5}
                      reviewCount={75}
                    />
                    <ProductCard
                      image="/shooter.jpeg"
                      name="GPII Shooter USB GamePad"
                      price={370}
                      originalPrice={400}
                      discount={30}
                      rating={4.7}
                      reviewCount={99}
                    />
                    <ProductCard
                      image="/jacket.jpeg"
                      name="Quilted Satin Jacket"
                      price={375}
                      originalPrice={400}
                      discount={25}
                      rating={4.8}
                      reviewCount={99}
                    />
                  </div>

                  {/* View All products... */}
                  <div className="w-3/4 md:w-3/4 lg:w-2/3 mx-auto flex justify-center items-center pt-20">
                    <Button
                      className="bg-[#DB4444] hover:bg-[#c13c3c] text-white px-8 
            rounded-tl-[2px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px]"
                    >
                      View All products
                    </Button>
                  </div>

                  {/* Featured Products Section */}
                  <section className="py-16 container mx-auto px-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-8 bg-red-500 rounded"></div>
                      <span className="text-red-500 font-medium">Featured</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-8">New Arrival</h2>

                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* LEFT COLUMN */}
                      <div>
                        <Card className="bg-black text-white overflow-hidden rounded-lg border-0 h-full relative min-h-[400px]">
                          <img
                            src="https://images-cdn.ubuy.co.in/66a224e758b45d57671ab10a-enigma-bois-noir-edp-for-men-100-ml.jpg"
                            alt="PlayStation 5"
                            fill
                            className="object-cover"
                          />
                          <CardContent className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-bold mb-2">
                              PlayStation 5
                            </h3>
                            <p className="text-sm text-gray-300 mb-4">
                              Black and White version of the PS5 coming out on
                              sale.
                            </p>
                            <Button
                              variant="link"
                              className="text-white p-0 hover:text-gray-200"
                            >
                              Shop Now
                            </Button>
                          </CardContent>
                        </Card>
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="flex flex-col gap-6">
                        {/* Top Right: Women's Collections */}
                        <Card className="bg-black text-white overflow-hidden rounded-lg border-0 h-[300px] relative">
                          <img
                            src="https://media.istockphoto.com/id/511438211/photo/studio-shot-of-young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=8_wpaUj36YsumHP2tKS9w90_T3XvPiVWUkUwnYJVz2g="
                            alt="Women's Collections"
                            fill
                            className="object-cover"
                          />
                          <CardContent className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold mb-1">
                              Women's Collections
                            </h3>
                            <p className="text-sm text-gray-300 mb-3">
                              Featured woman collections that give you another
                              vibe.
                            </p>
                            <Button
                              variant="link"
                              className="text-white p-0 hover:text-gray-200"
                            >
                              Shop Now
                            </Button>
                          </CardContent>
                        </Card>

                        {/* Bottom Right: Speakers & Perfume side by side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Speakers */}
                          <Card className="bg-black text-white overflow-hidden rounded-lg border-0 h-[300px] relative">
                            <img
                              src="https://images.pexels.com/photos/13650608/pexels-photo-13650608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt="Speakers"
                              fill
                              className="object-cover"
                            />
                            <CardContent className="absolute bottom-0 left-0 p-6">
                              <h3 className="text-xl font-bold mb-1">
                                Speakers
                              </h3>
                              <p className="text-sm text-gray-300 mb-3">
                                Amazon wireless speakers
                              </p>
                              <Button
                                variant="link"
                                className="text-white p-0 hover:text-gray-200"
                              >
                                Shop Now
                              </Button>
                            </CardContent>
                          </Card>

                          {/* Perfume */}
                          <Card className="bg-black text-white overflow-hidden rounded-lg border-0 h-[300px] relative">
                            <img
                              src="https://www.purecandlesupplies.com.au/cdn/shop/files/black-opium-candle-diffuser-roomspray-fragrance-oil.png?v=1683771667"
                              alt="Perfume"
                              fill
                              className="object-cover"
                            />
                            <CardContent className="absolute bottom-0 left-0 p-6">
                              <h3 className="text-xl font-bold mb-1">
                                Perfume
                              </h3>
                              <p className="text-sm text-gray-300 mb-3">
                                GUCCI INTENSE OUD EDP
                              </p>
                              <Button
                                variant="link"
                                className="text-white p-0 hover:text-gray-200"
                              >
                                Shop Now
                              </Button>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </section>
                  </section>

                  {/* Services Section */}
                  <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-gray-200 p-4 rounded-full mb-4">
                            <Package className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-bold uppercase mb-2">
                            FREE AND FAST DELIVERY
                          </h3>
                          <p className="text-sm text-gray-600">
                            Free delivery for all orders over $140
                          </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <div className="bg-gray-200 p-4 rounded-full mb-4">
                            <Headphones className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-bold uppercase mb-2">
                            24/7 CUSTOMER SERVICE
                          </h3>
                          <p className="text-sm text-gray-600">
                            Friendly 24/7 customer support
                          </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                          <div className="bg-gray-200 p-4 rounded-full mb-4">
                            <ShieldCheck className="h-6 w-6" />
                          </div>
                          <h3 className="text-lg font-bold uppercase mb-2">
                            MONEY BACK GUARANTEE
                          </h3>
                          <p className="text-sm text-gray-600">
                            We return money within 30 days
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
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
