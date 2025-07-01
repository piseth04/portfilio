import React, { useState } from 'react'
import profileImage from '../images/PF.jpg'
import Django from '../images/django.png'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
 <div className="min-h-screen bg-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md shadow-lg z-50 border-b border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                            Vuth Piseth
                        </h1>
                        <ul className="hidden md:flex space-x-8">
                            <li><a href="#about" className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                                About
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a></li>
                            <li><a href="#skills" className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                                Skills
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a></li>
                            <li><a href="#projects" className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                                Projects
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a></li>
                            <li><a href="#contact" className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 relative group">
                                Contact
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </a></li>
                        </ul>
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-700">
                                <a
                                    href="#about"
                                    onClick={closeMenu}
                                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
                                >
                                    About
                                </a>
                                <a
                                    href="#skills"
                                    onClick={closeMenu}
                                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
                                >
                                    Skills
                                </a>
                                <a
                                    href="#projects"
                                    onClick={closeMenu}
                                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#contact"
                                    onClick={closeMenu}
                                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-20">
                    <div style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a78bfa' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} className="w-full h-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center px-4 py-2 bg-slate-800 text-slate-200 rounded-full text-sm font-medium mb-8">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                Available for opportunities
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Hello, I'm <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                                Vuth Piseth
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-4">
                            Beginner Full Stack Developer & Creative Problem Solver
                        </p>

                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                            I create beautiful, functional, and user-friendly web applications using modern technologies
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="group bg-gradient-to-r from-white to-purple-300 text-slate-900 px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 font-medium">
                                <span className="flex items-center justify-center">
                                    Get In Touch
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </a>
                            <a href="#projects" className="group border-2 border-purple-300 text-purple-300 px-8 py-4 rounded-xl hover:bg-purple-300 hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 font-medium">
                                <span className="flex items-center justify-center">
                                    View My Work
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-10 blur-xl"></div>
            </section>

            {/* About Me Section */}
            <section id="about" className="py-20 bg-slate-800/50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            About <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-300 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="prose prose-lg text-slate-300">
                                <p className="leading-relaxed">
                                    I'm a passionate full-stack developer with a love for creating innovative
                                    web solutions. With expertise in modern technologies and a keen eye for
                                    design, I bring ideas to life through clean, efficient code.
                                </p>
                                <p className="leading-relaxed">
                                    When I'm not coding, you can find me exploring new technologies,
                                    contributing to open-source projects, or enjoying a good cup of tea
                                    while brainstorming the next big idea.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-8">
                                <div className="text-center group">
                                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all duration-300 transform group-hover:-translate-y-2">
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">4</h3>
                                        <p className="text-slate-400 mt-2 font-medium">Months Experience</p>
                                    </div>
                                </div>
                                <div className="text-center group">
                                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300 transform group-hover:-translate-y-2">
                                        <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">2+</h3>
                                        <p className="text-slate-400 mt-2 font-medium">Projects Completed</p>
                                    </div>
                                </div>
                                <div className="text-center group">
                                    {/* Additional stat if needed */}
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-white to-purple-300 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                                <div className="relative w-80 h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={profileImage}
                                        alt="Vuth Piseth"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-black relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            My <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Skills</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-300 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Here are some of the technologies I work with to bring ideas to life
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group">
                            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Frontend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">React</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">JavaScript</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">HTML/CSS</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Tailwind CSS</span>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Backend</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Node.js</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Python</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Django</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">PostgreSQL</span>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Tools & Others</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Git</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Docker</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default">Linux</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-slate-800/50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            My <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-300 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Here are some of the projects I've built with passion and creativity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                                <img
                                    src={Django}
                                    alt="E-Commerce Platform"
                                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-400">
                                        Web App
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                    E-Commerce Platform
                                </h3>
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    A full-stack e-commerce solution built with Python and Django, featuring user authentication, payment integration, and admin dashboard.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">Django</span>
                                    <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">Tailwind CSS</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">PostgreSQL</span>
                                    <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">JavaScript</span>
                                </div>
                                <div className="flex gap-3">
                                    <a href="https://bbu-d104-g3.thavrak-lab.xyz/" target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-white to-purple-300 text-slate-900 px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 text-sm font-medium text-center group/btn">
                                        <span className="flex items-center justify-center">
                                            Live Demo
                                            <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </a>
                                    <a href="https://github.com/piseth04/Django_selling" target="_blank" rel="noopener noreferrer" className="flex-1 border-2 border-slate-600 text-slate-300 px-4 py-2 rounded-xl hover:border-purple-300 hover:text-purple-300 transition-all duration-300 text-sm font-medium text-center group/btn">
                                        <span className="flex items-center justify-center">
                                            GitHub
                                            <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden flex items-center justify-center">
                                <div className="text-6xl opacity-20">🍵</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-400">
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    Coffee shop Management System
                                </h3>
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">React.js</span>
                                    <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">FastAPI</span>
                                    <span className="bg-gradient-to-r from-slate-700 to-slate-600 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">Tailwind CSS</span>
                                    <span className="bg-gradient-to-r from-slate-600 to-slate-700 text-slate-300 px-3 py-1 rounded-xl text-xs font-medium">SQL lite</span>
                                </div>
                                <div className="flex gap-3">
                                    <button disabled className="flex-1 bg-slate-700 text-slate-500 px-4 py-2 rounded-xl text-sm font-medium text-center cursor-not-allowed opacity-60">
                                        <span className="flex items-center justify-center">
                                            Live Demo
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button disabled className="flex-1 border-2 border-slate-700 text-slate-500 px-4 py-2 rounded-xl text-sm font-medium text-center cursor-not-allowed opacity-60">
                                        <span className="flex items-center justify-center">
                                            GitHub
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden flex items-center justify-center">
                                <div className="text-6xl opacity-20">🌤️</div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <div className="bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-indigo-400">
                                        Coming Soon
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    Weather Dashboard
                                </h3>
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {/* Tech stack can be added here */}
                                </div>
                                <div className="flex gap-3">
                                    <button disabled className="flex-1 bg-slate-700 text-slate-500 px-4 py-2 rounded-xl text-sm font-medium text-center cursor-not-allowed opacity-60">
                                        <span className="flex items-center justify-center">
                                            Live Demo
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button disabled className="flex-1 border-2 border-slate-700 text-slate-500 px-4 py-2 rounded-xl text-sm font-medium text-center cursor-not-allowed opacity-60">
                                        <span className="flex items-center justify-center">
                                            GitHub
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* Contact Section */}
<section id="contact" className="py-20 bg-slate-900 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get In <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-purple-300 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Let's create something amazing together. I'm always excited to discuss new opportunities and projects.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
                    <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-10 h-10 bg-gradient-to-br from-white to-purple-300 rounded-xl flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </span>
                        Let's work together!
                    </h3>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        I'm always interested in new opportunities and exciting projects.
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="group bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-white to-purple-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <span className="font-semibold text-white block">Email</span>
                                <a href="mailto:piseth3025@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors font-medium">
                                    piseth3025@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="group bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-gradient-to-br from-white to-purple-300 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <span className="font-semibold text-white block">Location</span>
                                <span className="text-slate-400 font-medium">Siem Reap, Cambodia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
                    <h4 className="font-semibold text-white mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                        <a href="https://t.me/SETHPI" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-white to-purple-300 text-slate-900 px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                </svg>
                                Telegram
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </a>
                        <a href="https://github.com/piseth04" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium">
                            <span className="flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-br from-white to-purple-300 rounded-xl flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </span>
                    Send me a message
                </h3>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-500"
                                placeholder="Your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-500"
                                placeholder="your.email@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-2">Subject *</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-500"
                            placeholder="What's this about?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-slate-500 resize-none"
                            placeholder="Tell me about your project or just say hello!"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-white to-purple-300 text-slate-900 py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 font-semibold group"
                    >
                        <span className="flex items-center justify-center">
                            Send Message
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

{/* Footer */}
<footer className="bg-gradient-to-r from-slate-900 via-black to-slate-900 text-white py-12 relative overflow-hidden">
    <div className="absolute inset-0 bg-black/20"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
            <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-2">
                    Vuth Piseth
                </h3>
                <p className="text-slate-400">Full Stack Developer & Creative Problem Solver</p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
                <a href="https://t.me/SETHPI" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                </a>
                <a href="https://github.com/piseth04" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="mailto:piseth3025@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </a>
            </div>

            <div className="border-t border-slate-700 pt-6">
                <p className="text-slate-500 text-sm">
                    &copy; 2025 Vuth Piseth. All rights reserved. Built with ❤️ using React & Tailwind CSS
                </p>
            </div>
        </div>
    </div>

    {/* Background decoration */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12 blur-2xl"></div>
</footer>
    </div>
  )
}

export default App

