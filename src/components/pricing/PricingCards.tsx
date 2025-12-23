import { Link } from "react-router-dom"
import BackArrow from "../icons/pricing/BackArrow"
import Basic from "../icons/pricing/Basic"
import BlueCheck from "../icons/pricing/BlueCheck"
import NavyCheck from "../icons/pricing/NavyCheck"
import Unlimited from "../icons/pricing/Unlimited"
import { useTranslation } from "react-i18next"

const PricingCards = () => {
    const { t } = useTranslation("pricing");
    return (
        <section className="container md:my-24 my-20">
            <Link to='/' className="md:hidden flex items-center gap-21.75 mb-6">
                <BackArrow />
                <p className="text-[#0F0F0F] text-xl font-semibold">{t('mobileBack')}</p>
            </Link>

            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">
                {t('heading')}
            </h2>

            <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
                {(() => {
                    const lines = t('description').split('\n')
                    return lines.map((line: string, i: number) => (
                        <span key={i}>
                            {line}
                            {i < lines.length - 1 && <br />}
                        </span>
                    ))
                })()}
            </p>

            <div className="md:mt-17 mt-6 flex flex-wrap justify-between gap-6">
                <div className="w-94.75 h-240.5 border border-[#C8C8C8] rounded-[32px] py-8 px-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Basic />
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">{t('cards.basic.title')}</h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    {(() => {
                                        const lines = t('cards.basic.subtitle').split('\n')
                                        return lines.map((line: string, i: number) => (
                                            <span key={i}>
                                                {line}
                                                {i < lines.length - 1 && <br />}
                                            </span>
                                        ))
                                    })()}
                                </p>
                            </div>
                        </div>
                        <ul className="mt-8">
                            <li className="flex items-center gap-2">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.membershipManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.classScheduling')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.onlinePayments')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.businessApp')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.staffManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.reporting')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.languages')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.addClubActivities')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.accessControl')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.basic.features.vat')}</p>
                            </li>
                        </ul>
                    </div>
                    <button className="w-full h-14 border border-[#C8C8C8] rounded-4xl text-[#0F0F0F] text-lg font-semibold cursor-pointer">
                        {t('askPrice')}
                    </button>
                </div>

                <div className="relative w-94.75 h-240.5 rounded-[32px] p-0.5 bg-linear-to-r from-[#15509C] to-[#071C36]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-31.25 h-8.5 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-[24px] text-[#FEFEFE] text-lg font-bold flex items-center justify-center">
                        {t('bestSeller')}
                    </div>
                    <div className="w-full h-full rounded-[30px] bg-[#F2F2F9] py-8 px-4 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                            <Basic />
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">{t('cards.pro.title')}</h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    {(() => {
                                        const lines = t('cards.pro.subtitle').split('\n')
                                        return lines.map((line: string, i: number) => (
                                            <span key={i}>
                                                {line}
                                                {i < lines.length - 1 && <br />}
                                            </span>
                                        ))
                                    })()}
                                </p>
                            </div>
                        </div>
                        <ul className="mt-8">
                            <li className="flex items-center gap-2">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.membershipManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.classScheduling')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.onlinePayments')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.powerfulDashboard')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.businessApp')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.staffManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.eventManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.reporting')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.accountingIntegration')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.languages')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.addClubActivities')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.accessControl')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <NavyCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.pro.features.reminders')}</p>
                            </li>
                        </ul>
                        </div>

                        <button className="w-full h-14 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] text-[#FEFEFE] rounded-4xl text-lg font-semibold cursor-pointer">
                            {t('askPrice')}
                        </button>
                    </div>
                </div>

                <div className="w-94.75 h-240.5 border border-[#C8C8C8] rounded-[32px] py-8 px-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2">
                            <Unlimited />
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">{t('cards.unlimited.title')}</h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    {t('cards.unlimited.subtitle')}
                                </p>
                            </div>
                        </div>
                        <ul className="mt-8">
                            <li className="flex items-center gap-2">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.membershipManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.classScheduling')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.onlinePayments')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.businessApp')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.staffManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.reporting')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.languages')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.addClubActivities')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.accessControl')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.vat')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.brandedApp')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.eventManagement')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.accountingIntegration')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.powerfulDashboard')}</p>
                            </li>
                            <li className="flex items-center gap-2 mt-6">
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">{t('cards.unlimited.features.reminders')}</p>
                            </li>
                        </ul>
                    </div>
                    <button className="w-full h-14 border border-[#C8C8C8] rounded-4xl text-[#0F0F0F] text-lg font-semibold cursor-pointer">
                        {t('askPrice')}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PricingCards
