const DataDriven = () => {
    return (
        <section className="container py-17 flex items-center justify-between">
            <div>
                <h2 className="text-[#001B3F] text-[32px] font-semibold leading-[100%]">
                    Data-Driven Growth
                </h2>
                <p className="md:w-132.5 text-[#565555] text-lg font-medium leading-[150%] md:mt-6 mt-3">
                    Take your sports academy to the next level. Our advanced analytics provide valuable insights to monitor your performance and make informed decisions—guiding you toward sustainable growth and ensuring your clients’ satisfaction.
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

            <div>
                <img 
                    src="/images/business/business_chart.png"
                    alt="business_chart"
                    className="w-70.5 h-83.5"
                />
            </div>

            <div>
                <img 
                    src="/images/business/business_dashboard.png"
                    alt="business_dashboard"
                    className="w-70.25 h-79.75"
                />
            </div>
        </section>
    )
}

export default DataDriven
