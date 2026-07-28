import { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Quem Somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Ouvidoria', href: '#ouvidoria' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      {/* Top Bar for Doctors */}
      <div className="bg-[#0077B6] text-white text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-end items-center gap-2">
         <span className="opacity-90">Área Exclusiva:</span>
         <a href="https://linktr.ee/mshservicosmedicos?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaeP-Z5bS-qNsUB4zYM4mbYCEzf_24U3Iynl3xgJvr5wI5ReAPtv84P_vWbtIw_aem_hmm1aB8IJLRl7dAub2j5RA" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline flex items-center gap-1">
           Acesso aos Grupos Médicos <ExternalLink size={12} />
         </a>
      </div>
      <header className="relative w-full bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-3 group">
          <div className="relative h-[50px] flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="MSH - Clínica, Gestão e Serviços Médicos - Logotipo" 
              className="h-full w-auto object-contain z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-[#0077B6] rounded-lg w-[50px]">
              <span className="text-white font-bold text-xl">MSH</span>
            </div>
          </div>
          <span className="text-lg font-bold text-[#0077B6] hidden md:inline tracking-tight group-hover:text-[#E91E63] transition-colors">Clínica, Gestão e Serviços Médicos</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 items-center text-sm font-medium text-[#1F2937]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#0077B6] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contato" className="bg-[#E91E63] hover:bg-[#C2185B] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Solicitar Proposta
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#1F2937]">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 border-b border-gray-200">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-[#1F2937] font-medium hover:text-[#0077B6]">
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={() => setMobileMenuOpen(false)} className="inline-block text-center px-6 py-2 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-lg font-semibold">
            Solicitar Proposta
          </a>
        </div>
      )}
    </header>
    </div>
  );
}
