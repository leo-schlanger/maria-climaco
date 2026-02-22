import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import { generateWhatsAppLink } from '@/lib/utils'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Mim', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Terapias Energéticas', href: '/terapias-energeticas' },
    { name: 'Loja', href: '/loja' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
]

const WHATSAPP_NUMBER = '5521986972274'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um atendimento com a Maria Climaco.'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <nav className="container-custom" aria-label="Global">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex lg:flex-1">
                        <Link to="/" className="flex items-center space-x-3 group">
                            <img
                                src="/logo.png"
                                alt="Maria Climaco"
                                className="h-20 md:h-24 w-auto group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="font-playfair text-2xl font-bold text-ameixa group-hover:text-dourado transition-colors duration-300">
                                Maria Climaco
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2.5 text-ameixa hover:bg-rosa-light/30 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-medium transition-colors hover:text-dourado relative group ${location.pathname === item.href
                                    ? 'text-dourado'
                                    : 'text-ameixa'
                                    }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-dourado transition-all duration-300 group-hover:w-full ${location.pathname === item.href ? 'w-full' : ''
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Button
                            asChild
                            variant="default"
                            size="sm"
                        >
                            <a
                                href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <Phone className="h-4 w-4" />
                                Agendar
                            </a>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-rosa-light/30 shadow-lg animate-slide-in">
                    <div className="container-custom py-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === item.href
                                    ? 'bg-lavanda/10 text-lavanda'
                                    : 'text-ameixa hover:bg-rosa-light/20'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Button
                                asChild
                                variant="default"
                                className="w-full"
                            >
                                <a
                                    href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <Phone className="h-4 w-4" />
                                    Agendar Atendimento
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
