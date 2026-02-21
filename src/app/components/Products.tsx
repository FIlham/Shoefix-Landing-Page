import { motion } from 'motion/react';
import { Heart, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Air Jordan Retro',
    brand: 'Nike',
    price: 'Rp 2,899,000',
    image: 'https://images.unsplash.com/photo-1645833889386-2782e290ee3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBqb3JkYW4lMjBzbmVha2Vyc3xlbnwxfHx8fDE3NzE1OTUyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Nike Dunk Low',
    brand: 'Nike',
    price: 'Rp 1,799,000',
    image: 'https://images.unsplash.com/photo-1609188944094-394637c26769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWtlJTIwc2hvZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MTU5NTI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Yeezy Boost 350',
    brand: 'Adidas',
    price: 'Rp 3,299,000',
    image: 'https://images.unsplash.com/photo-1718802319434-4142f3539a35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZGlkYXMlMjB5ZWV6eSUyMHNob2VzfGVufDF8fHx8MTc3MTU5NTI5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Limited',
  },
  {
    id: 4,
    name: 'Premium Collection',
    brand: 'Various Brands',
    price: 'Rp 2,499,000',
    image: 'https://images.unsplash.com/photo-1769981654964-e65981aecd75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9lcyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzcxNTgxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tag: 'Trending',
  },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Pilihan terbaik dari koleksi sepatu branded kami yang paling populer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-lg border border-gray-800/50 rounded-2xl overflow-hidden hover:border-gray-700/50 transition-all">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-800">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {product.tag}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart size={18} className="text-gray-900" />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <ShoppingCart size={18} className="text-gray-900" />
                    </button>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-2">
                  <div className="text-sm text-gray-500">{product.brand}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {product.name}
                  </h3>
                  <div className="text-xl font-bold text-white">
                    {product.price}
                  </div>
                </div>

                {/* Quick Add Button */}
                <div className="px-6 pb-6">
                  <button className="w-full bg-white text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-gray-800/60 backdrop-blur-md text-white px-8 py-4 rounded-full border border-gray-700/50 hover:bg-gray-700/60 transition-all">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
