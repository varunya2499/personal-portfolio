import React from 'react'
import { FaFileAlt, FaBook, FaUsers, FaChartBar } from 'react-icons/fa'

function Experience() {
  return (
    <section className="bg-[#F1E7E7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Academic Experience</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Report Card */}
          <div className="bg-pink rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaFileAlt className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Project Report on Addressing Obstacles in Community Progress</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center gap-2">
                <FaBook className="text-gray-400" />
                Rajarata University of Sri Lanka
              </p>
              <p className="text-pink-500 font-medium">2024 (Ongoing)</p>
              <p className="text-gray-600 text-lg">
                Conducted comprehensive research on community health initiatives and identified key challenges in implementation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaChartBar className="text-pink-400" />
                  <span>Evaluated community health progress metrics</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-pink-400" />
                  <span>Engaged with local community leaders</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Review Card */}
          <div className="bg-pink rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaBook className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Systematic Review of Health Promotion Strategies</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center gap-2">
                <FaBook className="text-gray-400" />
                Department of Health Sciences
              </p>
              <p className="text-pink-500 font-medium">2023</p>
              <p className="text-gray-600 text-lg">
                Analyzed and synthesized existing literature on effective health promotion methods in rural communities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaChartBar className="text-pink-400" />
                  <span>Published findings in academic journal</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-pink-400" />
                  <span>Presented at national conference</span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Engagement Card */}
          <div className="bg-pink rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaUsers className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Community Health Education Program</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center gap-2">
                <FaBook className="text-gray-400" />
                Local Health Department
              </p>
              <p className="text-pink-500 font-medium">2022 - 2023</p>
              <p className="text-gray-600 text-lg">
                Developed and implemented health education workshops for rural communities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaChartBar className="text-pink-400" />
                  <span>Reached 500+ community members</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-pink-400" />
                  <span>Trained 20 local health workers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Project Card */}
          <div className="bg-pink rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaFileAlt className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Health Behavior Analysis Study</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 flex items-center gap-2">
                <FaBook className="text-gray-400" />
                Research Center for Public Health
              </p>
              <p className="text-pink-500 font-medium">2021 - 2022</p>
              <p className="text-gray-600 text-lg">
                Investigated patterns of health-seeking behavior in underserved communities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaChartBar className="text-pink-400" />
                  <span>Collected and analyzed 1000+ survey responses</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-pink-400" />
                  <span>Identified key barriers to healthcare access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
