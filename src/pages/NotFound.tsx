import Header from "@/components/general/header/Header"
import BackArrow from "@/components/icons/pricing/BackArrow"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const NotFound = () => {
    const { t } = useTranslation("not_found")
    return (
        <section>
            <div className="md:block hidden">
                <Header />
            </div>

            <div className="container md:py-35 py-10">
                <Link to='/' className="md:hidden flex mb-16">
                    <BackArrow />
                </Link>

                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-[#0F0F0F] md:text-[32px] text-xl font-semibold">
                        {t("title")}
                    </h2>

                    <p className="text-[#565555] md:text-lg text-sm font-medium md:mt-6 mt-4 text-center">
                        {t("description")} 
                    </p>

                    <img 
                        src="/not_found.png"
                        alt="not found"
                        className="md:mt-30.75 mt-8"
                    />
                </div>
            </div>
        </section>
    )
}

export default NotFound
