import { Coffee, ArrowLeft, Clock, Droplets, Thermometer } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { step: 1, title: 'Heat Water', description: 'Bring water to 200°F (93°C). If you do not have a thermometer, let boiling water rest for 30 seconds.' },
  { step: 2, title: 'Grind Coffee', description: 'Grind 22g of coffee to a medium fine consistency, similar to sea salt.' },
  { step: 3, title: 'Rinse Filter', description: 'Place filter in dripper and rinse with hot water to remove paper taste and preheat the vessel.' },
  { step: 4, title: 'Bloom', description: 'Add grounds and pour 50g of water in a circular motion. Wait 45 seconds as CO2 escapes.' },
  { step: 5, title: 'Pour', description: 'Pour remaining water in slow, steady circles from center outward. Total pour time: 3 to 4 minutes.' },
  { step: 6, title: 'Enjoy', description: 'Let it cool slightly. Notice the clarity and bright, nuanced flavors unique to pour over.' },
]

export default function PourOverGuide() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-gradient-to-br from-brown via-charcoal to-brown py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/#brewing" className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Brewing Guides
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-sienna/30 flex items-center justify-center">
              <Coffee className="w-8 h-8 text-cream" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream">Pour Over</h1>
          </div>
          <p className="text-cream/80 text-lg max-w-2xl">
            The pour over method delivers clean, nuanced flavors that highlight the unique characteristics of single origin coffees. Perfect for tasting the subtleties of our Ethiopian and Panamanian offerings.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-brown/10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">3-4 min</div>
              <div className="text-stone text-sm">Brew Time</div>
            </div>
            <div className="text-center">
              <Droplets className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">1:15</div>
              <div className="text-stone text-sm">Coffee to Water Ratio</div>
            </div>
            <div className="text-center">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">200°F</div>
              <div className="text-stone text-sm">Water Temperature</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl font-bold text-brown mb-8">Step by Step</h2>
        <div className="space-y-6">
          {steps.map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-sienna flex items-center justify-center flex-shrink-0">
                <span className="text-cream font-serif text-xl font-bold">{item.step}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-brown mb-1">{item.title}</h3>
                <p className="text-stone leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-brown/10">
          <h3 className="font-serif text-2xl font-bold text-brown mb-4">Pro Tips</h3>
          <ul className="space-y-3 text-stone">
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Use a gooseneck kettle for precise pouring control
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Aim for a flat coffee bed after brewing indicates even extraction
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              If coffee tastes sour, try a finer grind; if bitter, go coarser
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Fresh beans within 2 weeks of roasting yield the best results
            </li>
          </ul>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/#brewing" className="text-sienna hover:text-sienna/80 font-medium underline underline-offset-4">
            Explore More Brewing Methods
          </Link>
        </div>
      </div>
    </main>
  )
}
