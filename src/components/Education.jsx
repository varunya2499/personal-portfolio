import React from 'react'
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa'

function Education() {
  return (
    <section className="bg-[#F1E7E7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bachelor's Degree Card */}
          <div className="bg-pink rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaGraduationCap className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Bachelor of Science</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 flex items-center gap-2">
                <FaUniversity className="text-gray-400" />
                Rajarata University of Sri Lanka
              </p>
              <p className="text-gray-500">2021 – 2025</p>
              <p className="text-gray-600">Health Promotion</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaAward className="text-yellow-500" />
                <span>First Class Honors</span>
              </div>
            </div>
          </div>

          {/* Diploma Card */}
          <div className="bg-pink rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaGraduationCap className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Diploma in Public Health</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 flex items-center gap-2">
                <FaUniversity className="text-gray-400" />
                Sri Lanka Institute of Health Sciences
              </p>
              <p className="text-gray-500">2019 – 2020</p>
              <p className="text-gray-600">Public Health</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaAward className="text-yellow-500" />
                <span>Distinction</span>
              </div>
            </div>
          </div>

          {/* Certificate Card */}
          <div className="bg-pink rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-pink-300 p-3 rounded-full">
                <FaGraduationCap className="text-pink-800 text-xl" />
              </div>
              <h3 className="text-xl font-bold">Certificate in Health Education</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600 flex items-center gap-2">
                <FaUniversity className="text-gray-400" />
                Ministry of Health, Sri Lanka
              </p>
              <p className="text-gray-500">2018 – 2019</p>
              <p className="text-gray-600">Health Education</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaAward className="text-yellow-500" />
                <span>Outstanding Performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
