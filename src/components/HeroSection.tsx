// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import { Search } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="relative">
          <div className="absolute xl:left-52 xl:top-24 top-5 -left-6">
            <Image
              src="/Home/Arrow.png"
              alt="Decorative arrow"
              width={87.43}
              height={87.43}
              className="transform md:h-[249.07px] md:w-[249.07px] "
            />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-32">
            <h1 className="text-4xl relative md:text-6xl font tracking-tight mb-6">
              Discover Furniture With High Quality Wood
              <span className="inline-block absolute ml-2">
                <Image
                  src="/Home/Vector.png"
                  width={32}
                  height={32}
                  className="md:w-[35px] md:h-[35px]"
                  alt="Picture of the author"
                />
              </span>
            </h1>
            <p className="text-muted-foreground text-lg text-[#AFADB5] md:text-xl">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </p>
          </div>

          <div className="relative bg-gray-50">
            {/* Search Bar */}
            <div className="md:absolute inset-x-0 -top-10 mx-auto max-w-3xl md:max-w-[810px] md:h-[84px]">
              <div className="flex items-center bg-white shadow-xl p-2">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search property"
                    className="w-full h-12 pl-12 border-none"
                  />
                </div>
                {/* Search Button */}
                <button className="h-12 px-8 bg-[#4B7B7B] text-white  hover:bg-[#3d6363] focus:outline-none focus:ring-2 focus:ring-[#4B7B7B]">
                  Search
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:mt-28 mt-5 mx-auto max-w-6xl overflow-hidden shadow-md">
              <Image
                src="/Home/Rectangle 2.png"
                alt="Modern living room with comfortable furniture"
                width={1240}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
