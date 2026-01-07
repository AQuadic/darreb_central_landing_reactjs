import React from 'react'
import { CalendarIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Calendar } from "../ui/calendar"
import { format } from "date-fns"
import { PhoneInput, type PhoneValue } from '../compound/PhoneInput'
import { useTranslation } from 'react-i18next'
import { createBusinessSuggestion } from "@/apis/suggestions";
import { toast } from "sonner";

const ContactForm = () => {
  const { t } = useTranslation("hero");

  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState<PhoneValue>({
    code: "EG",
    number: "",
  });
  const [email, setEmail] = React.useState("");
  const [typeOfBusiness, setTypeOfBusiness] = React.useState("");
  const [numberOfBranches, setNumberOfBranches] = React.useState("");
  const [date, setDate] = React.useState<Date | undefined>();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        setLoading(true);

    const response = await createBusinessSuggestion({
        title,
        email: email || undefined,
        phone: phone.number ? phone.number : undefined,
        phone_country: phone.number ? phone.code : undefined,
        message,
        type: "business",
        company_name: companyName || undefined,
        type_of_business: typeOfBusiness || undefined,
        number_of_branches: numberOfBranches || undefined,
        date: date ? date.toISOString() : undefined,
    });

        if (response?.data?.message) {
        toast.success(response.data.message);
        } else {
        toast.success(t("success_message"));
        }

        setTitle("");
        setCompanyName("");
        setMessage("");
        setEmail("");
        setPhone({ code: "EG", number: "" });
        setTypeOfBusiness("");
        setNumberOfBranches("");
        setDate(undefined);

    } catch (error: any) {
        console.error(error);

        const apiMessage = error?.response?.data?.message;
        if (apiMessage) {
        toast.error(apiMessage);
        } else if (error?.response?.data?.errors) {
        const allErrors = Object.values(error.response.data.errors)
            .flat()
            .join(" • ");
        toast.error(allErrors);
        } else {
        toast.error(t("error_message"));
        }
    } finally {
        setLoading(false);
    }
    };

    return (
    <form onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 w-full">
                <label htmlFor="name" className="text-[#0F0F0F] text-base font-medium">
                    {t("name")}
                </label>
                <input 
                    type="text" 
                    name="name" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="md:w-[384px] w-87.5 h-14 border border-[#C8C8C8] rounded-4xl px-4"
                    placeholder={t("enter_your_name")}
                />
            </div>
            {/* Company name */}
            <div className="flex flex-col gap-4 w-full">
                <label 
                    htmlFor="company_name"
                    className="text-[#0F0F0F] text-base font-medium"
                >
                    {t("company_name")}
                </label>
                <input 
                    type="text" 
                    name="company_name" 
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="md:w-[384px] w-full h-14 border border-[#C8C8C8] rounded-4xl px-4"
                    placeholder={t("enter_your_company_name")}
                />
            </div>
        </div>

        <div className="flex md:flex-row flex-col gap-6 mt-10">
                <div className="flex flex-col gap-4 w-full">
                <label 
                    htmlFor="type_of_business"
                    className="text-[#0F0F0F] text-base font-medium"
                >
                    {t("type_of_business")}
                </label>
                <Select value={typeOfBusiness} onValueChange={setTypeOfBusiness}>
                <SelectTrigger className="md:w-[384px] w-full h-14! rounded-4xl">
                    <SelectValue placeholder={t("choose_type")} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
                </Select>
            </div>
            {/* Number of Branches */}
            <div className="flex flex-col gap-4 w-full">
                <label 
                    htmlFor="NOF_branches"
                    className="text-[#0F0F0F] text-base font-medium"
                >
                    {t("number_of_branches")}
                </label>
                <Select value={numberOfBranches} onValueChange={setNumberOfBranches}>
                <SelectTrigger className="md:w-[384px] w-full h-14! rounded-4xl">
                    <SelectValue placeholder={t("choose_number")} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                </SelectContent>
                </Select>
            </div>
        </div>

        <div className="flex md:flex-row flex-col gap-6 mt-10">
            <div className="flex flex-col gap-4 w-full">
                <label 
                    htmlFor="phone"
                    className="text-[#0F0F0F] text-base font-medium"
                >
                    {t("phone_number")}
                </label>
                <PhoneInput value={phone} onChange={setPhone} />
            </div>
            <div className="flex flex-col gap-4 w-full">
                <label 
                    htmlFor="email"
                    className="text-[#0F0F0F] text-base font-medium"
                >
                    {t("email")}
                </label>
                <input
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="md:w-[384px] w-full h-14 border border-[#C8C8C8] rounded-4xl px-4"
                    placeholder={t("enter_your_email")}
                />
            </div>
        </div>

        <div className="flex flex-col gap-4 mt-10">
            <label
                htmlFor="request_demo"
                className="text-[#0F0F0F] text-base font-medium"
                >
                {t("request_demo")}
            </label>
            <Popover>
                <PopoverTrigger asChild  className="w-full! h-14 rounded-4xl">
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="w-full justify-between text-left font-normal"
                >
                    {date ? format(date, "PPP") : <span>{t("choose_a_day")}</span>}
                    <CalendarIcon />
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
            </Popover>
        </div>

        <div className="flex flex-col gap-4 mt-6">
            <label
            htmlFor="message"
            className="text-[#0F0F0F] text-base font-medium"
            >
            {t("message")}
            </label>
            <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("enter_your_message")}
            className="w-full h-28 border border-[#C8C8C8] rounded-4xl px-4 py-2"
            />
        </div>

        <button
            type="submit"
            disabled={loading}
            className="w-full h-14 mt-10 rounded-4xl
            bg-[linear-gradient(90deg,#6594D0_0%,#071C36_100%)]
            text-white font-semibold disabled:opacity-50"
        >
            {loading ? t("sending") : t("send")}
        </button>
    </form>
    )
}

export default ContactForm
