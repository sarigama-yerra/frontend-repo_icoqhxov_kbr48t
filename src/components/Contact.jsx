import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Your message has been sent. I will reply shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.12),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/10 bg-slate-900/70"
          >
            <h2 className="text-3xl font-bold text-white">Get Support</h2>
            <p className="text-slate-300 mt-2">Tell me what you need help with—I'll get back with an action plan.</p>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
              <input required placeholder="Your name" className="px-4 py-3 rounded-lg bg-slate-800/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-slate-800/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              <textarea required rows="4" placeholder="How can I help?" className="px-4 py-3 rounded-lg bg-slate-800/80 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600/50" />
              <button className="mt-2 px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-700/30 transition-colors w-max">Send Message</button>
              {status && <p className="text-green-300 text-sm">{status}</p>}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800"
          >
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-center gap-3"><Mail className="text-red-400" size={18} /><a href="mailto:hengki.support@example.com" className="hover:text-white">hengki.support@example.com</a></li>
              <li className="flex items-center gap-3"><Phone className="text-red-400" size={18} /><a href="tel:+620000000000" className="hover:text-white">+62 000 0000 000</a></li>
              <li className="flex items-center gap-3"><MapPin className="text-red-400" size={18} /><span>Jakarta, Indonesia</span></li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-red-600/10 border border-red-500/20 text-red-200 text-sm">
              Available for on-site and remote support. Response within business hours or faster with SLA.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
