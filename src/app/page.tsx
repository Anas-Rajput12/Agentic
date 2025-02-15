import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Car Rental AI Commerce</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="AI-powered car rental commerce platform for seamless bookings." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <header className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg py-4 h-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-8 mr-2" />
            <h1 className="text-lg sm:text-xl font-bold">Car Rental AI</h1>
        </div>

        <nav className="mt-2 sm:mt-0">
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center text-sm">
                <li><a href="#features" className="hover:text-gray-400">Features</a></li>
                <li><a href="#technology" className="hover:text-gray-400">Technology</a></li>
                {/* <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li> */}
                <li><a href="#fleet" className="hover:text-gray-400">Our Fleet</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </nav>

        <a href="#" className="bg-gray-700 px-3 py-2 text-xs sm:text-sm rounded-full text-white font-bold mt-2 sm:mt-0">
            Book Now
        </a>
    </div>
</header>

<main className="text-center p-6 pt-64 sm:pt-48 md:pt-32">
    <h2 className="text-2xl sm:text-3xl font-bold">AI-Powered Car Rentals</h2>
    <p className="text-gray-500 mt-4 text-sm sm:text-base">
        Smart AI recommendations and seamless booking experience.
    </p>
</main>



            
<section 
    id="features" 
    className="p-6 pt-64 sm:pt-48 md:pt-32"
>


            <h2 className="text-2xl font-bold text-center">Features</h2>
                <div className="grid grid-cols md:flex-cols-2 gap-6 mt-6 lg:flex">
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">AI-Powered Car Suggestions</h3>
                        <p className="text-gray-600 mt-2">Get personalized car recommendations based on your preferences and needs.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Automated Rental Booking</h3>
                        <p className="text-gray-600 mt-2">Seamlessly book your preferred car with an automated booking system.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Real-Time Car Tracking</h3>
                        <p className="text-gray-600 mt-2">Track your rented car in real-time for added security and convenience.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">24/7 Customer Support</h3>
                        <p className="text-gray-600 mt-2">Get round-the-clock assistance for all your rental-related queries.</p>
                    </div>
                </div>
            </section>

            <section id="technology" className="p-6 pt-64 sm:pt-48 md:pt-32">
                <h2 className="text-2xl font-bold text-center">Technology & AI Agents</h2>
                <div className="grid grid-cols md:flex-cols-2 gap-6 mt-6 lg:flex">
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">AI Virtual Assistant</h3>
                        <p className="text-gray-600 mt-2">Interact with our AI assistant for personalized rental suggestions and instant support.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Dynamic Pricing Engine</h3>
                        <p className="text-gray-600 mt-2">Our AI-driven pricing model adjusts rates based on demand, season, and location.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Automated Fleet Management</h3>
                        <p className="text-gray-600 mt-2">Track availability, maintenance, and utilization with AI-powered automation.</p>
                    </div>
                    <div className="p-4 border rounded-lg bg-gray-100">
                        <h3 className="text-xl font-bold">Smart Analytics</h3>
                        <p className="text-gray-600 mt-2">Gain insights into your rental patterns, vehicle preferences, and travel habits.</p>
                    </div>
                </div>
            </section>
            
            <section id="fleet" className="p-6 pt-64 sm:pt-48 md:pt-32">
    <h2 className="text-2xl font-bold text-center">Our Fleet</h2>
    <p className="text-black text-sm md:text-base text-center">
        Choose from a wide range of cars suited to your needs.
    </p>
    <div className="grid grid-cols md:flex-cols-2 gap-6 mt-6 lg:flex">
        <div className="p-4 border rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold">Economy Cars</h3>
            <p className="text-gray-600 mt-2">
                Affordable and fuel-efficient cars for budget-conscious travelers.
            </p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold">Luxury Cars</h3>
            <p className="text-gray-600 mt-2">
                Experience premium comfort with our high-end luxury vehicles.
            </p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold">SUVs & Crossovers</h3>
            <p className="text-gray-600 mt-2">
                Spacious and powerful SUVs perfect for family trips and off-road adventures.
            </p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
            <h3 className="text-xl font-bold">Electric Vehicles</h3>
            <p className="text-gray-600 mt-2">
                Eco-friendly electric cars for a sustainable and efficient ride.
            </p>
        </div>
    </div>
</section>

            
            <section id="contact" className="p-6 pt-64 sm:pt-48 md:pt-32">
                <h2 className="text-2xl font-bold">Contact Us</h2>
                <form className="flex flex-col space-y-4">
    <input 
        type="text" 
        placeholder="Your Name" 
        required 
        className="p-2 rounded border border-black"
    />
    <input 
        type="email" 
        placeholder="Your Email" 
        required 
        className="p-2 rounded border border-black"
    />
    <textarea 
        placeholder="Your Message" 
        required 
        className="p-2 rounded border border-black"
    ></textarea>
    <button 
        type="submit" 
        className="bg-black text-white py-2 rounded"
    >
        Send
    </button>
</form>

            </section>
            
            <footer className="bg-black text-gray-400 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
        <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-8 mr-2" />
            <h1 className="text-xl font-bold text-white">Car Rental AI</h1>
        </div>
          <p className="mt-2 text-sm">
            Smart car rentals with AI-powered recommendations and seamless bookings.
          </p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="hover:text-white">🐱</a>
            <a href="#" className="hover:text-white">🔗</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-white text-lg font-semibold">Services</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-white">Car Listings</a></li>
            <li><a href="#" className="hover:text-white">AI Recommendations</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Booking Process</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-white text-lg font-semibold">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2025 CarRental AI. Powered by Agentic AI. All rights reserved.
      </div>
    </footer>
        </div>
    );
}
