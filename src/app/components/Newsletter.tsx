import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Card with Blur Effect */}
          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-600/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-gray-700/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Mail size={32} className="text-gray-300" />
              </div>

              {/* Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Updated with ShoeFix
                </h2>
                <p className="text-lg text-gray-400 max-w-xl mx-auto">
                  Dapatkan info terbaru tentang koleksi limited edition, promo
                  eksklusif, dan tips fashion langsung ke inbox kamu.
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
                  />
                  <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                    <span>Subscribe</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-500 text-center mt-4">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
