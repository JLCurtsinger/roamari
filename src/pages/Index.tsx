import { Navigation } from "@/components/Navigation";
import { SearchFilters } from "@/components/SearchFilters";
import { JobCard } from "@/components/JobCard";
import { HousingCard } from "@/components/HousingCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      company: "TechCo Global",
      location: "Remote (US)",
      salary: "$120k - $150k",
      type: "Full-time Remote",
      duration: "Permanent",
    },
    {
      title: "Event Photographer",
      company: "EventPro Services",
      location: "New York, NY",
      salary: "$500/day",
      type: "Gig",
      duration: "1 day",
    },
    {
      title: "Technical Writer",
      company: "DocuTech Solutions",
      location: "Remote (Worldwide)",
      salary: "$70/hour",
      type: "Contract",
      duration: "3 months",
    },
  ];

  const housing = [
    {
      image: "/placeholder.svg",
      title: "Modern Studio in Downtown",
      location: "Barcelona, Spain",
      price: "$1,800",
      wifiSpeed: "300",
      type: "Studio Apartment",
    },
    {
      image: "/placeholder.svg",
      title: "Beachfront Condo",
      location: "Bali, Indonesia",
      price: "$1,200",
      wifiSpeed: "200",
      type: "1 Bedroom Condo",
    },
    {
      image: "/placeholder.svg",
      title: "Cozy Mountain Cabin",
      location: "Colorado, USA",
      price: "$2,400",
      wifiSpeed: "150",
      type: "Cabin",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
            Work Anywhere,<br />Live Everywhere
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find remote work opportunities and perfect places to stay around the world.
            Start your digital nomad journey today.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">Latest Opportunities</h2>
          <SearchFilters />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section id="housing" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-secondary mb-8">Places to Stay</h2>
          <SearchFilters />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {housing.map((house, index) => (
              <HousingCard key={index} {...house} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;