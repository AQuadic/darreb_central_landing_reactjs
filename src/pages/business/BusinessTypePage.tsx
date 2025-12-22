import BrandedUserExperience from "@/components/business/BrandedUserExperience"
import BusinessTypeHeader from "@/components/business/BusinessTypeHeader"
import CompletePlatform from "@/components/business/CompletePlatform"
import DataDriven from "@/components/business/DataDriven"
import ShapingAthletes from "@/components/business/ShapingAthletes"

const BusinessTypePage = () => {
  return (
    <div>
      <BusinessTypeHeader />
      <CompletePlatform />
      <ShapingAthletes />
      <DataDriven />
      <BrandedUserExperience />
    </div>
  )
}

export default BusinessTypePage
