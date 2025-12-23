import ClassBooking from "@/components/icons/business/ClassBooking"
import MemberEngagement from "@/components/icons/business/MemberEngagement"
import MembershipManagement from "@/components/icons/business/MembershipManagement"
import { useTranslation } from "react-i18next";

const SeeMoreFeatures = () => {
    const { t } = useTranslation("seemore");
    return (
        <section className="container flex flex-wrap items-center justify-between gap-6 md:py-23 py-8">
            <div className="md:w-[384px] md:h-59 py-4 px-3 rounded-4xl bg-[#F8FFF6] flex gap-3">
                <div>
                    <MemberEngagement />
                </div>
                <div>
                        <h3 className="text-[#0F0F0F] md:text-xl text-sm font-semibold leading-[150%]">{t('features.list.item1.title')}</h3>
                        <p className="text-[#565555] md:text-lg text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
                            {t('features.list.item1.desc')}
                        </p>
                </div>
            </div>

            <div className="md:w-[384px] md:h-59 py-4 px-3 rounded-4xl bg-[#FFFFED] flex gap-3">
                <div>
                    <ClassBooking />
                </div>
                <div>
                    <h3 className="text-[#0F0F0F] md:text-xl text-sm font-semibold leading-[150%]">{t('features.list.item2.title')}</h3>
                    <p className="text-[#565555] md:text-lg text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
                        {t('features.list.item2.desc')}
                    </p>
                </div>
            </div>

            <div className="md:w-[384px] md:h-59 py-4 px-3 rounded-4xl bg-[#F8FFF6] flex gap-3">
                <div>
                    <MembershipManagement />
                </div>
                <div>
                    <h3 className="text-[#0F0F0F] md:text-xl text-sm font-semibold leading-[150%]">{t('features.list.item3.title')}</h3>
                    <p className="text-[#565555] md:text-lg text-[10px] font-medium leading-[150%] md:mt-3 mt-2">
                        {t('features.list.item3.desc')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SeeMoreFeatures
