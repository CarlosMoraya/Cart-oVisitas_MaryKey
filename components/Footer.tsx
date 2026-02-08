import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="pb-8 px-6">
      <div className="border-t border-gray-100 pt-6 flex flex-col items-start">
        <h2 className="text-mk-black font-serif text-xl uppercase tracking-widest">
          MARY KAY
        </h2>
        
        <div className="flex items-end justify-between w-full mt-2">
           <div className="relative">
             <span className="font-script text-3xl text-gray-800">Caren Moraya</span>
             <svg className="absolute -bottom-2 left-0 w-full h-4 text-mk-black" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0,5 Q50,10 100,0" fill="none" stroke="currentColor" strokeWidth="1" />
               <circle cx="50" cy="8" r="1" fill="currentColor" />
             </svg>
           </div>
           
           <div className="text-right text-xs text-gray-500 font-serif leading-tight">
             <p>Rio de Janeiro</p>
             <p>Brasil</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;