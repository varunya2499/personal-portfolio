import React from 'react'
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa'

function Reference() {
  const references = [
    {
      name: 'Dr. Manoj Fernando',
      designation: 'Dean, Faculty of Applied Sciences',
      institution: 'Rajarata University of Sri Lanka',
      phone: '077 341 7444',
      email: 'manojf2000@ail.com'
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wide">References</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 animate-fadeIn"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-full">
                  <FaUser className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{reference.name}</h3>
                  <p className="text-gray-600 font-medium">{reference.designation}</p>
                  <p className="text-gray-500 text-sm">{reference.institution}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <FaPhone className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-700">{reference.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-full">
                    <FaEnvelope className="text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-700">{reference.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reference
