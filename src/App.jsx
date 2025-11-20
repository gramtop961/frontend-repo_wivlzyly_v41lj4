import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav (simple brand) */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="ROG" className="h-7 w-7" />
            <span className="font-semibold tracking-tight">ROG Ally</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#specs" className="hover:text-white">Specs</a>
            <a href="#buy" className="hover:text-white">Buy</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <CTA />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-blue-300/60">
          © {new Date().getFullYear()} ROG. All rights reserved. Windows is a trademark of Microsoft Corporation.
        </div>
      </footer>
    </div>
  )
}

export default App
