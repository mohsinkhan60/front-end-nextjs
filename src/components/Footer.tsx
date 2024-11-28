import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-[72rem] mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Section: Logo and Description */}
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <Image
              src="/Home/Nav.png"
              width={32}
              height={32}
              className="md:w-[42px] rounded-md md:h-[42px]"
              alt="Picture of the author"
            />
            <Link href="/" className="w-[76.05px] h-[18.77px] font-semibold text-gray-800">
              Lalasia
            </Link>
          </div>
          <p className="text-gray-600 mt-4 max-w-xs leading-relaxed">
            Lalasia is a digital agency that helps you make better experiences. Iaculis cras in.
          </p>
        </div>

        {/* Right Section: Navigation */}
        <div className="flex items-center md:flex-row flex-1 justify-between space-y- md:space-y-0">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold w-[80px] h-[26px] text-gray-800 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/new-arrivals" className="text-gray-600 hover:text-gray-800 transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-selling" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Best Selling
                </Link>
              </li>
              <li>
                <Link href="/home-decor" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Home Decor
                </Link>
              </li>
              <li>
                <Link href="/kitchen-set" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Kitchen Set
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold  w-[80px] h-[26px] text-gray-800 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/catalog" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-800 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="font-semibold  w-[80px] h-[26px] text-gray-800 mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-800 transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
