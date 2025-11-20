import React from 'react'

const features = [
  {
    title: 'Ryzen Z1 Extreme',
    desc: 'Custom AMD APU built for handheld gaming with RDNA 3 graphics for incredible performance per watt.',
    accent: 'from-orange-400 to-pink-500'
  },
  {
    title: '120Hz FHD Display',
    desc: '7-inch IPS touchscreen with 500 nits brightness and Adaptive-Sync for buttery-smooth motion.',
    accent: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'Console Controls',
    desc: 'Hall-effect joysticks, responsive triggers, and haptics tuned for competitive play.',
    accent: 'from-fuchsia-400 to-violet-500'
  },
  {
    title: 'ROG Armoury Crate SE',
    desc: 'Jump into your games faster with a unified launcher and performance profiles.',
    accent: 'from-emerald-400 to-teal-400'
  }
]

function Features() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.1),transparent_35%),radial-gradient(circle_at_80%_100%,rgba(244,63,94,0.08),transparent_35%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Power that travels</h2>
          <p className="mt-3 text-blue-100/80 max-w-2xl mx-auto">From AAA titles to indie gems, enjoy desktop-class performance on the go.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition relative overflow-hidden">
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} opacity-20 blur-2xl`} />
              <div className="text-white font-semibold text-lg">{f.title}</div>
              <p className="mt-2 text-blue-100/80 text-sm leading-relaxed">{f.desc}</p>
              <div className="mt-4 inline-flex items-center text-blue-300/80 text-xs group-hover:text-blue-200 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
