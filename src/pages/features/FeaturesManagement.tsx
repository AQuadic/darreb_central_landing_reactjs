import FeaturesManagementHeader from "@/components/features/features_management/FeaturesManagementHeader"
import FlexibleOptions from "@/components/features/features_management/FlexibleOptions"
import SimplifiedMembership from "@/components/features/features_management/SimplifiedMembership"
import HomeTestimonials from "@/components/home/HomeTestimonials"

const FeaturesManagement = () => {
    return (
        <div>
            <FeaturesManagementHeader />
            <SimplifiedMembership />
            <FlexibleOptions />
            <HomeTestimonials />
        </div>
    )
}

export default FeaturesManagement
