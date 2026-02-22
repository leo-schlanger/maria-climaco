export default function Terms() {
    const lastUpdate = "22 de Fevereiro de 2026"

    return (
        <div className="min-h-screen pt-32 pb-20 bg-offwhite">
            <div className="container-custom max-w-4xl bg-white p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-ameixa/5">
                <header className="mb-12 border-b border-ameixa/5 pb-8">
                    <h1 className="text-3xl md:text-5xl font-playfair font-bold text-ameixa mb-4">Termos de Uso</h1>
                    <p className="text-ameixa/40 text-sm uppercase tracking-widest font-bold">Última atualização: {lastUpdate}</p>
                </header>

                <div className="prose prose-ameixa max-w-none space-y-8 text-ameixa/70 leading-relaxed font-light">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e utilizar o site mariaclimaco.com, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">2. Serviços e Informações</h2>
                        <p>
                            Todo o conteúdo disponibilizado neste site tem finalidade informativa e educacional sobre os serviços de fisioterapia e bem-estar oferecidos por Maria Climaco. As informações aqui contidas não substituem a consulta profissional e avaliação individualizada.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">3. Propriedade Intelectual</h2>
                        <p>
                            Todo o material contido neste site, incluindo textos, imagens, logotipos e design, é de propriedade exclusiva de Maria Climaco ou utilizado sob licença. É proibida a reprodução, distribuição ou uso comercial de qualquer conteúdo sem autorização prévia por escrito.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">4. Produtos Digitais</h2>
                        <p>
                            Ao adquirir produtos em nossa loja digital (e-books, planners, meditações), você recebe uma licença de uso pessoal e não transferível. É proibido o compartilhamento de arquivos ou revenda de qualquer material digital adquirido através deste site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">5. Limitação de Responsabilidade</h2>
                        <p>
                            Maria Climaco não se responsabiliza por danos decorrentes do uso indevido das informações contidas no site ou por interrupções temporárias de acesso devido a questões técnicas fora de nosso controle.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-playfair font-bold text-ameixa">6. Alterações nos Termos</h2>
                        <p>
                            Estes termos podem ser atualizados periodicamente. Recomendamos a revisão regular desta página para estar ciente de qualquer alteração.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
