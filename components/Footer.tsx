
import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-white py-12 mt-auto">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        
        <div className="space-y-2">
          <h2 className="text-md font-normal text-slate-600">Print Inquiries</h2>
          <p className="text-pastel-text font-light text-sm max-w-xs mx-auto leading-relaxed">
            For high-quality prints of any photograph in the collection, please reach out directly.
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          <a 
            href="https://instagram.com/heelago" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-pastel-text/70 hover:text-pastel-accent transition-colors duration-300 group"
          >
            <div className="p-3 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all duration-300 ring-1 ring-slate-100 group-hover:ring-pastel-blue">
                <Instagram size={18} />
            </div>
            <span className="text-[10px] font-medium tracking-widest uppercase">@heelago</span>
          </a>

          <a 
            href="mailto:heelago@gmail.com"
            className="flex flex-col items-center gap-2 text-pastel-text/70 hover:text-pastel-accent transition-colors duration-300 group cursor-pointer"
          >
            <div className="p-3 rounded-full bg-white shadow-sm group-hover:shadow-md transition-all duration-300 ring-1 ring-slate-100 group-hover:ring-pastel-blue">
                <Mail size={18} />
            </div>
            <span className="text-[10px] font-medium tracking-widest uppercase">Contact</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-100/50 w-24 mx-auto"></div>

        <div className="text-[10px] text-slate-300 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Heela Goren
        </div>
      </div>
    </footer>
  );
};

export default Footer;
