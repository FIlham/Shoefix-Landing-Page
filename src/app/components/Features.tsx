import { motion } from 'motion/react';
import { Shield, Zap, Award, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Authentic Guarantee',
    description: 'Semua produk 100% original dan bergaransi keaslian dari brand resmi.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Pengiriman cepat dan aman ke seluruh Indonesia dengan tracking real-time.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Kurasi khusus koleksi sepatu branded terbaik untuk gaya hidup premium.',
  },
  {
    icon: Truck,
    title: 'Free Returns',
    description: 'Tidak cocok? Kembalikan gratis dalam 30 hari tanpa pertanyaan.',
  },
];

export function Features() {
  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose ShoeFix?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pengalaman berbelanja sepatu premium yang tak tertandingi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative h-full bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-gray-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/0 to-gray-700/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
