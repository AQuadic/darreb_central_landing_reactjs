import AccessSystem from "../icons/pricing/AccessSystem"
import AddClub from "../icons/pricing/AddClub"
import CustomerSupport from "../icons/pricing/CustomerSupport"
import DataMigration from "../icons/pricing/DataMigration"
import FreeAccount from "../icons/pricing/FreeAccount"
import LearningResources from "../icons/pricing/LearningResources"
import { useTranslation } from "react-i18next"

const PricingFeatures = () => {

    const { t } = useTranslation('pricing')

    const PricingFeaturesData = [
        { icon: FreeAccount, id: 'feat1' },
        { icon: LearningResources, id: 'feat2' },
        { icon: DataMigration, id: 'feat3' },
        { icon: AccessSystem, id: 'feat4' },
        { icon: AddClub, id: 'feat5' },
        { icon: CustomerSupport, id: 'feat6' },
    ]

    const bgColors = [
        "#FFF6F6", 
        "#F8FFF6", 
        "#F6F9FF", 
        "#F6FCFF", 
        "#FFFFED", 
        "#FBF6FF"
    ];

    return (
        <section className="container md:pb-17 pb-8">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold text-center">
                {t('features.heading')}
            </h2>

            <div className="md:mt-14.5 mt-4 flex flex-wrap justify-between gap-10">
                {PricingFeaturesData.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            className={`w-94.75 md:h-21 h-12 rounded-4xl flex items-center md:justify-center gap-3 p-3`} 
                            style={{ backgroundColor: bgColors[index] }}
                        >
                            <item.icon />
                            <p className="text-[#0F0F0F] md:text-xl text-xs font-semibold">{t(`features.list.${item.id}`)}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PricingFeatures
