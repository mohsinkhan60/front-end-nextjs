import Image from "next/image"
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  rating: number
  content: string
  image: string
}

const testimonials = [
  {
    id: 1,
    name: "Gunawan",
    rating: 3.5,
    content: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    image: "/Home/Man.png"
  },
  {
    id: 2,
    name: "Janne Cooper",
    rating: 4.3,
    content: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    image: "/Home/Women.png"
  },
  {
    id: 3,
    name: "Cobocannaeru",
    rating: 4.3,
    content: "Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.",
    image: "/Home/Man.png"
  }
]

const Testimonial = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-medium mb-2">Testimonials</h2>
          <h3 className="text-3xl font-bold mb-4">What our customer say</h3>
          <p className="max-w-2xl text-[#AFADB5] mx-auto">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-none">
              <CardContent className="p-6">
                <div className="mb-4">
                <Image
                      alt={`${testimonial.name}'s profile picture`}
                      className="rounded-full object-cover"
                      height={40}
                      src="/Home/Koma.png"
                      width={40}
                    />
                </div>
                <p className="text-[#AFADB5] mb-6">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      alt={`${testimonial.name}'s profile picture`}
                      className="rounded-full object-cover"
                      height={40}
                      src={testimonial.image}
                      width={40}
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{testimonial.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial