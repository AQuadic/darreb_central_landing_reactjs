import { Link } from "react-router-dom"
import BackArrow from "../icons/pricing/BackArrow"
import { useTranslation } from "react-i18next";

const BlogHeader = () => {
    const { t } = useTranslation("blog");
    return (
        <section className="md:pt-32 pt-20 container">
            <Link to='/' className="md:hidden flex items-center gap-21.75 mb-6">
                <BackArrow />
                <p className="text-[#0F0F0F] text-xl font-semibold">{t("mobileBack")}</p>
            </Link>
            <div className="flex md:flex-row flex-col items-center justify-between gap-6">
                <div className="w-full">
                    <h2 className="md:w-125 text-[#001B3F] md:text-[32px] text-base font-semibold md:text-start text-center">
                        {t("heading")}
                    </h2>

                    <p className="md:w-130 text-[#565555] md:text-lg text-sm font-medium md:mt-6 mt-3 md:text-start text-center">
                        {t("description")}
                    </p>
                </div>

                <div>
                    <img 
                        src="/images/blog/blog_header.jpg"
                        alt={t("imageAlt")}
                        className="rounded-4xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogHeader
