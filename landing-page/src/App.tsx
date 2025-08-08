import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Star, 
  Users, 
  ShoppingCart, 
  Phone, 
  Mail, 
  Download,
  CheckCircle,
  Zap,
  Shield,
  Smartphone,
  Heart,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useEffect } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-campusRed to-pink-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CampusCart</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'Features', 'How It Works', 'Testimonials', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-700 hover:text-campusRed px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm" className="bg-campusRed hover:bg-campusRed/90">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'Features', 'How It Works', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-campusRed block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full bg-campusRed hover:bg-campusRed/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={fadeInUp}
                transition={{ duration: 0.6 }}
              >
                Essential <span className="text-campusRed">Foodstuffs</span>
                <br />for <span className="text-campusBlue">UNN Students</span>
              </motion.h1>
              
              <motion.p 
                className="mt-6 text-lg text-gray-600 max-w-2xl"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get staple foodstuffs like rice, beans, garri, oil, spices and more delivered fast to your hostel at the University of Nigeria, Nsukka.
              </motion.p>

              <motion.div 
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button size="lg" className="bg-campusRed hover:bg-campusRed/90">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Download App
                </Button>
                <Button size="lg" variant="outline">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Order Now
                </Button>
              </motion.div>

              <motion.div 
                className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
                variants={stagger}
              >
                {[
                  { number: '5K+', label: 'Happy Students' },
                  { number: '50+', label: 'Food Categories' },
                  { number: '30min', label: 'Avg Delivery' }
                ].map((stat, index) => (
                  <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.6, delay: index * 0.1 }}>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* iPhone frame */}
              <motion.div 
                className="relative mx-auto w-[320px] h-[640px]"
                whileHover={{ rotateX: 4, rotateY: -4 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              >
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-zinc-200 to-zinc-50 p-[6px] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/60">
                  <div className="relative w-full h-full rounded-[2.6rem] overflow-hidden bg-black">
                    {/* Dynamic Island / notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-9 bg-black rounded-full ring-1 ring-white/10 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.25)]" />
                    {/* Side buttons */}
                    <div className="absolute left-[-2px] top-24 w-1 h-14 bg-zinc-300 rounded-r-full" />
                    <div className="absolute left-[-2px] top-44 w-1 h-10 bg-zinc-300 rounded-r-full" />
                    <div className="absolute right-[-2px] top-36 w-1 h-20 bg-zinc-300 rounded-l-full" />

                    {/* Screen content */}
                    <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(248,55,88,0.25),transparent_60%),radial-gradient(800px_400px_at_50%_120%,rgba(67,146,249,0.25),transparent_60%)]" />
                    <div className="relative z-10 p-4 space-y-4">
                      <div className="flex items-center justify-between text-white/90 pt-6">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-xs">UNN Campus</span>
                        </div>
                        <div className="text-xs">12:45</div>
                      </div>

                      {/* Search */}
                      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-2">
                        <input
                          readOnly
                          placeholder="Search foodstuffs..."
                          className="w-full bg-transparent text-white/90 placeholder-white/70 text-xs outline-none"
                        />
                      </div>

                      {/* Category pills */}
                      <div className="flex space-x-2 overflow-x-auto no-scrollbar">
                        {['Rice', 'Beans', 'Garri', 'Palm Oil', 'Spices', 'Veggies'].map((c, i) => (
                          <div
                            key={c}
                            className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[10px] ${i === 0 ? 'bg-campusRed text-white' : 'bg-white/10 text-white/80 border border-white/10'}`}
                          >
                            {c}
                          </div>
                        ))}
                      </div>

                      {/* Auto-scrolling product list */}
                      <div className="relative h-72 overflow-hidden rounded-xl">
                        <motion.div
                          className="absolute inset-0"
                          animate={{ y: [0, -220, 0] }}
                          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                        >
                          <div className="space-y-3">
                            {[
                              { emoji: '�', name: 'Local Rice (1kg)', price: '₦1,600' },
                              { emoji: '🫘', name: 'Brown Beans (1kg)', price: '₦2,800' },
                              { emoji: '🥣', name: 'Garri (2kg)', price: '₦2,200' },
                              { emoji: '🫙', name: 'Palm Oil (1L)', price: '₦3,400' },
                              { emoji: '🧂', name: 'Spices Combo', price: '₦1,200' },
                              { emoji: '🧅', name: 'Veggies Mix', price: '₦1,000' },
                            ].concat([
                              { emoji: '�', name: 'Local Rice (1kg)', price: '₦1,600' },
                              { emoji: '🫘', name: 'Brown Beans (1kg)', price: '₦2,800' },
                              { emoji: '🥣', name: 'Garri (2kg)', price: '₦2,200' },
                            ]).map((item, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-white"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="text-2xl">{item.emoji}</div>
                                <div className="flex-1">
                                  <div className="text-sm font-medium">{item.name}</div>
                                  <div className="text-xs text-white/80">Fresh • Quality assured</div>
                                </div>
                                <div className="text-xs font-semibold">{item.price}</div>
                                <Button size="sm" className="ml-2 h-7 px-3 bg-campusRed hover:bg-campusRed/90">
                                  Add
                                </Button>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                        {/* gradient masks */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black to-transparent" />
                      </div>

                      {/* Bottom action */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="text-white/80 text-xs flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Avg 30 min</span>
                        </div>
                        <Button className="h-9 bg-white text-black hover:bg-white/90">
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Order Confirmed</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-campusBlue" />
                  <span className="text-sm font-medium">30 min delivery</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CampusCart?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make campus dining convenient, fast, and delicious
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description: 'Average delivery time of just 15 minutes. We know you\'re busy with studies!'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Campus Exclusive',
                description: 'Only campus restaurants and dining halls. Support your local campus economy.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Student Discounts',
                description: 'Exclusive student pricing and daily deals. Save money while eating great food.'
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Easy Ordering',
                description: 'Simple, intuitive app design. Order in just a few taps from anywhere on campus.'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure Payments',
                description: 'Multiple payment options including student ID cards and digital wallets.'
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: 'Quality Assured',
                description: 'All restaurants are verified and rated by fellow students. Quality you can trust.'
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-campusRed to-campusBlue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting your favorite food is as easy as 1, 2, 3!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Browse & Choose',
                description: 'Explore menus from all campus restaurants and select your favorite dishes.'
              },
              {
                step: '2',
                title: 'Order & Pay',
                description: 'Place your order and pay securely through the app with multiple payment options.'
              },
              {
                step: '3',
                title: 'Track & Enjoy',
                description: 'Track your order in real-time and enjoy delicious food delivered to your location.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-campusRed to-campusBlue rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-300 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied students who love CampusCart
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                content: "CampusCart saved my life during finals week! Quick delivery right to the library. Couldn't ask for more!",
                author: "Sarah Johnson",
                role: "Computer Science, Junior",
                avatar: "👩‍🎓"
              },
              {
                content: "Love the student discounts! I can actually afford good food now. The app is super easy to use too.",
                author: "Mike Chen",
                role: "Business, Sophomore",
                avatar: "👨‍🎓"
              },
              {
                content: "As an international student, CampusCart helped me discover so many great local restaurants on campus!",
                author: "Emma Rodriguez",
                role: "Engineering, Senior",
                avatar: "👩‍🎓"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.6, delay: index * 0.3 }}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6">{testimonial.content}</p>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-campusRed to-campusBlue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Skip the Line?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already enjoying convenient campus food delivery
            </p>
            <Button size="lg" className="bg-white text-campusRed hover:bg-gray-100">
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? We're here to help make your campus dining experience better.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-5 h-5" />, text: "1-800-CAMPUS" },
                  { icon: <Mail className="w-5 h-5" />, text: "support@campuscart.com" },
                  { icon: <MapPin className="w-5 h-5" />, text: "University Campus" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-campusRed/10 rounded-lg flex items-center justify-center text-campusRed">
                      {contact.icon}
                    </div>
                    <span className="text-gray-700">{contact.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    We'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-campusRed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-campusRed"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-campusRed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-campusRed"
                    />
                  </div>
                  <Button className="w-full bg-campusRed hover:bg-campusRed/90">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-campusRed to-pink-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CampusCart</span>
              </div>
              <p className="text-gray-400 mb-4">
                Making campus dining convenient, one delivery at a time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {['Home', 'Features', 'How It Works', 'Testimonials'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Download App</h3>
              <div className="space-y-3">
                <a href="#" className="block">
                  <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-3 flex items-center space-x-3">
                    <Download className="w-6 h-6" />
                    <div>
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="block">
                  <div className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg p-3 flex items-center space-x-3">
                    <Download className="w-6 h-6" />
                    <div>
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CampusCart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
