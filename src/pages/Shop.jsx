import { Link } from 'react-router-dom'
import { products, productCategories } from '../data/products'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { ShoppingBag, ExternalLink } from 'lucide-react'
import { formatPrice } from '../lib/utils'

export default function Shop() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-padding bg-gradient-to-br from-lavanda/10 via-rosa/10 to-offwhite">
                <div className="container-custom text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ameixa">Loja Digital</h1>
                    <p className="text-xl text-ameixa/80 max-w-3xl mx-auto">
                        E-books, planners e meditações para sua jornada de transformação
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-4 justify-center mb-12">
                        {productCategories.map(cat => (
                            <button key={cat.id} className="px-6 py-3 rounded-full bg-lavanda/10 text-lavanda hover:bg-lavanda hover:text-white transition-all">
                                {cat.icon} {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map(product => (
                            <Card key={product.id} className="hover:shadow-2xl transition-all">
                                <CardHeader>
                                    <div className="aspect-[3/4] bg-gradient-to-br from-lavanda via-rosa to-dourado rounded-lg mb-4 flex items-center justify-center text-6xl">
                                        📚
                                    </div>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardDescription>{product.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-dourado mb-3">{formatPrice(product.price)}</p>
                                    <p className="text-sm text-ameixa/70">{product.shortDescription}</p>
                                </CardContent>
                                <CardFooter className="flex-col gap-2">
                                    <Button asChild className="w-full">
                                        <Link to={`/loja/${product.slug}`}>Ver Detalhes</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
