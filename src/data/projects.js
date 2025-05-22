export const projects = [
    {
      title: "Video2Clip",
      tags: ["Python", "FastAPI", "AI"],
      description: "Web application that uses AI to automatically segment long videos into short, meaningful clips. Designed for content creators and educators.",
      bullets: [
        "Developed video segmentation algorithms leveraging deep learning.",
        "Implemented a FastAPI backend to serve video processing requests.",
        "Deployed the application using Docker for scalable cloud hosting."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/manufhros/Video2Clip" },
        { name: "Live Demo", url: "#" }
      ]
    },
    {
      title: "Natural Language to SQL - NL2SQL",
      tags: ["Python", "FastAPI", "NLP"],
      description: "API service that translates natural language queries into SQL statements using state-of-the-art NLP models.",
      bullets: [
        "Created a REST API that parses user input and generates SQL.",
        "Integrated OpenAI/Cohere embeddings for robust understanding.",
        "Wrote comprehensive unit and integration tests."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/manufhros/NL2SQL" },
        { name: "Live Demo", url: "#" }
      ]
    },
    {
      title: "Semantic Vector Database API",
      tags: ["Python", "FastAPI", "SQLite", "Indexing Algorithms", "Cohere", "Docker", "Kubernetes"],
      description: "High-performance vector database for semantic search and retrieval. REST API supports CRUD for libraries, documents, and embeddings.",
      bullets: [
        "Built custom k-NN search with pluggable indexing (LSH, brute-force).",
        "Integrated Cohere embeddings for semantic similarity.",
        "Dockerized app and deployed on Kubernetes for cloud scalability."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/manufhros/vectorDB-API" },
        { name: "Live Demo", url: "#" }
      ]
    },
    {
      title: "Credit Approval Classification - Machine Learning with R",
      tags: ["R", "Machine Learning", "caret", "Classification"],
      description: "Built and evaluated ML models for credit approval decisions on real-world datasets using R.",
      bullets: [
        "Preprocessed and cleaned large, imbalanced credit datasets.",
        "Trained and tuned models (decision trees, SVM, random forest).",
        "Evaluated models with cross-validation, documented results."
      ],
      links: [
        { name: "GitHub", url: "https://github.com/manufhros/Credit-Approval-Classification" },
        { name: "Live Demo", url: "#" }
      ]
    }
  ];