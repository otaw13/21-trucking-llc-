import { ImageWithFallback } from './figma/ImageWithFallback';
import { Truck, Shield, Clock, MapPin, Award, Users, Package, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  const stats = [
    { number: "500+", label: "Deliveries Monthly" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Fleet Vehicles" },
    { number: "99%", label: "On-Time Rate" }
  ];

  const testimonials = [
    {
      name: "John Martinez",
      company: "ABC Manufacturing",
      text: "21 Trucking has been our reliable partner for over 5 years. Their commitment to timely delivery is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Global Supplies Inc",
      text: "Professional service, excellent communication, and competitive rates. Highly recommend for any logistics needs.",
      rating: 5
    },
    {
      name: "Mike Thompson",
      company: "Western Distribution",
      text: "The tracking system and customer support are outstanding. We always know exactly where our shipments are.",
      rating: 5
    }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/95 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1748918497032-ed71d9bcf8e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHN1bnNldCUyMGhpZ2h3YXl8ZW58MXx8fHwxNzYyMTc0OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="American Trucking Sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-5xl">21 TRUCKING LLC</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl mb-8"
          >
            Delivering Excellence Across America
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a href="#services" className="bg-[#D4AF37] hover:bg-[#C0A030] text-[#0A0A0A] px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105 shadow-lg">
              Our Services
            </a>
            <a href="#contact" className="bg-white text-[#0A0A0A] hover:bg-[#F5F5F5] px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl text-[#D4AF37] mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-[#0A0A0A]">About 21 Trucking LLC</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At 21 Trucking LLC, we pride ourselves on providing reliable, efficient, and 
                professional transportation services across the United States. With years of 
                experience in the trucking industry, we understand the importance of timely 
                deliveries and the safe handling of your cargo. Our fleet of modern trucks 
                and experienced drivers ensure that your goods reach their destination safely 
                and on schedule.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-center mb-4 text-[#0A0A0A]">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Comprehensive trucking solutions tailored to meet your unique transportation needs
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Long Haul", desc: "Cross-country transportation with reliable schedules", color: "bg-[#D4AF37]" },
              { icon: Clock, title: "On-Time Delivery", desc: "We guarantee punctual delivery of your cargo", color: "bg-[#C0C0C0]" },
              { icon: Shield, title: "Safe Transport", desc: "Your cargo is fully insured and handled with care", color: "bg-[#A8A8A8]" },
              { icon: MapPin, title: "Real-Time Tracking", desc: "Track your shipment every step of the way", color: "bg-[#D4AF37]" }
            ].map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl border-2 border-transparent hover:border-[#D4AF37]">
                  <div className="flex justify-center mb-6">
                    <div className={`${service.color} p-4 rounded-3xl`}>
                      <service.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-[#0A0A0A]">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="mb-8 text-[#0A0A0A]">Why Choose 21 Trucking?</h2>
                <ul className="space-y-5">
                  {[
                    "Experienced and certified drivers",
                    "Modern, well-maintained fleet",
                    "Competitive pricing and transparent quotes",
                    "24/7 customer support",
                    "Nationwide coverage",
                    "Advanced GPS tracking systems",
                    "Flexible scheduling options"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-2xl bg-[#D4AF37] flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-5 h-5 text-[#0A0A0A]" />
                      </div>
                      <div>
                        <span className="text-gray-800 text-lg">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591492964751-4e24cc0f4df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pJTIwdHJ1Y2slMjByb2FkfGVufDF8fHx8MTc2MjE3NDU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Semi Truck on Road"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fleet Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-center mb-4 text-[#0A0A0A]">Our Fleet</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              State-of-the-art vehicles equipped with the latest technology for safe and efficient transport
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Package, title: "Dry Van Trailers", desc: "53-foot standard trailers for general freight" },
              { icon: Truck, title: "Refrigerated Units", desc: "Temperature-controlled transport for perishables" },
              { icon: Award, title: "Flatbed Trucks", desc: "Versatile hauling for oversized cargo" }
            ].map((fleet, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card className="p-8 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#F5F5F5]">
                  <div className="bg-[#D4AF37] w-16 h-16 rounded-3xl flex items-center justify-center mb-6">
                    <fleet.icon className="w-8 h-8 text-[#0A0A0A]" />
                  </div>
                  <h3 className="mb-3 text-[#0A0A0A]">{fleet.title}</h3>
                  <p className="text-gray-600">{fleet.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-center mb-4 text-[#0A0A0A]">What Our Clients Say</h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <Card className="p-8 rounded-3xl hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-[#0A0A0A]">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="mb-4 text-[#0A0A0A]">Nationwide Coverage</h2>
                <p className="text-gray-600 text-lg">
                  We operate across all 50 states, delivering your cargo wherever it needs to go
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-[#D4AF37] to-[#C0A030] p-12 rounded-3xl text-white text-center shadow-2xl">
                <MapPin className="w-20 h-20 mx-auto mb-6 text-[#0A0A0A]" />
                <h3 className="mb-4 text-[#0A0A0A]">Coast to Coast Service</h3>
                <p className="text-lg mb-6 text-[#0A0A0A]">From the Atlantic to the Pacific, we've got you covered</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {["West Coast", "Midwest", "South", "Northeast"].map((region, index) => (
                    <div key={index} className="bg-[#0A0A0A]/20 backdrop-blur-sm py-3 px-4 rounded-2xl text-white">
                      {region}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzYyMTMwNTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Logistics Operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="mb-6 text-[#0A0A0A]">Safety & Compliance</h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Safety is our top priority. We maintain the highest standards of compliance with 
                  all DOT regulations and industry best practices.
                </p>
                <div className="space-y-4">
                  {[
                    "DOT Certified Fleet",
                    "Regular Safety Inspections",
                    "Comprehensive Insurance Coverage",
                    "FMCSA Compliant Operations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                      <Shield className="w-6 h-6 text-[#D4AF37]" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-6">Get in Touch</h2>
              <p className="mb-10 text-xl text-gray-300">
                Ready to ship with us? Contact our team today for a free quote and 
                experience the 21 Trucking difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:5551234567" className="bg-[#D4AF37] hover:bg-[#C0A030] text-[#0A0A0A] px-10 py-5 rounded-3xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us: (555) 123-4567
                </a>
                <a href="mailto:info@21trucking.com" className="bg-white text-[#0A0A0A] hover:bg-[#F5F5F5] px-10 py-5 rounded-3xl transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
