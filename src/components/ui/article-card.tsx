import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface ArticleCardProps {
  category: string
  title: string
  excerpt: string
  image: string
  author: {
    name: string
    avatar: string
  }
  date: string
}

export function ArticleCard({
  category,
  title,
  excerpt,
  image,
  author,
  date,
}: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex gap-6">
          <div className="relative w-[120px] h-[120px] shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between py-4 pr-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{category}</p>
              <h3 className="text-xl font-semibold mb-1 line-clamp-2">{title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{excerpt}</p>
            </div>
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground">By {author.name}</span>
              <span className="text-sm text-muted-foreground">{date}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

