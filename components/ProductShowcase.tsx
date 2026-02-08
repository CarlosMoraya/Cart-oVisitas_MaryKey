import React from 'react';
import { Star, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Batom Matte MK",
    category: "Lábios",
    price: "R$ 49,90",
    image: "https://picsum.photos/seed/lipstick/300/300"
  },
  {
    id: 2,
    name: "Base TimeWise 3D",
    category: "Rosto",
    price: "R$ 79,90",
    image: "https://picsum.photos/seed/foundation/300/300"
  },
  {
    id: 3,
    name: "Kit Miracle Set",
    category: "Skincare",
    price: "R$ 329,00",
    image: "https://picsum.photos/seed/skincare/300/300"
  },
  {
    id: 4,
    name: "Máscara Lash Love",
    category: "Olhos",
    price: "R$ 64,90",
    image: "https://picsum.photos/seed/mascara/300/300"
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <div className="w-full px-4">
      <div className="bg-white/80 rounded-3xl p-6 shadow-sm border border-pink-100">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-serif font-bold text-mk-purple">
            Novidades
          </h2>
          <button className="text-xs text-mk-pink font-bold uppercase tracking-wider flex items-center gap-1">
            Ver loja <ArrowRight size={12} />
          </button>
        </div>

        <div className="flex overflow-x-auto pb-4 gap-4 snap-x hide-scrollbar">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[140px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden snap-center flex-shrink-0"
            >
              <div className="h-28 w-full overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-xs font-bold text-gray-800 leading-tight mb-1 truncate">
                  {product.name}
                </h3>
                <span className="text-mk-pink font-bold text-xs block">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;