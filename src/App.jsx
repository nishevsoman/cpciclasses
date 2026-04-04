import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Heart, Star, Users, MapPin, Phone, Mail, X, Menu, Quote, ChevronLeft, ChevronRight, Award, Target, Lightbulb } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const isPausedRef = useRef(false);

  const subjectToppers = [
    { name: "Unnati", subject: "Biology", score: "94%", class: "Class XII - Science", image: "/Images/12.jpg" },
    { name: "Yash", subject: "Maths", score: "100%", class: "Class XII - Science", image: "/Images/9.jpg" },
    { name: "Vishal", subject: "Accounts", score: "95%", class: "Class XII - Commerce", image: "/Images/10.jpg" },
    { name: "Sparsh", subject: "Physics", score: "95%", class: "Class XII - Science", image: "/Images/7.jpg" },
    { name: "Tushar", subject: "Economics", score: "100%", class: "Class XII - Commerce", image: "/Images/8.jpg" },
    
  ];

  const allToppers = [...subjectToppers, ...subjectToppers];

  const CARD_WIDTH = 240;
  const CARD_GAP = 24;
  const SPEED = 0.6;

  useEffect(() => {
    const totalWidth = subjectToppers.length * (CARD_WIDTH + CARD_GAP);
    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current += SPEED;
        if (positionRef.current >= totalWidth) positionRef.current = 0;
        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const testimonials = [
    {
      text: "The difference CPCI Classes has made in my child's education is remarkable. The dedicated teachers and innovative curriculum have helped my daughter thrive academically while also growing in confidence and social skills.",
      name: "Sujata Sharma", role: "Parent of 10th Grader", rating: 5
    },
    {
      text: "I can't thank CPCI Classes enough for the personalized attention my son receives. The small class sizes and caring environment have made all the difference. He actually looks forward to going to class every day!",
      name: "Rajesh Kumar", role: "Parent of 12th Grader", rating: 5
    },
    {
      text: "The holistic approach to education here is exceptional. My children are not just learning academics, but also developing critical thinking skills, creativity, and social responsibility. Highly recommended!",
      name: "Ankit Arora", role: "Parent of 11th Grader", rating: 5
    }
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              CPCI Classes
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
            </div>
            <button className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              <a href="https://cpci-management-ie0319ax4-nishevs-projects-4aafacdd.vercel.app">Admin</a>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
              <div className="flex flex-col space-y-3">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">Home</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">About</a>
                <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">Testimonials</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2">Contact</a>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all mt-2">
                  <a href="https://cpci-management-ie0319ax4-nishevs-projects-4aafacdd.vercel.app">Admin</a>
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
                ✨ Excellence Since 2006
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
            {[
              { icon: <BookOpen className="w-8 h-8 text-white" />, title: "Expert Curriculum", desc: "Comprehensive learning programs designed by educational experts" },
              { icon: <Heart className="w-8 h-8 text-white" />, title: "Safe Environment", desc: "Nurturing and secure spaces for optimal child development" },
              { icon: <Star className="w-8 h-8 text-white" />, title: "Holistic Development", desc: "Focus on academic, social, and emotional growth" },
              { icon: <Users className="w-8 h-8 text-white" />, title: "Community Focus", desc: "Building strong connections between students, families, and staff" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-[450px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform rotate-3"></div>
            <div className="relative h-[450px] bg-gradient-to-br from-orange-300 to-orange-500 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/Images/11.jpg" alt="Founder - Jitendra Singh" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Meet Our Founder</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">A Visionary in Education</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Founded in 2006 by Jitendra Singh, CPCI Classes began with a simple yet powerful vision: to create an educational environment where every child could discover their unique potential and develop into confident, compassionate leaders.
            </p>
            <div className="space-y-4">
              {[
                { icon: <Award className="w-6 h-6 text-orange-600" />, title: "20+ Years of Excellence", desc: "Over two decades of transforming young lives through quality education" },
                { icon: <Target className="w-6 h-6 text-orange-600" />, title: "Student-Centered Approach", desc: "Personalized learning paths that adapt to each child's unique needs" },
                { icon: <Lightbulb className="w-6 h-6 text-orange-600" />, title: "Innovation in Teaching", desc: "Pioneering methods that make learning engaging and effective" },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="programs" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Subjects</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Expert Teaching in Core Subjects (IX-XII)</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { color: "from-blue-500 to-blue-600", icon: <Target className="w-8 h-8 text-white" />, title: "Mathematics", desc: "Building strong analytical and problem-solving skills through comprehensive math programs" },
              { color: "from-purple-500 to-purple-600", icon: <Lightbulb className="w-8 h-8 text-white" />, title: "Physics", desc: "Exploring the fundamental laws of nature through hands-on experiments and theory" },
              { color: "from-green-500 to-green-600", icon: <Star className="w-8 h-8 text-white" />, title: "Chemistry", desc: "Understanding matter and reactions through practical lab work and detailed study" },
              { color: "from-teal-500 to-teal-600", icon: <Heart className="w-8 h-8 text-white" />, title: "Biology", desc: "Discovering life sciences with in-depth study of organisms and ecosystems" },
              { color: "from-yellow-500 to-yellow-600", icon: <Award className="w-8 h-8 text-white" />, title: "Economics", desc: "Mastering economic principles and their real-world applications" },
              { color: "from-orange-500 to-orange-600", icon: <BookOpen className="w-8 h-8 text-white" />, title: "Accounts", desc: "Developing financial literacy and accounting expertise for future success" },
              { color: "from-yellow-500 to-green-600", icon: <Award className="w-8 h-8 text-white" />, title: "Business Studies", desc: "Learning the fundamentals of business management, marketing, finance, and entrepreneurship for real-world corporate readiness." },
              { color: "from-blue-500 to-cyan-600", icon: <Heart className="w-8 h-8 text-white" />, title: "Social Science", desc: "Understanding history, geography, political science, and sociology to develop critical awareness of society, culture, and governance." },
              { color: "from-green-500 to-green-600", icon: <BookOpen className="w-8 h-8 text-white" />, title: "English", desc: "Strengthening reading comprehension, grammar, writing skills, and literature appreciation to develop effective communicators." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-orange-100">
                <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers Auto-Scrolling Carousel */}
      <section id="toppers" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Our Achievers</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Subject-wise Toppers</h2>
            <p className="text-gray-500 mt-3 text-sm">Hover to pause</p>
          </div>
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          }}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          <div
            ref={carouselRef}
            className="flex"
            style={{ gap: `${CARD_GAP}px`, willChange: 'transform', paddingLeft: '24px' }}
          >
            {allToppers.map((topper, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden flex-shrink-0 hover:shadow-2xl transition-shadow"
                style={{ width: `${CARD_WIDTH}px` }}
              >
                <div className="relative h-56">
                  <img src={topper.image} alt={topper.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-lg shadow">
                    <p className="text-xs font-semibold text-gray-700">{topper.subject}</p>
                  </div>
                </div>
                <div className="p-4 text-center bg-gradient-to-br from-orange-50 to-white">
                  <h3 className="text-base font-bold text-gray-900">{topper.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{topper.class}</p>
                  <div className="inline-flex items-center justify-center bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
                    {topper.score}
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Topper in {topper.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Slider */}
      <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">What Parents Say About Us</h2>
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
              <button onClick={prevTestimonial} className="bg-white hover:bg-orange-50 p-3 rounded-full shadow-lg transition-all transform hover:scale-110">
                <ChevronLeft className="w-6 h-6 text-orange-600" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-orange-600 w-8' : 'bg-orange-200 hover:bg-orange-300'}`}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="bg-white hover:bg-orange-50 p-3 rounded-full shadow-lg transition-all transform hover:scale-110">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white">Proven Excellence in Education</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "20", label: "Years of Excellence" },
              { num: "10K", label: "Happy Students" },
              { num: "12", label: "Expert Teachers" },
              { num: "40", label: "Awards Won" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">{s.num}</div>
                <div className="text-orange-100 font-medium text-lg">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Meet Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Dedicated Educators at CPCI Classes</h2>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { img: "/Images/11.jpg", color: "from-orange-400 to-red-400", name: "Jitendra Sir", role: "Maths Instructor", desc: "Founder and lead mathematics instructor with 20+ years of transforming student potential through structured problem-solving." },
            { img: "/Images/4.jpg", color: "from-blue-300 to-blue-500", name: "Sheel Sir", role: "Accounts Instructor", desc: "Sheel sir uses real-world events and critical thinking exercises to help students master accounts and its applications." },
            { img: "/Images/5.jpg", color: "from-green-300 to-green-500", name: "Praveen Sir", role: "Physics & Chemistry Instructor", desc: "Passionate about science, Praveen sir shares that enthusiasm through hands-on experiments and engaging classroom activities." },
            { img: "/Images/6.jpg", color: "from-purple-300 to-purple-500", name: "Ashwani Sir", role: "Economics Instructor", desc: "Brings economics to life with immersive storytelling and a focus on real-world market dynamics and policy." },
            { img: "/Images/1.jpg", color: "from-orange-300 to-orange-500", name: "Ashima Ma'am", role: "Social Studies Instructor", desc: "With over 5 years of teaching experience, Ashima Ma'am inspires students to understand society and history critically." },
            { img: "/Images/2.jpg", color: "from-yellow-300 to-orange-400", name: "Yash Sir", role: "Biology Instructor", desc: "Yash has a knack for making complex biology concepts easy to understand and engaging for every student." },
            { img: "/Images/3.jpg", color: "from-orange-400 to-red-400", name: "Shikha Ma'am", role: "Science Instructor (IX–X)", desc: "Creative approach to teaching science fosters curiosity and a love for discovery in every student she works with." },
          ].map((m, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className={`h-56 bg-gradient-to-br ${m.color} relative overflow-hidden`}>
                <img src={m.img} alt={m.name} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mt-2 mb-1">{m.name}</h4>
                <p className="text-sm text-orange-500 font-semibold mb-3">{m.role}</p>
                <p className="text-gray-600 text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">Visit Our Campus</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
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
                    <a href="https://maps.app.goo.gl/TCSekArxysGqg93e8" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-orange-500 hover:text-orange-600 font-semibold underline underline-offset-2">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+919871626458" className="text-gray-600 hover:text-orange-500 transition-colors">+91 9871626458</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:cpciclasses709@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors">cpciclasses709@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday – Saturday: 11:00 AM – 9:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative" style={{ height: '500px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.4793657975976!2d77.09863!3d28.7195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01f6c21e9aeb%3A0x4e9c3acf04b7b3a0!2sAvantika%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="CPCI Classes Location"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/TCSekArxysGqg93e8"
                target="_blank" rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-orange-600 font-semibold text-sm px-4 py-2 rounded-full shadow-lg hover:bg-orange-50 transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" /> View on Maps
              </a>
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
          <a
            href="https://maps.app.goo.gl/TCSekArxysGqg93e8"
            target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">CPCI Classes</h3>
              <p className="text-gray-600 text-sm mb-4">Excellence in coaching since 2006.</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919871626458"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="https://instagram.com/cpci_classes"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-9 h-9 rounded-full text-white hover:opacity-90 transition-opacity shadow-sm"
                  style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://youtube.com/@jitendra8888?si=Sajj_1FZj5z366WI"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-sm"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#programs" className="hover:text-orange-500">Class IX–X</a></li>
                <li><a href="#programs" className="hover:text-orange-500">Class XI–XII Science</a></li>
                <li><a href="#programs" className="hover:text-orange-500">Class XI–XII Commerce</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#contact" className="hover:text-orange-500">FAQs</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Parent Portal</a></li>
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
