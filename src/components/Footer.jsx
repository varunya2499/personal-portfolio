import React from 'react'
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

function Footer() {
  const navigationLinks = [
    { name: 'Home', icon: FaHome, href: '#' },
    { name: 'About', icon: FaUser, href: '#about' },
    { name: 'Skills', icon: FaCode, href: '#skills' },
    { name: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { name: 'Contact', icon: FaEnvelope, href: '#contact' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'GitHub', icon: FaGithub, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Logo/Brand Name */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Varunya Kajeendran</h2>
            <p className="text-gray-400">
  A passionate Health Promotion Specialist dedicated to empowering communities through education, evidence-based strategies, and a people-first approach — blending analytical thinking from chess with the heart of public service.
</p>

          </div>

          {/* Section 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors duration-300"
                    >
                      <Icon className="text-sm" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Section 3: Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="text-gray-500 text-sm">
  Let’s stay connected! Feel free to reach out through any of the platforms below — I’m always open to new opportunities and meaningful conversations.
</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon className="text-xl" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Section 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Email: varunya@example.com</p>
              <p className="text-gray-400">Phone: +94 77 341 7444</p>
              <p className="text-gray-400">Address: No15,Rasavinthoddam lane ,
              jaffna</p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Varunya Kajeendran. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
