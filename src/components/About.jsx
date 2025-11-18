import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(248,113,113,0.15),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="bg-slate-900/70 border border-red-500/20 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">About</h2>
            <p className="text-slate-300 leading-relaxed">
              I'm an IT professional with a strong focus on dependable technical support, network configuration, hardware troubleshooting, and user training. My approach emphasizes clarity, patience, and fast resolution. I love building stable environments and helping people get the most from their tech.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                'Troubleshooting',
                'Network Setup',
                'Windows & macOS',
                'Servers & Backup',
                'Security Hardening',
                'Helpdesk & SOPs',
              ].map((item) => (
                <div key={item} className="px-3 py-2 rounded-lg bg-red-600/10 border border-red-500/20 text-red-200 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-white/10">
              <h3 className="text-white font-semibold">Service Philosophy</h3>
              <p className="text-slate-300 mt-2 text-sm">
                Reliable support means clear communication, predictable response times, and documented solutions. I combine hands-on skills with a calm, methodical approach.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-950/40 to-red-950/20 border border-red-500/20">
              <h3 className="text-white font-semibold">Highlights</h3>
              <ul className="text-slate-300 mt-2 text-sm list-disc list-inside space-y-1">
                <li>95%+ first-contact resolution for common issues</li>
                <li>Deployed automated backup and monitoring for small offices</li>
                <li>Trained non-technical teams to self-resolve routine tasks</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
