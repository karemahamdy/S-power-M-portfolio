import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function CarouselSize() {
  const images = [
    "src/assets/images/Rectangle 44.png",
    "src/assets/images/Rectangle 45.png",
    "src/assets/images/Rectangle 46.png",
    "src/assets/images/Rectangle 44.png",
    "src/assets/images/Rectangle 44.png",
  ]

  return (
    <div className="flex justify-center items-center ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-2xl flex justify-center items-center"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
              <img src={image} alt={`Slide ${index + 1}`} className="object-cover h-full w-full" />
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
