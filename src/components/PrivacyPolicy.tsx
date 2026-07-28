import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <a href="#inicio" className="inline-flex items-center text-[#0077B6] hover:text-[#023E8A] font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o site
        </a>
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-4">Política de Privacidade</h1>
          <p className="text-[#6B7280]">Última atualização: 27 de julho de 2026</p>
          <div className="w-20 h-1 bg-[#E91E63] mt-6"></div>
        </div>

        <div className="prose prose-blue max-w-none text-[#4B5563]">
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#0077B6] mb-8">
            <h3 className="text-lg font-bold text-[#1F2937] mb-2 mt-0">Identificação do Controlador</h3>
            <p className="mb-1"><strong>MSH - Clínica, Gestão e Serviços Médicos LTDA</strong></p>
            <p className="mb-1"><strong>CNPJ:</strong> 34.145.071/0001-02</p>
            <p className="mb-1"><strong>Endereço:</strong> Av. Brasil, 386 - Sala 04-B - Centro - Mandirituba/PR - CEP 83.800-036</p>
            <p className="mb-0"><strong>DPO:</strong> administrativo@mshservicosmedicos.com.br</p>
          </div>

          <h2 className="text-xl font-bold text-[#1F2937] mt-8 mb-4">1. Coleta de Dados</h2>
          <p>
            Coletamos informações que você nos fornece diretamente ao preencher formulários em nosso site (como nome, e-mail, telefone, CRM).
            Também coletamos automaticamente dados de navegação por meio de cookies (como endereço IP, tipo de navegador, páginas visitadas)
            para fins de análise de tráfego e melhoria da experiência de uso.
          </p>

          <h2 className="text-xl font-bold text-[#1F2937] mt-8 mb-4">2. Uso das Informações</h2>
          <p>Utilizamos seus dados para as seguintes finalidades:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Responder a solicitações de contato, dúvidas ou orçamentos;</li>
            <li>Cadastrar profissionais no nosso banco de talentos para oportunidades e plantões;</li>
            <li>Enviar comunicações sobre vagas, serviços e novidades da MSH (mediante consentimento);</li>
            <li>Melhorar a segurança, o funcionamento do site e a experiência do usuário.</li>
          </ul>

          <h2 className="text-xl font-bold text-[#1F2937] mt-8 mb-4">3. Compartilhamento de Dados</h2>
          <p>
            A MSH compromete-se a não vender, alugar ou comercializar seus dados pessoais. Seus dados podem ser compartilhados
            com parceiros estritamente necessários para a operação dos serviços (como provedores de hospedagem e sistemas de e-mail),
            exigindo-se sempre o cumprimento da LGPD.
          </p>

          <h2 className="text-xl font-bold text-[#1F2937] mt-8 mb-4">4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, perdas, destruição ou
            qualquer forma de tratamento inadequado.
          </p>

          <h2 className="text-xl font-bold text-[#1F2937] mt-8 mb-4">5. Seus Direitos (LGPD)</h2>
          <p>Conforme o art. 18 da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Confirmar a existência de tratamento de seus dados;</li>
            <li>Acessar, corrigir ou atualizar seus dados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
            <li>Revogar o consentimento a qualquer momento.</li>
          </ul>

          <p className="mt-8">
            Para exercer seus direitos, entre em contato através do e-mail <strong>administrativo@mshservicosmedicos.com.br</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
