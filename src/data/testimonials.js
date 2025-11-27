export const testimonials = [
    {
        id: 1,
        name: 'Juliana Santos',
        service: 'Drenagem Linfática Pós-operatório',
        text: 'A Maria foi essencial na minha recuperação após a abdominoplastia. Suas mãos são mágicas e o cuidado dela vai além da técnica - é amor puro. Meu resultado ficou perfeito graças ao acompanhamento dela!',
        rating: 5,
        image: '/assets/testimonials/juliana.jpg',
        date: '2024-10-15'
    },
    {
        id: 2,
        name: 'Renata Lima',
        service: 'Ritual Feminino + Terapia Energética',
        text: 'Passei por um momento muito difícil de transição na minha vida. O trabalho da Maria me reconectou com minha essência feminina e me devolveu a força que eu achei que tinha perdido. Gratidão eterna! ✨',
        rating: 5,
        image: '/assets/testimonials/renata.jpg',
        date: '2024-09-28'
    },
    {
        id: 3,
        name: 'Carla Mendes',
        service: 'Fisioterapia Ortopédica',
        text: 'Sofria com dores crônicas nas costas há mais de 10 anos. Já tinha feito de tudo. Com a Maria, em 3 meses, minha qualidade de vida mudou completamente. Ela realmente entende o corpo humano de uma forma profunda.',
        rating: 5,
        image: '/assets/testimonials/carla.jpg',
        date: '2024-10-01'
    },
    {
        id: 4,
        name: 'Amanda Rodrigues',
        service: 'E-book Encantos da Mulher Poderosa',
        text: 'Este e-book chegou no momento exato que eu precisava. Cada página parece que foi escrita para mim. Os exercícios são transformadores e já estou no meu terceiro ritual lunar. Recomendo demais!',
        rating: 5,
        image: '/assets/testimonials/amanda.jpg',
        date: '2024-11-10'
    },
    {
        id: 5,
        name: 'Patricia Costa',
        service: 'Massagem Modeladora',
        text: 'Além de perder medidas, ganhei autoestima! A Maria não é só uma profissional incrível, ela faz você se sentir acolhida e especial. Cada sessão é um presente que dou para mim mesma.',
        rating: 5,
        image: '/assets/testimonials/patricia.jpg',
        date: '2024-10-20'
    },
    {
        id: 6,
        name: 'Fernanda Alves',
        service: 'Meditações Guiadas',
        text: 'Eu achava que nunca conseguiria meditar (mente muito agitada!). As meditações guiadas da Maria são simplesmente perfeitas. A voz dela acalma, as intenções são poderosas. Virou minha rotina sagrada diária.',
        rating: 5,
        image: '/assets/testimonials/fernanda.jpg',
        date: '2024-11-05'
    },
    {
        id: 7,
        name: 'Mariana Souza',
        service: 'Estética Avançada - Radiofrequência',
        text: 'Os resultados são visíveis! Minha pele está mais firme, as linhas de expressão suavizaram. E o melhor: sem dor, sem invasão. A Maria domina as tecnologias com maestria.',
        rating: 5,
        image: '/assets/testimonials/mariana.jpg',
        date: '2024-09-15'
    },
    {
        id: 8,
        name: 'Beatriz Oliveira',
        service: 'E-book Mente Livre, Alma Calma - TDAH',
        text: 'Finalmente um material sobre TDAH que fala COMIGO! Como mulher adulta com TDAH, me sentia invisível. Este e-book validou minha experiência e me deu ferramentas práticas que realmente funcionam. Obrigada, Maria!',
        rating: 5,
        image: '/assets/testimonials/beatriz.jpg',
        date: '2024-10-30'
    }
]

export const getRandomTestimonials = (count = 3) => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}
