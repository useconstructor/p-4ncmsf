'use client'

import { useState } from 'react'
import {
  Coffee,
  Menu,
  X,
  Handshake,
  Hourglass,
  CupSoda,
  Leaf,
  MapPin,
  Clock,
  Mail,
  Phone,
  Instagram,
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  Check,
  ShoppingBag
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const navLinks = [
  { name: 'Visit', href: '#visit' },
  { name: 'Shop', href: '#shop' },
  { name: 'Subscribe', href: '#subscribe' },
  { name: 'Brewing Guides', href: '#brewing' },
  { name: 'Our Story', href: '#story' },
]

const stats = [
  { icon: Handshake, value: '847', label: 'Coffee Farmers Supported' },
  { icon: Hourglass, value: '18', label: 'Years of Direct Trade' },
  { icon: CupSoda, value: '2.1M', label: 'Cups Served' },
  { icon: Leaf, value: '100%', label: 'Compostable Packaging' },
]

const coffees = [
  {
    name: 'Yirgacheffe Natural Process',
    origin: 'Ethiopia',
    notes: 'Blueberry, Jasmine',
    price: '$16'
  },
  {
    name: 'Huila Microlot',
    origin: 'Colombia',
    notes: 'Chocolate, Hazelnut',
    price: '$18'
  },
  {
    name: 'Geisha Varietal',
    origin: 'Panama',
    notes: 'Floral, Citrus',
    price: '$22'
  },
]

const brewingGuides = [
  {
    name: 'Pour Over',
    description: 'Clean, nuanced flavors that highlight origin characteristics. Perfect for single-origin exploration.',
    href: '/guides/pour-over'
  },
  {
    name: 'French Press',
    description: 'Full bodied and rich. A classic method that delivers bold, robust flavors.',
    href: '/guides/french-press'
  },
  {
    name: 'Espresso',
    description: 'Concentrated intensity. The foundation for lattes, cappuccinos, and pure shots.',
    href: '/guides/espresso'
  },
  {
    name: 'Cold Brew',
    description: 'Smooth and mellow. Slow steeped for 18 hours for ultimate refreshment.',
    href: '/guides/cold-brew'
  },
]

const subscriptions = [
  {
    name: 'Explorer',
    price: '$24',
    period: 'month',
    features: [
      'One rotating single origin coffee shipped monthly',
      '10% shop discount',
      'Exclusive tasting notes',
      'Access to monthly virtual cuppings'
    ],
    popular: false
  },
  {
    name: 'Connoisseur',
    price: '$48',
    period: 'month',
    features: [
      'Two coffees monthly',
      '15% discount',
      'Priority limited releases',
      'Quarterly in person tastings at the café',
      'Curated brewing guide'
    ],
    popular: true
  },
  {
    name: 'Patron',
    price: '$99',
    period: 'month',
    features: [
      'Three coffees monthly',
      '20% discount',
      'Early access to micro lots',
      'VIP café seating reserved',
      'Annual roastery tour',
      'Branded Ember & Oak gear'
    ],
    popular: false
  },
]

const testimonials = [
  {
    quote: "Maya's coffees changed how I taste coffee. Once you try single origin, there's no going back.",
    name: 'David Park',
    role: 'Coffee Writer',
    company: 'Brew Quarterly',
    initials: 'DP'
  },
  {
    quote: "The care they put into every detail, from sourcing to packaging, is genuine.",
    name: 'Sarah Mendez',
    role: 'Home Barista',
    company: '',
    initials: 'SM'
  },
  {
    quote: "I've visited 30+ specialty cafés, and Ember & Oak has the warmest atmosphere I've found.",
    name: 'James Liu',
    role: 'Travel Blogger',
    company: '',
    initials: 'JL'
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formState),
        }
      )

      if (response.ok) {
        setFormStatus('success')
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <main className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-serif text-2xl font-bold text-brown">
              Ember & Oak
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-brown/80 hover:text-sienna transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="bg-sienna hover:bg-sienna/90 text-white">
                <a href="#visit">Visit Us</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-brown"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-cream border-b border-brown/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brown/80 hover:text-sienna transition-all py-2"
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full bg-sienna hover:bg-sienna/90 text-white mt-4">
              <a href="#visit" onClick={() => setMobileMenuOpen(false)}>Visit Us</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-brown via-charcoal to-brown opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-sienna)_0%,_transparent_50%)] opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 leading-tight">
            Slow Roasted.<br />
            Carefully Sourced.<br />
            Always Fresh.
          </h1>
          <p className="text-lg sm:text-xl text-cream/80 mb-10 max-w-2xl mx-auto">
            Discover single origin coffees from family farms across Ethiopia, Colombia, and Guatemala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sienna hover:bg-sienna/90 text-white text-lg px-8">
              <a href="#visit">Visit Us</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10 text-lg px-8">
              <a href="#shop">Shop Online</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#stats" className="text-cream/60 hover:text-cream transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section id="stats" className="bg-cream py-12 border-y border-brown/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-sienna" />
                <div className="font-serif text-3xl sm:text-4xl font-bold text-brown mb-1">
                  {stat.value}
                </div>
                <div className="text-stone text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Founder Avatar */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg bg-gradient-to-br from-sienna/30 via-brown/20 to-sienna/10 flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-sienna to-brown flex items-center justify-center">
                    <span className="text-cream font-serif text-6xl sm:text-7xl font-bold">MC</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cream border border-brown/10 rounded-lg flex items-center justify-center">
                  <Coffee className="w-12 h-12 text-sienna" />
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <span className="text-sienna font-medium tracking-wider uppercase text-sm">Our Story</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2 mb-6">
                From Farm to Cup, With Care
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  Founded in 2006, Ember & Oak began as Maya Chen's mission to bridge the gap between coffee farmers and curious drinkers. Every bean tells a story of sunlit hillsides, generational farming wisdom, and the hands that carefully pick each cherry at peak ripeness.
                </p>
                <p>
                  What started as a small roasting operation in a converted garage has grown into Portland's most beloved specialty coffee destination. Our direct trade relationships with farmers in Ethiopia, Colombia, Guatemala, and Panama ensure fair wages and sustainable practices.
                </p>
                <p>
                  Today, Maya leads a team of passionate roasters who treat each batch as an opportunity to honor the farmers' work. We roast in small batches, never more than 48 hours before shipping, so every cup you brew captures the full spectrum of flavors.
                </p>
              </div>
              <p className="text-pull-quote mt-8">
                "Coffee is a conversation between farmer and drinker. We're just the translators."
              </p>
              <p className="text-brown font-medium mt-2">— Maya Chen, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coffees */}
      <section id="shop" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sienna font-medium tracking-wider uppercase text-sm">Featured Selection</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2">
              Our Current Favorites
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coffees.map((coffee, index) => (
              <Card
                key={coffee.name}
                className="group bg-white border-brown/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Coffee Bag Visual */}
                <div className={`h-48 flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-br from-amber-100 to-amber-200' :
                  index === 1 ? 'bg-gradient-to-br from-orange-100 to-orange-200' :
                  'bg-gradient-to-br from-rose-100 to-rose-200'
                }`}>
                  <div className="w-24 h-32 bg-brown/90 rounded-sm flex flex-col items-center justify-center p-3 shadow-lg transform group-hover:scale-105 transition-transform">
                    <Coffee className="w-8 h-8 text-cream mb-2" />
                    <div className="text-cream text-xs text-center font-medium leading-tight">
                      {coffee.origin}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="text-sm text-sienna font-medium">{coffee.origin}</div>
                  <CardTitle className="text-brown text-xl">{coffee.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone mb-4">{coffee.notes}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-brown">{coffee.price}</span>
                    <Button asChild size="sm" className="bg-sienna hover:bg-sienna/90">
                      <a href="#shop">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section id="subscribe" className="py-20 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sienna font-medium tracking-wider uppercase text-sm">Coffee Subscriptions</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mt-2">
              Fresh Coffee, Delivered Monthly
            </h2>
            <p className="text-cream/70 mt-4 max-w-2xl mx-auto">
              Join our community of coffee enthusiasts. Cancel anytime. Free shipping on orders $40+.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptions.map((sub) => (
              <Card
                key={sub.name}
                className={`relative bg-white/5 border-white/10 ${sub.popular ? 'ring-2 ring-sienna' : ''}`}
              >
                {sub.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sienna text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-cream text-2xl">{sub.name}</CardTitle>
                  <div className="mt-4">
                    <span className="font-serif text-5xl font-bold text-cream">{sub.price}</span>
                    <span className="text-cream/60">/{sub.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {sub.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-cream/80">
                        <Check className="w-5 h-5 text-sienna flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${sub.popular ? 'bg-sienna hover:bg-sienna/90' : 'bg-white/10 hover:bg-white/20 text-cream'}`}
                  >
                    <a href="#subscribe">Subscribe Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brewing Guides */}
      <section id="brewing" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sienna font-medium tracking-wider uppercase text-sm">Brewing Guides</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2">
              Master Your Brew
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {brewingGuides.map((guide, index) => (
              <div key={guide.name} className="text-center group">
                <div className={`w-28 h-28 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                  index === 0 ? 'bg-gradient-to-br from-sienna/20 to-sienna/10' :
                  index === 1 ? 'bg-gradient-to-br from-brown/20 to-brown/10' :
                  index === 2 ? 'bg-gradient-to-br from-stone/20 to-stone/10' :
                  'bg-gradient-to-br from-sienna/15 to-brown/10'
                }`}>
                  <Coffee className="w-12 h-12 text-sienna" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brown mb-2">{guide.name}</h3>
                <p className="text-stone text-sm mb-4 leading-relaxed">{guide.description}</p>
                <a
                  href={guide.href}
                  className="text-sienna hover:text-sienna/80 text-sm font-medium underline underline-offset-4 transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Atmosphere */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sienna font-medium tracking-wider uppercase text-sm">Our Space</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2">
              The Ember & Oak Experience
            </h2>
          </div>

          {/* Masonry-style CSS Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 h-64 md:h-auto rounded-lg bg-gradient-to-br from-brown via-charcoal to-brown flex items-end p-6">
              <p className="text-cream font-serif text-xl">Morning light streaming through vintage windows</p>
            </div>
            <div className="h-32 rounded-lg bg-gradient-to-r from-sienna to-sienna/70 flex items-center justify-center">
              <Coffee className="w-12 h-12 text-cream/80" />
            </div>
            <div className="h-32 rounded-lg bg-gradient-to-br from-stone/30 to-brown/20 flex items-center justify-center p-4">
              <p className="text-brown font-serif text-center">Weathered oak countertops</p>
            </div>
            <div className="h-32 rounded-lg bg-gradient-to-tl from-amber-200 to-amber-100 flex items-center justify-center p-4">
              <p className="text-brown font-serif text-center">Warm afternoon glow</p>
            </div>
            <div className="h-32 rounded-lg bg-gradient-to-r from-brown to-charcoal flex items-center justify-center">
              <Coffee className="w-10 h-10 text-cream/60" />
            </div>
            <div className="col-span-2 h-32 rounded-lg bg-gradient-to-r from-sienna/20 via-cream to-sienna/20 flex items-center justify-center p-4">
              <p className="text-brown font-serif text-lg text-center">Vintage roasting equipment and the aroma of fresh beans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sienna font-medium tracking-wider uppercase text-sm">What People Say</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2">
              From Our Community
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sienna to-brown flex items-center justify-center mb-6">
                  <span className="text-cream font-serif text-2xl font-bold">
                    {testimonials[testimonialIndex].initials}
                  </span>
                </div>
                <blockquote className="font-serif text-xl sm:text-2xl text-brown italic mb-6 max-w-2xl">
                  "{testimonials[testimonialIndex].quote}"
                </blockquote>
                <div className="text-brown font-medium">{testimonials[testimonialIndex].name}</div>
                <div className="text-stone text-sm">
                  {testimonials[testimonialIndex].role}
                  {testimonials[testimonialIndex].company && `, ${testimonials[testimonialIndex].company}`}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white border border-brown/10 hover:bg-sienna hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === testimonialIndex ? 'bg-sienna' : 'bg-brown/20'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white border border-brown/10 hover:bg-sienna hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brown via-charcoal to-brown relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-sienna)_0%,_transparent_70%)] opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream mb-6">
            Ready to Experience Ember & Oak?
          </h2>
          <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
            Whether you visit our Portland café or brew our beans at home, every cup tells a story of careful sourcing, expert roasting, and genuine passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-sienna hover:bg-sienna/90 text-white text-lg px-8">
              <a href="#visit">Visit Our Café</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10 text-lg px-8">
              <a href="#shop">Shop Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact / Visit Section */}
      <section id="visit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <span className="text-sienna font-medium tracking-wider uppercase text-sm">Get in Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2 mb-6">
                Contact Us
              </h2>

              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <Check className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-green-800 font-medium">Message sent successfully!</p>
                  <p className="text-green-700 text-sm mt-2">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-cream border-brown/20 focus:border-sienna"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brown mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-cream border-brown/20 focus:border-sienna"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brown mb-1">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-cream border-brown/20 focus:border-sienna resize-none"
                      placeholder="Tell us about your inquiry, wholesale interest, or just say hello..."
                    />
                  </div>
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full bg-sienna hover:bg-sienna/90 text-white"
                  >
                    {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Visit Info */}
            <div>
              <span className="text-sienna font-medium tracking-wider uppercase text-sm">Visit Us</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown mt-2 mb-6">
                Our Portland Café
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sienna/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sienna" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brown mb-1">Location</h3>
                    <p className="text-stone">
                      Portland, Oregon<br />
                      Pearl District
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sienna/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-sienna" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brown mb-1">Hours</h3>
                    <p className="text-stone">
                      Open daily<br />
                      Contact us for current hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sienna/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sienna" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brown mb-1">Email</h3>
                    <a href="mailto:hello@emberandoak.com" className="text-sienna hover:underline">
                      hello@emberandoak.com
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium text-brown mb-3">Accessibility</h3>
                  <p className="text-stone text-sm">
                    Our café is wheelchair accessible with step free entry, accessible restrooms, and wide aisles between seating areas. Service animals are welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-serif text-2xl font-bold text-cream mb-4">Ember & Oak</h3>
              <p className="text-cream/60 text-sm mb-4">
                Portland specialty coffee roastery. Single origin beans from family farms. Slow roasted with care.
              </p>
              <div className="flex gap-4">
                <a href="mailto:hello@emberandoak.com" className="text-cream/60 hover:text-sienna transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="text-cream/60 hover:text-sienna transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-cream font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#shop" className="text-cream/60 hover:text-sienna transition-colors text-sm">Shop Coffee</a></li>
                <li><a href="#subscribe" className="text-cream/60 hover:text-sienna transition-colors text-sm">Subscriptions</a></li>
                <li><a href="#brewing" className="text-cream/60 hover:text-sienna transition-colors text-sm">Brewing Guides</a></li>
                <li><a href="#story" className="text-cream/60 hover:text-sienna transition-colors text-sm">Our Story</a></li>
              </ul>
            </div>

            {/* Visit */}
            <div>
              <h4 className="text-cream font-medium mb-4">Visit</h4>
              <ul className="space-y-2">
                <li><a href="#visit" className="text-cream/60 hover:text-sienna transition-colors text-sm">Portland Café</a></li>
                <li><a href="#visit" className="text-cream/60 hover:text-sienna transition-colors text-sm">Contact Us</a></li>
                <li><a href="#visit" className="text-cream/60 hover:text-sienna transition-colors text-sm">Wholesale</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-cream font-medium mb-4">Stay Connected</h4>
              <p className="text-cream/60 text-sm mb-4">
                Tasting notes, new releases, and café updates.
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-cream placeholder:text-cream/40 flex-1"
                />
                <Button type="submit" className="bg-sienna hover:bg-sienna/90 text-white">
                  Join
                </Button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © 2024 Ember & Oak. All rights reserved.
            </p>
            <p className="text-cream/40 text-sm">
              Specialty Coffee Roastery • Portland, Oregon
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
