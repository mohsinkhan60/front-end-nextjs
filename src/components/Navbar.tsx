"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="container mx-auto max-w-[1240px] px-4 md:px-10 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/Home/Nav.png"
              width={32}
              height={32}
              className="md:w-[42px] md:h-[42px]"
              alt="Picture of the author"
            />
            <Image
              src="/Home/Lalasia.png"
              width={57.94}
              height={14.3}
              className="md:w-[76.05px] md:h-[18.77px]"
              alt="Picture of the author"
            />
          </div>

          <nav className="hidden md:flex space-x-6">
            <Link
              href="/product"
              className="text-gray-600 w-[71px] h-[32px] hover:text-gray-900"
            >
              Product
            </Link>
            <Link
              href="/services"
              className="text-gray-600 w-[71px] h-[32px] hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="/article"
              className="text-gray-600 w-[71px] h-[32px] hover:text-gray-900"
            >
              Article
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 w-[71px] h-[32px] hover:text-gray-900"
            >
              About Us
            </Link>
          </nav>

          <div className="items-center hidden md:flex space-x-1">
            <button
              aria-label="Shopping cart"
              className="text-gray-600 w-[32px] h-[32px] hover:text-gray-900"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button
              aria-label="User profile"
              className="text-gray-600 w-[32px] h-[32px] hover:text-gray-900"
            >
              <User className="w-6 h-6" />
            </button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-gray-600 w-[30px] h-[30px] hover:text-gray-900"
          >
            <IoMenu className="w-6 h-6" />
          </button>
        </div>

        <div
          className={`mt-4 md:hidden flex flex-col space-y-4 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <Link href="/product" className="text-gray-600 hover:text-gray-900">
            Product
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/article" className="text-gray-600 hover:text-gray-900">
            Article
          </Link>
          <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
