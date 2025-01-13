import { transportationOptions } from "@/data/transportationData";
import { TransportationCard } from "./TransportationCard";

export const TransportationSection = () => {
  return (
    <section id="transportation" className="py-16 px-4 bg-white scroll-mt-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Transportation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transportationOptions.map((transport) => (
            <TransportationCard key={transport.id} transportation={transport} />
          ))}
        </div>
      </div>
    </section>
  );
};