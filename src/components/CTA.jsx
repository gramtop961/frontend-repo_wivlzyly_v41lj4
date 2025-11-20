import React from 'react'

function CTA() {
  return (
    <section id="buy" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Ready to play anywhere?</h3>
          <p className="mt-3 text-blue-100/90">Get the ASUS ROG Ally and bring your entire library on the go. Ships with Windows 11 and 3 months of Game Pass Ultimate.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition" href="#">Add to cart</a>
            <a className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition" href="#specs">View full specs</a>
          </div>
          <div className="mt-6 text-sm text-blue-100/80">Starting at $599</div>
        </div>
      </div>
    </section>
  )
}

export default CTA
