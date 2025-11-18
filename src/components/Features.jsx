import { Sparkles, Shield, Gauge, ShoppingBag } from 'lucide-react'

function FeatureItem({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 ring-1 ring-white/15">
        <Icon className="text-white/90" size={22} />
      </div>
      <h3 className="text-white font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-slate-300 leading-relaxed text-sm">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="features" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Everything you need to sell digital goods</h2>
          <p className="mt-2 text-slate-300">From secure delivery to analytics, built for creators and indie hackers.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureItem icon={ShoppingBag} title="Instant checkout" desc="Beautiful, optimized checkout that converts. Apple Pay, Google Pay, and cards supported." />
          <FeatureItem icon={Shield} title="Secure delivery" desc="Auto-licensed downloads, gated updates, and link protection built-in." />
          <FeatureItem icon={Gauge} title="Real-time analytics" desc="Track revenue, top products, and traffic sources in real-time." />
          <FeatureItem icon={Sparkles} title="No-code storefront" desc="Customize your store without touching code. Themes, sections, and more." />
        </div>
      </div>
    </section>
  )
}

export default Features
