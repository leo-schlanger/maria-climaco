import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Label } from '../components/ui/Label'
import { Card } from '../components/ui/Card'
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2 } from 'lucide-react'
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
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-padding bg-gradient-to-br from-lavanda/10 via-rosa/10 to-offwhite">
                <div className="container-custom text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ameixa">
                        Entre em Contato
                    </h1>
                    <p className="text-xl text-ameixa/80 max-w-3xl mx-auto leading-relaxed">
                        Estou aqui para te ouvir. Vamos conversar sobre como posso ajudar você?
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <Card className="p-6 border-2 border-lavanda/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-dourado/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-dourado" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                                        <p className="text-sm text-ameixa/70 mb-3">Atendimento rápido e direto</p>
                                        <a
                                            href={generateWhatsAppLink(WHATSAPP_NUMBER, 'Olá! Vi seu site e gostaria de mais informações.')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-dourado hover:underline font-medium"
                                        >
                                            (21) 98697-2274
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-2 border-lavanda/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-lavanda/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-lavanda" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                                        <p className="text-sm text-ameixa/70 mb-3">Para dúvidas e orçamentos</p>
                                        <a
                                            href={`mailto:${EMAIL}`}
                                            className="text-lavanda hover:underline font-medium break-all text-sm"
                                        >
                                            {EMAIL}
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-2 border-lavanda/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-rosa/10 flex items-center justify-center flex-shrink-0">
                                        <Instagram className="h-6 w-6 text-rosa" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                                        <p className="text-sm text-ameixa/70 mb-3">Dicas e conteúdos diários</p>
                                        <a
                                            href={INSTAGRAM_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-rosa hover:underline font-medium"
                                        >
                                            @espaco_climaco
                                        </a>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-2 border-lavanda/20">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-dourado/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-dourado" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-lg mb-2">Endereço</h3>
                                        <p className="text-base">Av. Airton Senna, 5.500 - Bloco 3, Sala 126</p>
                                        <p className="text-base">Uptown Barra, Barra da Tijuca</p>
                                        <p className="text-base">Rio de Janeiro - RJ, CEP: 22775-005</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="p-8">
                                <h2 className="text-3xl font-playfair font-bold text-ameixa mb-6">
                                    Envie sua Mensagem
                                </h2>

                                {submitted && (
                                    <div className="mb-6 p-4 bg-lavanda/10 border-2 border-lavanda/30 rounded-lg flex items-center gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-lavanda flex-shrink-0" />
                                        <p className="text-ameixa">
                                            <strong>Mensagem enviada com sucesso!</strong> Retornarei em breve.
                                        </p>
                                    </div>
                                )}

                                <form
                                    name="contact"
                                    method="POST"
                                    data-netlify="true"
                                    netlify-honeypot="bot-field"
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    {/* Netlify Form Fields */}
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input type="hidden" name="bot-field" />

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="nome">Nome Completo *</Label>
                                            <Input
                                                id="nome"
                                                {...register('nome', { required: 'Nome é obrigatório' })}
                                                placeholder="Seu nome"
                                                aria-label="Nome completo"
                                                aria-required="true"
                                            />
                                            {errors.nome && (
                                                <p className="text-sm text-red-600">{errors.nome.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">E-mail *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                {...register('email', {
                                                    required: 'E-mail é obrigatório',
                                                    pattern: { value: /^\S+@\S+$/i, message: 'E-mail inválido' }
                                                })}
                                                placeholder="seu@email.com"
                                                aria-label="E-mail"
                                                aria-required="true"
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                                            <Input
                                                id="telefone"
                                                type="tel"
                                                {...register('telefone', { required: 'Telefone é obrigatório' })}
                                                placeholder="(21) 99999-9999"
                                                aria-label="Telefone"
                                                aria-required="true"
                                            />
                                            {errors.telefone && (
                                                <p className="text-sm text-red-600">{errors.telefone.message}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="tipo">Tipo de Atendimento *</Label>
                                            <select
                                                id="tipo"
                                                {...register('tipo', { required: 'Selecione um tipo' })}
                                                className="flex h-12 w-full rounded-lg border border-rosa-light bg-white px-4 py-3 text-base text-ameixa focus:outline-none focus:ring-2 focus:ring-dourado focus:border-transparent"
                                                aria-label="Tipo de atendimento"
                                                aria-required="true"
                                            >
                                                <option value="">Selecione...</option>
                                                <option value="fisioterapia">Fisioterapia</option>
                                                <option value="estetica">Estética</option>
                                                <option value="terapias-energeticas">Terapias Energéticas</option>
                                                <option value="pos-operatorio">Pós-operatório</option>
                                                <option value="orcamento">Orçamento</option>
                                                <option value="outro">Outro</option>
                                            </select>
                                            {errors.tipo && (
                                                <p className="text-sm text-red-600">{errors.tipo.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="mensagem">Mensagem *</Label>
                                        <Textarea
                                            id="mensagem"
                                            {...register('mensagem', { required: 'Mensagem é obrigatória' })}
                                            placeholder="Conte-me um pouco sobre o que você precisa..."
                                            rows={6}
                                            aria-label="Mensagem"
                                            aria-required="true"
                                        />
                                        {errors.mensagem && (
                                            <p className="text-sm text-red-600">{errors.mensagem.message}</p>
                                        )}
                                    </div>

                                    <Button type="submit" size="lg" className="w-full md:w-auto">
                                        <Send className="mr-2 h-5 w-5" />
                                        Enviar Mensagem
                                    </Button>
                                </form>
                            </Card>

                            {/* Map Placeholder */}
                            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-lavanda/20 to-rosa/20 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-ameixa/40 mx-auto mb-3" />
                                    <p className="text-ameixa/60">Mapa do Google será inserido aqui</p>
                                    <p className="text-sm text-ameixa/40 mt-1">Substitua com iframe do Google Maps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
