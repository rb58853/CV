const projects = {

    audioML: {
        skills: ['ML'],
        languages: ["Python"],
        title: 'Audio Genre Classification',
        description: 'The classification of music genres plays a crucial role in modern digital audio signal processing applications. In this study, we propose several machine learning approaches to accurately categorize music tracks into predefined genres. Each approach uses different sets of features that can be extracted from songs; ranging from common ones like MFCC (Mel-frequency cepstral coefficients) and direct audio signals to less explored features in this context such as song lyrics and Wavelet Transform. To evaluate the models, we use the GTZAN reference dataset in the field. The results obtained highlight that song lyrics do not contribute much to classification, at least in the dataset used. The other models show results consistent with the state of the art, with an accuracy between 75% and 80%.',

        features: {
            dataset: "GTZAN",
            models: "CNN, RNN",
            keywords: "Music genre, CNN, spectograms, MFCC, Conv1D, encoder."
        },
        images: ['/projects/audioML/1.jpg'],
        github: 'https://github.com/science-engineering-art/mugenfier',
        paper: '/projects/audioML/audioML.pdf',
        app: null,
        asStudent: 4,
    },

    IRSImagesCLIP: {
        skills: ["IRS", "ML"],
        title: 'Image Retrieval System using Machine Learning',
        description: 'In this project, the problem of precise image retrieval is addressed. The work employs a new approach: the application of the Segment Anything (SAM) segmentation models and the Constractive Language-Image Pretraining (CLIP) model for the generation of multimodal embeddings. Special emphasis is placed on image retrieval via precise queries, taking into account the position of image segments that compose the same, processing both text and images.',
        languages: ["Python"],
        features: {
            keywords: "Embeddings, Multimodals Embeddings."
        },

        images: ['/projects/IRSImagesCLIP/1.jpg'],
        github: 'https://github.com/rb58853/ML-RSI-Images',
        paper: '/projects/IRSImagesCLIP/IRSImagesCLIP.pdf',
        app: null,
        asStudent: 4,
    },

    colorProblem: {
        skills: ['DAA'],
        title: '8 Colors Problem',
        description: 'Dado una lista con 8 colores posibles ... ... ... ...',
        languages: ["Python"],
        features: {
            keywords: "Dynamic programation (DP), algorithms analysis, best computational complex."
        },
        images: ['/projects/8colorsProblem/1.jpg'],
        github: 'https://github.com/maux96/DAA-problema-1',
        asStudent: 4,
    },

    coolCompiler: {
        skills: ["Compilers"],
        title: 'Cool Compiler',
        description: 'Cool, which stands for Classroom Object-Oriented Language, is a small programming language designed primarily for educational purposes, particularly in undergraduate compiler course projects. Cool incorporates several features common in modern programming languages, such as objects, automatic memory management, and strong static typing. It is built on public domain tools and generates code for a MIPS simulator, making it portable across different platforms. The language has been widely used in teaching compilers at various institutions, and its software is considered stable.',
        languages: ["MIPS", "Python", "Cool"],
        features: {
            keywords: "Language theory, CIL intermedie language, assambly, parsing-semantic-code generation, object oriented language compiler."
        },

        images: ['/projects/coolCompiler/1.jpg'],
        github: 'https://github.com/rb58853/cool-compiler-2023',
        asStudent: 4,
    },

    navMeshAgentAI: {
        skills: ['Unity', 'AI', "Simulation"],
        languages: ["C#"],
        title: 'Nav Mesh Agent AI',
        description: 'An agent is understood as an entity capable of perceiving its environment, processing such perceptions, and responding to them with an action in its environment. A navigation agent, in turn, is an entity that can also navigate (move) within a given space. The simplest example of a navigation space would be a matrix of positions where an entity moves under certain rules or valid movements; the agent must be able to move from one position to another in this space. In this project, we define the navigation space as a mesh of traversable polygons that connect through edges, specifically a mesh of triangles. A multi-agent system is a system composed of multiple agents that interact with each other and have the capacity to communicate with each other. Among the main characteristics of an agent, it is important to highlight its autonomous behavior, its local vision of the system, and its decentralization, meaning that there is no entity that controls the global behavior of all agents. These multi-agent systems have been used in computing for years for crowd simulation, some of their utilities include simulating people in certain circumstances such as in an evacuation, a bus terminal, etc. In recent years, multi-agent systems have been used in the simulation of cinematic crowds, as is the case with The Lord of the Rings. Specifically, in our project, we will deal with this multi-agent system and the navigation system of the same, oriented towards the world of video games.',

        features: {
            Engine: 'Unity Engine',
            keywords: "Inteligent agents, metaheuristics, heuristics, terrain simulation, multitude simulation",
        },

        image: '/projects/navMeshAgentAI/1.jpg',
        images: ['/projects/navMeshAgentAI/1.jpg', '/projects/navMeshAgentAI/2.jpg', '/projects/navMeshAgentAI/3.jpg',
        ],

        github: 'https://github.com/rb58853/NavAgent-AI',
        paper: '/projects/navMeshAgentAI/NavAgentPaper.pdf',
        app: 'https://t.me/+Eh4DRMgqdtYzMDlh/c/1870877745/3',
        asStudent: 3,
    },

    artShopEmilio: {
        skills: ["ReactJS"],
        title: 'Art Shop Emilio',
        description: 'An online store for selling artworks created by Emilio Ramos. The store consists of a marketplace, series, products, shopping area, bag, contact, and information. This project represents the frontend of the store.',
        languages: ["Javascript", "CSS"],
        features: {
            framework: 'ReactJS',
            keywords: "Web development, frontend, digital-shop."
        },
        image: '/projects/shop/1.jpg',
        images: ['/projects/shop/2.jpg', '/projects/shop/3.jpg', '/projects/shop/4.jpg'],

        github: 'https://github.com/rb58853/my-app',
        sitie: 'https://rb58853.github.io/my-app/',
    },

    yugiOhBackend: {
        skills: ["Django"],
        title: 'Yugi Oh Backend APP',
        description: 'A database project to store and manipulate information about players, cards, matches, and tournaments of Yu-Gi-Oh. It follows good programming practices, both in terms of architecture and the correct use of the API and CRUD (Create, Read, Update, Delete).',
        languages: ["python"],
        features: {
            framework: 'Django',
            keywords: "Backend, Database, CRUD, API Rest."
        },
        images: ['/projects/yugiOh/1.jpg'],
        github: 'https://github.com/rb58853/yugioh-backend',
        asStudent: 3,
    },

    irs: {
        skills: ["IRS"],
        title: 'Information Retieval System for text documents',
        description: 'descripcion del proyecto',
        languages: ["Python"],
        features: {
            from: "COOL",
            target: "MIPS",
            keywords: "Documents retrieval, Data structure Trie, vector model, vaswani model, latent semantic model."
        },
        images: ['/projects/irs/2.jpg'],
        asStudent: 3,
    },


}
export default projects