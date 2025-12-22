import CustomizedApp from "@/components/features/your_own_app/CustomizedApp"
import YourAppHeader from "@/components/features/your_own_app/YourAppHeader"
import HomeTestimonials from "@/components/home/HomeTestimonials"

const YourOwnApp = () => {
    return (
        <div>
            <YourAppHeader />
            <CustomizedApp />
            <HomeTestimonials />
        </div>
    )
}

export default YourOwnApp
