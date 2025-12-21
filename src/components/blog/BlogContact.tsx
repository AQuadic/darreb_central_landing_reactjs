import { CalendarIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Calendar } from "../ui/calendar"
import React from "react"
import { format } from "date-fns"

const BlogContact = () => {
    const [date, setDate] = React.useState<Date>()

    return (
        <section className="container md:my-37 my-8 md:bg-transparent bg-[#F3F7FC] py-4 md:py-0">
            <h2 className="text-[#001B3F] md:text-[32px] text-base font-semibold leading-[100%] text-center">We’re Here to Support You</h2>
            <p className="text-[#565555] md:text-2xl text-xs font-medium leading-[150%] md:mt-6 mt-3 text-center">
                Reach out to us anytime — our team is always ready to help you find the best solutions, answer <br /> your questions, and guide you toward growing your sports business with confidence.
            </p>

            <div className="md:mt-17 mt-6 flex items-center justify-between gap-6">
                <form>
                    <div className="flex flex-wrap gap-6">
                        {/* name */}
                        <div className="flex flex-col gap-4">
                            <label 
                                htmlFor="name"
                                className="text-[#0F0F0F] text-base font-medium"
                            >
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                className="w-[384px] h-14 border border-[#C8C8C8] rounded-4xl px-4"
                                placeholder="Enter your name"
                            />
                        </div>
                        {/* Company name */}
                        <div className="flex flex-col gap-4">
                            <label 
                                htmlFor="company_name"
                                className="text-[#0F0F0F] text-base font-medium"
                            >
                                Company name
                            </label>
                            <input 
                                type="text" 
                                name="company_name" 
                                className="w-[384px] h-14 border border-[#C8C8C8] rounded-4xl px-4"
                                placeholder="Enter your company name"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-10">
                        {/* Type of Business */}
                        <div className="flex flex-col gap-4">
                            <label 
                                htmlFor="type_of_business"
                                className="text-[#0F0F0F] text-base font-medium"
                            >
                                Type of Business
                            </label>
                            <Select>
                            <SelectTrigger className="w-[384px] h-14! rounded-4xl">
                                <SelectValue placeholder="Choose type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                        {/* Number of Branches */}
                        <div className="flex flex-col gap-4">
                            <label 
                                htmlFor="NOF_branches"
                                className="text-[#0F0F0F] text-base font-medium"
                            >
                                Number of Branches
                            </label>
                            <Select>
                            <SelectTrigger className="w-[384px] h-14! rounded-4xl">
                                <SelectValue placeholder="Choose number" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                            </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-10">
                        <div className="flex flex-col gap-4">
                            <label 
                                htmlFor="name"
                                className="text-[#0F0F0F] text-base font-medium"
                            >
                                Phone Number
                            </label>
                            <input 
                                type="tel" 
                                name="tel" 
                                className="w-[384px] h-14 border border-[#C8C8C8] rounded-4xl px-4"
                                placeholder="+20"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <label 
                                htmlFor="company_name"
                                className="text-[#0F0F0F] text-base font-medium"
                            >
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                className="w-[384px] h-14 border border-[#C8C8C8] rounded-4xl px-4"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-10">
                        <label htmlFor="request_demo" className="text-[#0F0F0F] text-base font-medium">
                            Request a Demo
                        </label>
                        <Popover>
                            <PopoverTrigger asChild  className="w-full! h-14 rounded-4xl">
                            <Button
                                variant="outline"
                                data-empty={!date}
                                className="data-[empty=true]:text-muted-foreground w-70 justify-between text-left font-normal"
                            >
                                {date ? format(date, "PPP") : <span>Choose a day</span>}
                                <CalendarIcon />
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <button className="w-full h-14 text-[#FEFEFE] text-lg font-semibold mt-10 bg-[linear-gradient(90deg,#15509C_0%,#071C36_100%)] rounded-4xl">
                        Send
                    </button>
                </form>
                <div>
                    <img 
                        src="/images/blog/blog_contact.jpg"
                        alt="blog contact"
                        className="w-[384px] h-142 opacity-50 rounded-4xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogContact
