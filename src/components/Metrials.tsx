import Image from "next/image"

const Materials = () => {
  return (
    <section className="container mx-auto max-w-[1240px] px-4 py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-[#FFB23F] font-medium">Our Product</h2>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Crafted by talented and high quality material
          </h1>
          <p className="text-[#AFADB5] leading-relaxed">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, 
            adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui 
            tincidunt pulvinar
          </p>
          <button className="w-full lg:w-auto bg-[#518581] hover:bg-teal-700 text-white px-4 py-2 lg:px-4 lg:py-2">
            Learn More
          </button>

          <div className="grid grid-cols-3 gap-4 pt-6 lg:hidden">
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">20+</h3>
              <p className="text-[#AFADB5] text-sm">Years Experience</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">483</h3>
              <p className="text-[#AFADB5] text-sm">Happy Client</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-2xl font-bold">150+</h3>
              <p className="text-[#AFADB5] text-sm">Project Finished</p>
            </div>
          </div>

          <div className="relative mt-6">
            <Image
              src="/Home/metrila22.png"
              alt="Woodworking tools and wood shavings"
              width={550}
              height={210}
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="hidden lg:grid grid-cols-3 gap-8">
            <div className="space-y-2 text-center">
              <h3 className="text-4xl font-bold">20+</h3>
              <p className="text-[#AFADB5]">Years Experience</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-4xl font-bold">483</h3>
              <p className="text-[#AFADB5]">Happy Client</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-4xl font-bold">150+</h3>
              <p className="text-[#AFADB5]">Project Finished</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/Home/metrila1.png"
              alt="Modern furniture piece with cane webbing"
              width={550}
              height={500}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials

