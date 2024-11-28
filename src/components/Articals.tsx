import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const Articals = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <span className="text-orange-500">Articles</span>
        <h1 className="text-4xl font-bold mt-2">
          The best furniture comes from Lalasia
        </h1>
        <p className="text-gray-500 mt-2">
          Pellentesque etiam blandit in tincidunt at donec.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,400px] gap-8">
        <div className="relative group">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/Home/Rectangle 8.png"
              alt="Cozy dining room"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-sm">Tips and Trick</span>
              <h2 className="text-2xl font-semibold mt-2">
                Create Cozy Dinning Room Vibes
              </h2>
              <p className="mt-2 text-sm text-gray-200">
                Decorating with neutrals brings balance to the dining room...
              </p>
              <button className="mt-4 backdrop-blur-sm transition">
                Read More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="absolute bottom-10 right-0 flex">
              <button className="p-2 bg-white backdrop-blur-sm transition">
                <IoIosArrowRoundBack className="w-8 text-[#518581] h-8" />
              </button>
              <button className="p-2 bg-[#518581] transition">
                <IoIosArrowRoundForward className="w-8 text-white h-8" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <article className="flex gap-4">
            <Image
              src="/Home/Rectangle 20 (2).png"
              alt="Minimalist desk setup"
              width={110}
              height={110}
              className="md:w-[180px] md:h-[180px] object-cover flex-shrink-0"
            />
            <div>
              <span className="text-sm text-gray-500">Tips and Trick</span>
              <h3 className="font-semibold mt-1">
                6 ways to give your home minimalistic vibes
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Pellentesque etiam blandit in...
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/Home/Man.png"
                  alt="Jeremy Jean"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm">By Jeremy Jean</span>
                <span className="text-sm text-gray-500">
                  Friday, 1 April 2022
                </span>
              </div>
            </div>
          </article>

          <article className="flex gap-4">
            <Image
              src="/Home/Rectangle 20.png"
              alt="Interior with mirror"
              width={110}
              height={110}
              className="md:w-[180px] md:h-[180px] object-cover flex-shrink-0"
            />
            <div>
              <span className="text-sm text-gray-500">Design Inspiration</span>
              <h3 className="font-semibold mt-1">
                How to make your interiors cooler and more stylish
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Pellentesque etiam blandit in...
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/Home/Women.png"
                  alt="Michaela Augus"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm">By Michaela Augus</span>
                <span className="text-sm text-gray-500">
                  Friday, 1 April 2022
                </span>
              </div>
            </div>
          </article>

          <article className="flex gap-4">
            <Image
              src="/Home/Rectangle 20 (1).png"
              alt="Decorative shelf"
              width={110}
              height={110}
              className="md:w-[180px] md:h-[180px] object-cover flex-shrink-0"
            />
            <div>
              <span className="text-sm text-gray-500">Tips and Trick</span>
              <h3 className="font-semibold mt-1">
                Elements to add character to your space
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Pellentesque etiam blandit in...
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Image
                  src="/Home/Man.png"
                  alt="Kim Gurameh"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm">By Kim Gurameh</span>
                <span className="text-sm text-gray-500">
                  Friday, 1 April 2022
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-12 space-y-6 md:space-y-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left max-w-xl">
          Join with me to get special discount
        </h2>
        <Link
          href="#"
          className="px-4 py-2 bg-[#518581] text-white hover:bg-[#3f6b67] transition-all flex items-center justify-center gap-2 md:w-auto"
        >
          Learn More
          <MdKeyboardArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </main>
  );
};

export default Articals;
