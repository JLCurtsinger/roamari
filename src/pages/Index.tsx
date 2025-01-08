import { Navigation } from "@/components/Navigation";
import { SearchFilters } from "@/components/SearchFilters";
import { JobCard } from "@/components/JobCard";
import { HousingCard } from "@/components/HousingCard";
import { Button } from "@/components/ui/button";
import { Briefcase, Home, Plane } from "lucide-react";

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
      <section className="pt-32 pb-16 px-4 bg-gradient-travel">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Work Anywhere,<br />Live Everywhere
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Find remote work opportunities and perfect places to stay around the world.
            Start your digital nomad journey today.
          </p>
          
          {/* Category Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Home className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stays</h3>
              <p className="text-gray-600 mb-4">Find your perfect home away from home</p>
              <Button variant="outline" className="w-full">Explore Stays</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Briefcase className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Work</h3>
              <p className="text-gray-600 mb-4">Discover remote work opportunities</p>
              <Button variant="outline" className="w-full">Find Work</Button>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Plane className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel</h3>
              <p className="text-gray-600 mb-4">Plan your next adventure</p>
              <Button variant="outline" className="w-full">Plan Travel</Button>
            </div>
          </div>
          
          <SearchFilters />
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section id="housing" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stays</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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