import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Promotion />
      <Categories />
      <BestSelling />
    </main>
  );
}
