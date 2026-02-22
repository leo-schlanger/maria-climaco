import { Link } from 'react-router-dom'
import { Heart, Sparkles, Award, Star, ShieldCheck, Zap, History, Target, Eye, Gem, ArrowRight } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Separator } from '../components/ui/Separator'
import { Button } from '../components/ui/Button'
import { Card, CardContent } from '../components/ui/Card'

export default function About() {
    return (
        <div className="min-h-screen bg-offwhite">
            {/* Hero / Header */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-ameixa-dark text-white">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dourado/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavanda/10 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 animate-in slide-in-from-left duration-700">
                            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                                Conheça a Jornada
                            </Badge>
                            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                                Maria Climaco: <span className="text-dourado italic">Ciência & Essência</span>
                            </h1>
                            <p className="text-xl text-white/60 leading-relaxed font-light max-w-xl">
                                Fisioterapeuta com 28 anos de estrada, transformando vidas através de um olhar integral que une a excelência técnica à sensibilidade do sagrado feminino.
                            </p>

                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-dourado/20 flex items-center justify-center border border-dourado/30 backdrop-blur-sm">
                                        <Award className="h-6 w-6 text-dourado" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold font-playfair">28 Anos</p>
                                        <p className="text-xs uppercase tracking-tighter text-white/40 font-bold">De Experiência</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-lavanda/20 flex items-center justify-center border border-lavanda/30 backdrop-blur-sm">
                                        <Heart className="h-6 w-6 text-lavanda" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold font-playfair">10k+</p>
                                        <p className="text-xs uppercase tracking-tighter text-white/40 font-bold">Vidas Transformadas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative animate-in zoom-in duration-1000">
                            <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                                <img
                                    src="/maria-profile.jpg"
                                    alt="Maria Climaco"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ameixa/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-center p-6 bg-white/10 backdrop-blur-lg rounded-[2rem] border border-white/20">
                                    <p className="text-sm font-light italic text-white/80 leading-snug">
                                        "Acredito que a verdadeira cura acontece quando cuidamos do corpo e da alma de forma indissociável."
                                    </p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dourado rounded-[3rem] -z-10 blur-2xl opacity-30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content / Philosophy */}
            <section className="py-32">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-12 max-w-4xl mx-auto space-y-12">
                            <div className="space-y-6 text-center">
                                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-ameixa">Uma Vocação Esculpida pelo <span className="text-dourado">Cuidado</span></h2>
                                <Separator className="w-24 h-1.5 bg-dourado mx-auto rounded-full" />
                            </div>

                            <div className="prose prose-lg prose-ameixa max-w-none text-ameixa/70 leading-relaxed font-light space-y-8">
                                <p className="text-2xl text-ameixa font-playfair font-medium leading-relaxed italic border-l-4 border-lavanda pl-8 py-4 bg-lavanda/5 rounded-r-3xl">
                                    Há quase três décadas iniciei minha jornada na fisioterapia com um propósito claro: aliviar a dor e devolver qualidade de vida. O que eu não sabia era que essa jornada me levaria muito além dos músculos e ossos.
                                </p>

                                <p>
                                    Com o tempo, percebi que cada paciente trazia consigo não apenas dores musculares, mas também as cicatrizes invisíveis da alma. Especialmente as mulheres, que frequentemente carregam o peso emocional do mundo, esquecendo-se da própria luz e essência.
                                </p>

                                <p>
                                    Foi essa percepção que me fez expandir. Além da formação acadêmica rigorosa em <strong>Fisioterapia Ortopédica e Estética</strong>, me aprofundei nas terapias energéticas, no estudo do Sagrado Feminino e em abordagens que consideram o ser humano em sua totalidade multidimensional.
                                </p>

                                <div className="bg-white p-12 rounded-[3.5rem] border border-ameixa/5 shadow-sm my-16 relative overflow-hidden group">
                                    <Gem className="absolute -right-8 -bottom-8 w-40 h-40 text-ameixa/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                                    <blockquote className="relative z-10 text-3xl font-playfair font-bold text-ameixa leading-tight">
                                        "Minha missão é honrar a singularidade de cada mulher que atravessa minha porta, oferecendo mais do que técnica: ofereço presença, escuta ativa e um acolhimento que abraça a alma."
                                    </blockquote>
                                </div>

                                <p>
                                    Hoje, meu consultório é um refúgio onde integramos o estado da arte em tecnologia de reabilitação e estética com a sabedoria ancestral das terapias holísticas. Porque acredito que a beleza real e a saúde plena são reflexos de um interior em harmonia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: Target,
                                color: "text-dourado",
                                bg: "bg-dourado/5",
                                title: "Missão",
                                desc: "Acolher, curar e empoderar mulheres através de cuidados integrais que honram cada fase de sua existência."
                            },
                            {
                                icon: Eye,
                                color: "text-lavanda",
                                bg: "bg-lavanda/5",
                                title: "Visão",
                                desc: "Tornar-se o principal farol de cuidado feminino holístico, onde ciência e espiritualidade se encontram em harmonia."
                            },
                            {
                                icon: Star,
                                color: "text-rosa",
                                bg: "bg-rosa/5",
                                title: "Valores",
                                desc: "Amor profundo pelo que fazemos, ética inegociável, empatia radical e excelência técnica em cada detalhe."
                            }
                        ].map((pillar, i) => (
                            <Card key={i} className="rounded-[3rem] border-none bg-offwhite shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                                <CardContent className="p-12 text-center space-y-6">
                                    <div className={`w-20 h-20 mx-auto rounded-3xl ${pillar.bg} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                                        <pillar.icon className={`h-10 w-10 ${pillar.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-playfair font-bold text-ameixa">{pillar.title}</h3>
                                    <p className="text-ameixa/60 leading-relaxed font-light">
                                        {pillar.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-32 bg-offwhite">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge className="bg-ameixa/5 text-ameixa border-none py-1.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                Nossa História
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa">Linha do Tempo</h2>
                            <p className="text-ameixa/50 font-light italic">Reflexo de uma evolução constante em direção ao seu bem-estar.</p>
                        </div>

                        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-ameixa/10 before:to-transparent">
                            {[
                                { year: '1996', title: 'Graduação em Fisioterapia', desc: 'Início da jornada acadêmica e profissional com foco em reabilitação física clássica.' },
                                { year: '2003', title: 'Especialização Dermato-Funcional', desc: 'Expansão estratégica para a estética facial e corporal, descobrindo o poder da autoestima.' },
                                { year: '2010', title: 'O Despertar Holístico', desc: 'Integração de terapias energéticas e vibracionais ao portfólio de cuidados físicos.' },
                                { year: '2015', title: 'Ancestralidade e Sagrado Feminino', desc: 'Formação em rituais e terapias voltadas exclusivamente para a saúde e psique feminina.' },
                                { year: '2024', title: 'Abordagem Maria Climaco', desc: 'Consolidação de um método único que une alta tecnologia científica à sabedoria ancestral.' }
                            ].map((milestone, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group select-none">
                                    {/* Icon/Year dot */}
                                    <div className="flex items-center justify-center w-20 h-20 rounded-full border-4 border-offwhite bg-white shadow-lg text-ameixa z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-transform group-hover:scale-110">
                                        <History className="h-6 w-6 text-dourado" />
                                    </div>
                                    {/* Content Card */}
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 rounded-[2.5rem] bg-white border border-ameixa/5 shadow-sm group-hover:shadow-md transition-all">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-2xl font-bold font-playfair text-dourado">{milestone.year}</span>
                                            <Badge variant="outline" className="text-[9px] uppercase tracking-widest text-ameixa/30">Milestone</Badge>
                                        </div>
                                        <h4 className="text-lg font-bold text-ameixa mb-2">{milestone.title}</h4>
                                        <p className="text-sm text-ameixa/60 leading-relaxed font-light">{milestone.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="bg-ameixa rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-dourado/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative z-10 space-y-10 max-w-2xl mx-auto">
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white leading-tight">Vamos escrever o seu <span className="text-dourado">Próximo Capítulo</span>?</h2>
                            <p className="text-xl text-white/60 font-light leading-relaxed">
                                Estou aqui para guiar você em sua jornada de transformação, saúde e reconexão.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Button asChild size="lg" className="bg-white text-ameixa hover:bg-dourado hover:text-white h-16 px-12 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-black/10">
                                    <Link to="/contato" className="flex items-center gap-3">
                                        Agendar Consulta
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
