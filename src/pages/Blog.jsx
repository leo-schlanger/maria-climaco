import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog-posts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Clock, ArrowRight, Calendar } from 'lucide-react'
import { formatDate } from '../lib/utils'

export default function Blog() {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <section className="section-padding bg-gradient-to-br from-lavanda/10 via-rosa/10 to-offwhite">
                <div className="container-custom text-center space-y-6">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-ameixa">Blog</h1>
                    <p className="text-xl text-ameixa/80 max-w-3xl mx-auto">
                        Conteúdos sobre autocuidado, bem-estar e empoderamento feminino
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => (
                            <Card key={post.id} className="hover:shadow-2xl transition-all group">
                                <div className="aspect-video bg-gradient-to-br from-lavanda/20 to-rosa/20 flex items-center justify-center">
                                    <span className="text-6xl">✨</span>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-4 text-sm text-ameixa/60 mb-2">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {formatDate(post.date)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <CardTitle className="group-hover:text-dourado transition-colors">{post.title}</CardTitle>
                                    <CardDescription>{post.excerpt}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-dourado font-medium hover:gap-3 transition-all"
                                    >
                                        Ler mais
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
