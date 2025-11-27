import { useParams } from 'react-router-dom'
import { blogPosts } from '../data/blog-posts'
import { Clock, Calendar, User } from 'lucide-react'
import { formatDate } from '../lib/utils'

export default function BlogPost() {
    const { postId } = useParams()
    const post = blogPosts.find(p => p.slug === postId || p.id === postId)

    if (!post) {
        return <div className="min-h-screen pt-24 container-custom">Post não encontrado</div>
    }

    return (
        <div className="min-h-screen pt-24 pb-16">
            <article className="container-custom max-w-4xl">
                <div className="aspect-video bg-gradient-to-br from-lavanda/20 to-rosa/20 rounded-2xl mb-8 flex items-center justify-center">
                    <span className="text-9xl">✨</span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-ameixa/60 mb-6">
                    <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                    </span>
                    <span className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-lavanda/10 text-lavanda text-xs font-medium">
                        {post.category}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-ameixa mb-6">{post.title}</h1>
                <p className="text-xl text-ameixa/70 mb-8">{post.excerpt}</p>

                <div className="prose prose-lg max-w-none whitespace-pre-line text-ameixa/80 leading-relaxed">
                    {post.content}
                </div>
            </article>
        </div>
    )
}
