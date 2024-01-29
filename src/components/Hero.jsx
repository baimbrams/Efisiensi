import { Carousel } from "@material-tailwind/react";
import jumbotron1 from "../image/Bus JB5.png";

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
        src={jumbotron1}
        alt="image 1"
        className="lg:h-[770px] h-[500px] lg:w-[1440px] xl:w-[2088px]  object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="lg:h-[770px] h-[500px] lg:w-[1440px] xl:w-[2088px] object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="lg:h-[770px] h-[500px] lg:w-[1440px] xl:w-[2088px] object-cover"
      />
    </Carousel>
  );
};

export default Hero;
