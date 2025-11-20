import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/60 to-slate-900" />
        <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Available now worldwide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            ASUS ROG Ally
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90 max-w-xl mx-auto lg:mx-0">
            A true Windows 11 gaming handheld with blazing-fast performance, a 120Hz display, and console-grade controls. Play your library anywhere.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#buy" className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold transition shadow-lg shadow-blue-500/30">Buy now</a>
            <a href="#trailer" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition border border-white/20">Watch trailer</a>
          </div>
          <div className="mt-6 text-blue-200/70 text-sm">
            From 608g • Up to 120Hz FHD • AMD Ryzen Z1 Series
          </div>
        </div>

        {/* Device preview */}
        <div className="relative mt-14 lg:mt-0">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 -z-10 blur-2xl bg-gradient-to-tr from-blue-500/30 via-fuchsia-500/20 to-cyan-400/20 rounded-[2rem]" />
            <div className="aspect-[16/9] rounded-[2rem] bg-slate-800/60 border border-white/10 shadow-2xl overflow-hidden">
              {/* Mock screen */}
              <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(244,63,94,0.25),transparent_40%)] flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-fuchsia-400 tracking-tight">120Hz</div>
                  <p className="mt-2 text-blue-100/80">Full HD Adaptive-Sync Display</p>
                </div>
              </div>
            </div>
            {/* Controls mock */}
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 h-40 w-20 rounded-2xl bg-slate-900/80 border border-white/10" />
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 h-40 w-20 rounded-2xl bg-slate-900/80 border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
