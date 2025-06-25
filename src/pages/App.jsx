import React from 'react'
import profileImage from '../images/PF.jpg'
import Django from '../images/django.png'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Your Name</h1>
            <ul className="hidden md:flex space-x-8">
              <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm <span className="text-blue-600">My Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">Full Stack Developer & Creative Problem Solver</p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
              I create beautiful, functional, and user-friendly web applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get In Touch
              </a>
              <a href="#projects" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                I'm a passionate full-stack developer with a love for creating innovative 
                web solutions. With expertise in modern technologies and a keen eye for 
                design, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-lg text-gray-600">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of tea 
                while brainstorming the next big idea.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">4</h3>
                  <p className="text-gray-600 mt-2">Month Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">3+</h3>
                  <p className="text-gray-600 mt-2">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600">3+</h3>
                  <p className="text-gray-600 mt-2">Technologies Mastered</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={profileImage} 
                  alt="#" 
                  className="object-cover w-full h-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span> */}
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span> */}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                {/* <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Express.js</span> */}
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Django</span>
                {/* <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span> */}
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Git</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Docker</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Linux</span>
                {/* <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Figma</span> */}
                {/* <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Jest</span> */}
                {/* <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Webpack</span> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                 <img 
                  src={Django} 
                  alt="#" 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack e-commerce solution built with Pyhton and Django, featuring user authentication, payment integration, and admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Django</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Tailwind CSS</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Postgrest SQL</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">JavaScript</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://bbu-d104-g3.thavrak-lab.xyz/" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                    Live Demo
                  </a>
                  <a href="https://github.com/piseth04/Django_selling" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                 <img 
                  src={profileImage} 
                  alt="#" 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Task Management App</h3>
                <p className="text-gray-600 mb-4">
                  A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Vue.js</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Express.js</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Socket.io</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">PostgreSQL</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                    Live Demo
                  </a>
                  <a href="#" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <img 
                      src={profileImage} 
                      alt="#" 
                      className="object-cover w-full h-full" 
                    />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Weather Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Chart.js</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">OpenWeather API</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
                    Live Demo
                  </a>
                  <a href="#" className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Let's work together!</h3>
                <p className="text-lg text-gray-600 mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">@</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Email:</span>
                    <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-700 ml-2">
                      youremail@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Phone:</span>
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 ml-2">
                      +855 (0)17-761-255
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Location:</span>
                    <span className="text-gray-600 ml-2">Siem Reap, Cambodia</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/piseth04" className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            <form className="bg-white p-8 rounded-xl shadow-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

