function Footer() {
  return (
    <footer className="relative z-10 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-300 text-sm">© 2025 DigitalPulse. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-300 hover:text-white text-sm">Terms</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="text-slate-300 hover:text-white text-sm">Privacy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="text-slate-300 hover:text-white text-sm">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
