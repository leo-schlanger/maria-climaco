import { useParams, Link } from 'react-router-dom'
import { products, productCategories } from '../data/products'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Separator } from '../components/ui/Separator'
import {
    CheckCircle2, Gift, ShoppingCart, ExternalLink,
    ArrowLeft, BookOpen, Calendar, Headphones, Sparkles,
    ShieldCheck, Zap, Star
} from 'lucide-react'
import { formatPrice, generateGumroadLink } from '../lib/utils'

const IconMap = {
    BookOpen,
    Calendar,
    Headphones
}

export default function ProductDetail() {
    const { productId } = useParams()
    const product = products.find(p => p.slug === productId || p.id === productId)

    if (!product) {
        return (
            <div className="min-h-screen pt-40 pb-16 flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-ameixa/5 flex items-center justify-center text-ameixa/20">
                    <BookOpen className="h-10 w-10" />
                </div>
                <h1 className="text-3xl font-playfair font-bold text-ameixa">Produto não encontrado</h1>
                <Button asChild variant="outline" className="rounded-xl">
                    <Link to="/loja">Voltar para a Loja</Link>
                </Button>
            </div>
        )
    }

    const categoryInfo = productCategories.find(c => c.id === product.category)
    const CategoryIcon = IconMap[categoryInfo?.icon] || BookOpen

    return (
        <div className="min-h-screen bg-offwhite pb-24">
            {/* Breadcrumb / Back button */}
            <div className="pt-32 pb-8">
                <div className="container-custom">
                    <Link to="/loja" className="inline-flex items-center gap-2 text-sm font-bold text-ameixa/40 hover:text-ameixa transition-colors group">
                        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        VOLTAR PARA A LOJA
                    </Link>
                </div>
            </div>

            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Visual Preview Section */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 space-y-8">
                            <div className="aspect-[3/4] rounded-[3rem] bg-gradient-to-br from-lavanda/20 via-rosa/20 to-dourado/20 border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center group">
                                <CategoryIcon className="h-32 w-32 text-ameixa/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700" />
                                {product.featured && (
                                    <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-dourado text-white flex items-center justify-center shadow-xl animate-pulse">
                                        <Sparkles className="h-8 w-8" />
                                    </div>
                                )}
                            </div>

                            <div className="bg-white rounded-[2rem] p-8 border border-ameixa/5 shadow-sm space-y-6">
                                <div className="flex items-center gap-4 text-sm text-ameixa/60 font-medium">
                                    <ShieldCheck className="h-5 w-5 text-lavanda" />
                                    Pagamento 100% Seguro
                                </div>
                                <div className="flex items-center gap-4 text-sm text-ameixa/60 font-medium">
                                    <Zap className="h-5 w-5 text-dourado" />
                                    Acesso imediato após a compra
                                </div>
                                <div className="flex items-center gap-4 text-sm text-ameixa/60 font-medium">
                                    <Star className="h-5 w-5 text-rosa" />
                                    Acesso Vitalício em qualquer dispositivo
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-6">
                            <div className="flex flex-wrap gap-3">
                                <Badge className="bg-ameixa/5 text-ameixa border-none py-1.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                    {categoryInfo?.name || product.category}
                                </Badge>
                                {product.featured && (
                                    <Badge className="bg-dourado/10 text-dourado border-dourado/20 py-1.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                        Destaque
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-ameixa leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-2xl text-ameixa/40 font-playfair italic">
                                {product.tagline}
                            </p>
                        </div>

                        <div className="flex items-center gap-6 p-8 rounded-[2rem] bg-ameixa text-white shadow-xl shadow-ameixa/10">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Investimento único</p>
                                <p className="text-5xl font-bold">{formatPrice(product.price)}</p>
                            </div>
                            <Separator orientation="vertical" className="h-12 bg-white/10" />
                            <div className="flex-grow flex flex-col items-start lg:items-center">
                                <Button asChild size="lg" className="bg-dourado hover:bg-white hover:text-ameixa text-white w-full h-14 rounded-xl font-bold text-lg shadow-lg shadow-dourado/20 transition-all">
                                    <a
                                        href={generateGumroadLink(product.gumroadId)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        <ShoppingCart className="h-5 w-5" />
                                        ADQUIRIR AGORA
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-8 animate-in fade-in duration-700">
                            <h3 className="text-2xl font-playfair font-bold text-ameixa flex items-center gap-3">
                                <span className="w-10 h-px bg-ameixa/20" />
                                Sobre o Conteúdo
                            </h3>
                            <div className="prose prose-ameixa max-w-none text-ameixa/70 leading-relaxed font-light whitespace-pre-line">
                                {product.fullDescription}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-[2rem] p-8 border border-ameixa/5 shadow-sm space-y-6">
                                <h3 className="text-xl font-playfair font-bold text-ameixa flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-lavanda/10 flex items-center justify-center text-lavanda">
                                        <BookOpen className="h-5 w-5" />
                                    </div>
                                    O que você recebe
                                </h3>
                                <ul className="space-y-4">
                                    {product.whatYouGet.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-ameixa/60">
                                            <CheckCircle2 className="h-4 w-4 text-lavanda flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {product.bonus && product.bonus.length > 0 && (
                                <div className="bg-dourado/5 rounded-[2rem] p-8 border border-dourado/10 space-y-6">
                                    <h3 className="text-xl font-playfair font-bold text-ameixa flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-dourado shadow-sm">
                                            <Gift className="h-5 w-5" />
                                        </div>
                                        Bônus Exclusivos
                                    </h3>
                                    <ul className="space-y-4">
                                        {product.bonus.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-ameixa/70">
                                                <div className="w-1.5 h-1.5 rounded-full bg-dourado flex-shrink-0 mt-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Testimonials or additional info could go here */}
                    </div>
                </div>
            </div>
        </div>
    )
}
