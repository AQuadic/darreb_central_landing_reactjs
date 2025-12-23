import { useTranslation } from "react-i18next";

const HaveQuestions = () => {
    const { t } = useTranslation("faq");
    return (
        <section className="bg-[#F3F7FC] md:py-12.5 py-4 relative">
            <div className="container flex flex-wrap items-center justify-between">
                <div>
                    <h3 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] md:text-start text-center">{t("haveQuestions.heading")}</h3>
                    <p className="md:w-133.5 text-[#565555] md:text-2xl text-sm font-medium leading-[150%] md:mt-6 mt-3">
                        {t("haveQuestions.description")}
                    </p>

                    <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-8 bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)] rounded-4xl">
                        {t("haveQuestions.button")}
                    </button>
                </div>

                <div className="md:block hidden">
                    <img 
                        src="/images/faq/questions.png"
                    />
                </div>

                <div className="md:hidden block absolute -top-9 right-0">
                    <img 
                        src="/images/faq/mob_questions.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default HaveQuestions
