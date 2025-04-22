import React from 'react'
import { FaChessKnight, FaTrophy, FaIdCard, FaUniversity, FaAward } from 'react-icons/fa'

function Achievements() {
  const achievements = [
    {
      title: 'International Chess Player',
      description: 'Competed in international chess tournaments',
      icon: FaChessKnight,
      color: 'bg-blue-500'
    },
    {
      title: 'FIDE Rating: 1464',
      description: 'Official FIDE chess rating',
      icon: FaTrophy,
      color: 'bg-yellow-500'
    },
    {
      title: 'FIDE ID: 29965233',
      description: 'Official FIDE identification number',
      icon: FaIdCard,
      color: 'bg-green-500'
    },
    {
      title: 'University Colours Holder',
      description: 'Awarded in 2023 for outstanding achievements',
      icon: FaUniversity,
      color: 'bg-purple-500'
    },
    {
      title: 'University Colours Merit',
      description: 'Awarded in 2024 for continued excellence',
      icon: FaAward,
      color: 'bg-pink-500'
    }
  ]

  return (
    <section className="bg-[#F1E7E7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wide">Achievements</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div 
                key={index} 
                className="bg-pink rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn"
              >
                <div className="flex items-start gap-4">
                  <div className={`${achievement.color} p-3 rounded-full text-white`}>
                    <Icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
