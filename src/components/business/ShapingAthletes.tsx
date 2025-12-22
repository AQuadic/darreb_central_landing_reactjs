const ShapingAthletes = () => {
    return (
        <section className="bg-[#F3F7FC] py-8 mt-8">
            <div className="container flex flex-wrap items-center justify-between gap-8">
                <div className="mx-auto md:mx-0">
                    <img
                        src="/images/features/smart_class.png"
                        alt="smart_class"
                        className="w-40.75 h-53.75 md:w-114.25 md:h-136.5"
                    />
                </div>

                <div>
                <h2 className="text-[#001B3F] md:text-[40px] text-base font-semibold text-center md:text-start">
                    Shaping the Athletes of Tomorrow
                </h2>

                <p className="md:w-150 text-[#565555] md:text-xl text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center md:text-start">
                    We’re here to empower your sports academy. A system that makes it easy to create, schedule, and manage activities—giving you full control over your academy’s operations. It’s all about building the perfect environment for your athletes to grow, thrive, and achieve their fitness goals.
                </p>

                <div className="rounded-4xl">
                    <button
                        className="w-full h-14 mt-6 rounded-4xl border-2 text-[#15509C] text-lg font-semibold"
                        style={{
                            borderImage: "linear-gradient(to right, #6594D0, #072E60) 1",
                        }}
                        >
                        Request a Demo
                    </button>
                </div>

            </div>
            </div>
        </section>
    )
}

export default ShapingAthletes
