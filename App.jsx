import React, { useState } from 'react';
import { BookOpen, Heart, Star, Users, MapPin, Phone, Mail, X, Menu, Quote, ChevronLeft, ChevronRight, Award, Target, Lightbulb } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const subjectToppers = [
    {
      name: "Unnati",
      subject: "Biology",
      score: "94%",
      class: "Class XII - Science",
      image: "/Images/12.jpg",
      gradient: "from-yellow-300 to-orange-400",
    },
    {
      name: "Yash",
      subject: "Maths",
      score: "100%",
      class: "Class XII - Science",
      image: "/Images/9.jpg",
      gradient: "from-blue-300 to-indigo-400",
    },
    {
      name: "Vishal",
      subject: "Accounts",
      score: "95%",
      class: "Class XII - Commerce",
      image: "/Images/10.jpg",
      gradient: "from-green-300 to-teal-400",
    },
    {
      name: "Sparsh",
      subject: "Physics",
      score: "95%",
      class: "Class XII - Science",
      image: "/Images/7.jpg",
      gradient: "from-purple-300 to-pink-400",
    },
    {
      name: "Tushar",
      subject: "Economics",
      score: "100%",
      class: "Class XII - Commerce",
      image: "/Images/8.jpg",
      gradient: "from-rose-300 to-red-400",
    },
  ];

  const testimonials = [
    {
      text: "The difference CPCI Classes has made in my child's education is remarkable. The dedicated teachers and innovative curriculum have helped my daughter thrive academically while also growing in confidence and social skills.",
      name: "Sujata Sharma",
      role: "Parent of 10th Grader",
      rating: 5
    },
    {
      text: "I can't thank CPCI Classes enough for the personalized attention my son receives. The small class sizes and caring environment have made all the difference. He actually looks forward to going to class every day!",
      name: "Rajesh Kumar",
      role: "Parent of 12th Grader",
      rating: 5
    },
    {
      text: "The holistic approach to education here is exceptional. My children are not just learning academics, but also developing critical thinking skills, creativity, and social responsibility. Highly recommended!",
      name: "Ankit Arora",
      role: "Parent of 11th Grader",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              CPCI Classes
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
            </div>

            <button className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              Enroll Now
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-in slide-in-from-top">
              <div className="flex flex-col space-y-3">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">About</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">Testimonials</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">Contact</a>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all mt-2">
                  Admin
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-400">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                ✨ Excellence Since 1987
              </div>
              <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Growing Critical<br />
                <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">Thinkers</span> From<br />
                Early Ages
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
                Empowering young minds through innovative education, nurturing creativity, and building character for a brighter tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all transform hover:scale-105">
                  <a href="#contact">Schedule a Tour</a>
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all">
                  <a href="#about">Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            CPCI Classes is a progressive coaching institute dedicated to fostering 
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> academic excellence</span> and character development.
          </h2>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gradient-to-b from-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Expert Curriculum</h3>
              <p className="text-gray-600">Comprehensive learning programs designed by educational experts</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Safe Environment</h3>
              <p className="text-gray-600">Nurturing and secure spaces for optimal child development</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Holistic Development</h3>
              <p className="text-gray-600">Focus on academic, social, and emotional growth</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Community Focus</h3>
              <p className="text-gray-600">Building strong connections between students, families, and staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform rotate-3"></div>
            <div className="relative h-[500px] bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/Images/11.jpg" // update path as needed
                alt="Founder - Mr. Jitendra Sharma"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Meet Our Founder</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              A Visionary in Education
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Founded in 2006 by Dr. Jitendra Sharma, CPCI Classes began with a simple yet powerful vision: to create an educational environment where every child could discover their unique potential and develop into confident, compassionate leaders.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">20+ Years of Excellence</h4>
                  <p className="text-gray-600">Over two decades of transforming young lives through quality education</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Student-Centered Approach</h4>
                  <p className="text-gray-600">Personalized learning paths that adapt to each child's unique needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Innovation in Teaching</h4>
                  <p className="text-gray-600">Pioneering methods that make learning engaging and effective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="programs" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Subjects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Expert Teaching in Core Subjects (IX-XII)
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Mathematics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Mathematics</h3>
              <p className="text-gray-600">Building strong analytical and problem-solving skills through comprehensive math programs</p>
            </div>

            {/* Physics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Physics</h3>
              <p className="text-gray-600">Exploring the fundamental laws of nature through hands-on experiments and theory</p>
            </div>

            {/* Chemistry */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Chemistry</h3>
              <p className="text-gray-600">Understanding matter and reactions through practical lab work and detailed study</p>
            </div>

            {/* Biology */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Biology</h3>
              <p className="text-gray-600">Discovering life sciences with in-depth study of organisms and ecosystems</p>
            </div>

            {/* Economics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Economics</h3>
              <p className="text-gray-600">Mastering economic principles and their real-world applications</p>
            </div>

            {/* Chemistry */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Chemistry</h3>
              <p className="text-gray-600">Understanding matter and reactions through practical lab work and detailed study</p>
            </div>

            {/* Biology */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Biology</h3>
              <p className="text-gray-600">Discovering life sciences with in-depth study of organisms and ecosystems</p>
            </div>

            {/* Economics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Economics</h3>
              <p className="text-gray-600">Mastering economic principles and their real-world applications</p>
            </div>

            {/* Accounts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl">Accounts</h3>
              <p className="text-gray-600">Developing financial literacy and accounting expertise for future success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subject-wise Toppers Section */}
      <section
        id="toppers"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">
            Our Achievers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Subject-wise Toppers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {subjectToppers.map((topper, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Image */}
              <div
                className={`relative h-64 bg-gradient-to-br ${topper.gradient}`}
              >
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />

                <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-xl shadow">
                  <p className="text-sm font-semibold text-gray-700">
                    {topper.subject}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center bg-gradient-to-br from-orange-50 to-white">
                <h3 className="text-xl font-bold text-gray-900">
                  {topper.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {topper.class}
                </p>

                <div className="inline-flex items-center justify-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-lg">
                  {topper.score}
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Topper in {topper.subject}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonial Slider */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            What Parents Say About Us
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-xl p-8 md:p-16">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-orange-200" />
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            
            <div className="mb-8">
              <p className="font-bold text-gray-900 text-xl">{testimonials[currentTestimonial].name}</p>
              <p className="text-orange-600 font-medium">{testimonials[currentTestimonial].role}</p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={prevTestimonial}
                className="bg-white hover:bg-orange-50 p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-orange-600" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-orange-600 w-8' 
                        : 'bg-orange-200 hover:bg-orange-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="bg-white hover:bg-orange-50 p-3 rounded-full shadow-lg transition-all transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-orange-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Proven Excellence in Education
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">20</div>
              <div className="text-orange-100 font-medium text-lg">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">10K</div>
              <div className="text-orange-100 font-medium text-lg">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">12</div>
              <div className="text-orange-100 font-medium text-lg">Expert Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">40</div>
              <div className="text-orange-100 font-medium text-lg">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center mb-16">
    <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Meet Our Team</span>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
      Dedicated Educators at CPCI Classes
    </h2>
  </div>

  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* Team Member 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-orange-300 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/1.jpg" alt="Team Member 1" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Jane Doe - History Instructor
        </h4>
        <p className="text-gray-600 mb-4">
          With over 10 years of teaching experience, Jane brings a passion for science and technology to the classroom, inspiring the next generation of innovators.
        </p>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-yellow-300 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/2.jpg" alt="Team Member 2" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Yash Sir - Biology Instructor
        </h4>
        <p className="text-gray-600 mb-4">
          Yash has a knack for making complex biology concepts easy to understand and engaging. His teaching style ensures every student excels.
        </p>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-orange-400 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/3.jpg" alt="Team Member 3" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Sarah Lee - Biology
        </h4>
        <p className="text-gray-600 mb-4">
          Sarah’s creative approach to teaching language arts fosters a love for reading and writing in every student she works with.
        </p>
      </div>
    </div>

    {/* Team Member 4 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-blue-300 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/4.jpg" alt="Team Member 4" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Sheel Sir - Maths and Accounts Instructor
        </h4>
        <p className="text-gray-600 mb-4">
          Sheel sir uses real-world events and critical thinking exercises to help students understand the past and its impact on today’s world.
        </p>
      </div>
    </div>

    {/* Team Member 5 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-green-300 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/5.jpg" alt="Team Member 5" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Lisa White - Physics and Chemistry Instructor
        </h4>
        <p className="text-gray-600 mb-4">
          Lisa has a passion for chemistry that she shares with students through hands-on experiments and engaging classroom activities.
        </p>
      </div>
    </div>

    {/* Team Member 6 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-purple-300 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/6.jpg" alt="Team Member 6" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Tom Clark - Economics Instructor
        </h4>
        <p className="text-gray-600 mb-4">
          Tom brings history to life with immersive storytelling and a focus on the cultural and political aspects of world events.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-56 bg-gradient-to-br from-orange-400 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Images/11.jpg" alt="Team Member 3" className="object-cover" />
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3">
          Jitendra Sir - Maths and Physics
        </h4>
        <p className="text-gray-600 mb-4">
          Sarah’s creative approach to teaching language arts fosters a love for reading and writing in every student she works with.
        </p>
      </div>
    </div>

  </div>
</section>


      {/* Contact & Map Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Visit Our Campus
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">A 709, Avantika<br />Rohini Sector 2, Delhi 110085</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9871626458</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">cpciclasses709@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.4421191145!2d77.06889754863279!3d28.52725254759215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1641234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CPCI Classes Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-orange-100 font-semibold text-sm uppercase tracking-wide">Join Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
            Give Your Child the Best<br />Start in Education
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Schedule a tour of our campus and discover how CPCI Classes can make a difference in your child's educational journey.
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Schedule a Visit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-4">CPCI Classes</h3>
              <p className="text-gray-600 text-sm">
                Excellence in elementary education since 1987.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500">Early Years</a></li>
                <li><a href="#" className="hover:text-orange-500">Middle Elementary</a></li>
                <li><a href="#" className="hover:text-orange-500">Upper Elementary</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
                <li><a href="#" className="hover:text-orange-500">Parent Portal</a></li>
                <li><a href="#" className="hover:text-orange-500">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
            <p>© 2026 CPCI Classes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}