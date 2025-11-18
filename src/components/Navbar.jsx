import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
              <span className="text-lg font-black bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">DP</span>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight">DigitalPulse</div>
            <div className="text-xs text-slate-300/70 -mt-0.5">Store</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5 transition">Sign in</button>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-slate-900 font-semibold shadow-[0_8px_30px_rgba(99,102,241,0.35)] hover:opacity-95 transition">Get started</button>
          <button className="md:hidden text-slate-200 p-2 rounded-lg hover:bg-white/5"><Menu size={22} /></button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
