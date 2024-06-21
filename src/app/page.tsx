import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Promotion />
      <Categories />
    </main>
  );
}
