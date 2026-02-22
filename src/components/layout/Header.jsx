import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Heart } from 'lucide-react'
import { Button } from '../ui/Button'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../ui/Sheet'
import { generateWhatsAppLink } from '@/lib/utils'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre Mim', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Loja', href: '/loja' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
]

const WHATSAPP_NUMBER = '5521986972274'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar um atendimento com a Maria Climaco.'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white ${scrolled
                ? 'shadow-md border-b border-rosa-light/20'
                : 'border-b border-transparent'
                }`}
        >
            <nav className="container-custom" aria-label="Global">
                <div className="flex items-center justify-between h-40 md:h-56 transition-all duration-500">
                    {/* Logo */}
                    <div className="flex items-center mr-10 xl:mr-20">
                        <Link to="/" className="flex flex-col items-center group outline-none py-2">
                            <div className="relative flex-shrink-0">
                                <img
                                    src="/logo.png"
                                    alt="Maria Climaco"
                                    className="h-28 md:h-44 w-auto group-hover:scale-105 transition-all duration-500 drop-shadow-sm"
                                />
                                {scrolled && (
                                    <div className="absolute top-2 right-2 h-3 w-3 bg-dourado rounded-full border-2 border-white animate-pulse" />
                                )}
                            </div>
                            <div className="flex flex-col items-center -mt-4 md:-mt-6 z-10">
                                <span className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-ameixa font-bold whitespace-nowrap bg-white/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm border border-rosa-light/20">
                                    Fisioterapia & Bem-estar
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12 lg:items-center h-full mx-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-xs xl:text-sm font-bold transition-all hover:text-dourado relative group py-4 ${location.pathname === item.href
                                    ? 'text-dourado'
                                    : 'text-ameixa/80'
                                    }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute bottom-3 left-0 w-full h-0.5 bg-dourado transform origin-left transition-transform duration-300 ${location.pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button & Mobile Menu */}
                    <div className="flex lg:flex-1 lg:justify-end items-center gap-4">
                        <div className="hidden md:block">
                            <Button
                                asChild
                                variant="default"
                                size="sm"
                                className="shadow-md hover:shadow-lg"
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

                        {/* Mobile Menu Trigger */}
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center rounded-full p-2.5 text-ameixa hover:bg-rosa-light/20 transition-all border border-rosa-light/30 shadow-sm"
                                        aria-label="Menu"
                                    >
                                        <Menu className="h-6 w-6" />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="right" className="flex flex-col h-full bg-offwhite border-l-rosa-light/20">
                                    <SheetHeader className="text-left mb-8">
                                        <SheetTitle className="flex items-center gap-2">
                                            <Heart className="h-5 w-5 text-rosa" />
                                            Maria Climaco
                                        </SheetTitle>
                                    </SheetHeader>

                                    <div className="flex flex-col space-y-4 flex-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${location.pathname === item.href
                                                    ? 'bg-ameixa text-white shadow-md'
                                                    : 'text-ameixa hover:bg-rosa-light/30'
                                                    }`}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-rosa-light/30">
                                        <Button
                                            asChild
                                            variant="default"
                                            className="w-full h-14 rounded-2xl text-lg shadow-lg"
                                        >
                                            <a
                                                href={generateWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3"
                                            >
                                                <Phone className="h-5 w-5" />
                                                Agendar Atendimento
                                            </a>
                                        </Button>
                                        <p className="text-center text-xs text-ameixa/40 mt-6">
                                            © 2025 Maria Climaco. <br />Todos os direitos reservados.
                                        </p>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
