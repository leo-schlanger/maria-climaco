// Services data for Maria Climaco
export const services = [
    {
        id: 'fisioterapia-ortopedica',
        name: 'Fisioterapia Ortopédica',
        category: 'fisioterapia',
        description: 'Tratamento especializado para dores musculares, articulares e lesões ortopédicas.',
        fullDescription: 'A fisioterapia ortopédica utiliza técnicas modernas para tratamento de dores crônicas, lesões esportivas, problemas posturais e reabilitação pós-trauma. Com 28 anos de experiência, ofereço um cuidado personalizado que respeita os limites do seu corpo enquanto promove a cura.',
        benefits: [
            'Alívio de dores crônicas',
            'Melhora da postura e mobilidade',
            'Recuperação de lesões',
            'Prevenção de problemas futuros',
            'Fortalecimento muscular direcionado'
        ],
        forWho: [
            'Pessoas com dores crônicas nas costas, pescoço ou articulações',
            'Atletas em recuperação de lesões',
            'Quem busca melhorar a postura',
            'Pacientes com problemas ortopédicos diagnosticados'
        ],
        notForWho: [
            'Casos que necessitam intervenção cirúrgica imediata',
            'Fraturas não consolidadas sem liberação médica'
        ],
        duration: '60 minutos',
        icon: '🦴'
    },
    {
        id: 'pos-operatorio',
        name: 'Pós-operatório (Rosto e Corpo)',
        category: 'estetica',
        description: 'Cuidado especializado para recuperação pós-cirúrgica estética e reparadora.',
        fullDescription: 'O acompanhamento pós-operatório é essencial para uma recuperação rápida e resultados otimizados. Ofereço protocolos específicos para cirurgias plásticas, estéticas e reparadoras, com técnicas que reduzem edemas, previnem fibrose e aceleram a cicatrização.',
        benefits: [
            'Redução de edemas e hematomas',
            'Prevenção de fibrose e queloides',
            'Aceleração da cicatrização',
            'Melhora da textura da pele',
            'Resultados estéticos otimizados'
        ],
        forWho: [
            'Pacientes de lipoaspiração, abdominoplastia',
            'Pós-cirurgia de mama (mamoplastia, prótese)',
            'Rinoplastia, blefaroplastia, lifting facial',
            'Cirurgias reparadoras'
        ],
        notForWho: [
            'Período inferior a 48h pós-cirurgia (sem liberação médica)',
            'Presença de infecções ativas'
        ],
        duration: '60 minutos',
        icon: '💆‍♀️'
    },
    {
        id: 'drenagem-linfatica',
        name: 'Drenagem Linfática Manual',
        category: 'estetica',
        description: 'Técnica suave e relaxante para eliminar toxinas e reduzir retenção de líquidos.',
        fullDescription: 'A drenagem linfática manual é uma técnica terapêutica com movimentos suaves e ritmados que estimulam o sistema linfático. Ideal para reduzir inchaços, melhorar a circulação e promover desintoxicação profunda do organismo.',
        benefits: [
            'Redução de inchaço e retenção de líquidos',
            'Melhora da circulação sanguínea e linfática',
            'Desintoxicação do organismo',
            'Fortalecimento do sistema imunológico',
            'Sensação de leveza e bem-estar'
        ],
        forWho: [
            'Gestantes (após 1º trimestre, com liberação médica)',
            'Pessoas com retenção de líquidos',
            'Pós-operatório',
            'Quem busca desintoxicação',
            'Prevenção e tratamento de celulite'
        ],
        notForWho: [
            'Casos de trombose ativa',
            'Infecções agudas',
            'Problemas cardíacos graves sem liberação médica'
        ],
        duration: '60 minutos',
        icon: '🌊'
    },
    {
        id: 'massagem-relaxante',
        name: 'Massagem Relaxante Terapêutica',
        category: 'terapeutica',
        description: 'Massagem envolvente que acalma a mente, relaxa o corpo e renova as energias.',
        fullDescription: 'Uma experiência de profundo relaxamento e conexão consigo mesma. Através de manobras suaves e ritmadas, promovo o alívio de tensões físicas e emocionais, proporcionando um estado de paz e renovação interior.',
        benefits: [
            'Redução do estresse e ansiedade',
            'Alívio de tensões musculares',
            'Melhora da qualidade do sono',
            'Sensação de bem-estar e leveza',
            'Equilíbrio emocional'
        ],
        forWho: [
            'Pessoas com estresse e ansiedade',
            'Quem busca momento de autocuidado',
            'Tensões musculares por rotina',
            'Insônia e dificuldade para relaxar',
            'Sobrecarga emocional'
        ],
        notForWho: [
            'Febres e infecções agudas',
            'Lesões musculares graves sem avaliação'
        ],
        duration: '60-90 minutos',
        icon: '🧘‍♀️'
    },
    {
        id: 'massagem-modeladora',
        name: 'Massagem Modeladora / Esculpidora',
        category: 'estetica',
        description: 'Técnica vigorosa para modelar o corpo, reduzir medidas e combater celulite.',
        fullDescription: 'Massagem com manobras firmes e específicas que trabalham a gordura localizada, quebram nódulos de celulite e modelam o contorno corporal. Técnica eficaz quando aliada a hábitos saudáveis.',
        benefits: [
            'Redução de medidas e gordura localizada',
            'Melhora da aparência da celulite',
            'Modelagem do contorno corporal',
            'Melhora da circulação e tônus muscular',
            'Pele mais firme e lisa'
        ],
        forWho: [
            'Quem busca redução de medidas',
            'Tratamento de celulite',
            'Complemento para emagrecimento saudável',
            'Tonificação corporal'
        ],
        notForWho: [
            'Gestantes',
            'Varizes severas sem tratamento',
            'Pós-operatório recente (sem liberação)'
        ],
        duration: '60 minutos',
        icon: '💪'
    },
    {
        id: 'estetica-avancada',
        name: 'Estética Avançada',
        category: 'estetica',
        description: 'Tecnologias modernas: radiofrequência, ultrassom, microcorrente e laser.',
        fullDescription: 'Tratamentos estéticos de alta tecnologia para rejuvenescimento facial e corporal, redução de gordura, flacidez e celulite. Equipamentos de última geração aliados à expertise profissional.',
        benefits: [
            'Rejuvenescimento facial e corporal',
            'Redução de flacidez',
            'Estímulo de colágeno',
            'Tratamento de linhas de expressão',
            'Resultados visíveis e duradouros'
        ],
        forWho: [
            'Combate à flacidez de pele',
            'Redução de rugas e linhas de expressão',
            'Tratamento de celulite e gordura localizada',
            'Rejuvenescimento sem procedimentos invasivos'
        ],
        notForWho: [
            'Gestantes e lactantes',
            'Uso de marcapasso',
            'Câncer ativo ou histórico recente'
        ],
        duration: '60-90 minutos',
        icon: '✨'
    },
    {
        id: 'banhos-sagrados',
        name: 'Banhos Sagrados e Rituais Femininos',
        category: 'energia',
        description: 'Rituais ancestrais para limpeza energética e reconexão com o feminino sagrado.',
        fullDescription: 'Práticas milenares que honram o ciclo feminino e promovem limpeza energética profunda. Trabalho com ervas, cristais e intenções para reconectar você com sua essência e poder interior.',
        benefits: [
            'Limpeza energética profunda',
            'Reconexão com o feminino sagrado',
            'Equilíbrio emocional e espiritual',
            'Fortalecimento do útero energético',
            'Renovação e transformação interior'
        ],
        forWho: [
            'Mulheres buscando reconexão com o feminino',
            'Momentos de transição e transformação',
            'Despertar da sexualidade sagrada',
            'Ciclos de cura emocional'
        ],
        notForWho: [
            'Quem não se identifica com práticas espirituais',
            'Esperando resultados apenas físicos'
        ],
        duration: '90-120 minutos',
        icon: '🌙'
    },
    {
        id: 'meditacoes-guiadas',
        name: 'Meditações Guiadas',
        category: 'energia',
        description: 'Jornadas interiores para acalmar a mente, acessar sabedoria interior e encontrar paz.',
        fullDescription: 'Sessões de meditação guiada personalizadas para suas necessidades. Através da voz e da intenção, conduzo você em jornadas de autoconhecimento, cura e expansão de consciência.',
        benefits: [
            'Redução de ansiedade e estresse',
            'Clareza mental e foco',
            'Conexão com intuição',
            'Equilíbrio emocional',
            'Expansão de consciência'
        ],
        forWho: [
            'Iniciantes e praticantes de meditação',
            'Pessoas com ansiedade e mente agitada',
            'Busca por autoconhecimento',
            'Desenvolvimento espiritual'
        ],
        notForWho: [
            'Crises psiquiátricas agudas sem acompanhamento'
        ],
        duration: '45-60 minutos',
        icon: '🧘'
    },
    {
        id: 'terapia-energetica',
        name: 'Terapia Energética Integrada',
        category: 'energia',
        description: 'Harmonização dos chakras e campo energético para saúde integral.',
        fullDescription: 'Trabalho energético que integra diversas técnicas para harmonizar seus centros de energia, limpar bloqueios e restaurar o fluxo vital. Uma experiência de cura holística corpo-mente-espírito.',
        benefits: [
            'Harmonização dos chakras',
            'Limpeza de bloqueios energéticos',
            'Equilíbrio emocional profundo',
            'Restauração da vitalidade',
            'Autocura e empoderamento'
        ],
        forWho: [
            'Bloqueios emocionais e energéticos',
            'Esgotamento físico e mental',
            'Busca por equilíbrio holístico',
            'Complemento a tratamentos convencionais'
        ],
        notForWho: [
            'Substituição de tratamento médico convencional',
            'Expectativa de cura instantânea'
        ],
        duration: '60-90 minutos',
        icon: '⚡'
    }
]

export const getServiceById = (id) => services.find(service => service.id === id)

export const getServicesByCategory = (category) =>
    services.filter(service => service.category === category)

export const categories = [
    { id: 'fisioterapia', name: 'Fisioterapia', color: 'lavanda' },
    { id: 'estetica', name: 'Estética', color: 'rosa' },
    { id: 'terapeutica', name: 'Terapêutica', color: 'dourado' },
    { id: 'energia', name: 'Energético', color: 'lavanda' }
]
