import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin, Heart, Sparkles } from 'lucide-react'
import { Separator } from '../ui/Separator'
import { generateWhatsAppLink } from '@/lib/utils'

const footerNavigation = {
    navegacao: [
        { name: 'Home', href: '/' },
        { name: 'Sobre Mim', href: '/sobre' },
        { name: 'Serviços', href: '/servicos' },
    ],
    loja: [
        { name: 'Loja Digital', href: '/loja' },
        { name: 'Encantos da Mulher Poderosa', href: '/loja/encantos-mulher-poderosa' },
        { name: 'Abundância', href: '/loja/abundancia' },
        { name: 'Mente Livre, Alma Calma', href: '/loja/mente-livre-alma-calma' },
    ],
    recursos: [
        { name: 'Blog', href: '/blog' },
        { name: 'Contato', href: '/contato' },
        { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
        { name: 'Termos de Uso', href: '/termos-de-uso' },
    ],
}

const WHATSAPP_NUMBER = '5521986972274'
const INSTAGRAM_URL = 'https://instagram.com/espaco_climaco'
const EMAIL = 'mariaclimacorj@gmail.com'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-ameixa-dark text-white border-t border-white/5">
            <div className="container-custom py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link to="/" className="inline-block outline-none">
                            <div className="flex items-center gap-4 group">
                                <img
                                    src="/logo.png"
                                    alt="Maria Climaco"
                                    className="h-16 md:h-24 w-auto group-hover:scale-105 transition-transform duration-500 brightness-110"
                                />
                                <div className="flex flex-col pt-3 md:pt-4">
                                    <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight">Maria Climaco</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mt-2">Fisioterapia & Bem-estar</span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs italic">
                            "Amor que cura, toque que transforma. Despertando a essência poderosa de cada mulher."
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Instagram className="h-5 w-5" />, href: INSTAGRAM_URL, label: 'Instagram' },
                                { icon: <Phone className="h-5 w-5" />, href: generateWhatsAppLink(WHATSAPP_NUMBER, ''), label: 'WhatsApp' },
                                { icon: <Mail className="h-5 w-5" />, href: `mailto:${EMAIL}`, label: 'Email' }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-dourado flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-dourado hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div className="space-y-6">
                            <h3 className="font-playfair text-lg font-semibold text-dourado flex items-center gap-2">
                                <Sparkles className="h-4 w-4" />
                                Navegação
                            </h3>
                            <ul className="space-y-3">
                                {footerNavigation.navegacao.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className="text-white/60 hover:text-white transition-colors text-sm font-medium inline-block relative group"
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-dourado transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h3 className="font-playfair text-lg font-semibold text-dourado flex items-center gap-2">
                                <Heart className="h-4 w-4" />
                                Loja Digital
                            </h3>
                            <ul className="space-y-3">
                                {footerNavigation.loja.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className="text-white/60 hover:text-white transition-colors text-sm font-medium inline-block relative group"
                                        >
                                            {item.name}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-dourado transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact info Section */}
                    <div className="space-y-6">
                        <h3 className="font-playfair text-lg font-semibold text-dourado">Localização</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-dourado/10 flex items-center justify-center flex-shrink-0 group-hover:bg-dourado/20 transition-colors">
                                    <MapPin className="h-4 w-4 text-dourado" />
                                </div>
                                <span className="text-white/60 leading-relaxed">
                                    Av. Airton Senna, 5.500<br />
                                    Bloco 3, Sala 126<br />
                                    Uptown Barra - RJ
                                </span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-dourado/10 flex items-center justify-center flex-shrink-0 group-hover:bg-dourado/20 transition-colors">
                                    <Phone className="h-4 w-4 text-dourado" />
                                </div>
                                <a href={generateWhatsAppLink(WHATSAPP_NUMBER, '')} className="text-white/60 hover:text-white transition-colors">
                                    (21) 98697-2274
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <Separator className="bg-white/10" />
                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-medium tracking-wide">
                        <p>
                            © {currentYear} MARIA CLIMACO. ALL RIGHTS RESERVED.
                        </p>
                        <div className="flex items-center gap-6">
                            {footerNavigation.recursos.slice(2).map((item) => (
                                <Link key={item.name} to={item.href} className="hover:text-white transition-colors uppercase">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <p className="flex items-center gap-2 group">
                            MADE BY <a href="https://leoschlanger.com" target="_blank" rel="noopener noreferrer" className="text-dourado hover:text-white hover:underline transition-all font-bold">LEO SCHLANGER</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
