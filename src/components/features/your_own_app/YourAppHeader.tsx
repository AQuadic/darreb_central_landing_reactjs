const YourAppHeader = () => {
    return (
        <section className="relative md:pb-24 pt-24 gap-6 overflow-hidden">
        <div className="container flex md:flex-row flex-col-reverse items-center justify-between">
            <div className="absolute inset-0">
            <img
            src="/images/features/app_bg.png"
            alt="background"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#F3F7FC] opacity-95"></div>
        </div>

        <div className="relative z-10 flex-1">
            <h2 className="text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
            Elevate Your Business with Your Own App
            </h2>

            <p className="md:w-xl text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
            Take your business to the next level with a fully customized app built around your brand. Manage operations, engage your customers, and track performance—all from one seamless platform. Reduce complexity, enhance user experiences, and stay focused on what truly matters: growing your business.
            </p>

            <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-linear-to-r from-[#6594D0] to-[#071C36] rounded-3xl">
            Request a demo
            </button>
        </div>

        <div className="relative z-10 flex-1 flex justify-center">
            <img
            src="/images/features/you_app_header.png"
            alt="you_app_header"
            className="md:w-147 md:h-137.5 w-full h-auto"
            />
        </div>
        </div>
        </section>
    )
}

export default YourAppHeader;
