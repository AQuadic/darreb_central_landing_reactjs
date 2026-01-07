import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BackArrow from "../icons/pricing/BackArrow";
import BlueCheck from "../icons/pricing/BlueCheck";
import NavyCheck from "../icons/pricing/NavyCheck";
import BasicIcon from "../icons/pricing/Basic";
import UnlimitedIcon from "../icons/pricing/Unlimited";
import { fetchBusinessPackages, type BusinessPackage } from "@/apis/packages";

const PricingCards = () => {
  const { t, i18n } = useTranslation("pricing");
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["businessPackages", page],
    queryFn: () => fetchBusinessPackages(page),
  });

  if (isLoading) return <p className="text-center mt-10">{t("loading")}</p>;
  if (error) return <p className="text-center mt-10">{t("error")}</p>;

  const packages: BusinessPackage[] = data?.data || [];

 const getIcon = (pkg: BusinessPackage) => {
    const name = pkg.name[i18n.language as "en" | "ar"].toLowerCase();
    if (name.includes("basic")) return <BasicIcon />;
    if (name.includes("pro") || name.includes("الخطة الاحترافية")) return <BlueCheck />;
    if (name.includes("unlimited")) return <UnlimitedIcon />;
    return <BlueCheck />;
  };

  const isBestSeller = (pkg: BusinessPackage) => {
    const name = pkg.name[i18n.language as "en" | "ar"].toLowerCase();
    return name.includes("pro") || name.includes("الخطة الاحترافية");
  };

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
                    return lines.map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < lines.length - 1 && <br />}
                        </span>
                    ))
                })()}
            </p>

            <div className="md:mt-17 mt-6 flex flex-wrap justify-between gap-6">
                {packages.map((pkg) => {
                    const bestSeller = isBestSeller(pkg);
                    return bestSeller ? (
                        <div
                        key={pkg.id}
                        className="w-94.75 h-240.5 rounded-[32px] p-0.5 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)]"
                        >
                        <div className="w-full h-full rounded-[32px] bg-white flex flex-col justify-between py-8 px-4 relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-31.25 h-8.5 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-[24px] text-[#FEFEFE] text-lg font-bold flex items-center justify-center">
                            {t("bestSeller")}
                            </div>

                            <div>
                            <div className="flex items-center gap-2">
                                {getIcon(pkg)}
                                <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">
                                    {pkg.name[i18n.language as "en" | "ar"]}
                                </h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                    <span
                                    dangerouslySetInnerHTML={{
                                        __html: pkg.description[i18n.language as "en" | "ar"],
                                    }}
                                    />
                                </p>
                                </div>
                            </div>

                            <ul className="mt-8">
                                {pkg.benefits.map((benefit, index) => (
                                <li className="flex items-center gap-2 mt-6" key={index}>
                                    <NavyCheck />
                                    <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">
                                    {benefit.name[i18n.language as "en" | "ar"]}
                                    </p>
                                </li>
                                ))}
                            </ul>
                            </div>

                            <button className="w-full h-14 rounded-4xl text-lg font-semibold cursor-pointer bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] text-[#FEFEFE]">
                            {t("askPrice")}
                            </button>
                        </div>
                        </div>
                    ) : (
                        <div
                        key={pkg.id}
                        className="w-94.75 h-240.5 rounded-[32px] border border-[#C8C8C8] py-8 px-4 flex flex-col justify-between"
                        >
                        <div>
                            <div className="flex items-center gap-2">
                            {getIcon(pkg)}
                            <div>
                                <h3 className="text-[#0F0F0F] md:text-2xl text-lg font-semibold leading-[100%]">
                                {pkg.name[i18n.language as "en" | "ar"]}
                                </h3>
                                <p className="text-[#565555] md:text-sm text-[10px] font-medium leading-[150%] mt-2">
                                <span
                                    dangerouslySetInnerHTML={{
                                    __html: pkg.description[i18n.language as "en" | "ar"],
                                    }}
                                />
                                </p>
                            </div>
                            </div>

                            <ul className="mt-8">
                            {pkg.benefits.map((benefit, index) => (
                                <li className="flex items-center gap-2 mt-6" key={index}>
                                <BlueCheck />
                                <p className="text-[#0F0F0F] md:text-lg text-sm font-medium leading-[100%]">
                                    {benefit.name[i18n.language as "en" | "ar"]}
                                </p>
                                </li>
                            ))}
                            </ul>
                        </div>

                        <button className="w-full h-14 rounded-4xl text-lg font-semibold cursor-pointer border border-[#C8C8C8] text-[#0F0F0F]">
                            {t("askPrice")}
                        </button>
                        </div>
                    );
                })}
            </div>

        {packages.length >= 15 && (
            <div className="flex justify-center gap-4 mt-10">
            <button
                disabled={!data?.prev_page_url}
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                className="px-4 py-2 border rounded disabled:opacity-50"
            >
                {t("previous")}
            </button>
            <span className="px-4 py-2 border rounded">{page}</span>
            <button
                disabled={!data?.next_page_url}
                onClick={() => setPage((old) => old + 1)}
                className="px-4 py-2 border rounded disabled:opacity-50"
            >
                {t("next")}
            </button>
            </div>
        )}
        </section>
    )
}

export default PricingCards
