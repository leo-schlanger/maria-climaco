import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Label } from '../components/ui/Label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Separator } from '../components/ui/Separator'
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2, MessageSquare, Info } from 'lucide-react'
import { generateWhatsAppLink } from '../lib/utils'

const WHATSAPP_NUMBER = '5521986972274'
const INSTAGRAM_URL = 'https://instagram.com/espaco_climaco'
const EMAIL = 'mariaclimacorj@gmail.com'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmit = async (data) => {
        // Netlify Forms integration happens automatically with the form name
        console.log('Form data:', data)
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <div className="min-h-screen bg-offwhite">
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-ameixa-dark text-white">
                <div className="absolute top-0 left-0 w-96 h-96 bg-lavanda/10 rounded-full blur-[100px] -ml-48 -mt-48" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-dourado/10 rounded-full blur-[100px] -mr-48 -mb-48" />

                <div className="container-custom relative z-10 text-center space-y-8">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                        Canais de Atendimento
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold">
                        Vou amar te <span className="text-dourado">ouvir</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-light">
                        Escolha o canal que preferir. Estou pronta para tirar suas dúvidas e iniciar sua jornada de transformação.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        {/* Contact info column */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-playfair font-bold text-ameixa">Informações</h2>
                                <p className="text-ameixa/60 font-light leading-relaxed">
                                    Meu espaço fica no coração da Barra da Tijuca, pensado para ser seu refúgio de paz.
                                </p>
                            </div>

                            <Separator className="bg-ameixa/10" />

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Phone className="h-5 w-5" />,
                                        title: 'WhatsApp',
                                        value: '(21) 98697-2274',
                                        link: generateWhatsAppLink(WHATSAPP_NUMBER, 'Olá! Vi seu site e gostaria de mais informações.'),
                                        color: 'dourado'
                                    },
                                    {
                                        icon: <Mail className="h-5 w-5" />,
                                        title: 'E-mail',
                                        value: EMAIL,
                                        link: `mailto:${EMAIL}`,
                                        color: 'lavanda'
                                    },
                                    {
                                        icon: <Instagram className="h-5 w-5" />,
                                        title: 'Instagram',
                                        value: '@espaco_climaco',
                                        link: INSTAGRAM_URL,
                                        color: 'rosa'
                                    }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.link}
                                        target={item.title !== 'E-mail' ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-5 group"
                                    >
                                        <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-ameixa group-hover:bg-ameixa group-hover:text-white transition-all duration-300 border border-ameixa/5`}>
                                            {item.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] uppercase font-bold tracking-widest text-ameixa/40">{item.title}</p>
                                            <p className="text-ameixa font-semibold transition-colors group-hover:text-dourado">{item.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <Card className="bg-ameixa border-none text-white p-8 rounded-[2.5rem] relative overflow-hidden shadow-xl mt-12">
                                <MapPin className="absolute top-4 right-4 h-20 w-20 text-white/5 -rotate-12" />
                                <div className="relative z-10 space-y-6">
                                    <Badge variant="outline" className="border-white/20 text-white/60 uppercase text-[10px] tracking-widest">Localização</Badge>
                                    <div className="space-y-2">
                                        <p className="text-lg font-playfair font-bold">Uptown Barra</p>
                                        <p className="text-sm text-white/60 leading-relaxed font-light">
                                            Av. Airton Senna, 5.500<br />
                                            Bloco 3, Sala 126<br />
                                            Barra da Tijuca - RJ
                                        </p>
                                    </div>
                                    <Button asChild size="sm" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-ameixa w-full rounded-xl">
                                        <a
                                            href="https://www.google.com/maps?q=Av.+Ayrton+Senna,+5500+-+Uptown+Barra,+Rio+de+Janeiro+-+RJ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Abrir no Maps
                                        </a>
                                    </Button>
                                </div>
                            </Card>
                        </div>

                        {/* Form column */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Map integration with premium styling */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-2xl font-playfair font-bold text-ameixa">Onde me encontrar</h2>
                                    <div className="h-px bg-ameixa/10 flex-grow" />
                                </div>
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border-8 border-white group relative">
                                    <iframe
                                        src="https://www.google.com/maps?q=Av.+Ayrton+Senna,+5500+-+Uptown+Barra,+Rio+de+Janeiro+-+RJ&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps - Espaço Clímaco"
                                        className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 pointer-events-none border border-ameixa/10 rounded-[2.5rem]" />
                                </div>
                            </div>

                            <Card className="p-1 md:p-12 rounded-[3rem] border border-ameixa/5 shadow-2xl bg-white overflow-hidden relative">
                                <div className="p-8 md:p-0 space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-lavanda/10 flex items-center justify-center text-lavanda">
                                                <MessageSquare className="h-5 w-5" />
                                            </div>
                                            <h2 className="text-3xl font-playfair font-bold text-ameixa">Envie sua Mensagem</h2>
                                        </div>
                                        <p className="text-ameixa/60 font-light max-w-xl">
                                            Preencha os campos abaixo e entrarei em contato o mais breve possível.
                                        </p>
                                    </div>

                                    {submitted && (
                                        <div className="p-6 bg-lavanda/10 border border-lavanda/20 rounded-2xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-lavanda shadow-sm">
                                                <CheckCircle2 className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-ameixa">Mensagem Enviada!</p>
                                                <p className="text-sm text-ameixa/60">Gratidão pelo contato. Retornarei em breve.</p>
                                            </div>
                                        </div>
                                    )}

                                    <form
                                        name="contact"
                                        method="POST"
                                        data-netlify="true"
                                        netlify-honeypot="bot-field"
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-8"
                                    >
                                        <input type="hidden" name="form-name" value="contact" />
                                        <input type="hidden" name="bot-field" />

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="nome" className="text-xs uppercase tracking-widest font-bold text-ameixa/60 ml-1">Nome Completo</Label>
                                                <Input
                                                    id="nome"
                                                    {...register('nome', { required: 'Nome é obrigatório' })}
                                                    placeholder="Maria da Silva"
                                                    className="rounded-2xl h-14 border-ameixa/10 bg-offwhite/50 focus:bg-white"
                                                />
                                                {errors.nome && <p className="text-xs text-red-500 font-medium ml-1">{errors.nome.message}</p>}
                                            </div>

                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-ameixa/60 ml-1">E-mail para resposta</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    {...register('email', {
                                                        required: 'E-mail é obrigatório',
                                                        pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' }
                                                    })}
                                                    placeholder="seu@email.com"
                                                    className="rounded-2xl h-14 border-ameixa/10 bg-offwhite/50 focus:bg-white"
                                                />
                                                {errors.email && <p className="text-xs text-red-500 font-medium ml-1">{errors.email.message}</p>}
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="telefone" className="text-xs uppercase tracking-widest font-bold text-ameixa/60 ml-1">WhatsApp</Label>
                                                <Input
                                                    id="telefone"
                                                    type="tel"
                                                    {...register('telefone', { required: 'Telefone é obrigatório' })}
                                                    placeholder="(21) 99999-9999"
                                                    className="rounded-2xl h-14 border-ameixa/10 bg-offwhite/50 focus:bg-white"
                                                />
                                                {errors.telefone && <p className="text-xs text-red-500 font-medium ml-1">{errors.telefone.message}</p>}
                                            </div>

                                            <div className="space-y-3">
                                                <Label htmlFor="tipo" className="text-xs uppercase tracking-widest font-bold text-ameixa/60 ml-1">Assunto de interesse</Label>
                                                <div className="relative">
                                                    <select
                                                        id="tipo"
                                                        {...register('tipo', { required: 'Selecione um tipo' })}
                                                        className="flex h-14 w-full rounded-2xl border border-ameixa/10 bg-offwhite/50 focus:bg-white px-4 py-3 text-base text-ameixa transition-all duration-200 outline-none focus:ring-2 focus:ring-dourado appearance-none"
                                                    >
                                                        <option value="">Selecione...</option>
                                                        <option value="fisioterapia">Fisioterapia</option>
                                                        <option value="estetica">Estética</option>
                                                        <option value="terapias-energeticas">Terapias Energéticas</option>
                                                        <option value="pos-operatorio">Pós-operatório</option>
                                                        <option value="orcamento">Orçamento</option>
                                                        <option value="outro">Outro</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                        <Info className="h-4 w-4 text-ameixa/30" />
                                                    </div>
                                                </div>
                                                {errors.tipo && <p className="text-xs text-red-500 font-medium ml-1">{errors.tipo.message}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="mensagem" className="text-xs uppercase tracking-widest font-bold text-ameixa/60 ml-1">Sua Mensagem</Label>
                                            <Textarea
                                                id="mensagem"
                                                {...register('mensagem', { required: 'Mensagem é obrigatória' })}
                                                placeholder="Conte-me um pouco sobre o que você precisa..."
                                                className="rounded-[2rem] p-6 border-ameixa/10 bg-offwhite/50 focus:bg-white min-h-[180px]"
                                            />
                                            {errors.mensagem && <p className="text-xs text-red-500 font-medium ml-1">{errors.mensagem.message}</p>}
                                        </div>

                                        <Button type="submit" size="lg" className="w-full h-16 rounded-[2rem] bg-ameixa hover:bg-dourado transition-all duration-300 text-lg font-bold shadow-xl shadow-ameixa/10 flex items-center gap-3">
                                            <Send className="h-5 w-5" />
                                            Enviar Mensagem Agora
                                        </Button>
                                    </form>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
