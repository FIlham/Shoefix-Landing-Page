import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Andi Pratama',
    role: 'Sneaker Enthusiast',
    rating: 5,
    comment:
      'Kualitas sepatu yang dibeli dari ShoeFix benar-benar premium! Pengiriman cepat dan packaging sangat rapi. Pasti beli lagi!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    role: 'Fashion Blogger',
    rating: 5,
    comment:
      'Sudah 3x order di ShoeFix dan selalu puas. Produk original, harga kompetitif, dan customer service yang responsif. Recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Entrepreneur',
    rating: 5,
    comment:
      'Koleksi sneakers limited edition di ShoeFix lengkap banget. Bisa dapet barang yang susah dicari di tempat lain. Top!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Testimoni dari ribuan pelanggan setia ShoeFix
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative h-full bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote size={48} className="text-gray-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.comment}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/0 to-gray-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
