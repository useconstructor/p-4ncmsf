import { Coffee, ArrowLeft, Clock, Droplets, Thermometer } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { step: 1, title: 'Heat Water', description: 'Bring water to 200°F (93°C). French press is forgiving, but proper temperature matters for extraction.' },
  { step: 2, title: 'Coarse Grind', description: 'Grind 30g of coffee coarsely, like raw sugar. Too fine creates muddy coffee and hard to press.' },
  { step: 3, title: 'Add Coffee', description: 'Place grounds in the preheated press. Swirl hot water in the press first to warm it.' },
  { step: 4, title: 'Pour and Stir', description: 'Add 500g of water and give it a gentle stir to ensure all grounds are saturated.' },
  { step: 5, title: 'Steep', description: 'Place the lid on without pressing. Let it steep for 4 minutes exactly.' },
  { step: 6, title: 'Press and Pour', description: 'Press the plunger down slowly and steadily. Pour immediately to prevent over extraction.' },
]

export default function FrenchPressGuide() {
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
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream">French Press</h1>
          </div>
          <p className="text-cream/80 text-lg max-w-2xl">
            Full bodied and rich, French press delivers bold, robust flavors with a satisfying mouthfeel. The metal filter allows natural oils to pass through, creating a cup with depth and character.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-brown/10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">4 min</div>
              <div className="text-stone text-sm">Steep Time</div>
            </div>
            <div className="text-center">
              <Droplets className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">1:16</div>
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
              Decant all coffee immediately after pressing to stop extraction
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Skip the last ounce in the press to avoid sediment in your cup
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Colombian coffees with chocolate notes shine in French press
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Clean your press thoroughly after each use to prevent rancid oil buildup
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
