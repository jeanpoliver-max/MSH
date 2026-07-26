import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'Médico(a)',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return alert("Por favor, preencha pelo menos nome e telefone.");
    const text = `Olá! Meu nome é ${formData.name}. Sou ${formData.userType}. %0A%0ATelefone: ${formData.phone}%0A%0A${formData.message}`;
    const targetPhone = formData.userType === 'Médico(a)' ? '5585987884574' : '5547984088090';
    window.open(`https://wa.me/${targetPhone}?text=${text}`, '_blank');
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contato Site MSH - ${formData.userType} - ${formData.name}`;
    const body = `Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0ATipo: ${formData.userType}%0A%0AMensagem:%0A${formData.message}`;
    window.location.href = `mailto:gestao@mshservicosmedicos.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="py-24 bg-[#0077B6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar Sobre Sua Demanda</h2>
          <p className="text-lg text-blue-100">Preencha o formulário ou fale diretamente pelo WhatsApp</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/20">
          <form onSubmit={handleEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">Nome completo *</label>
                <input 
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E63] text-white placeholder-white/50"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">E-mail *</label>
                <input 
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E63] text-white placeholder-white/50"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-2">WhatsApp *</label>
                <input 
                  type="tel" id="phone" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E63] text-white placeholder-white/50"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-blue-100 mb-2">Tipo de usuário *</label>
                <select 
                  id="userType" name="userType"
                  value={formData.userType} onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E63] text-gray-800"
                >
                  <option value="Médico(a)">Médico(a)</option>
                  <option value="Instituição de saúde">Instituição de saúde</option>
                  <option value="Gestor(a) público">Gestor(a) público</option>
                  <option value="Gestor(a) privado">Gestor(a) privado</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">Mensagem</label>
              <textarea 
                id="message" name="message" rows={4}
                value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E63] text-white placeholder-white/50 resize-none"
                placeholder="Como podemos ajudar?"
              ></textarea>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button 
                type="button" onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl font-bold transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                Enviar via WhatsApp
              </button>
              <button 
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#E91E63] hover:bg-[#C2185B] border-none text-white rounded-xl font-bold transition-all shadow-lg"
              >
                <Send size={20} />
                Enviar Formulário
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
