import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { generateVCard } from '../utils/vcard';

const ActionButtons: React.FC = () => {
  return (
    <div className="w-full px-6 py-4 text-center relative">
      
      {/* CTA Section */}
      <div className="mb-10 relative">
        <p className="text-gray-700 font-serif text-lg mb-4">
          Faça seu pedido online, e receba em casa!
        </p>
        <a 
          href="https://www.marykay.com.br" 
          target="_blank"
          className="inline-flex items-center gap-2 bg-mk-pink text-white px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition-all font-bold tracking-wider uppercase text-sm"
        >
          <ShoppingBag size={16} /> Ir para a Loja
        </a>
      </div>

      {/* Social Text */}
      <div className="mb-12 relative">
        <svg className="absolute -left-6 top-0 w-24 h-24 text-pink-200 opacity-50 transform -rotate-12" viewBox="0 0 100 50">
           <path d="M0,25 Q50,0 100,25" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        
        <p className="text-gray-400 font-serif italic text-sm max-w-xs mx-auto leading-relaxed">
          Acompanhe nossas redes sociais e fique por dentro de todas as Novidades...
        </p>
        
        <div className="flex justify-center mt-2">
            <div className="text-pink-200 text-xl">✦</div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative py-6">
        <p className="font-serif text-mk-pink text-xl font-medium px-4 leading-normal">
          "Cuidar de você não é custo é um investimento!!"
        </p>
      </div>
      
      {/* Save Contact Button (Hidden functionality for user convenience but styled minimally) */}
      <div className="mt-8 mb-8">
        <button 
          onClick={generateVCard}
          className="text-gray-400 text-xs hover:text-mk-pink underline transition-colors"
        >
          Salvar contato na agenda
        </button>
      </div>

    </div>
  );
};

export default ActionButtons;