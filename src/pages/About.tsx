const About = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-sunset text-transparent bg-clip-text">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            At Roamari, we believe in empowering modern travelers to live, work, and explore without boundaries. 
            Designed with digital nomads, remote workers, and adventurous souls in mind, our platform is a 
            one-stop solution for all your travel and lifestyle needs to live a life without being tied to 
            any particular location.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Whether you're planning a short getaway, relocating for work, or embarking on a journey to explore 
            the world, Roamari has you covered. Our platform seamlessly integrates tools to help you:
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>Find a Place to Stay:</strong> From cozy cabins and vibrant city apartments to 
                campsites and hidden gems, discover stays that match your unique lifestyle. We even connect 
                you with free camping spots using trusted resources like iOverlander.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>Secure Local Transportation:</strong> Rent cars through agencies or peer-to-peer 
                services like Turo to make your travel smooth and hassle-free.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>Discover Job Opportunities:</strong> Land gig economy roles or tech jobs wherever 
                you go, enabling you to work while exploring new destinations.
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              <span>
                <strong>Plan Your Journey:</strong> Explore flights, buses, and train options to get you 
                where you need to be, effortlessly and efficiently.
              </span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            Roamari was created for those who crave freedom—freedom to choose their path, work on their 
            terms, and embrace the adventure of a location-independent lifestyle. We understand the challenges 
            of navigating a nomadic life, and we're here to simplify it by bringing all the essentials 
            together in one place.
          </p>

          <p className="text-lg leading-relaxed">
            Our mission is to inspire and support your journey, helping you focus on what truly matters: 
            the experience. Whether you're a seasoned traveler or just starting your nomadic adventure, 
            Roamari is here to make the world your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;