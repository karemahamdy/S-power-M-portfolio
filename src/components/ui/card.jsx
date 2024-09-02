
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselSize() {
  const items = [
    { image: "src/assets/images/Rectangle 44.png", text: "First Slide", description: "This is the first slide" },
    {image: "src/assets/images/Rectangle 44.png", text: "Second Slide", description: "This is the second slide" },
    { image: "src/assets/images/Rectangle 44.png", text: "Third Slide", description: "This is the third slide" },
    { image: "src/assets/images/Rectangle 44.png", text: "Fourth Slide", description: "This is the fourth slide" },
    { image: "src/assets/images/Rectangle 44.png", text: "Fifth Slide", description: "This is the fifth slide" },
  ]

  return (
    <div className="flex justify-center items-center">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-2xl flex justify-center items-center"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
              <div className="p-2">
                <Card className="shadow-lg">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <img src={item.image} alt={`Slide ${index + 1}`} className="object-cover h-32 w-32 mb-4" />
                    <span className="text-3xl font-semibold mb-2">{item.text}</span>
                    <p className="text-center text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CarouselSize
