import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-200 mb-4 shadow shadow-red-700/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Reliable Technical Support • On-call & On-site
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Hengki Kurniawan
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl">
            IT professional specializing in reliable technical support, troubleshooting, and infrastructure maintenance. I help teams stay productive by keeping systems fast, secure, and always-on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-700/30 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-colors">
              Get Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
