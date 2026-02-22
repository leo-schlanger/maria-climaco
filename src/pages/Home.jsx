import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import {
    Heart, Sparkles, Flower2, Phone, ShoppingBag, ArrowRight,
    Stethoscope, Activity, Droplets, Coffee, Dumbbell, Zap, Moon, Wind, BookOpen, Star, Quote
} from 'lucide-react'
import { services } from '../data/services'
import { products } from '../data/products'
import { testimonials } from '../data/testimonials'
import { generateWhatsAppLink, formatPrice } from '../lib/utils'

const WHATSAPP_NUMBER = '5521986972274'
const WHATSAPP_MESSAGE = 'Olá, Maria! Gostaria de agendar um atendimento. Vi seu site e me interessei pelos seus serviços.'

// Icon mapping for services
const IconMap = {
    Stethoscope,
    Activity,
    Droplets,
    Coffee,
    Dumbbell,
    Zap,
    Moon,
    Wind,
    Sparkles
}

export default function Home() {
    const featuredServices = services.slice(0, 6)
    const featuredProducts = products.filter(p => p.featured)
    const featuredTestimonials = testimonials.slice(0, 3)

    return (
        <div className="min-h-screen bg-offwhite">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavanda/5 via-rosa/5 to-offwhite pt-20">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lavanda/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rosa/10 rounded-full blur-[120px] animate-pulse animation-delay-400" />
                </div>

                <div className="container-custom relative z-10 py-12">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left space-y-10 animate-fade-in">
                            <div className="inline-flex items-center gap-2">
                                <Badge variant="secondary" className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-rosa/20 text-ameixa border-rosa/30 shadow-sm">
                                    <Sparkles className="h-3 w-3 mr-1.5" />
                                    28 anos de experiência
                                </Badge>
                            </div>

                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-ameixa leading-[1.1] tracking-tight">
                                    Onde o <span className="text-gradient">cuidado</span><br />
                                    encontra a <span className="text-gradient italic">alma</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-ameixa/70 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                                    Fisioterapia avançada e terapias holísticas dedicadas ao despertar da mulher poderosa em você.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                                <Button asChild size="lg" variant="default" className="shadow-xl shadow-dourado/20 hover:shadow-dourado/40 group">
                                    <a
                                        href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Phone className="h-5 w-5" />
                                        Agende seu Atendimento
                                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-ameixa/10 text-ameixa hover:bg-ameixa/5 transition-all">
                                    <Link to="/loja" className="flex items-center gap-2">
                                        <ShoppingBag className="h-5 w-5" />
                                        Conheça nossa Loja
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:h-[700px] flex items-center justify-center animate-fade-in animation-delay-200">
                            <div className="relative w-full max-w-lg">
                                {/* Main Hero Image Container */}
                                <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-lavanda/20 via-rosa/20 to-dourado/20 p-px shadow-2xl">
                                    <div className="w-full h-full rounded-[2rem] bg-offwhite overflow-hidden relative group">
                                        <img
                                            src="/maria-profile.jpg"
                                            alt="Maria Climaco"
                                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ameixa/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>

                                {/* Floating Experience Badge */}
                                <div className="absolute -bottom-10 -left-10 md:-left-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-rosa/20 animate-bounce-subtle">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-dourado/10 flex items-center justify-center">
                                            <Heart className="h-8 w-8 text-dourado fill-dourado/20" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold font-playfair text-ameixa">+40k</p>
                                            <p className="text-xs font-semibold text-ameixa/60 uppercase tracking-wider">Altas médicas</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 bg-lavanda/30 rounded-full blur-3xl" />
                                <div className="absolute bottom-1/4 -right-8 w-24 h-24 bg-dourado/30 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-20 space-y-6">
                        <Badge variant="secondary" className="bg-lavanda/10 text-lavanda border-lavanda/20 px-6 py-1">NOSSA ESSÊNCIA</Badge>
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-ameixa">
                            Três Pilares da Sua <span className="text-gradient">Transformação</span>
                        </h2>
                        <p className="text-xl text-ameixa/60 max-w-2xl mx-auto font-light leading-relaxed">
                            Integramos ciência, amor e espiritualidade para proporcionar um cuidado que respeita sua individualidade.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: <Stethoscope className="h-10 w-10" />,
                                title: 'Cuidar do Corpo',
                                description: 'Excelência técnica em fisioterapia e estética avançada, fundamentada em 28 anos de prática clínica e resultados comprovados.',
                                color: 'lavanda',
                                tag: 'Ciência'
                            },
                            {
                                icon: <Heart className="h-10 w-10" />,
                                title: 'Curar a Alma',
                                description: 'Um ambiente de acolhimento seguro onde a escuta profunda e o amor são as principais ferramentas de cura emocional.',
                                color: 'rosa',
                                tag: 'Afeto'
                            },
                            {
                                icon: <Flower2 className="h-10 w-10" />,
                                title: 'Despertar o Feminino',
                                description: 'Rituais ancestrais e práticas energéticas que reconectam você com seu poder cíclico e sabedoria interior sagrada.',
                                color: 'dourado',
                                tag: 'Conexão'
                            }
                        ].map((pillar, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-offwhite to-white rounded-[2rem] transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border border-ameixa/5" />
                                <div className="relative p-10 flex flex-col items-center text-center space-y-6">
                                    <div className={`w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-ameixa group-hover:text-dourado transition-all duration-500 group-hover:rotate-6`}>
                                        {pillar.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <Badge variant="outline" className="border-ameixa/10 text-ameixa/40 text-[10px] tracking-widest uppercase">{pillar.tag}</Badge>
                                        <h3 className="text-2xl font-bold font-playfair text-ameixa group-hover:text-ameixa-light transition-colors">{pillar.title}</h3>
                                        <p className="text-ameixa/60 leading-relaxed font-light">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section-padding bg-gradient-to-b from-white via-lavanda/5 to-white relative">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="text-left space-y-4 max-w-2xl">
                            <Badge variant="secondary" className="bg-ameixa/5 text-ameixa border-ameixa/10">MENU DE CUIDADOS</Badge>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa">
                                Experiências que Renovam
                            </h2>
                            <p className="text-xl text-ameixa/60 font-light translate-y-2">
                                Uma seleção exclusiva dos meus serviços mais procurados para seu bem-estar integral.
                            </p>
                        </div>
                        <Button asChild variant="link" className="group text-ameixa font-bold text-lg p-0">
                            <Link to="/servicos" className="flex items-center gap-2">
                                Ver todos os serviços
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredServices.map((service, index) => {
                            const ServiceIcon = IconMap[service.icon] || Sparkles
                            return (
                                <Card key={service.id} className="group bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-500 border-rosa-light/20 hover:shadow-2xl hover:shadow-rosa/10 rounded-[2rem] overflow-hidden border-2 hover:border-dourado/20">
                                    <CardHeader className="pt-10 px-8 pb-4">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 rounded-2xl bg-lavanda/5 group-hover:bg-lavanda/10 flex items-center justify-center text-lavanda transition-all group-hover:scale-110">
                                                <ServiceIcon className="h-7 w-7" />
                                            </div>
                                            <Badge variant="outline" className="border-ameixa/10 text-ameixa/40 text-[10px]">{service.category}</Badge>
                                        </div>
                                        <CardTitle className="text-2xl font-playfair group-hover:text-dourado transition-colors mb-4 leading-tight">
                                            {service.name}
                                        </CardTitle>
                                        <CardDescription className="text-ameixa/60 text-base leading-relaxed line-clamp-3 font-light">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter className="px-8 pb-10">
                                        <Button asChild variant="outline" className="w-full rounded-xl border-ameixa/10 group-hover:border-ameixa group-hover:bg-ameixa group-hover:text-white transition-all">
                                            <Link to="/servicos">
                                                Conhecer Detalhes
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Showcase */}
            <section className="section-padding bg-ameixa relative overflow-hidden">
                {/* Decorative background logo/pattern */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none scale-150">
                    <img src="/logo.png" alt="" className="w-full max-w-4xl" />
                </div>

                <div className="container-custom relative z-10 text-center text-white space-y-12">
                    <Quote className="h-16 w-16 mx-auto text-dourado/40" />

                    <div className="max-w-4xl mx-auto space-y-10">
                        <blockquote className="text-3xl md:text-5xl font-playfair italic leading-[1.3] text-white/95">
                            "{featuredTestimonials[0].text}"
                        </blockquote>

                        <div className="space-y-4">
                            <div className="flex justify-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-dourado fill-dourado" />
                                ))}
                            </div>
                            <div className="space-y-1">
                                <p className="font-playfair text-2xl font-bold tracking-tight">{featuredTestimonials[0].name}</p>
                                <p className="text-dourado/80 text-sm font-semibold uppercase tracking-widest">{featuredTestimonials[0].service}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-10 flex flex-wrap justify-center gap-4">
                        <Badge variant="outline" className="border-white/20 text-white/60 px-6 py-2">
                            +500 depoimentos reais
                        </Badge>
                        <Badge variant="outline" className="border-white/20 text-white/60 px-6 py-2">
                            Nota 5.0 no Google
                        </Badge>
                    </div>
                </div>
            </section>

            {/* E-books/Shop Section */}
            <section className="section-padding bg-offwhite">
                <div className="container-custom">
                    <div className="text-center mb-20 space-y-6">
                        <Badge variant="secondary" className="bg-dourado/10 text-dourado border-dourado/20">BIBLIOTECA DIGITAL</Badge>
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-ameixa">
                            Sabedoria ao seu <span className="text-gradient">Alcance</span>
                        </h2>
                        <p className="text-xl text-ameixa/60 max-w-2xl mx-auto font-light">
                            Conhecimento profundo sistematizado em guias práticos para sua jornada diária.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 mb-16">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group space-y-6">
                                <div className="aspect-[3/4] rounded-[2.5rem] bg-gradient-to-br from-lavanda via-rosa to-dourado p-px transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                    <div className="w-full h-full rounded-[2.5rem] bg-white overflow-hidden flex flex-col items-center justify-center relative p-8">
                                        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                                            <Button asChild size="lg" className="rounded-full px-8 shadow-xl">
                                                <Link to={`/loja/${product.slug}`}>Explorar E-book</Link>
                                            </Button>
                                        </div>
                                        <BookOpen className="h-20 w-20 text-ameixa/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 transition-transform group-hover:scale-[1.8]" />
                                        <div className="relative z-0 text-center space-y-4">
                                            <Badge className="bg-ameixa/5 text-ameixa border-ameixa/10 uppercase tracking-widest text-[10px] mb-2">{product.category}</Badge>
                                            <h4 className="text-2xl font-playfair font-bold text-ameixa leading-tight">{product.name}</h4>
                                            <p className="text-sm text-ameixa/60 italic px-4">{product.tagline}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center space-y-2 px-4 transition-all duration-500">
                                    <p className="text-2xl font-bold text-ameixa">{formatPrice(product.price)}</p>
                                    <p className="text-sm text-ameixa/50 line-clamp-2 leading-relaxed">
                                        {product.shortDescription}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button asChild size="lg" variant="outline" className="rounded-full px-12 border-ameixa/20 text-ameixa font-bold hover:bg-ameixa hover:text-white transition-all h-14">
                            <Link to="/loja" className="flex items-center gap-3">
                                <ShoppingBag className="h-5 w-5" />
                                Ver Todos os Produtos
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container-custom">
                    <div className="bg-ameixa-dark rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                        {/* Decorative background glows */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-dourado/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavanda/10 rounded-full blur-[100px]" />

                        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                            <h2 className="text-4xl md:text-7xl font-playfair font-bold leading-tight">
                                Sua jornada de <span className="text-dourado">despertar</span> começa agora.
                            </h2>
                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
                                Agende seu atendimento exclusivo e sinta o poder da cura que integra corpo e alma.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                                <Button asChild size="lg" className="bg-white text-ameixa-dark hover:bg-dourado hover:text-white h-16 px-12 text-lg rounded-2xl shadow-xl transition-all duration-300">
                                    <a
                                        href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        <Phone className="h-5 w-5" />
                                        Fale Comigo agora
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
