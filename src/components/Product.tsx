'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    category: "Bookshelf",
    name: "Bookshelf",
    description: "of wood and wool",
    price: 63.47,
    image: "/Home/Rectangle 23.png"
  },
  {
    id: 2,
    category: "Chair",
    name: "White Aesthetic Chair",
    description: "Combination of wood and wool",
    price: 63.47,
    image: "/Home/Rectangle 23 (2).png"
  },
  {
    id: 3,
    category: "Lamp",
    name: "Bardono Smart Lamp",
    description: "Easy to use with bluetooth connection",
    price: 62.23,
    image: "/Home/Rectangle 23 (1).png"
  },
  {
    id: 4,
    category: "Lamp",
    name: "Bardono Smart Lamp",
    description: "Easy to use with bluetooth connection",
    price: 62.23,
    image: "/Home/Rectangle 23 (3).png"
  },
  {
    id: 5,
    category: "Lamp",
    name: "Bardono Smart Lamp",
    description: "Easy to use with bluetooth connection",
    price: 62.23,
    image: "/Home/Rectangle 23 (1).png"
  },

]

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleProducts, setVisibleProducts] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleProducts(4)
      else if (window.innerWidth >= 1024) setVisibleProducts(3)
      else if (window.innerWidth >= 768) setVisibleProducts(2)
      else setVisibleProducts(1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleProducts >= products.length ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - visibleProducts : prevIndex - 1
    )
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-orange-400 font-medium mb-4">Product</h2>
        <h3 className="text-4xl font-bold mb-4">Our popular product</h3>
        <p className="text-[#AFADB5] max-w-lg mx-auto">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-[23%] flex-shrink-0 px-2"
              >

                  <div className="relative aspect-square h-[300px] w-[300px] mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-sm text-gray-500">
                      {product.category}
                    </p>
                    <h4 className="font-semibold text-lg leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <p className="font-semibold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full shadow-md  transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/80 p-2 rounded-full shadow-md  transition-colors"
          aria-label="Next product"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}

export default Product