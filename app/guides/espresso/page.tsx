import { Coffee, ArrowLeft, Clock, Droplets, Thermometer } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { step: 1, title: 'Preheat', description: 'Run water through your machine and portafilter to bring everything to temperature.' },
  { step: 2, title: 'Dose', description: 'Weigh 18g of coffee into your portafilter basket. Consistency is key for espresso.' },
  { step: 3, title: 'Grind Fine', description: 'Grind immediately before pulling. Texture should feel like fine sand or table salt.' },
  { step: 4, title: 'Distribute and Tamp', description: 'Level grounds evenly and tamp with 30 lbs of pressure. Keep the tamp level.' },
  { step: 5, title: 'Extract', description: 'Lock portafilter and pull. Target 36g out in 25 to 30 seconds for a 1:2 ratio.' },
  { step: 6, title: 'Evaluate', description: 'Look for honey like flow and rich crema. Taste and adjust grind for next shot.' },
]

export default function EspressoGuide() {
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
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream">Espresso</h1>
          </div>
          <p className="text-cream/80 text-lg max-w-2xl">
            Concentrated intensity in a small cup. Espresso is the foundation for lattes, cappuccinos, and pure shots that showcase a coffee's most vibrant flavors in their most potent form.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-brown/10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">25-30 sec</div>
              <div className="text-stone text-sm">Extraction Time</div>
            </div>
            <div className="text-center">
              <Droplets className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">1:2</div>
              <div className="text-stone text-sm">Coffee to Yield Ratio</div>
            </div>
            <div className="text-center">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">200°F</div>
              <div className="text-stone text-sm">Brew Temperature</div>
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
              Change one variable at a time when dialing in your shot
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              A scale with timer is essential for consistent espresso
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Channeling (uneven extraction) shows as light spots in the crema
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Our Huila Microlot creates exceptional chocolate forward espresso
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
