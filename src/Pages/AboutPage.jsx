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
          Welcome to our travel app! We are dedicated to providing the best
          travel experiences in Europe for our users. This app allows you to
          explore various travel plans, discover new destinations, and create
          your own personalized travel itineraries. Our team is passionate about
          travel and committed to helping you make the most of your journey. Our
          team is made up of experienced travelers, developers, and designers
          who work together to create a seamless and enjoyable user experience.
          Tianyi Xi, a software engineer with a passion for travel, is the lead
          developer of this app. He has extensive experience in building web
          applications and is dedicated to creating a user-friendly platform for
          travelers. Oyetomi Oyelaja is a talented designer with a keen eye for
          detail. She is responsible for the app's visual design and user
          interface, ensuring that it is both aesthetically pleasing and easy to
          navigate.
        </p>
      </div>
    </div>
  );
}


export default AboutPage;
