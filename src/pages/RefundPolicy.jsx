export default function RefundPolicy() {
    const lastUpdate = "22 de Fevereiro de 2026"

    return (
        <div className="min-h-screen pt-32 pb-20 bg-offwhite">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-ameixa/5">
                <header className="mb-12 border-b border-ameixa/5 pb-8">
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold text-ameixa mb-4">Política de Reembolso</h1>
                    <p className="text-ameixa/40 text-sm uppercase tracking-widest font-bold">Última atualização: {lastUpdate}</p>
                </header>

                <div className="prose prose-ameixa max-w-none space-y-8 text-ameixa/70 leading-relaxed font-light">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">1. Produtos Digitais</h2>
                        <p>
                            Devido à natureza dos produtos digitais (e-books, meditações, arquivos para download), uma vez que o acesso ao conteúdo é concedido, não é possível realizar a devolução física do item.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">2. Prazo de Arrependimento</h2>
                        <p>
                            Conforme o Código de Defesa do Consumidor, você tem o direito de desistir da compra em até 7 (sete) dias corridos após o recebimento do acesso ao produto, desde que o conteúdo não tenha sido integralmente consumido ou baixado.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">3. Processo de Reembolso</h2>
                        <p>
                            Para solicitar o reembolso dentro do prazo legal, envie um e-mail para mariaclimacorj@gmail.com com os dados da compra. Analisaremos sua solicitação em até 5 dias úteis.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">4. Serviços Presenciais</h2>
                        <p>
                            Para cancelamento ou reagendamento de consultas presenciais, solicitamos o aviso prévio de 24 horas. Reembolsos de valores pagos antecipadamente serão tratados individualmente conforme a antecedência do cancelamento.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
