import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PopularRoutes from "@/components/PopularRoutes";
import Tariffs from "@/components/Tariffs";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <PopularRoutes />
      <Tariffs />
      <Testimonials />
    </div>
  );
}
