import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-x-32 top-0 h-72 bg-gradient-to-b from-cyan-400/20 via-indigo-500/10 to-transparent blur-2xl" />
        <div className="absolute -inset-x-32 bottom-0 h-72 bg-gradient-to-t from-fuchsia-500/20 via-indigo-500/10 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
              Interactive 3D • Futuristic • Minimal
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Digital products that feel from the future
            </h1>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed">
              Launch, sell, and showcase your software, templates, and assets in a store built for modern creators. Minimal UI, maximum impact.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:opacity-95 transition">Explore products</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5 transition">See features</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
