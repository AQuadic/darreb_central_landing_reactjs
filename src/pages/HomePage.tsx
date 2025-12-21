import HomeHero from "@/components/home/HomeHero";
import HomeFeatures from "../components/home/HomeFeatures";
import HomeMembership from "@/components/home/HomeMembership";
import BlogContact from "@/components/blog/BlogContact";
import HomePefetcFor from "@/components/icons/home/HomePefetcFor";

const HomePage = () => {
  return (
    <div className="">
      <HomeHero />
      <HomeFeatures />
      <HomeMembership />
      <HomePefetcFor />
      <BlogContact />
    </div>
  );
};

export default HomePage;
