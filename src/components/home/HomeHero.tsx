import Whatsapp from "../icons/home/Whatsapp";
import WhiteArrow from "../icons/home/WhiteArrow";

const HomeHero = () => {
  return (
    <section
      className="min-h-dvh pt-24"
      style={{
        background: "linear-gradient(0.5deg, #FEFEFE 0.43%, #03316C 99.57%)",
      }}
    >
      <div className="container">
        <h2 className="lg:w-250 mx-auto text-[#FEFEFE] md:text-5xl text-xl font-semibold leading-[150%] text-center">
          Manage, Grow, and Optimize Your Sports Business Effortlessly
        </h2>

        <p className="text-[#EAEAEA] md:text-2xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
          “Manage bookings, memberships, and classes—all in one platform built to grow your sports <br /> business.”
        </p>

        <div className="flex justify-center mt-8">
          <div className="relative">
            <button className="w-79.75 h-14 bg-[#FEFEFE33] rounded-4xl text-[#FEFEFE] text-lg font-semibold">
              Request a Demo
            </button>

            <div className="absolute top-1/2 -right-6 -translate-y-1/2">
              <WhiteArrow />
            </div>
          </div>
        </div>

        <div className="mt-14 flex lg:flex-row flex-col items-center justify-center gap-6">
          <img 
            src="/images/home/hero_vid.jpg"
            alt="hero img"
            className="rounded-4xl opacity-70 md:h-109 h-47.5 md:w-full w-85.75 object-cover"
          />
          <div className="relative md:mt-0 -mt-20 md:ml-0 ml-36">
            <div className="md:w-[384px] w-51 md:h-109 h-54.25 bg-[#FEFEFE] rounded-4xl md:py-12 py-4 md:px-4 px-4">
            <h2 className="text-[#001B3F] md:text-2xl text-sm font-medium leading-[100%]">Increase Your Revenue</h2>
            <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
              Boost bookings, memberships, and class attendance with our all-in-one platform.
            </p>
            <img 
              src="/images/home/hero_dashboard.png"
              alt="dashboard"
              className="md:mt-11.25 mt-3"
            />
          </div>

          <div className="absolute -bottom-10 right-0">
            <Whatsapp />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
