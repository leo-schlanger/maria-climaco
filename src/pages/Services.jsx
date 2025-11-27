import { Clock, Heart, CheckCircle2, XCircle, Phone } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { services, categories } from '../data/services'
import { generateWhatsAppLink } from '../lib/utils'

const WHATSAPP_NUMBER = '5521986972274'

export default function Services() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-lavanda/10 via-rosa/10 to-offwhite">
                <div className="container-custom text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ameixa">
                        Serviços Presenciais
                    </h1>
                    <p className="text-xl text-ameixa/80 max-w-3xl mx-auto leading-relaxed">
                        Tratamentos personalizados que integram corpo, mente e espírito para seu bem-estar completo
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="space-y-16">
                        {services.map((service) => (
                            <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="grid md:grid-cols-3">
                                    <div className="bg-gradient-to-br from-lavanda/20 to-offwhite p-8 flex items-center justify-center">
                                        <div className="text-6xl md:text-8xl">{service.icon}</div>
                                    </div>

                                    <div className="md:col-span-2 p-8 space-y-6">
                                        <CardHeader className="p-0">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <CardTitle className="text-3xl mb-2">{service.name}</CardTitle>
                                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                                </div>
                                                <div className="flex items-center gap-2 text-ameixa/60">
                                                    <Clock className="h-4 w-4" />
                                                    <span className="text-sm">{service.duration}</span>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="p-0 space-y-6">
                                            <p className="text-ameixa/80 leading-relaxed">{service.fullDescription}</p>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-dourado">
                                                        <Heart className="h-5 w-5" />
                                                        Benefícios
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {service.benefits.map((benefit, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                                <CheckCircle2 className="h-4 w-4 text-lavanda mt-0.5 flex-shrink-0" />
                                                                <span>{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-lavanda">
                                                            <CheckCircle2 className="h-5 w-5" />
                                                            Para quem é
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {service.forWho.map((item, idx) => (
                                                                <li key={idx} className="text-sm text-ameixa/70">• {item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-rosa">
                                                            <XCircle className="h-5 w-5" />
                                                            Contraindicações
                                                        </h4>
                                                        <ul className="space-y- 2">
                                                            {service.notForWho.map((item, idx) => (
                                                                <li key={idx} className="text-sm text-ameixa/70">• {item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button asChild size="lg" className="w-full md:w-auto">
                                                <a
                                                    href={generateWhatsAppLink(WHATSAPP_NUMBER, `Olá! Gostaria de agendar: ${service.name}`)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Phone className="h-5 w-5" />
                                                    Agendar {service.name}
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
