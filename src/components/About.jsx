import React from 'react'
import { FaHeart, FaUsers, FaChartLine ,FaChessKnight } from 'react-icons/fa'

function About() {
  return (
    <section className="bg-[#F1E7E7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column - Image */}
          <div className="animate-fadeIn transition-opacity duration-1000">
            <img 
              src="about.jpeg" 
              alt="Varunya Kajeendran" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="animate-fadeIn transition-opacity duration-1000">
            <span className="text-xl uppercase tracking-wide text-pink-500 font-semibold">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Driven by Purpose. Grounded in Community.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              As a dedicated health promotion specialist, I combine evidence-based practices with community engagement to create meaningful health initiatives. My approach focuses on sustainable solutions that empower individuals and communities to achieve their health goals.
            </p>
            
            {/* Highlights Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <FaHeart className="text-pink-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Passionate Advocacy</h3>
                  <p className="text-gray-500 text-sm">Committed to improving community health outcomes</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <FaUsers className="text-pink-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Community Focus</h3>
                  <p className="text-gray-500 text-sm">Building strong relationships with local communities</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <FaChartLine className="text-pink-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Data-Driven Approach</h3>
                  <p className="text-gray-500 text-sm">Using evidence to guide health promotion strategies</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
  <div className="bg-pink-100 p-3 rounded-full">
    <FaChessKnight className="text-pink-500 text-xl" />
  </div>
  <div>
    <h3 className="font-semibold">Strategic Mindset</h3>
    <p className="text-gray-500 text-sm">Applying chess logic to solve real-world health challenges</p>
  </div>
</div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
