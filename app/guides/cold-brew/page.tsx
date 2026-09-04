import { Coffee, ArrowLeft, Clock, Droplets, Thermometer } from 'lucide-react'
import Link from 'next/link'

const steps = [
  { step: 1, title: 'Coarse Grind', description: 'Grind 100g of coffee very coarsely, like raw sugar or breadcrumbs. Finer grinds lead to over extraction.' },
  { step: 2, title: 'Combine', description: 'Add grounds to a large jar or pitcher. Pour 700g of room temperature or cold filtered water.' },
  { step: 3, title: 'Stir', description: 'Gently stir to ensure all grounds are saturated. Cover and let rest at room temperature.' },
  { step: 4, title: 'Steep', description: 'Wait 12 to 18 hours. Longer steeping creates a stronger concentrate. We prefer 16 hours.' },
  { step: 5, title: 'Filter', description: 'Strain through a fine mesh sieve, then filter again through a paper filter for clarity.' },
  { step: 6, title: 'Dilute and Serve', description: 'Mix 1:1 with water or milk over ice. Concentrate keeps refrigerated for up to 2 weeks.' },
]

export default function ColdBrewGuide() {
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
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream">Cold Brew</h1>
          </div>
          <p className="text-cream/80 text-lg max-w-2xl">
            Smooth, mellow, and refreshing. Cold brew is slow steeped for 12 to 18 hours, producing a naturally sweet concentrate with lower acidity. Perfect for hot Portland summers.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border-b border-brown/10">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">12-18 hrs</div>
              <div className="text-stone text-sm">Steep Time</div>
            </div>
            <div className="text-center">
              <Droplets className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">1:7</div>
              <div className="text-stone text-sm">Coffee to Water Ratio</div>
            </div>
            <div className="text-center">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-sienna" />
              <div className="font-serif text-2xl font-bold text-brown">Room Temp</div>
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
              Use filtered water for the cleanest, sweetest results
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Refrigerator steeping takes longer but produces a smoother cup
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Ethiopian naturals like our Yirgacheffe make fruity, refreshing cold brew
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sienna font-bold">•</span>
              Make simple syrup to sweeten since sugar dissolves poorly in cold liquid
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
