import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card'
import { Heart, Sparkles, Flower2, Phone, ShoppingBag, ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import { products } from '../data/products'
import { testimonials } from '../data/testimonials'
import { generateWhatsAppLink } from '../lib/utils'

const WHATSAPP_NUMBER = '5521986972274'
const WHATSAPP_MESSAGE = 'Olá, Maria! Gostaria de agendar um atendimento. Vi seu site e me interessei pelos seus serviços.'

export default function Home() {
    const featuredServices = services.slice(0, 6)
    const featuredProducts = products.filter(p => p.featured)
    const featuredTestimonials = testimonials.slice(0, 3)

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavanda/20 via-rosa/20 to-offwhite pt-20">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lavanda/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rosa/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left space-y-8 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavanda/10 rounded-full text-lavanda text-sm font-medium">
                                <Sparkles className="h-4 w-4" />
                                <span>28 anos transformando vidas</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-ameixa leading-tight">
                                Amor que cura,<br />
                                toque que <span className="text-gradient">transforma</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-ameixa/80 leading-relaxed">
                                Energia que desperta a mulher poderosa em você
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Button asChild size="lg" variant="default">
                                    <a
                                        href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2"
                                    >
                                        <Phone className="h-5 w-5" />
                                        Agende seu Atendimento
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <Link to="/loja" className="flex items-center gap-2">
                                        <ShoppingBag className="h-5 w-5" />
                                        Conheça os E-books
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in animation-delay-200">
                            <div className="relative w-full max-w-md">
                                {/* Placeholder for hero image */}
                                <div className="aspect-square rounded-full bg-gradient-to-br from-lavanda via-rosa to-dourado p-1">
                                    <div className="w-full h-full rounded-full bg-offwhite overflow-hidden">
                                        <img
                                            src="/maria-profile.jpg"
                                            alt="Maria Climaco"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Decorative floating elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-dourado/20 rounded-full blur-xl animate-pulse" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-lavanda/20 rounded-full blur-xl animate-pulse animation-delay-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Three Pillars Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa">
                            Três Pilares da Transformação
                        </h2>
                        <p className="text-xl text-ameixa/70 max-w-2xl mx-auto">
                            Uma abordagem integrada para seu bem-estar completo
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="h-12 w-12" />,
                                title: 'Cuidar do Corpo',
                                description: 'Com conhecimento técnico e 28 anos de experiência em fisioterapia e estética avançada',
                                color: 'lavanda'
                            },
                            {
                                icon: <Sparkles className="h-12 w-12" />,
                                title: 'Curar a Alma',
                                description: 'Com amor, acolhimento e escuta profunda do que seu coração precisa',
                                color: 'rosa'
                            },
                            {
                                icon: <Flower2 className="h-12 w-12" />,
                                title: 'Despertar o Feminino',
                                description: 'Através de rituais sagrados e reconexão com seu poder interior',
                                color: 'dourado'
                            }
                        ].map((pillar, index) => (
                            <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-lavanda/20">
                                <CardHeader>
                                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-lavanda/10 flex items-center justify-center text-lavanda">
                                        {pillar.icon}
                                    </div>
                                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {pillar.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Highlight */}
            <section className="section-padding bg-gradient-to-b from-offwhite to-lavanda/5">
                <div className="container-custom">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa">
                            Serviços que Transformam
                        </h2>
                        <p className="text-xl text-ameixa/70 max-w-2xl mx-auto">
                            Escolha o cuidado que seu corpo, mente e alma precisam agora
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {featuredServices.map((service, index) => (
                            <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300">
                                <CardHeader>
                                    <div className="text-4xl mb-3">{service.icon}</div>
                                    <CardTitle className="text-xl group-hover:text-dourado transition-colors">
                                        {service.name}
                                    </CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button asChild variant="outline" className="w-full">
                                        <Link to="/servicos">
                                            Saiba Mais
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button asChild size="lg" variant="secondary">
                            <Link to="/servicos">
                                Ver Todos os Serviços
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="section-padding bg-gradient-to-br from-ameixa to-ameixa-dark text-white">
                <div className="container-custom max-w-4xl text-center space-y-8">
                    <Sparkles className="h-12 w-12 mx-auto text-dourado" />
                    <blockquote className="text-2xl md:text-3xl font-playfair italic leading-relaxed">
                        "{featuredTestimonials[0].text}"
                    </blockquote>
                    <div>
                        <p className="font-semibold text-lg">{featuredTestimonials[0].name}</p>
                        <p className="text-white/70">{featuredTestimonials[0].service}</p>
                    </div>
                </div>
            </section>

            {/* E-books Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa">
                            E-books para sua Transformação
                        </h2>
                        <p className="text-xl text-ameixa/70 max-w-2xl mx-auto">
                            Conhecimento que cabe no seu bolso, transformação que dura para sempre
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {featuredProducts.map((product) => (
                            <Card key={product.id} className="hover:shadow-2xl transition-all duration-300">
                                <CardHeader>
                                    <div className="aspect-[3/4] bg-gradient-to-br from-lavanda via-rosa to-dourado rounded-lg mb-4 flex items-center justify-center">
                                        <span className="text-6xl">📚</span>
                                    </div>
                                    <CardTitle className="text-xl">{product.name}</CardTitle>
                                    <CardDescription>{product.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold text-dourado mb-2">
                                        R$ {product.price.toFixed(2).replace('.', ',')}
                                    </p>
                                    <p className="text-sm text-ameixa/70">{product.shortDescription}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild variant="default" className="w-full">
                                        <Link to={`/loja/${product.slug}`}>
                                            Ver Detalhes
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button asChild size="lg" variant="outline">
                            <Link to="/loja">
                                Ver Todos os Produtos
                                <ShoppingBag className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-lavanda via-rosa to-dourado text-white">
                <div className="container-custom text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold">
                        Pronta para transformar sua vida?
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto opacity-95">
                        Agende seu atendimento agora e comece sua jornada de cura, amor e despertar
                    </p>
                    <Button asChild size="lg" className="bg-white text-ameixa hover:bg-offwhite">
                        <a
                            href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            Fale Comigo no WhatsApp
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    )
}
