const CustomizedApp = () => {
    return (
        <section className="container md:py-20 py-8 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="md:w-135 text-[#001B3F] md:text-[40px] text-base font-semibold leading-[150%] text-center md:text-start">
                    A Fully Customized App Built for You
                </h2>

                <p className="md:w-130 text-[#565555] md:text-xl text-sm font-medium md:mt-6 mt-3 text-center md:text-start">
                    Get an application designed specifically for your business needs and brand identity. From features and workflows to design and user experience, everything is tailored to match how you operate. Enjoy a personalized system that adapts to you—giving you full control, better efficiency, and a seamless experience for your users.
                </p>
            </div>

            <div>
                <img 
                    src="/images/features/flexible_options.png"
                    alt="flexible_options"
                />
            </div>
        </section>
    )
}

export default CustomizedApp
