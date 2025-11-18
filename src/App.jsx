import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background grid + glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
        }} />
        <div className="absolute -inset-x-40 -top-20 h-72 bg-gradient-to-b from-cyan-400/20 via-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <ProductGrid />
        <Footer />
      </div>
    </div>
  )
}

export default App
