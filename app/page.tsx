import Hero from "@/components/Hero/Hero";
import MainCard from "@/components/MainCard/MainCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Room & Rates</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, repellendus?
          </p>
        </div>
        <MainCard />
      </div>
    </div>
  );
}
