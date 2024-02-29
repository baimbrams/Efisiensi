import { Carousel } from "@material-tailwind/react";
import page1 from "../image/Page1.png";
import page2 from "../image/Page2.png";
import page3 from "../image/Page3.png";

const Hero = () => {
  return (
    <Carousel
      className="-mb-10"
      autoplay={true}
      showControls={false}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={page1}
        alt="image 1"
        className="lg:h-[770px] h-[500px] lg:w-[1440px] xl:w-[2088px]  object-cover"
      />
      <img
        src={page2}
        alt="image 2"
        className="lg:h-[770px] h-[500px] lg:w-[1440px] xl:w-[2088px] object-cover"
      />
      <img
        src={page3}
        alt="image 3"
        className="lg:h-[770px] h-[500px] lg:w-[1440px] xl:w-[2088px] object-cover"
      />
    </Carousel>
  );
};

export default Hero;
