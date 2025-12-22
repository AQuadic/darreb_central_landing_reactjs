const FlexibleOptions = () => {
    return (
        <section className="container md:py-20 py-8 flex md:flex-row flex-col-reverse items-center justify-between gap-6">
            <div>
                <h2 className="md:w-135 text-[#001B3F] md:text-[40px] text-base font-semibold leading-[150%] text-center md:text-start">
                    Flexible Options for Creating All Types of Memberships and Subscriptions
                </h2>

                <p className="md:w-130 text-[#565555] md:text-xl text-sm font-medium md:mt-6 mt-3 text-center md:text-start">
                    Easily streamline the process of creating a variety of membership options and subscription plans. Our system allows owners to set up different types of memberships tailored to individual needs. Whether it’s unlimited packages or session-based plans, we provide comprehensive tools for gyms to uniquely meet their clients’ requirements.
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

export default FlexibleOptions
