import Image from "next/image"


const Benifits = () => {
  const benefits = [
    {

      image: "/Home/Group 4.png",
      title: "Many Choices",
      description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
    },
    {
      image: "/Home/Group 4 (1).png",
      title: "Fast and On Time",
      description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
    },
    {
      image: "/Home/Group 5.png",
      title: "Affordable Price",
      description: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non."
    }
  ]

  return (
    <section className="container md:py-24 py-16 px-4 md:px-10 lg:px-8 max-w-[1240px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-[#FFB23F] font mb-4">Benefits</h2>
          <h3 className="text-4xl font-bold leading-tight">
            Benefits when using<br />our services
          </h3>
        </div>
        <div className="flex items-center">
          <p className="text-muted-foreground w-[505px] text-[#AFADB5]">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-lg border border-gray-100 transition-shadow"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" 
                >
               <Image
                src={benefit.image}
                alt={benefit.title}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
            <p className="text-muted-foreground text-[#AFADB5]">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benifits