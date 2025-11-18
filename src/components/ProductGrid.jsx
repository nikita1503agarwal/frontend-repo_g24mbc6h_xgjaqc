function ProductCard({ title, price, tag, image }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-sm hover:bg-white/10 transition">
      <div className="aspect-[16/10] w-full bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center">
        <div className="rounded-xl bg-slate-900/70 border border-white/10 px-3 py-1 text-xs text-slate-300">{tag}</div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="text-white font-semibold tracking-tight">{title}</h4>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold">{price}</div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-slate-900 font-semibold hover:opacity-95 transition">Buy</button>
          <button className="flex-1 rounded-xl border border-white/10 px-4 py-2 text-slate-200 hover:bg-white/5 transition">Preview</button>
        </div>
      </div>
    </div>
  )
}

function ProductGrid() {
  const products = [
    { title: 'UI Kit Nova', price: '$39', tag: 'Figma Kit' },
    { title: 'SaaS Starter', price: '$79', tag: 'Next.js Template' },
    { title: 'Motion Pack', price: '$29', tag: 'Lottie Animations' },
    { title: 'Code Snippets', price: '$19', tag: 'Dev Utilities' },
  ]

  return (
    <section id="products" className="relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured products</h2>
            <p className="mt-2 text-slate-300">Curated best-sellers to kickstart your next launch.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-xl border border-white/10 px-4 py-2 text-slate-200 hover:bg-white/5 transition">Browse all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
