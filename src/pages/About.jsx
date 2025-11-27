import { Heart, Sparkles, Award } from 'lucide-react'

export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-lavanda/10 via-rosa/10 to-offwhite">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ameixa">
                                Sobre Mim
                            </h1>
                            <p className="text-xl text-ameixa/80 leading-relaxed">
                                Maria Climaco - Fisioterapeuta & Terapeuta do Feminino
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-dourado/10 flex items-center justify-center">
                                        <Award className="h-6 w-6 text-dourado" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-ameixa">28 Anos</p>
                                        <p className="text-sm text-ameixa/60">de experiência</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-lavanda/10 flex items-center justify-center">
                                        <Heart className="h-6 w-6 text-lavanda" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-ameixa">Milhares</p>
                                        <p className="text-sm text-ameixa/60">de vidas transformadas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-lavanda via-rosa to-dourado p-1">
                                <div className="w-full h-full rounded-2xl bg-offwhite flex items-center justify-center">
                                    <Heart className="w-32 h-32 text-lavanda" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg max-w-none space-y-6 text-ameixa/80">
                        <p className="text-xl leading-relaxed">
                            Há 28 anos iniciei minha jornada na fisioterapia com um propósito claro: <strong className="text-ameixa">aliviar a dor e devolver qualidade de vida</strong> às pessoas. O que não sabia naquela época é que essa jornada me levaria muito além do corpo físico.
                        </p>

                        <p className="leading-relaxed">
                            Com o tempo, percebi que cada paciente trazia consigo não apenas dores musculares, mas também dores da alma. Mulheres que carregavam o peso do mundo nos ombros, que esqueceram de cuidar de si mesmas, que perderam a conexão com sua essência feminina.
                        </p>

                        <p className="leading-relaxed">
                            Foi então que minha busca por conhecimento se expandiu. Além da formação em Fisioterapia Ortopédica e Estética, mergulhei no universo das terapias energéticas, dos rituais femininos ancestrais, da medicina holística que vê o ser humano como um TODO integrado.
                        </p>

                        <blockquote className="border-l-4 border-dourado pl-6 py-4 my-8 text-xl font-playfair italic text-ameixa bg-dourado/5 rounded-r-lg">
                            "Cada mulher que atendo é um universo único. Minha missão é honrar essa singularidade, oferecendo não apenas técnica, mas presença, escuta e amor genuíno."
                        </blockquote>

                        <p className="leading-relaxed">
                            Hoje, integro o melhor dos dois mundos: a <strong>ciência comprovada</strong> da fisioterapia com equipamentos de última geração, e a <strong>sabedoria ancestral</strong> das terapias holísticas e rituais femininos. Porque acredito que verdadeira cura acontece quando cuidamos do corpo E da alma.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="section-padding bg-gradient-to-br from-offwhite to-lavanda/5">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4 p-8 rounded-2xl bg-white shadow-lg">
                            <div className="w-16 h-16 mx-auto rounded-full bg-dourado/10 flex items-center justify-center">
                                <Heart className="h-8 w-8 text-dourado" />
                            </div>
                            <h3 className="text-2xl font-playfair font-semibold text-ameixa">Missão</h3>
                            <p className="text-ameixa/70">
                                Acolher, curar e empoderar mulheres através de cuidados integrais que honram corpo, mente e espírito.
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 rounded-2xl bg-white shadow-lg">
                            <div className="w-16 h-16 mx-auto rounded-full bg-lavanda/10 flex items-center justify-center">
                                <Sparkles className="h-8 w-8 text-lavanda" />
                            </div>
                            <h3 className="text-2xl font-playfair font-semibold text-ameixa">Visão</h3>
                            <p className="text-ameixa/70">
                                Ser referência em cuidado feminino holístico, onde cada mulher se sinta vista, ouvida e profundamente cuidada.
                            </p>
                        </div>

                        <div className="text-center space-y-4 p-8 rounded-2xl bg-white shadow-lg">
                            <div className="w-16 h-16 mx-auto rounded-full bg-rosa/10 flex items-center justify-center">
                                <Award className="h-8 w-8 text-rosa" />
                            </div>
                            <h3 className="text-2xl font-playfair font-semibold text-ameixa">Valores</h3>
                            <p className="text-ameixa/70">
                                Amor, excelência técnica, empatia, ética, respeito à individualidade e compromisso com resultados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-4xl font-playfair font-bold text-center text-ameixa mb-16">
                        Jornada de 28 Anos
                    </h2>
                    <div className="space-y-8">
                        {[
                            { year: '1996', title: 'Graduação em Fisioterapia', description: 'Início da jornada profissional com foco em ortopedia' },
                            { year: '2003', title: 'Especialização em Estética', description: 'Expansão para fisioterapia dermato-funcional' },
                            { year: '2010', title: 'Terapias Energéticas', description: 'Mergulho no universo holístico e energético' },
                            { year: '2015', title: 'Rituais Femininos', description: 'Formação em terapias e rituais do sagrado feminino' },
                            { year: '2024', title: 'Abordagem Integrada', description: 'União de ciência e sabedoria ancestral para cuidado completo' }
                        ].map((milestone, idx) => (
                            <div key={idx} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-lavanda to-dourado flex items-center justify-center text-white font-bold">
                                    {milestone.year}
                                </div>
                                <div className="flex-1 pb-8 border-b border-rosa-light last:border-0">
                                    <h3 className="text-xl font-semibold text-ameixa mb-2">{milestone.title}</h3>
                                    <p className="text-ameixa/70">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
