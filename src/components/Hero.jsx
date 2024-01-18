import jumbotron from "../image/Bus JB5.png";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center">
        <div className=" flex flex-col items-center  md:w-full w-full">
          <img alt="hero" src={jumbotron} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
