const projects = {
    audioML: {
        skills: ['ML'],
        languages: ["Python"],
        title: 'Audio Genre Classification',
        description: 'descripcion del proyecto',
        features: {
            dataset: "GTZAN",
            models: "CNN, RNN",
            keywords: "Music genre, CNN, Spectograms."
        },
        images: ['/images/projects/audioML/1.jpg'],
        github: 'https://github.com/science-engineering-art/mugenfier',
        paper: '',
        app: null,
    },

    IRSImagesCLIP: {
        skills: ["IRS", "ML"],
        title: 'Image Retrieval System using Machine Learning',
        description: 'descripcion del proyecto',
        languages: ["Python"],
        images: ['/images/projects/IRSImagesCLIP/1.jpg'],
    },

    colorProblem: {
        skills: ['DAA'],
        title: '8 Colors Problem',
        description: 'descripcion del proyecto',
        languages: ["Python"],
        images: [],
    },

    navMeshAgentAI: {
        skills: ['Unity', 'AI', "Simulation"],
        languages: ["C#"],
        title: 'Nav Mesh Agent AI',
        description: 'Agentes de navegación y sistemas multiagentes. Se entiende por agente una entidad capaz de percibir su entorno, procesar tales percepciones y responder a las mismas con una acción en su entorno, un agente de navegación es, a su vez, una entidad, además, capaz de navegar (moverse) en un espacio dado, el ejemplo más simple de un espacio de navegación sería una matriz de posiciones donde una entidad se mueve bajo determinadas reglas o movimientos validos; el agente debe ser capaz de moverse de una posición a otra de este espacio. En el presente proyecto definimos como espacio de navegación una malla de polígonos transitables que colindan a través de aristas, específicamente una malla de triángulos. Un sistema multiagentes es un sistema compuesto por múltiples agentes que interactúan entre sí, y tienen la capacidad de comunicarse entre ellos. Entre las características principales de un agente cabe destacar su comportamiento autónomo, su visión local del sistema y su descentralización, es decir que no existe una entidad que controle el comportamiento global de todos los agentes. Estos sistemas multiagentes se llevan utilizando en la computación desde hace años para la simulación de multitudes, algunas de sus utilidades son la simulación de personas en ciertas circunstancias como en una evacuación, una terminal de ómnibus, etc. En los últimos años se han utilizado sistemas multiagentes en simulación de multitudes cinematográficas, como es el caso de El Señor de los Anillos. Específicamente en nuestro proyecto trataremos este sistema multiagentes y sistema de navegación de los mismos orientado al mundo de los videojuegos.',

        features: {
            Engine: 'Unity Engine',
            keywords: "Inteligent agents, Metaheuristics, Heuristics, Space simulation, Multitude simulation",
        },
        images: ['/images/projects/navMeshAgentAI/1.jpg', '/images/projects/navMeshAgentAI/2.jpg', '/images/projects/navMeshAgentAI/3.jpg',
        ],

        github: 'https://github.com/rb58853/NavAgent-AI',
        paper: 'https://github.com/rb58853/NavAgent-AI/blob/rb58/NavAgent%20(informe).pdf',
        app: 'https://t.me/+Eh4DRMgqdtYzMDlh',
    },

    artShopEmilio: {
        skills: ["ReactJS"],
        title: 'Art Shop Emilio',
        description: 'descripcion del proyecto',
        languages: ["Javascript", "CSS"],
        images: [],
    },
    coolCompiler: {
        skills: ["Compilers"],
        title: 'Cool Compiler',
        description: 'descripcion del proyecto',
        languages: ["MIPS", "Python", "Cool"],
        images: [],
    },

    irs: {
        skills: ["IRS"],
        title: 'Information Retieval System for text documents',
        description: 'descripcion del proyecto',
        languages: ["Python"],
        images: [],
    },
    shell: {
        skills: ["OS"],
        title: 'Linux Shell Implementation',
        description: 'descripcion del proyecto',
        languages: ["C"],
        images: [],
    },



}
export default projects