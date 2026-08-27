import aboutuspic from "../assets/aboutus.jpg";

function AboutPage() {
  return (
    <div className="bg-gray-50 py-10 px-4 flex items-start justify-center px-24 gap-16">
      <div className="w-1/2 flex-shrink-0 h-[480px] rounded-2xl overflow-hidden shadow-md">
        <img src={aboutuspic} alt="us" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1">
        <h1 className="text-2xl font-bold text-center mb-8">About Us</h1>
        <p>
         Welcome to our travel platform — a place built for sharing journeys, not just planning them. Whether you're a seasoned backpacker or planning your very first trip, this app gives you the tools to document your adventures, discover new destinations, and connect with fellow travelers from around the world. We believe every trip has a story worth sharing, and our platform makes it easy to turn your travel memories into itineraries others can explore, save, and follow. Our team is made up of passionate travelers, developers, and designers who work together to create a seamless and enjoyable experience for our community.
        </p>
      </div>
    </div>
  );
}


export default AboutPage;
