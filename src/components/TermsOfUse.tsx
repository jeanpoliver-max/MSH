import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero da Página */}
      <section className="bg-[#E6F0F8] pt-12 pb-10 px-6 text-center border-b-[3px] border-[#0066B2]">
        <p className="text-[0.8rem] tracking-[0.15em] text-[#9E9E9E] uppercase mb-3">MSH - Clínica, Gestão e Serviços Médicos LTDA</p>
        <h1 className="text-[2.2rem] md:text-4xl font-bold text-[#004E8C] tracking-tight mb-2">Termos de Uso</h1>
        <p className="text-base text-[#555555] italic mb-2">Regras e condições de navegação e utilização da plataforma digital</p>
        <p className="text-[0.85rem] text-[#9E9E9E]">27 de julho de 2026</p>
        <div className="w-[60px] h-[3px] bg-[#E91E63] mx-auto mt-6 rounded-sm"></div>
      </section>

      {/* Conteúdo Principal */}
      <main className="max-w-[860px] mx-auto px-6 py-12 pb-16">
        <div className="text-base text-[#555555] text-justify mb-10 p-6 bg-[#F5F5F5] border-l-4 border-[#0066B2] rounded-r-lg leading-relaxed">
          Bem-vindo ao site oficial da <strong className="text-[#004E8C]">MSH - Clínica, Gestão e Serviços Médicos LTDA</strong>. Estes Termos de Uso regulamentam a utilização de nossa plataforma digital e serviços associados. Ao navegar ou interagir com nosso site, você concorda integralmente com as condições aqui estabelecidas.
        </div>

        {/* Seção 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            1. Identificação do Controlador
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            O site e todo o seu conteúdo são operados e gerenciados pela <strong className="text-[#004E8C]">MSH - Clínica, Gestão e Serviços Médicos LTDA</strong>, pessoa jurídica de direito privado, inscrita no <strong className="text-[#004E8C]">CNPJ sob o nº 34.145.071/0001-02</strong>, com sede administrativa localizada na <strong className="text-[#004E8C]">Av. Brasil, 386 - Sala 04-B, Centro, Mandirituba/PR, CEP 83.800-036</strong>. Para questões relacionadas a estes termos, o contato deve ser realizado via e-mail: <strong className="text-[#004E8C]">administrativo@mshservicosmedicos.com.br</strong>.
          </p>
        </section>

        {/* Seção 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            2. Objeto dos Termos
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            Estes Termos de Uso estabelecem as regras e condições para acesso, navegação e utilização do site oficial da <strong className="text-[#004E8C]">MSH</strong>, bem como dos serviços, conteúdos e funcionalidades nele disponibilizados. O objetivo da plataforma é fornecer informações institucionais, facilitar o contato comercial e gerir o relacionamento com profissionais de saúde e parceiros. Ao acessar e utilizar o site, o usuário declara ter lido, compreendido e aceitado integralmente estes Termos. Caso não concorde com qualquer disposição, o usuário deve abster-se de utilizar a plataforma.
          </p>
        </section>

        {/* Seção 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            3. Definições
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">Para fins destes Termos, aplicam-se as seguintes definições:</p>
          <ul className="list-none my-4 mb-6 p-0">
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Usuário:</strong> Qualquer pessoa física ou jurídica que acesse ou interaja com o site.
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Site:</strong> O endereço eletrônico oficial da MSH e suas subpáginas.
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Conteúdo:</strong> Textos, imagens, vídeos, logotipos, designs e códigos que compõem a plataforma.
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Serviços:</strong> Funcionalidades de contato, cadastro de currículos e informações sobre gestão em saúde.
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">LGPD:</strong> Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Dados Pessoais:</strong> Informações relacionadas a pessoa natural identificada ou identificável.
            </li>
          </ul>
        </section>

        {/* Seção 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            4. Aceitação dos Termos
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            O acesso ao site implica na aceitação automática e integral destes Termos de Uso. A <strong className="text-[#004E8C]">MSH</strong> reserva-se o direito de modificar estes termos a qualquer momento, visando a melhoria dos serviços ou adequação legal, sendo responsabilidade do usuário revisá-los periodicamente. A continuidade do uso após a publicação de alterações constitui aceitação tácita das novas condições.
          </p>
        </section>

        {/* Seção 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            5. Descrição dos Serviços e Funcionalidades do Site
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">O site da <strong className="text-[#004E8C]">MSH</strong> tem como finalidade principal:</p>
          <ul className="list-none my-4 mb-6 p-0">
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Apresentar a empresa, sua missão, visão e valores no setor de saúde;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Divulgar os serviços de gestão em saúde, alocação de profissionais médicos e gestão de escalas;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Permitir o contato comercial e de parcerias através de formulários integrados e botões de redirecionamento para WhatsApp;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Receber cadastros e currículos de profissionais de saúde interessados em atuar nas unidades geridas pela MSH;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Disponibilizar informações institucionais e documentos de transparência;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Integrar a comunicação com redes sociais oficiais (Instagram, LinkedIn, YouTube).
            </li>
          </ul>
        </section>

        {/* Seção 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            6. Obrigações do Usuário
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">Ao utilizar nossa plataforma, o usuário obriga-se a:</p>
          <ul className="list-none my-4 mb-6 p-0">
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Fornecer dados verdadeiros, exatos e atualizados em formulários de contato ou cadastro;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Não utilizar o site para fins ilícitos, imorais ou que violem direitos de terceiros;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Não reproduzir, copiar ou explorar o conteúdo do site sem autorização prévia e por escrito;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Não tentar acessar áreas restritas do sistema ou interferir na segurança da plataforma;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Respeitar integralmente os direitos de propriedade intelectual da MSH;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Não utilizar ferramentas automatizadas (bots, spiders, scraping) para extrair dados sem autorização.
            </li>
          </ul>
        </section>

        {/* Seção 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            7. Direitos da MSH
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">A <strong className="text-[#004E8C]">MSH</strong> reserva-se o direito de, a seu exclusivo critério e a qualquer tempo:</p>
          <ul className="list-none my-4 mb-6 p-0">
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Modificar, suspender ou descontinuar qualquer aspecto do site ou seus serviços;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Bloquear o acesso de usuários que violem estes Termos ou a legislação vigente;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Remover conteúdos ou mensagens que considere inadequados ou ofensivos;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Monitorar o uso da plataforma para garantir a segurança e a integridade dos dados.
            </li>
          </ul>
        </section>

        {/* Seção 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            8. Propriedade Intelectual
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            Todo o conteúdo do site, incluindo, mas não se limitando a textos, imagens, logotipos, layouts, código-fonte, design e elementos gráficos, é de propriedade exclusiva da <strong className="text-[#004E8C]">MSH</strong> ou de terceiros que licenciaram seu uso, estando protegido pela <em className="text-[#555555]">Lei de Direitos Autorais (Lei nº 9.610/98)</em> e pela <em className="text-[#555555]">Lei da Propriedade Industrial (Lei nº 9.279/96)</em>. A reprodução, distribuição, modificação ou comercialização de qualquer conteúdo sem autorização expressa por escrito da <strong className="text-[#004E8C]">MSH</strong> é estritamente proibida e sujeita às sanções legais cabíveis.
          </p>
        </section>

        {/* Seção 9 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            9. Proteção de Dados Pessoais
          </h2>
          <div className="bg-[#FCE4EC] border-l-4 border-[#E91E63] p-6 rounded-r-lg my-6">
            <p className="mb-2 text-[0.95rem] text-[#1A1A1A] leading-relaxed">
              O tratamento de dados pessoais coletados através do site é regido pela <strong className="text-[#C2185B]">Política de Privacidade</strong> da empresa, em total conformidade com a <em className="text-[#555555]">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</em>.
            </p>
            <p className="mb-2 text-[0.95rem] text-[#1A1A1A] leading-relaxed">
              A <strong className="text-[#C2185B]">MSH</strong> adota medidas técnicas e administrativas para proteger as informações dos usuários. Recomendamos a leitura integral da Política de Privacidade disponível no rodapé do site.
            </p>
            <p className="mb-2 text-[0.95rem] text-[#1A1A1A] leading-relaxed">
              O usuário pode exercer seus direitos de titular (acesso, correção, exclusão) através do canal: <strong className="text-[#C2185B]">administrativo@mshservicosmedicos.com.br</strong>.
            </p>
          </div>
        </section>

        {/* Seção 10 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            10. Limitação de Responsabilidade
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">A <strong className="text-[#004E8C]">MSH</strong> empenha seus melhores esforços para manter o site seguro e funcional, contudo, não se responsabiliza por:</p>
          <ul className="list-none my-4 mb-6 p-0">
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Interrupções ou falhas técnicas decorrentes de serviços de terceiros ou provedores de internet;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Danos causados por vírus ou softwares maliciosos originados da navegação do usuário em outros sites;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Inexatidão de informações fornecidas por usuários em campos de preenchimento livre;
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              Conteúdo de sites de terceiros cujos links estejam presentes em nossa plataforma.
            </li>
          </ul>
        </section>

        {/* Seção 11 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            11. Links Externos e Terceiros
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            O site pode conter links para plataformas externas, como WhatsApp, Instagram e LinkedIn. A <strong className="text-[#004E8C]">MSH</strong> esclarece que não possui controle sobre tais plataformas e não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de segurança de sites de terceiros. A interação com esses links é de inteira responsabilidade do usuário.
          </p>
        </section>

        {/* Seção 12 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            12. Cookies e Tecnologias
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            Utilizamos cookies para otimizar a experiência de navegação e analisar o tráfego do site (via Google Analytics). Os cookies podem ser essenciais (necessários para o funcionamento) ou analíticos. O usuário pode gerenciar suas preferências de cookies através das configurações de seu navegador ou pelo banner de consentimento exibido no site.
          </p>
        </section>

        {/* Seção 13 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            13. Modificações dos Termos
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            Estes Termos de Uso podem ser atualizados periodicamente para refletir mudanças legislativas ou operacionais. A versão mais recente estará sempre disponível nesta página, com a respectiva data de atualização no topo do documento. O uso continuado do site após atualizações implica na concordância com os novos termos.
          </p>
        </section>

        {/* Seção 14 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            14. Legislação Aplicável e Foro
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">
            Estes Termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da <strong className="text-[#004E8C]">Comarca de Mandirituba/PR</strong> para dirimir quaisquer controvérsias oriundas deste documento, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>
        </section>

        {/* Seção 15 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[#004E8C] mb-4 pb-2 border-b-2 border-[#E6F0F8] flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-[#E91E63] rounded-sm shrink-0"></span>
            15. Canal de Comunicação
          </h2>
          <p className="text-[0.95rem] text-[#1A1A1A] text-justify mb-4 leading-relaxed">Para dúvidas, sugestões ou reclamações sobre estes Termos de Uso, entre em contato conosco:</p>
          <ul className="list-none my-4 mb-6 p-0">
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">E-mail:</strong> administrativo@mshservicosmedicos.com.br
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Endereço:</strong> Av. Brasil, 386 - Sala 04-B, Centro, Mandirituba/PR
            </li>
            <li className="text-[0.95rem] text-[#1A1A1A] py-2.5 pl-8 relative border-b border-[#E0E0E0] last:border-0 leading-relaxed">
              <span className="absolute left-0 top-2.5 text-[#E91E63] font-bold text-[1.1rem] leading-relaxed">+</span>
              <strong className="text-[#004E8C]">Canais Digitais:</strong> WhatsApp oficial disponível no site.
            </li>
          </ul>
        </section>

        {/* Botão Voltar */}
        <div className="text-center mt-12 pt-8 border-t border-[#E0E0E0]">
          <a href="#inicio" className="inline-block px-10 py-3.5 bg-[#0066B2] text-white no-underline rounded-md font-semibold text-[0.9rem] tracking-wider uppercase transition-all shadow-[0_2px_8px_rgba(0,102,178,0.2)] hover:bg-[#004E8C] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,102,178,0.3)]">
            Voltar à Página Inicial
          </a>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;
