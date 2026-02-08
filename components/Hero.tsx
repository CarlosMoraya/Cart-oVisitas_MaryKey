import React from 'react';
import { Phone, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-white pt-10 pb-4 px-6 overflow-hidden">

      {/* Top decorative line (doodle) */}
      <svg className="absolute top-16 right-0 w-32 h-16 opacity-50 text-gray-400" viewBox="0 0 100 50">
        <path d="M10,40 Q30,10 50,30 T90,20" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M85,15 L95,20 L88,28" fill="none" stroke="currentColor" strokeWidth="1" /> {/* Arrow-ish */}
        <circle cx="80" cy="20" r="2" fill="currentColor" className="text-pink-300" /> {/* Star/sparkle */}
      </svg>

      {/* Header Text */}
      <div className="relative z-10">
        <h3 className="text-mk-pink font-bold text-3xl tracking-wide uppercase shadow-pink-100 drop-shadow-sm mb-8">
          NOVIDADES
        </h3>

        <div className="pl-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-4 h-[1px] bg-gray-400 rounded-full"></span>
            <span className="font-serif text-gray-500 italic text-sm">Consultora:</span>
          </div>

          <h1 className="text-mk-pink font-serif text-4xl font-bold uppercase leading-none tracking-tight mb-2">
            CAREN MORAYA
          </h1>

          <h2 className="text-mk-black font-serif text-5xl uppercase tracking-widest leading-none">
            MARY KAY
          </h2>

          <p className="font-script text-mk-pink text-2xl mt-2 ml-4 transform -rotate-2">
            Acredite na sua beleza!!
          </p>
        </div>
      </div>

      {/* Profile & Contact Section */}
      <div className="flex items-center justify-between mt-8 relative">

        {/* Left: Contact Details */}
        <div className="flex flex-col gap-5 z-20 mt-8">
          <a href="https://wa.me/5521980095740" target="_blank" className="flex items-center gap-3 text-gray-500 hover:text-mk-pink transition-colors group">
            <div className="p-2 border border-mk-pink rounded-full group-hover:bg-mk-pink group-hover:text-white transition-colors">
              <Phone size={18} />
            </div>
            <span className="font-serif text-lg">(21) 98009-5740</span>
          </a>

          <a href="https://instagram.com" className="flex items-center gap-3 text-gray-500 hover:text-mk-pink transition-colors group">
            <div className="p-2 border border-mk-pink rounded-full group-hover:bg-mk-pink group-hover:text-white transition-colors">
              <Instagram size={18} />
            </div>
            <span className="font-serif text-lg">@caren.mk</span>
          </a>
        </div>

        {/* Right: Profile Image */}
        <div className="relative z-10 -mr-4">
          {/* Background pink circle offset */}
          <div className="absolute top-4 right-4 w-44 h-44 bg-pink-200/50 rounded-full blur-sm -z-10"></div>

          {/* Image - Container maior com borda mais grossa */}
          <div className="w-48 h-48 rounded-full border-8 border-white shadow-xl overflow-hidden relative flex items-center justify-center">
            <img
              src="/images/logoMaryKey.png"
              alt="Caren Moraya"
              className="w-[85%] h-[85%] object-cover rounded-full"
            />
          </div>

          {/* Decorative Heart Doodle */}
          <svg className="absolute -top-6 -right-2 w-16 h-16 text-gray-600 opacity-60 transform rotate-12" viewBox="0 0 50 50">
            <path d="M25,45 C10,35 5,25 5,15 C5,5 20,5 25,15 C30,5 45,5 45,15 C45,25 40,35 25,45 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M28,42 C15,35 10,25 10,18" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
        </div>
      </div>

      {/* Decorative sparkle */}
      <div className="absolute top-[45%] left-1/2 text-pink-200 text-4xl">✦</div>

    </div>
  );
};

export default Hero;