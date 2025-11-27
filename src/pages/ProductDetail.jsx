import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { Button } from '../components/ui/Button'
import { CheckCircle2, Gift, ShoppingCart, ExternalLink } from 'lucide-react'
import { formatPrice, generateGumroadLink } from '../lib/utils'

export default function ProductDetail() {
    const { productId } = useParams()
    const product = products.find(p => p.slug === productId || p.id === productId)

    if (!product) {
        return <div className="min-h-screen pt-24 pb-16 container-custom">Produto não encontrado</div>
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="aspect-[3/4] bg-gradient-to-br from-lavanda via-rosa to-dourado rounded-2xl flex items-center justify-center text-9xl sticky top-24">
                            📚
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa mb-4">{product.name}</h1>
                            <p className="text-xl text-ameixa/70">{product.tagline}</p>
                        </div>

                        <div className="flex items-baseline gap-4">
                            <p className="text-5xl font-bold text-dourado">{formatPrice(product.price)}</p>
                            <p className="text-ameixa/60">Acesso vitalício</p>
                        </div>

                        <div className="prose max-w-none">
                            <p className="text-lg text-ameixa/80 whitespace-pre-line">{product.fullDescription}</p>
                        </div>

                        <div className="bg-lavanda/5 rounded-xl p-6">
                            <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                                <ShoppingCart className="h-6 w-6 text-lavanda" />
                                O que você recebe:
                            </h3>
                            <ul className="space-y-3">
                                {product.whatYouGet.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-lavanda mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {product.bonus && product.bonus.length > 0 && (
                            <div className="bg-dourado/5 rounded-xl p-6">
                                <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                                    <Gift className="h-6 w-6 text-dourado" />
                                    Bônus Exclusivos:
                                </h3>
                                <ul className="space-y-2">
                                    {product.bonus.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-dourado">🎁</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="space-y-4">
                            <Button asChild size="lg" className="w-full text-lg">
                                <a
                                    href={generateGumroadLink(product.gumroadId)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    Comprar Agora - {formatPrice(product.price)}
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </Button>
                            <p className="text-center text-sm text-ameixa/60">
                                Pagamento seguro via Gumroad. Acesso imediato após a compra.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
