import AboutSection from "@/components/home/AboutSection";
import Hero from "@/components/home/Hero";
import HomeSection from "@/components/home/HomeSection";
import RecentProduct from "@/components/home/RecentProduct";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-32"></div>
      <HomeSection />
      <AboutSection />
      <RecentProduct />
    </div>
  );
}
