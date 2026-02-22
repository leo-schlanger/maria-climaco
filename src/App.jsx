import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import RefundPolicy from './pages/RefundPolicy'

function App() {
    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/servicos" element={<Services />} />
                    <Route path="/loja" element={<Shop />} />
                    <Route path="/loja/:productId" element={<ProductDetail />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:postId" element={<BlogPost />} />
                    <Route path="/contato" element={<Contact />} />
                    <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
                    <Route path="/termos-de-uso" element={<Terms />} />
                    <Route path="/politica-de-reembolso" element={<RefundPolicy />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
