import { motion } from 'framer-motion'
import { ShieldCheck, Network, HardDrive, Cpu, MonitorCog, Database } from 'lucide-react'

const skills = [
  { icon: ShieldCheck, title: 'Security & Compliance', desc: 'Hardening, antivirus, patching, least privilege' },
  { icon: Network, title: 'Networking', desc: 'LAN/WAN, VLANs, Wi‑Fi, firewalls, VPN' },
  { icon: HardDrive, title: 'Systems', desc: 'Windows, macOS, Linux basics, backups' },
  { icon: MonitorCog, title: 'Support', desc: 'Helpdesk, ticketing, remote support, SOPs' },
  { icon: Cpu, title: 'Hardware', desc: 'Diagnostics, upgrades, peripherals' },
  { icon: Database, title: 'Tools', desc: 'M365/Google Workspace, RMM, monitoring' },
]

function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-[linear-gradient(to_bottom,rgba(15,23,42,1),rgba(15,23,42,0.98))]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(239,68,68,0.14),transparent_50%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Core Skills</h2>
          <div className="text-sm text-red-200/80">Dependable • Efficient • Secure</div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/70 hover:bg-slate-900/90 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-red-600/20 border border-red-500/30 text-red-300 grid place-items-center mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 text-sm mt-1 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
