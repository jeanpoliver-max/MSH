import React, { useState, useEffect } from 'react';
import { ArrowLeft, UserRoundPlus, FileCheck, Stethoscope, CheckCircle2, MapPin, Building, ChevronDown, ChevronUp } from 'lucide-react';

const SouMedico = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    let message = `*NOVO CADASTRO - MSH HUB*\n\n`;
    message += `*Nome:* ${data.get('nome')}\n`;
    message += `*CRM:* ${data.get('crm')}/${data.get('uf')}\n`;
    message += `*Especialidade:* ${data.get('especialidade')}\n`;
    message += `*E-mail:* ${data.get('email')}\n`;
    message += `*WhatsApp:* ${data.get('whatsapp')}\n`;
    message += `*Cidade:* ${data.get('cidade')}\n`;
    message += `*Disponibilidade:* ${data.get('disponibilidade')}\n`;
    
    if (data.get('observacoes')) {
      message += `\n*Observações:* ${data.get('observacoes')}`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5547999387944?text=${encodedMessage}`, '_blank');
  };

  const faqs = [
    {
      q: "O cadastro garante plantão imediato?",
      a: "Não. O cadastro coloca seu perfil na nossa base. A convocação ocorre conforme abertura de vagas e compatibilidade."
    },
    {
      q: "Como funciona o pagamento dos plantões?",
      a: "Pagamento processado pela MSH conforme regime contratual (CLT ou PJ). Pontualidade garantida."
    },
    {
      q: "Preciso ter CNPJ/PJ para atuar?",
      a: "Depende da modalidade. Algumas vagas exigem PJ, outras são CLT. Informaremos no momento da convocação."
    },
    {
      q: "Quais estados a MSH atende?",
      a: "PR, SC, SP e MG, com presença em 10+ cidades."
    },
    {
      q: "Meus dados estão seguros?",
      a: "Sim. Conformidade com LGPD. Não compartilhamos com terceiros sem autorização. Contato: administrativo@mshservicosmedicos.com.br"
    },
    {
      q: "Posso escolher apenas plantões noturnos ou de fim de semana?",
      a: "Sim. No formulário você indica sua disponibilidade. Fazemos matching apenas com vagas compatíveis."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-[#023E8A] z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 bg-white rounded-lg flex items-center justify-center relative px-2 py-1">
              <img src="https://i.imgur.com/vYCZCGE.png" alt="MSH Logo" className="h-full w-auto object-contain" />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">MSH+ Hub</span>
          </div>
          <a href="#inicio" className="flex items-center text-white/90 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Site
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative bg-[#023E8A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A] to-[#0077B6] opacity-90 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            Portal Exclusivo para Profissionais de Saúde
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Faça parte da rede de +2.000 médicos da MSH
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Cadastre seu perfil e receba oportunidades de plantão em hospitais, UPAs e clínicas em 4 estados. Pagamento em dia, suporte técnico e desenvolvimento profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cadastro" onClick={(e) => scrollToSection(e, 'cadastro')} className="px-8 py-4 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-xl font-bold shadow-lg transition-colors">
              Cadastrar Meu Perfil
            </a>
            <a href="#grupos" onClick={(e) => scrollToSection(e, 'grupos')} className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 rounded-xl transition-colors flex flex-col items-center justify-center">
              <span className="text-xs font-normal opacity-80 mb-0.5">Já sou cadastrado</span>
              <span className="font-bold">Acessar Grupos</span>
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto border-t border-white/20 pt-10">
            <div className="text-white">
              <div className="text-3xl font-bold">2.000+</div>
              <div className="text-white/70 text-sm">Médicos Ativos</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">7.000+</div>
              <div className="text-white/70 text-sm">Plantões/mês</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">4+</div>
              <div className="text-white/70 text-sm">Estados</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-white/70 text-sm">Cidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-12">Como Funciona o MSH Hub</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Cadastre seu Perfil', desc: 'Preencha o formulário com CRM, especialidade e disponibilidade.' },
              { num: '02', title: 'Entre no Grupo', desc: 'Acesse o grupo de WhatsApp do seu estado para oportunidades.' },
              { num: '03', title: 'Análise de Perfil', desc: 'Nossa equipe verifica seu CRM e cruza disponibilidade com vagas.' },
              { num: '04', title: 'Receba Convites', desc: 'Seja convocado para plantões compatíveis. Pagamento em dia.' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
                <span className="text-5xl font-black text-[#F3F4F6] absolute top-4 right-4">{step.num}</span>
                <h3 className="text-xl font-bold text-[#1F2937] mb-3 relative z-10 mt-6">{step.title}</h3>
                <p className="text-[#6B7280] leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-12">Por que se cadastrar na MSH?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0077B6]/10 rounded-2xl flex items-center justify-center text-[#0077B6] mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Pagamento Sempre em Dia</h3>
              <p className="text-[#6B7280]">Remuneração pontual, transparente e sem atrasos para todos os seus plantões.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0077B6]/10 rounded-2xl flex items-center justify-center text-[#0077B6] mx-auto mb-6">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Variedade de Vagas</h3>
              <p className="text-[#6B7280]">Plantões em hospitais, UPAs, SAMU e clínicas parceiras em 4 estados do Brasil.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0077B6]/10 rounded-2xl flex items-center justify-center text-[#0077B6] mx-auto mb-6">
                <FileCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-3">Suporte e Documentação</h3>
              <p className="text-[#6B7280]">Nossa equipe cuida de toda a parte documental e conformidade, facilitando sua atuação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="cadastro" className="py-20 bg-[#F3F4F6]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#1F2937] mb-2">Cadastre Seu Perfil Profissional</h2>
              <p className="text-[#6B7280]">Leva menos de 2 minutos</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-2">Nome Completo *</label>
                  <input required name="nome" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none" placeholder="Dr. João Silva" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">CRM *</label>
                    <input required name="crm" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none" placeholder="123456" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">UF *</label>
                    <select required name="uf" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none bg-white">
                      <option value="">Selecione</option>
                      <option value="PR">PR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                      <option value="MG">MG</option>
                      <option value="RS">RS</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-2">Especialidade *</label>
                  <select required name="especialidade" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none bg-white">
                    <option value="">Selecione</option>
                    <option value="Clínica Médica">Clínica Médica</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Cirurgia Geral">Cirurgia Geral</option>
                    <option value="Ortopedia">Ortopedia</option>
                    <option value="Cardiologia">Cardiologia</option>
                    <option value="Ginecologia/Obstetrícia">Ginecologia/Obstetrícia</option>
                    <option value="Psiquiatria">Psiquiatria</option>
                    <option value="Anestesiologia">Anestesiologia</option>
                    <option value="Medicina de Família">Medicina de Família</option>
                    <option value="Urgência/Emergência">Urgência/Emergência</option>
                    <option value="Outra">Outra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-2">Cidade de Residência *</label>
                  <input required name="cidade" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none" placeholder="Sua cidade" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-2">E-mail *</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-2">WhatsApp *</label>
                  <input required name="whatsapp" type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">Disponibilidade de Plantão *</label>
                <select required name="disponibilidade" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none bg-white">
                  <option value="">Selecione</option>
                  <option value="Diurno">Diurno</option>
                  <option value="Noturno">Noturno</option>
                  <option value="Fim de Semana">Fim de Semana</option>
                  <option value="24h">24h</option>
                  <option value="Qualquer Horário">Qualquer Horário</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1F2937] mb-2">Observações (Opcional)</label>
                <textarea name="observacoes" rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0077B6] focus:border-[#0077B6] outline-none resize-none" placeholder="Alguma informação adicional?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-[#25D366] hover:bg-[#1EBE56] text-white rounded-xl font-bold shadow-md transition-colors flex items-center justify-center mt-8">
                Enviar Cadastro via WhatsApp
              </button>
              
              <p className="text-xs text-[#6B7280] text-center mt-6 leading-relaxed">
                O cadastro na base da MSH não representa contratação imediata nem garantia de convocação. O contato será realizado conforme a existência de oportunidades e compatibilidade de perfil. Seus dados serão tratados conforme a LGPD (Lei nº 13.709/2018).
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Grupos de WhatsApp */}
      <section id="grupos" className="py-20 bg-[#E6F0F8]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#023E8A] mb-4">Grupos de Plantões no WhatsApp</h2>
          <p className="text-center text-[#6B7280] mb-12 max-w-2xl mx-auto">
            Acesse as nossas comunidades exclusivas por região e área de atuação para ficar por dentro das oportunidades de plantões da MSH.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Grupo MSH - BRASIL', link: 'https://chat.whatsapp.com/CPxLwmJGibL6oCiHkSU8Fq' },
              { name: 'Grupo MSH - UBS/PSF', link: 'https://chat.whatsapp.com/KGu6zVnJ9X52Am6UIYPuhq' },
              { name: 'Grupo MSH - Paraná/PR 1', link: 'https://chat.whatsapp.com/BLklmpOE1of2WVU9dPRab3' },
              { name: 'Grupo MSH - Paraná/PR 2', link: 'https://chat.whatsapp.com/ExDAcbaq0Cm3aKouY0XsrC' },
              { name: 'Grupo MSH - Santa Catarina/SC 1', link: 'https://chat.whatsapp.com/HvlmdsyfNVG6g1TX1ab3uA' },
              { name: 'Grupo MSH - Santa Catarina/SC 2', link: 'https://chat.whatsapp.com/JOxVs5C46DN0Ktm7ZjDtQP' },
              { name: 'Grupo MSH - Pediatria', link: 'https://chat.whatsapp.com/FBUF4na9ozA0UvU0TfyXv6' }
            ].map((grupo, i) => (
              <a 
                key={i} 
                href={grupo.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#0077B6]/10 hover:shadow-md hover:border-[#25D366] transition-all flex flex-col items-center justify-between group h-full"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#25D366] transition-colors">
                  <svg className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 className="text-[17px] font-bold text-[#1F2937] leading-tight mb-2">{grupo.name}</h3>
                <span className="mt-4 text-sm font-semibold text-[#25D366]">Entrar no Grupo</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1F2937] mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => handleFaqToggle(i)}
                >
                  <span className="font-semibold text-[#1F2937] pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-[#0077B6]" /> : <ChevronDown className="text-[#6B7280]" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-white text-[#6B7280] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden bg-[#0077B6]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#023E8A] to-[#0077B6] z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para fazer parte da MSH?</h2>
          <p className="text-xl text-white/80 mb-10">Cadastre-se agora e comece a receber oportunidades.</p>
          <a href="#cadastro" onClick={(e) => scrollToSection(e, 'cadastro')} className="inline-block px-10 py-4 bg-[#E91E63] hover:bg-[#C2185B] text-white rounded-xl font-bold shadow-lg transition-colors text-lg">
            Cadastrar Agora
          </a>
        </div>
      </section>
      
      {/* Footer is handled by App.tsx, but we'll include a simple one here if isolated or just let the main layout handle it */}
      <footer className="bg-[#023E8A] py-12 text-center text-white/70">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="h-8 bg-white rounded-md flex items-center justify-center relative px-2 py-1">
            <img src="https://i.imgur.com/vYCZCGE.png" alt="MSH Logo" className="h-full w-auto object-contain" />
          </div>
          <span className="text-white font-bold text-lg">MSH+ Hub</span>
        </div>
        <p className="mb-6">Portal do Médico — MSH - Clínica, Gestão e Serviços Médicos LTDA</p>
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
          <a href="#inicio" className="hover:text-white transition-colors">Site Institucional</a>
          <span className="text-white/30">|</span>
          <a href="#contato" className="hover:text-white transition-colors">Falar Conosco</a>
          <span className="text-white/30">|</span>
          <a href="#privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
          <span className="text-white/30">|</span>
          <a href="#termos" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
        <div className="text-xs text-white/50 space-y-1">
          <p>CNPJ: 34.145.071/0001-02 | Av. Brasil, 386 - Mandirituba/PR</p>
          <p>© 2026 MSH Serviços Médicos. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a 
        href="https://wa.me/5547999387944" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1EBE56] hover:scale-110 transition-all z-50 group"
      >
        <svg className="w-8 h-8 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
};

export default SouMedico;
