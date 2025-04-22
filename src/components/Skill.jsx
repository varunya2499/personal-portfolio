import React from 'react'
import { FaUsers, FaLightbulb, FaClock, FaHandshake, FaBrain, FaComments, FaBriefcase } from 'react-icons/fa'

function Skill() {
  const skills = [
    { name: 'Teamwork', icon: FaUsers, level: 90, color: 'bg-blue-500' },
    { name: 'Leadership', icon: FaHandshake, level: 85, color: 'bg-green-500' },
    { name: 'Creativity', icon: FaLightbulb, level: 88, color: 'bg-purple-500' },
    { name: 'Adaptability', icon: FaBrain, level: 92, color: 'bg-pink-500' },
    { name: 'Communication', icon: FaComments, level: 87, color: 'bg-indigo-500' },
    { name: 'Time Management', icon: FaClock, level: 89, color: 'bg-yellow-500' },
    { name: 'Work Ethic', icon: FaBriefcase, level: 95, color: 'bg-red-500' }
  ]

  return (
    <section className="bg-[#F1E7E7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">Skills</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div key={index} className="animate-fadeIn">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Icon className={`text-${skill.color.split('-')[1]}-500`} />
                    </div>
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                  </div>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full lg:w-2/3 h-4 bg-gray-500 rounded-full overflow-hidden">
                  <div 
                    className={`${skill.color} h-full rounded-full transition-all duration-300 hover:bg-opacity-80`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skill
