const projects = {

    audioML: {
        skills: ['ML', 'AI'],
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
        skills: ["IRS", "ML", 'AI'],
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
        description: 'Given an array A that contains only elements of 8 different types, the problem consists in finding the maximum subsequence T, which satisfies the constraints: For every pair of sets Ci, Cj of elements of specific types, it holds that |Ci| - |Cj| ≤ 1. Elements of the same set have to be consecutive in T.',

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
            from: "COOL",
            target: "MIPS",
            keywords: "Language theory, CIL intermedie language, assambly, parsing-semantic-code generation, object oriented language compiler."
        },

        image: '/projects/coolCompiler/1.jpg',
        images: ['/projects/coolCompiler/2.jpg'],
        github: 'https://github.com/rb58853/cool-compiler-2023',
        asStudent: 4,
    },

    irs: {
        skills: ["IRS"],
        title: 'Information Retieval System for text documents',
        description: 'This project focuses on the development of a sophisticated information retrieval system that integrates multiple advanced techniques to enhance precision and efficiency in document retrieval. The strategies employed include the use of vector models, latent semantic analysis (LSA), Vaswani attention, and the implementation of Trie structures for indexing and grouping documents.\n\
        Vector Models and Latent Semantic Analysis (LSA): A vector-based approach is adopted to represent documents and queries in a multidimensional space, allowing similarities to be calculated through distance or cosine measures. LSA is applied to extract semantic features, improving contextual understanding and overcoming challenges such as synonymy and polysemy.\n\
        Vaswani Attention: By incorporating Vaswani attention, complex relationships between words are captured, enhancing accuracy by considering the broader context in information retrieval.\n\
        Trie Structure: A Trie structure is implemented to index and group documents, facilitating quick and effective searches. This enables near-instantaneous retrieval of relevant documents based on specific search patterns.\n\
        This system not only demonstrates the ability to combine various techniques and algorithms to address complex challenges in processing and analyzing large volumes of data but also results in a robust and scalable system.',
        languages: ["Python"],
        features: {
            keywords: "Documents retrieval, Data structure Trie, vector model, vaswani model, latent semantic model."
        },
        images: ['/projects/irs/2.jpg'],
        asStudent: 3,
        github: "https://github.com/lido98/RIUL",
    },
    tito: {
        skills: ['DAA'],
        title: 'Building roads',
        description: "Let G(v, e) be a weighted graph on vertices and edges. The goal is to find the subgraph that maximizes the sum of edge weights minus the sum of vertex weights. Subject to the constraint that if an edge belongs to the solution subgraph then both vertices connected by it also belong to the subgraph.",

        languages: ["Python"],
        features: {
            keywords: "Algorithms analysis, best computational complex, graphs theory, greedy, graph flow."
        },
        images: ['/projects/tito/image.jpg'],
        github: 'https://github.com/rb58853/Tito-el-corrupto',
        asStudent: 4,
    },

    navMeshAgentAI: {
        skills: ['AI'],
        languages: ["C#"],
        title: 'Nav Mesh Agent AI',
        description: 'An agent is understood as an entity capable of perceiving its environment, processing such perceptions, and responding to them with an action in its environment. A navigation agent, in turn, is an entity that can also navigate (move) within a given space. The simplest example of a navigation space would be a matrix of positions where an entity moves under certain rules or valid movements; the agent must be able to move from one position to another in this space. In this project, we define the navigation space as a mesh of traversable polygons that connect through edges, specifically a mesh of triangles. A multi-agent system is a system composed of multiple agents that interact with each other and have the capacity to communicate with each other. Among the main characteristics of an agent, it is important to highlight its autonomous behavior, its local vision of the system, and its decentralization, meaning that there is no entity that controls the global behavior of all agents. These multi-agent systems have been used in computing for years for crowd simulation, some of their utilities include simulating people in certain circumstances such as in an evacuation, a bus terminal, etc. In recent years, multi-agent systems have been used in the simulation of cinematic crowds, as is the case with The Lord of the Rings. Specifically, in our project, we will deal with this multi-agent system and the navigation system of the same, oriented towards the world of video games.',

        features: {
            Engine: 'Unity Engine',
            keywords: "Inteligent agents, metaheuristics, heuristics, terrain simulation, multitude simulation",
            skills: "artificial inteligent, simulation, unity"
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

        github: 'https://github.com/rb58853/emilito',
        sitie: 'https://rb58853.github.io/emilito/',
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


    azul: {
        skills: ['Declarative'],
        languages: ["Prolog"],
        title: 'Azul',
        description: "This project involves implementing a simulation of the popular board game Blue using the declarative programming language Prolog. Blue is known for its tile placement mechanics and scoring based on patterns and sequences. In this simulation, the fundamental rules of the game are modeled, including the arrangement of tiles, color selection, and point calculation according to player configurations. Declarative programming in Prolog allows for clear and concise definition of the game rules and victory conditions, leveraging automatic inference and Prolog's capability to find solutions from predefined facts and rules. The project includes:Rule Definition: The rules of the Blue game are established in terms of facts and logical rules in Prolog, enabling a direct interpretation of the game mechanics. Turn Simulation: Logic is implemented to simulate game turns, where each player can select tiles from virtual factories and place them on their personal boards following the game's restrictions. Point Calculation: A module is developed to automatically calculate each player's points at the end of each round and at the end of the game, based on the positions of the tiles on their boards. User Interface: Although Prolog is not known for its graphical capabilities, a simple text interface is created that allows users to interact with the simulation, select actions, and view the current state of the game.",
        features: {
            keywords: "azul game, declarative programation, prolog.",
        },

        image: '/projects/azul/1.jpg',
        images: ['/projects/azul/1.jpg'],

        github: 'https://github.com/rb58853/Azul_Prolog',
        paper: '/projects/azul/paper.pdf',
        asStudent: 3,
    },

    ftp: {
        skills: ['Dist Systems'],
        languages: ["python"],
        title: 'Distributed ftp',
        description: "This project focuses on the design and implementation of a distributed file transfer protocol (FTP) system using Python, with a particular emphasis on leader coordination through the Bully algorithm. Distributed systems present unique challenges in terms of synchronization and coordination, especially regarding the election of a leader to manage critical operations. The Bully algorithm, recognized for its effectiveness in selecting leaders in distributed networks, plays a crucial role in this project. Distributed FTP Implementation: A distributed FTP system is developed that allows secure file transfers between nodes in a network. This system is designed to be resilient and scalable, capable of handling multiple simultaneous transfer requests without compromising performance. Bully Algorithm for Leader Coordination: The Bully algorithm is integrated for the election of leaders among the system nodes. This algorithm ensures that there is always an active and available node to coordinate FTP operations, even in case of failures or disconnections of some nodes. Failure Management and Reconnections: The system includes mechanisms to detect and handle node failures, ensuring the continuity of FTP service. When a node fails, the Bully algorithm activates a selection process to designate a new leader, minimizing service interruption.",

        features: {
            keywords: "Bully Algorithm, distributed ftp, data persistence",
            skills: "networks, distributed systems."
        },

        image: '/projects/distributedFTP/image.jpg',
        images: ['/projects/distributedFTP/image.jpg'],

        github: 'https://github.com/maux96/distributed-ftp',
        paper: '/projects/distributedFTP/paper.pdf',
        asStudent: 4,
    },

    littleArchemy: {
        skills: ['Django'],
        title: 'Little Archemy',
        description: 'This project combines the power of Django, a high-performance web development framework, with the interactivity of Telegram bots to create a unique platform dedicated to generating mathematical elements through virtual alchemical processes. The core idea is to allow users to interact with the system via text messages, where each mathematical element can be "rented" or combined with others to produce new concepts or mathematical solutions.',

        languages: ["Python"],
        features: {
            keywords: "Telegram bot, Django backend, applied mathematics. "
        },
        images: ['/projects/littleArchemy/image.jpg'],
        paper: '/projects/littleArchemy/paper.pdf',
        github: 'https://github.com/rb58853/Little-Archemy',
        asStudent: 3,
    },

    chatbot: {
        skills: ['ML', "IRS", 'AI'],
        title: 'Devman ChatBot',
        description: 'Project Description: Enhancing E-commerce Product Discovery with Embeddings and OpenAI GPT API. In the rapidly evolving landscape of e-commerce, enhancing product discovery has become crucial for businesses aiming to stand out amidst fierce competition. This project leverages cutting-edge technologies such as embeddings, IRS with Typesense, natural language processing (NLP) techniques powered by the OpenAI GPT API, and advanced information retrieval methods utilizing vector models to revolutionize how customers find products on online stores.',

        languages: ["Python"],
        features: {
            keywords: "Ecomerse chat-bot, typesense data, embeddings, NLP (Natural Language process), products retrieval."
        },
        image: '/projects/chatBot/image.jpg',
        images: ['/projects/chatBot/image.jpg'],
    },
    cvAssistant: {
        skills: ['ML', 'AI'],
        title: 'Portfolio Assistant Bot',
        description: "This project represents an innovative integration of advanced technologies in artificial intelligence and machine learning to create a personal assistant capable of efficiently processing and analyzing information. This project was developed using Python.\
        \n### Overview\
        \nThe project combines several key elements:\
        \n- A personal assistant based on NLP and machine learning\
        \n- Interacts with the GitHub API to access repository information\
        \n- Uses the OpenAI API and GPT-4 mini for advanced language processing\
        \n- Designed as open-source software to promote collaboration and continuous development\
        \n### Project Objective\
        \nThe main objective of this project is to develop an advanced virtual assistant that acts as the user's digital representative in job interviews and professional conversations. This assistant is designed to:\
        \n- Use the user's personal and professional information to personalize its performance\
        \n- Evaluate compatibility between job positions and the user's skills\
        \n- Learn and continuously improve based on user feedback",

        languages: ["Python"],
        features: {
            keywords: "NLP (Natural Language process), Open source code, fastapi, cifrated data."
        },
        images: ['/projects/cvAssistant/images/1.jpg'],
        // images: ['/projects/cvAssistant/images/1.jpg',
        //     '/projects/cvAssistant/images/2.jpg',
        //     '/projects/cvAssistant/images/3.jpg'],
        github: 'https://github.com/samura99/cv-assitant',
    },


}
export default projects