import { Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#023E8A] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <div className="mb-6 bg-white rounded-xl inline-block p-3">
              <img 
                src="https://i.imgur.com/vYCZCGE.png" 
                alt="MSH - Clínica, Gestão e Serviços Médicos - Logotipo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden bg-[#0077B6] rounded-lg w-12 h-12 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MSH</span>
              </div>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Gestão Médica de Alta Performance para Instituições de Saúde. Mais de 2.000 médicos ativos em 4 estados.
            </p>
            <p className="text-sm font-semibold text-blue-300">CNPJ: 34.145.071/0001-02</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-blue-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#quem-somos" className="text-blue-200 hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#estrutura" className="text-blue-200 hover:text-white transition-colors">Estrutura</a></li>
              <li><a href="#clientes" className="text-blue-200 hover:text-white transition-colors">Clientes</a></li>
              <li><a href="#ouvidoria" className="text-blue-200 hover:text-white transition-colors">Ouvidoria</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Gestão de Equipes Médicas</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Urgência e Emergência</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">SAMU e APH</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Atendimento Ambulatorial</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Consultoria em Gestão</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-blue-200">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>Av. Brasil, 386 - Sala 04-B<br/>Centro - Mandirituba/PR<br/>CEP 83.800-036</span>
              </li>
              <li className="flex flex-col gap-2 text-blue-200 mt-2">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="flex-shrink-0" />
                  <a href="mailto:gestao@mshservicosmedicos.com.br" className="hover:text-white">gestao@mshservicosmedicos.com.br</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="flex-shrink-0 opacity-0" />
                  <a href="mailto:administrativo@mshservicosmedicos.com.br" className="hover:text-white">administrativo@mshservicosmedicos.com.br</a>
                </div>
              </li>
              <li className="flex flex-col gap-2 text-blue-200 mt-2">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-xs uppercase mb-1">Administrativo</span>
                    <a href="tel:+5547984088090" className="hover:text-white">(47) 98408-8090</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <Phone size={20} className="flex-shrink-0 mt-1 text-[#E91E63]" />
                  <div className="flex flex-col">
                    <span className="font-bold text-white text-xs uppercase mb-1">Recrutamento Médico</span>
                    <a href="tel:+5547999387944" className="hover:text-white">(47) 99938-7944</a>
                  </div>
                </div>
              </li>
            </ul>
            <div>
              <span className="text-sm font-semibold text-blue-200 block mb-3 uppercase tracking-wider">Siga-nos no Instagram</span>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/mshservicosmedicos" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E91E63] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
          <p>© 2026 MSH - Clínica, Gestão e Serviços Médicos LTDA | CNPJ 34.145.071/0001-02</p>
          <div className="flex gap-6">
            <a href="politica-de-privacidade.html" className="hover:text-white">Política de Privacidade</a>
            <a href="#termos" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
