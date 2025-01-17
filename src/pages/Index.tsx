import { Navigation } from "@/components/Navigation";
import { SearchFilters } from "@/components/SearchFilters";
import { JobCard } from "@/components/JobCard";
import { HousingCard } from "@/components/HousingCard";
import { TravelDestinations } from "@/components/TravelDestinations";
import { TransportationSection } from "@/components/TransportationSection";
import { Briefcase, Home, Plane } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { stays } from "@/data/mockData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Stay } from "@/types/stays";

const Index = () => {
  const [selectedStayType, setSelectedStayType] = useState<string>("All");
  
  const filterStays = (stays: Stay[]) => {
    if (selectedStayType === "All") return stays;
    if (selectedStayType === "Camping") {
      return stays.filter(stay => stay.isCamping);
    }
    if (selectedStayType === "Regular") {
      return stays.filter(stay => !stay.isCamping);
    }
    return stays.filter(stay => stay.type === selectedStayType);
  };

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

  const categories = [
    {
      icon: Home,
      title: "Stays",
      description: "Find your perfect home away from home",
      buttonText: "Explore Stays",
      buttonClassName: "bg-gradient-ocean",
      iconClassName: "text-primary",
      sectionId: "stays"
    },
    {
      icon: Briefcase,
      title: "Work",
      description: "Discover remote work opportunities",
      buttonText: "Find Work",
      buttonClassName: "bg-gradient-sunset",
      iconClassName: "text-secondary",
      sectionId: "work"
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Plan your next adventure",
      buttonText: "Plan Travel",
      buttonClassName: "bg-gradient-sky",
      iconClassName: "text-accent",
      sectionId: "travel"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative pt-32 pb-20 px-4 min-h-[600px] flex items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/lovable-uploads/69a571f2-baa6-44c5-9cdb-e82542a1386c.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label="Welcome to Roamari"
        >
          <div className="absolute inset-0 bg-black/40" role="presentation" /> 
          <div className="container mx-auto text-center text-white relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Explore, Work, Live
              <br />
              <span className="bg-gradient-sunset text-transparent bg-clip-text">Anywhere</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Your journey to a location-independent lifestyle starts here.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
            
            <SearchFilters />
          </div>
        </section>

        {/* Jobs Section */}
        <section id="work" className="py-16 px-4 bg-white scroll-mt-16" aria-labelledby="work-section">
          <div className="container mx-auto">
            <h2 id="work-section" className="text-3xl font-bold text-gray-900 mb-8">Latest Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Housing Section */}
        <section id="stays" className="py-16 px-4 bg-gray-50 scroll-mt-16" aria-labelledby="stays-section">
          <div className="container mx-auto">
            <h2 id="stays-section" className="text-3xl font-bold text-gray-900 mb-8">Featured Stays</h2>
            
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2" role="tablist" aria-label="Filter stays by type">
              {["All", "Regular", "Camping", "Campground", "Free Camping"].map((type) => (
                <Button
                  key={type}
                  variant={selectedStayType === type ? "default" : "outline"}
                  onClick={() => setSelectedStayType(type)}
                  className="whitespace-nowrap"
                  role="tab"
                  aria-selected={selectedStayType === type}
                  aria-controls="stays-grid"
                >
                  {type}
                </Button>
              ))}
            </div>

            <div 
              id="stays-grid" 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
              role="tabpanel"
              aria-label="Stays listing"
            >
              {filterStays(stays).map((house) => (
                <HousingCard key={house.id} {...house} />
              ))}
            </div>
          </div>
        </section>

        {/* Travel Section */}
        <TravelDestinations />

        {/* Transportation Section */}
        <TransportationSection />
      </main>
    </div>
  );
};

export default Index;