const projects = {
    audioML: {
        skills: ['ML'],
        languages: ["Python"],
        title: 'Audio Genre Classification',
        description: 'La clasificación de géneros musicales juega un papel crucial en las aplicaciones modernas de procesamiento de señales de audio digital. En este estudio, proponemos varios enfoques de aprendizaje automático para categorizar con precisión pistas de música en géneros predefinidos. Cada enfoque utiliza diversos conjuntos de características que se pueden extraer de las canciones; desde los comunes: MFCC, señal de audio directa; hasta características poco exploradas en este problema: letra de la canción, Transformada de Wavelet. Para evaluar los modelos utilizamos el dataset de referencia en el campo, GTZAN. En los resultados obtenidos destaca que la letra de la canción no aporta mucho a la clasificación, al menos en el dataset utilizado. Los otros modelos muestran resultados consistentes con el estado del arte, con una precisión entre 75 % y 80 %',

        features: {
            dataset: "GTZAN",
            models: "CNN, RNN",
            keywords: "Music genre, CNN, spectograms, MFCC, Conv1D, encoder."
        },
        images: ['/projects/audioML/1.jpg'],
        github: 'https://github.com/science-engineering-art/mugenfier',
        paper: '/projects/audioML/audioML.pdf',
        app: null,
    },

    IRSImagesCLIP: {
        skills: ["IRS", "ML"],
        title: 'Image Retrieval System using Machine Learning',
        description: 'In this thesis, the problem of precise image retrieval is addressed. The work employs a new approach: the application of the Segment Anything (SAM) segmentation models and the Constractive Language-Image Pretraining (CLIP) model for the generation of multimodal embeddings. Special emphasis is placed on image retrieval via precise queries, taking into account the position of image segments that compose the same, processing both text and images.',
        languages: ["Python"],
        features: {
            keywords: "Embeddings, Multimodals Embeddings."
        },
        
        images: ['/projects/IRSImagesCLIP/1.jpg'],
        github: 'https://github.com/rb58853/ML-RSI-Images',
        paper: '/projects/IRSImagesCLIP/IRSImagesCLIP.pdf',
        app: null,
    },

    colorProblem: {
        skills: ['DAA'],
        title: '8 Colors Problem',
        description: 'Dado una lista con 8 colores posibles ... ... ... ...',
        languages: ["Python"],
        features: {
            keywords: "Dynamic programation (DP), algorithms analysis, best computational complex."
        },
        images: [],
        github: 'https://github.com/maux96/DAA-problema-1',
    },

    navMeshAgentAI: {
        skills: ['Unity', 'AI', "Simulation"],
        languages: ["C#"],
        title: 'Nav Mesh Agent AI',
        description: 'Agentes de navegación y sistemas multiagentes. Se entiende por agente una entidad capaz de percibir su entorno, procesar tales percepciones y responder a las mismas con una acción en su entorno, un agente de navegación es, a su vez, una entidad, además, capaz de navegar (moverse) en un espacio dado, el ejemplo más simple de un espacio de navegación sería una matriz de posiciones donde una entidad se mueve bajo determinadas reglas o movimientos validos; el agente debe ser capaz de moverse de una posición a otra de este espacio. En el presente proyecto definimos como espacio de navegación una malla de polígonos transitables que colindan a través de aristas, específicamente una malla de triángulos. Un sistema multiagentes es un sistema compuesto por múltiples agentes que interactúan entre sí, y tienen la capacidad de comunicarse entre ellos. Entre las características principales de un agente cabe destacar su comportamiento autónomo, su visión local del sistema y su descentralización, es decir que no existe una entidad que controle el comportamiento global de todos los agentes. Estos sistemas multiagentes se llevan utilizando en la computación desde hace años para la simulación de multitudes, algunas de sus utilidades son la simulación de personas en ciertas circunstancias como en una evacuación, una terminal de ómnibus, etc. En los últimos años se han utilizado sistemas multiagentes en simulación de multitudes cinematográficas, como es el caso de El Señor de los Anillos. Específicamente en nuestro proyecto trataremos este sistema multiagentes y sistema de navegación de los mismos orientado al mundo de los videojuegos.',

        features: {
            Engine: 'Unity Engine',
            keywords: "Inteligent agents, metaheuristics, heuristics, terrain simulation, multitude simulation",
        },
        images: ['/projects/navMeshAgentAI/1.jpg', '/projects/navMeshAgentAI/2.jpg', '/projects/navMeshAgentAI/3.jpg',
        ],

        github: 'https://github.com/rb58853/NavAgent-AI',
        paper: '/projects/navMeshAgentAI/NavAgentPaper.pdf',
        app: 'https://t.me/+Eh4DRMgqdtYzMDlh',
    },

    artShopEmilio: {
        skills: ["ReactJS"],
        title: 'Art Shop Emilio',
        description: 'descripcion del proyecto',
        languages: ["Javascript", "CSS"],
        features: {
            framework:'ReactJS',
            keywords: "Web development, frontend, digital-shop."
        },
        images: [],
    },

    coolCompiler: {
        skills: ["Compilers"],
        title: 'Cool Compiler',
        description: 'descripcion del proyecto',
        languages: ["MIPS", "Python", "Cool"],
        features: {
            keywords: "Language theory, CIL intermedie language, assambly, parsing-semantic-code generation."
        },
    
        images: [],
    },

    irs: {
        skills: ["IRS"],
        title: 'Information Retieval System for text documents',
        description: 'descripcion del proyecto',
        languages: ["Python"],
        features: {
            from: "COOL",
            target: "MIPS",
            keywords: "Documents retrieval, Data structure Trie, vector model, vaswani model, latent semantic model, object oriented language compiler."
        },
        images: [],
    },

    yugiOhBackend: {
        skills: ["Django"],
        title: 'Yugi Oh Backend APP',
        description: 'descripcion del proyecto',
        languages: ["python"],
        features: {
            framework:'Django',
            keywords: "Backend, Database, vector model, vaswani model, latent semantic model."
        },
      
        images: [],
    },



}
export default projects