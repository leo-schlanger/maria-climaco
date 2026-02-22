export default function PrivacyPolicy() {
    const lastUpdate = "22 de Fevereiro de 2026"

    return (
        <div className="min-h-screen pt-32 pb-20 bg-offwhite">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-ameixa/5">
                <header className="mb-12 border-b border-ameixa/5 pb-8">
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold text-ameixa mb-4">Política de Privacidade</h1>
                    <p className="text-ameixa/40 text-sm uppercase tracking-widest font-bold">Última atualização: {lastUpdate}</p>
                </header>

                <div className="prose prose-ameixa max-w-none space-y-8 text-ameixa/70 leading-relaxed font-light">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">1. Compromisso com a sua Privacidade</h2>
                        <p>
                            A privacidade e a segurança dos dados de nossas pacientes e visitantes são fundamentais para a jornada de cuidado da Maria Climaco. Esta Política de Privacidade explica como coletamos, usamos, protegemos e compartilhamos suas informações pessoais ao utilizar nosso site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">2. Coleta de Informações</h2>
                        <p>Coletamos informações que você nos fornece diretamente quando:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Preenche o formulário de contato (nome, e-mail, telefone e mensagem).</li>
                            <li>Realiza uma compra em nossa loja digital através de nossos parceiros de pagamento (Gumroad).</li>
                            <li>Solicita agendamentos via WhatsApp.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">3. Uso das Informações</h2>
                        <p>Utilizamos os dados coletados para:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Responder às suas dúvidas e solicitações de agendamento.</li>
                            <li>Processar e entregar produtos digitais adquiridos.</li>
                            <li>Enviar informações relevantes sobre tratamentos e novidades (apenas com seu consentimento).</li>
                            <li>Melhorar a experiência de navegação em nosso site.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">4. Proteção de Dados</h2>
                        <p>
                            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados de saúde, compartilhados durante consultas ou triagens, são tratados com sigilo profissional absoluto, conforme o Código de Ética da Fisioterapia.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">5. Seus Direitos (LGPD)</h2>
                        <p>Você tem o direito de acessar, corrigir, excluir ou limitar o tratamento de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato através do e-mail: mariaclimacorj@gmail.com.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">6. Cookies</h2>
                        <p>Utilizamos cookies essenciais para o funcionamento do site e cookies analiticos que nos ajudam a entender como os visitantes interagem com o conteúdo, sempre de forma anônima.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
