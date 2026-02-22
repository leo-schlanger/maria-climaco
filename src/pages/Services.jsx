import {
    Clock, Heart, CheckCircle2, XCircle, Phone, Sparkles,
    Stethoscope, Activity, Droplets, Coffee, Dumbbell, Zap, Moon, Wind,
    Info, Calendar
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/Card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/Accordion'
import { Badge } from '../components/ui/Badge'
import { Separator } from '../components/ui/Separator'
import { services, categories } from '../data/services'
import { generateWhatsAppLink } from '../lib/utils'

const WHATSAPP_NUMBER = '5521986972274'

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

export default function Services() {
    return (
        <div className="min-h-screen bg-offwhite">
            {/* Legend/Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-ameixa-dark text-white">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dourado/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavanda/10 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="container-custom relative z-10 text-center space-y-8">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                        Cuidado Profissional
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold">
                        O Menu da sua <span className="text-dourado">Cura</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                        Protocolos exclusivos que unem 28 anos de expertise clínica à sabedoria das terapias integrativas. Escolha o seu momento de despertar.
                    </p>
                </div>
            </section>

            {/* Main Content with Tabs */}
            <section className="py-20">
                <div className="container-custom">
                    <Tabs defaultValue="fisioterapia" className="w-full space-y-12">
                        <div className="flex justify-center">
                            <TabsList className="bg-white/50 backdrop-blur-sm p-1.5 h-auto rounded-2xl border border-ameixa/5 shadow-xl grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl gap-2">
                                {categories.map((category) => (
                                    <TabsTrigger
                                        key={category.id}
                                        value={category.id}
                                        className="rounded-xl px-4 py-3 data-[state=active]:bg-ameixa data-[state=active]:text-white transition-all duration-300 font-semibold text-sm"
                                    >
                                        {category.name}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {categories.map((category) => (
                            <TabsContent key={category.id} value={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 outline-none">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    {/* Category Info Sidebar */}
                                    <div className="lg:col-span-1 space-y-8">
                                        <div className="bg-white p-10 rounded-[2.5rem] border border-ameixa/5 shadow-xl space-y-6">
                                            <Badge variant="secondary" className="bg-dourado/10 text-dourado border-dourado/20">CATEGORIA</Badge>
                                            <h2 className="text-4xl font-playfair font-bold text-ameixa">{category.name}</h2>
                                            <p className="text-ameixa/60 leading-relaxed font-light">
                                                {category.id === 'fisioterapia' && "Abordagem técnica para reabilitação física e melhora da qualidade de vida através do movimento."}
                                                {category.id === 'estetica' && "Tratamentos focados na harmonia facial e corporal, aliando tecnologia e resultados práticos."}
                                                {category.id === 'terapeutica' && "Massagens e toques que promovem o relaxamento profundo e o alívio das tensões acumuladas."}
                                                {category.id === 'energia' && "Rituais e práticas integrativas para o equilíbrio dos corpos físico, emocional e vibracional."}
                                            </p>
                                            <Separator className="bg-ameixa/5" />
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3 text-sm text-ameixa font-medium">
                                                    <div className="w-8 h-8 rounded-full bg-ameixa/5 flex items-center justify-center text-ameixa">
                                                        <Clock className="h-4 w-4" />
                                                    </div>
                                                    Sessões de 45 a 120 min
                                                </div>
                                                <div className="flex items-center gap-3 text-sm text-ameixa font-medium">
                                                    <div className="w-8 h-8 rounded-full bg-ameixa/5 flex items-center justify-center text-ameixa">
                                                        <Calendar className="h-4 w-4" />
                                                    </div>
                                                    Atendimento presencial
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Services Accordion */}
                                    <div className="lg:col-span-2 space-y-6">
                                        <Accordion type="single" collapsible className="space-y-6 w-full">
                                            {services.filter(s => s.category === category.id).map((service) => {
                                                const ServiceIcon = IconMap[service.icon] || Sparkles
                                                return (
                                                    <AccordionItem
                                                        key={service.id}
                                                        value={service.id}
                                                        className="bg-white border border-ameixa/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                                    >
                                                        <AccordionTrigger className="px-8 py-8 hover:no-underline group">
                                                            <div className="flex items-center gap-6 text-left">
                                                                <div className="w-14 h-14 rounded-2xl bg-offwhite flex items-center justify-center text-ameixa group-hover:scale-110 group-hover:bg-ameixa group-hover:text-white transition-all duration-500">
                                                                    <ServiceIcon className="h-7 w-7" />
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-ameixa">{service.name}</h3>
                                                                    <p className="text-sm text-ameixa/50 font-normal mt-1">{service.description}</p>
                                                                </div>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent className="px-8 pb-8 pt-0">
                                                            <div className="space-y-8 animate-in fade-in duration-500 text-base">
                                                                <Separator className="bg-ameixa/5" />

                                                                <div className="grid md:grid-cols-2 gap-10">
                                                                    <div className="space-y-6">
                                                                        <div className="space-y-4">
                                                                            <h4 className="flex items-center gap-2 font-bold text-ameixa uppercase tracking-widest text-xs">
                                                                                <Info className="h-4 w-4 text-dourado" />
                                                                                Sobre o Tratamento
                                                                            </h4>
                                                                            <p className="text-ameixa/70 leading-relaxed font-light italic">
                                                                                {service.fullDescription}
                                                                            </p>
                                                                        </div>

                                                                        <div className="space-y-4">
                                                                            <h4 className="flex items-center gap-2 font-bold text-ameixa uppercase tracking-widest text-xs">
                                                                                <Heart className="h-4 w-4 text-rosa" />
                                                                                Benefícios Principais
                                                                            </h4>
                                                                            <ul className="grid grid-cols-1 gap-3">
                                                                                {service.benefits.map((benefit, bIdx) => (
                                                                                    <li key={bIdx} className="flex items-start gap-3 text-sm text-ameixa/60 bg-offwhite/50 p-2 rounded-lg">
                                                                                        <CheckCircle2 className="h-4 w-4 text-lavanda flex-shrink-0 mt-0.5" />
                                                                                        {benefit}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <div className="space-y-8">
                                                                        <div className="bg-offwhite p-6 rounded-2xl space-y-4">
                                                                            <h4 className="flex items-center gap-2 font-bold text-ameixa uppercase tracking-widest text-xs">
                                                                                Para quem é recomendado
                                                                            </h4>
                                                                            <ul className="space-y-2">
                                                                                {service.forWho.map((item, fIdx) => (
                                                                                    <li key={fIdx} className="text-sm text-ameixa/60 flex items-center gap-2">
                                                                                        <div className="w-1 h-1 rounded-full bg-ameixa/20" />
                                                                                        {item}
                                                                                    </li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>

                                                                        {service.notForWho && service.notForWho.length > 0 && (
                                                                            <div className="bg-rosa/5 p-6 rounded-2xl space-y-4 border border-rosa/10">
                                                                                <h4 className="flex items-center gap-2 font-bold text-rosa-dark uppercase tracking-widest text-xs">
                                                                                    <XCircle className="h-4 w-4" />
                                                                                    Contraindicações
                                                                                </h4>
                                                                                <ul className="space-y-2">
                                                                                    {service.notForWho.map((item, nIdx) => (
                                                                                        <li key={nIdx} className="text-sm text-rosa-dark/60 flex items-center gap-2">
                                                                                            <div className="w-1 h-1 rounded-full bg-rosa/20" />
                                                                                            {item}
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        )}

                                                                        <Button asChild className="w-full h-14 rounded-2xl bg-ameixa hover:bg-dourado transition-all duration-300 shadow-lg shadow-ameixa/10">
                                                                            <a
                                                                                href={generateWhatsAppLink(WHATSAPP_NUMBER, `Olá, Maria! Vi seu site e gostaria de agendar uma sessão de ${service.name}.`)}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="flex items-center justify-center gap-3 text-lg font-bold"
                                                                            >
                                                                                <Phone className="h-5 w-5" />
                                                                                Agendar Agora
                                                                            </a>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                )
                                            })}
                                        </Accordion>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-lavanda/5 border-2 border-lavanda/10 rounded-[3rem] p-12 text-center space-y-8">
                        <h2 className="text-2xl md:text-4xl font-playfair font-bold text-ameixa">Dúvidas sobre o tratamento ideal?</h2>
                        <p className="text-xl text-ameixa/60 max-w-2xl mx-auto font-light leading-relaxed">
                            Eu posso te ajudar a escolher o protocolo mais indicado para o seu momento atual. Entre em contato para uma breve triagem.
                        </p>
                        <Button asChild variant="outline" size="lg" className="rounded-2xl px-12 border-ameixa/20 text-ameixa h-16 text-lg font-bold hover:bg-ameixa hover:text-white transition-all">
                            <a
                                href={generateWhatsAppLink(WHATSAPP_NUMBER, "Olá, Maria! Gostaria de tirar algumas dúvidas sobre seus serviços.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3"
                            >
                                <Phone className="h-5 w-5" />
                                Conversar pelo WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
