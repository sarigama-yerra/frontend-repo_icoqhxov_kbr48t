import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Office Network Upgrade',
    desc: 'Migrated office to managed switches with VLAN segmentation, improved Wi‑Fi coverage, and site-to-site VPN.',
    tags: ['Networking', 'Security', 'VPN'],
  },
  {
    title: 'Backup & Recovery Rollout',
    desc: 'Implemented automated backups with offsite retention and monthly recovery drills for business continuity.',
    tags: ['Backup', 'Servers', 'SOP'],
  },
  {
    title: 'Helpdesk Modernization',
    desc: 'Introduced ticketing, knowledge base, and remote support tools to shorten resolution times by 35%.',
    tags: ['Support', 'Automation', 'Docs'],
  },
]

function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(248,113,113,0.12),transparent_55%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-white">Selected Work</h2>
          <div className="text-sm text-slate-300">Real-world impact and reliability</div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-900 overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-red-600/10 blur-2xl group-hover:bg-red-500/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-red-600/20 border border-red-500/30 text-red-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
