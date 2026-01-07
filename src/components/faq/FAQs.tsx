"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Link } from "react-router-dom";
import BackArrow from "../icons/pricing/BackArrow";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getBusinessFaqs } from "@/apis/faq";
import { Loader } from "lucide-react";

const FAQs = () => {
  const { t, i18n } = useTranslation("faq");
  const lang = i18n.language as "ar" | "en";
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["business-faqs", page],
    queryFn: () => getBusinessFaqs(page),
  });

  if (isLoading) {
    return (
      <section className="container md:py-32 py-20 text-center flex items-center justify-center">
        <Loader />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container md:pt-32 pt-20 text-center">
        <p>Failed to load FAQs</p>
      </section>
    );
  }

  return (
    <section className="container md:pt-32 pt-20 pb-17">
        <Link to='/' className="md:hidden flex items-center gap-13.25 mb-6">
          <BackArrow />
          <p className="text-[#0F0F0F] text-xl font-semibold">{t("mobileBack")}</p>
      </Link>
      <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold text-center">
        {t("heading")}
      </h2>

      <p className="text-[#565555] md:text-lg text-sm font-medium leading-[150%] md:mt-6 mt-3 text-center">
        {(() => {
          const lines = t("description").split("\n");
          return lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ));
        })()}
      </p>

      <div className="mt-12 space-y-4">
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
        >
          {data?.data.map((faq, index) => {
            const itemId = String(faq.id);
            const isOpen = openItem === itemId;

            return (
              <AccordionItem
                key={faq.id}
                value={itemId}
                className={`border border-[#C8C8C8] rounded-4xl px-4 transition-colors mt-10 [&_svg]:hidden ${
                  isOpen ? "bg-[#F3F7FC]" : "bg-white"
                }`}
              >
                <AccordionTrigger className="flex justify-between items-center">
                  <p className="text-[#0F0F0F] md:text-2xl text-sm font-semibold leading-[100%]">
                    <span className="md:text-[32px] text-base mr-4">
                      {String(index + 1 + (page - 1) * data.per_page).padStart(2, "0")}
                    </span>
                    {faq.question[lang]}
                  </p>
                  <span className="text-3xl font-bold">
                    {isOpen ? "-" : "+"}
                  </span>
                </AccordionTrigger>

                <AccordionContent>
                  {faq.answer[lang]}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={!data?.prev_page_url}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className={`px-4 py-2 rounded ${!data?.prev_page_url ? "bg-gray-300 cursor-not-allowed" : "bg-[#071C36] text-white"}`}
        >
          {t("prev")}
        </button>

        <button
          disabled={!data?.next_page_url}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded ${!data?.next_page_url ? "bg-gray-300 cursor-not-allowed" : "bg-[#071C36] text-white"}`}
        >
          {t("next")}
        </button>
      </div>
    </section>
  );
};

export default FAQs;
