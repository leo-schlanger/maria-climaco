import { Link } from 'react-router-dom'
import { products, productCategories } from '../data/products'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { ShoppingBag, ExternalLink, BookOpen, Calendar, Headphones, ArrowRight, Sparkles } from 'lucide-react'
import { formatPrice } from '../lib/utils'

const IconMap = {
    BookOpen,
    Calendar,
    Headphones
}

export default function Shop() {
    return (
        <div className="min-h-screen bg-offwhite">
            {/* Header / Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-ameixa-dark text-white">
                <div className="absolute top-0 right-0 w-96 h-96 bg-dourado/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavanda/10 rounded-full blur-[100px] -ml-48 -mb-48" />

                <div className="container-custom relative z-10 text-center space-y-8">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-6 py-1.5 uppercase tracking-widest text-[10px] font-bold">
                        Universo Digital
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold">
                        Ferramentas para sua <span className="text-dourado">Expansão</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
                        E-books, planners e meditações guiadas criadas para acompanhar você em cada passo do seu desenvolvimento pessoal e espiritual.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container-custom">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-4 justify-center mb-16">
                        <button className="px-8 py-3 rounded-2xl bg-ameixa text-white font-semibold text-sm transition-all shadow-lg shadow-ameixa/10">
                            Todos os Produtos
                        </button>
                        {productCategories.map(cat => {
                            const CategoryIcon = IconMap[cat.icon] || Sparkles
                            return (
                                <button
                                    key={cat.id}
                                    className="px-8 py-3 rounded-2xl bg-white border border-ameixa/5 text-ameixa/60 hover:text-ameixa hover:border-ameixa/20 font-semibold text-sm transition-all hover:shadow-md flex items-center gap-2"
                                >
                                    <CategoryIcon className="h-4 w-4" />
                                    {cat.name}
                                </button>
                            )
                        })}
                    </div>

                    {/* Products Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map(product => {
                            const CategoryIcon = IconMap[productCategories.find(c => c.id === product.category)?.icon] || BookOpen
                            return (
                                <Card key={product.id} className="group overflow-hidden rounded-[2.5rem] border border-ameixa/5 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                    <div className="aspect-[4/5] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-lavanda/20 via-rosa/20 to-dourado/20 group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-44 bg-white/40 backdrop-blur-md rounded-lg shadow-2xl border border-white/50 flex items-center justify-center text-ameixa/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                <CategoryIcon className="h-16 w-16" />
                                            </div>
                                        </div>
                                        <div className="absolute top-6 left-6">
                                            <Badge className="bg-white/80 backdrop-blur-sm text-ameixa border-none py-1.5 px-4 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                                {product.category}
                                            </Badge>
                                        </div>
                                        {product.featured && (
                                            <div className="absolute top-6 right-6">
                                                <div className="w-10 h-10 rounded-full bg-dourado text-white flex items-center justify-center shadow-lg">
                                                    <Sparkles className="h-5 w-5" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <CardHeader className="p-8 pb-4">
                                        <CardTitle className="text-2xl font-playfair font-bold text-ameixa group-hover:text-dourado transition-colors">
                                            {product.name}
                                        </CardTitle>
                                        <CardDescription className="text-ameixa/60 font-light italic mt-2">
                                            {product.tagline}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="px-8 py-0">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-3xl font-bold text-ameixa">{formatPrice(product.price)}</span>
                                            <Badge variant="outline" className="text-[10px] text-ameixa/40 border-ameixa/10">Acesso Vitalício</Badge>
                                        </div>
                                        <p className="text-sm text-ameixa/50 leading-relaxed line-clamp-2">
                                            {product.shortDescription}
                                        </p>
                                    </CardContent>

                                    <CardFooter className="p-8 pt-6">
                                        <Button asChild className="w-full h-14 rounded-2xl bg-offwhite hover:bg-ameixa text-ameixa hover:text-white transition-all duration-300 border border-ameixa/5 group/btn overflow-hidden relative">
                                            <Link to={`/loja/${product.slug}`} className="flex items-center justify-center gap-2 font-bold relative z-10">
                                                Ver Detalhes
                                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-ameixa rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-dourado/10 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lavanda/10 rounded-full blur-3xl -ml-32 -mb-32" />

                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="text-2xl md:text-4xl font-playfair font-bold text-white">Pronta para o próximo passo?</h2>
                            <p className="text-xl text-white/60 font-light leading-relaxed">
                                Nossos produtos digitais foram pensados para levar a experiência do consultório para o seu dia a dia.
                            </p>
                            <Button asChild size="lg" className="bg-white text-ameixa hover:bg-dourado hover:text-white h-16 px-12 rounded-2xl font-bold text-lg transition-all">
                                <a href="https://gumroad.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                    Explorar no Gumroad
                                    <ExternalLink className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
