import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/utils'

const footerNavigation = {
    navegacao: [
        { name: 'Home', href: '/' },
        { name: 'Sobre Mim', href: '/sobre' },
        { name: 'Serviços', href: '/servicos' },
        { name: 'Terapias Energéticas', href: '/terapias-energeticas' },
    ],
    loja: [
        { name: 'E-books', href: '/loja' },
        { name: 'Encantos da Mulher Poderosa', href: '/loja/encantos-mulher-poderosa' },
        { name: 'Abundância', href: '/loja/abundancia' },
        { name: 'Mente Livre, Alma Calma', href: '/loja/mente-livre-alma-calma' },
    ],
    recursos: [
        { name: 'Blog', href: '/blog' },
        { name: 'Contato', href: '/contato' },
        { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
        { name: 'Termos de Uso', href: '/termos-de-uso' },
        { name: 'Política de Reembolso', href: '/politica-de-reembolso' },
    ],
}

const WHATSAPP_NUMBER = '5521986972274'
const INSTAGRAM_URL = 'https://instagram.com/espaco_climaco'
const EMAIL = 'mariaclimacorj@gmail.com'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-b from-ameixa to-ameixa-dark text-white">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <svg
                                viewBox="0 0 100 100"
                                className="w-10 h-10 text-dourado"
                                fill="currentColor"
                            >
                                <path d="M50 20 C35 30, 30 45, 30 55 C30 65, 35 75, 50 80 C65 75, 70 65, 70 55 C70 45, 65 30, 50 20 Z M50 25 C40 35, 35 48, 35 55 C35 62, 40 70, 50 75 C60 70, 65 62, 65 55 C65 48, 60 35, 50 25 Z" />
                                <circle cx="50" cy="55" r="8" />
                            </svg>
                            <span className="font-playfair text-xl font-bold">Maria Climaco</span>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed mb-6">
                            Amor que cura. Energia que transforma. Feminino que desperta.
                        </p>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-white/80">
                                <Phone className="h-4 w-4 text-dourado" />
                                <a href={generateWhatsAppLink(WHATSAPP_NUMBER, '')} className="hover:text-dourado transition-colors">
                                    (11) 99999-9999
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <Mail className="h-4 w-4 text-dourado" />
                                <a href={`mailto:${EMAIL}`} className="hover:text-dourado transition-colors">
                                    {EMAIL}
                                </a>
                            </div>
                            <div className="flex items-start gap-2 text-white/80">
                                <MapPin className="h-4 w-4 text-dourado mt-0.5 flex-shrink-0" />
                                <span>Rua Exemplo, 123<br />São Paulo - SP</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold mb-4">Navegação</h3>
                        <ul className="space-y-2">
                            {footerNavigation.navegacao.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-white/80 hover:text-dourado transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold mb-4">Loja Digital</h3>
                        <ul className="space-y-2">
                            {footerNavigation.loja.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-white/80 hover:text-dourado transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources & Social */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold mb-4">Recursos</h3>
                        <ul className="space-y-2 mb-6">
                            {footerNavigation.recursos.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.href}
                                        className="text-white/80 hover:text-dourado transition-colors text-sm"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4">
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-dourado flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={generateWhatsAppLink(WHATSAPP_NUMBER, '')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-dourado flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Phone className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        <p>
                            © {currentYear} Maria Climaco. Todos os direitos reservados.
                        </p>
                        <p className="flex items-center gap-2">
                            Feito com <Heart className="h-4 w-4 text-rosa fill-current" /> para transformar vidas
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
