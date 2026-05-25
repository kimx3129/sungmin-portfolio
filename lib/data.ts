// ============================================================
// Portfolio Data — Sungmin Kim
// Edit this file to update all portfolio content.
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: "book" | "paper";
  doi?: string;
  link?: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  platform: string;
  link: string;
  description: string;
  language: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: string;
  location?: string;
  highlights?: string[];
}

// ---------------------------------------------------------------------------
// Personal info
// ---------------------------------------------------------------------------
export const personalInfo = {
  name:     "Sungmin Kim",
  title:    "Senior Software Engineer",
  company:  "Tempus AI",
  location: "San Jose, California",
  email:    "kimx3129@gmail.com",
  linkedin: "https://www.linkedin.com/in/sungminkim510",
  github:   "https://github.com/kimx3129",
  tagline:  "AI Agent Engineer · Software Engineer · AWS Author",
  bio: [
    "Software Engineer specializing in AI Agentic Systems and scalable data engineering — building intelligent pipelines that combine LLMs, multi-agent orchestration, and cloud infrastructure.",
    "Author of \"업무에 바로 쓰는 AWS 입문\" (Hanbit Media, 2023) — a hands-on Korean-language AWS guide for working practitioners.",
    "Research contributor to AI-assisted radiology summarization, published in the Journal of Digital Imaging (2020).",
    "Instructor on Udemy and Inflearn with 7 courses spanning AWS, Python, GCP BigQuery, and AI Engineering.",
  ],
  skills: {
    aiAgents:   ["LangGraph", "LangChain", "Claude API", "AI Agents", "Multi-Agent Systems", "Prompt Engineering"],
    languages:  ["Python", "Java", "C++", "R", "TypeScript"],
    frameworks: ["Flask", "Next.js", "FastAPI"],
    dataViz:    ["Tableau", "D3.js"],
    cloud:      ["AWS", "GCP", "BigQuery"],
    databases:  ["SQL", "NoSQL"],
    tools:      ["Git", "Docker", "dbt", "Jupyter"],
  },
};

// ---------------------------------------------------------------------------
// Work Experience  (reverse-chronological — most recent first)
// ---------------------------------------------------------------------------
export const experiences: Experience[] = [
  {
    id:          "tempus-ai",
    company:     "Tempus AI",
    role:        "Senior Software Engineer",
    location:    "Redwood City, California",
    period:      "October 2021 – Present",
    current:     true,
    description: "Building scalable data pipelines and AI-powered systems that drive precision medicine and clinical data intelligence at a leading AI-driven healthcare company.",
    highlights: [
      "Design and maintain high-throughput ETL pipelines processing clinical genomics data at scale",
      "Integrate LLM-based agents for automated data quality and enrichment workflows",
      "Lead cross-functional collaboration with ML engineers, data scientists, and clinical scientists",
      "Architect and optimize cloud infrastructure on AWS for cost efficiency and performance",
      "Mentor junior engineers and drive best practices in code review and system design",
    ],
    tech: ["Python", "GCP", "SQL", "Airflow", "DBT", "BigQuery"],
  },
  {
    id:          "egen-solutions",
    company:     "Egen Solutions",
    role:        "Data Engineer",
    location:    "Chicago, Illinois",
    period:      "May 2019 – October 2021",
    description: "Designed and delivered end-to-end data engineering solutions for enterprise clients, specializing in cloud data pipelines and analytics infrastructure.",
    highlights: [
      "Built and maintained scalable ETL pipelines ingesting large volumes of client data into cloud warehouses",
      "Developed data models and transformation logic using Python and SQL for downstream analytics",
      "Collaborated with analytics and product teams to deliver data-driven features on schedule",
      "Automated data quality checks and monitoring to ensure pipeline reliability",
    ],
    tech: ["Python", "SQL", "AWS", "Apache Airflow", "DBT", "Docker"],
  },
  {
    id:          "carvi",
    company:     "Carvi Inc.",
    role:        "Data Scientist",
    location:    "United States",
    period:      "March 2017 – January 2019",
    description: "Applied machine learning and statistical modeling to extract actionable insights from large datasets, supporting product and business decision-making.",
    highlights: [
      "Developed and deployed ML models for customer segmentation and predictive analytics",
      "Built data pipelines and feature engineering workflows to support model training and evaluation",
      "Communicated findings to non-technical stakeholders through dashboards and reports",
      "Collaborated with engineering teams to productionize models into core product features",
    ],
    tech: ["Python", "R", "scikit-learn", "SQL", "Tableau", "AWS"],
  },
  {
    id:          "first-analytics",
    company:     "First Analytics",
    role:        "Data Scientist Intern",
    location:    "United States",
    period:      "June 2016 – August 2016",
    description: "Contributed to analytics projects and exploratory data analysis for enterprise clients during a focused summer internship.",
    highlights: [
      "Conducted exploratory data analysis and statistical modeling on client datasets",
      "Built interactive visualizations using Tableau and D3.js for executive reporting",
      "Supported senior data scientists in model development and validation",
    ],
    tech: ["Python", "R", "SQL", "Tableau", "D3.js"],
  },
  {
    id:          "digi-international",
    company:     "Digi International",
    role:        "Software Engineer",
    location:    "Minnetonka, Minnesota",
    period:      "January 2013 – October 2013",
    description: "Contributed to backend software development for IoT connectivity products supporting industrial and commercial deployments worldwide.",
    highlights: [
      "Developed and maintained Java-based backend services for IoT device management",
      "Implemented data collection and monitoring pipelines for connected device fleets",
      "Improved system reliability through automated testing and thorough code reviews",
    ],
    tech: ["Python", "C++", "SQL", "REST API", "Java"],
  },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------
export const education: Education[] = [
  {
    id:       "depaul",
    school:   "DePaul University",
    degree:   "Master of Science",
    major:    "Data Science",
    period:   "2015 – 2017",
    location: "Chicago, Illinois",
    highlights: [
      "Focused on Machine Learning, Data Mining, and Artificial Intelligence",
      "Mentored \"Hour of Code\" with Chicago Public Schools",
      "Taught cybersecurity workshop at BLUE1647 hackathon",
    ],
  },
  {
    id:       "undergrad",
    school:   "University of Minnesota - Twin Cities",
    degree:   "Bachelor of Science",
    major:    "Computer Science",
    period:   "2011 – 2014",
    location: "Minneapolis, Minnesota",
    highlights: [
      "Developed AI player for board game in MIT Scheme (adversarial search)",
      "Foundation in algorithms, data structures, and software engineering",
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    id:          "crime-prediction",
    title:       "Crime Prediction",
    description: "Machine learning system that predicts crime patterns using 5M+ row datasets from Chicago city records.",
    tech:        ["Python", "Flask", "scikit-learn", "pandas", "Matplotlib"],
    year:        "2016",
    highlights: [
      "Processed 5,000,000+ rows of historical crime data",
      "Built a Flask web app for interactive map-based predictions",
      "Applied multiple ML classifiers; compared accuracy vs. baseline",
      "Visualised crime heat-maps with D3.js integration",
    ],
  },
  {
    id:          "baseball-analysis",
    title:       "Baseball Analysis & Visualisation",
    description: "End-to-end statistical analysis and interactive visualisation of MLB data using R, Tableau, and D3.",
    tech:        ["R", "Tableau", "D3.js", "ggplot2", "tidyverse"],
    year:        "2017",
    highlights: [
      "Cleaned and modelled multi-season MLB datasets in R",
      "Built interactive Tableau dashboards for team & player comparison",
      "Created custom D3.js charts for pitch trajectory analysis",
      "Presented findings at DePaul University data-science seminar",
    ],
  },
  {
    id:          "category5",
    title:       "Category 5 — Board Game AI",
    description: "AI-powered player for the Category 5 card game implemented in MIT Scheme using adversarial search.",
    tech:        ["MIT Scheme", "Lisp", "AI / Game Theory"],
    year:        "2011",
    highlights: [
      "Implemented minimax with alpha-beta pruning in MIT Scheme",
      "Designed heuristic evaluation function for hand management",
      "Beat human players in >80% of simulated games",
      "Explored functional-programming paradigms for AI game trees",
    ],
  },
];

// ---------------------------------------------------------------------------
// Publications
// ---------------------------------------------------------------------------
export const publications: Publication[] = [
  {
    id:          "aws-book",
    title:       "업무에 바로 쓰는 AWS 입문",
    authors:     "Sungmin Kim",
    venue:       "한빛미디어 (Hanbit Media)",
    year:        "2023",
    type:        "book",
    link:        "https://www.yes24.com/Product/Goods/116626210",
    description: "A practical Korean-language guide to AWS for working professionals. Covers core services (EC2, S3, RDS, Lambda) with real-world architecture patterns.",
  },
  {
    id:          "radiology-paper",
    title:       "Ontology-Based Radiology Teaching File Summarisation, Coverage, and Integration",
    authors:     "Sungmin Kim et al.",
    venue:       "Journal of Digital Imaging",
    year:        "2020",
    type:        "paper",
    doi:         "10.1007/s10278-020-00330-0",
    link:        "https://pmc.ncbi.nlm.nih.gov/articles/PMC7256159/",
    description: "Proposes an ontology-driven approach to automatically summarise and integrate radiology teaching files, improving coverage and discoverability for medical education.",
  },
];

// ---------------------------------------------------------------------------
// Teaching / Courses
// ---------------------------------------------------------------------------
export const courses: Course[] = [
  {
    id:          "inflearn-aws-beginner",
    title:       "AWS 입문자를 위한 강의",
    platform:    "인프런 (Inflearn)",
    link:        "https://inf.run/CTVce",
    description: "AWS 핵심 서비스를 처음부터 배우는 입문 강의. EC2, S3, RDS, IAM 등 실무에서 바로 활용할 수 있는 내용으로 구성.",
    language:    "Korean",
  },
  {
    id:          "inflearn-python-beginner",
    title:       "Python 입문자를 위한 강의",
    platform:    "인프런 (Inflearn)",
    link:        "https://inf.run/uvVnm",
    description: "Python 기초 문법부터 실전 활용까지 단계별로 배우는 입문 강의. 데이터 처리와 자동화 스크립트 작성까지 다룹니다.",
    language:    "Korean",
  },
  {
    id:          "inflearn-aws-advanced",
    title:       "AWS 중/상급자를 위한 강의",
    platform:    "인프런 (Inflearn)",
    link:        "https://inf.run/uYZGh",
    description: "AWS 서비스 심화 활용과 아키텍처 설계. VPC, ECS, Lambda, CloudFormation 등 중·상급 실무 패턴을 다룹니다.",
    language:    "Korean",
  },
  {
    id:          "inflearn-aws-real",
    title:       "AWS 실전을 위한 강의",
    platform:    "인프런 (Inflearn)",
    link:        "https://inf.run/JKM2g",
    description: "실제 서비스 운영 수준의 AWS 아키텍처 구성. 고가용성, 보안, 비용 최적화를 중심으로 실전 프로젝트를 구축합니다.",
    language:    "Korean",
  },
  {
    id:          "inflearn-bigquery",
    title:       "GCP BigQuery 입문자를 위한 강의",
    platform:    "인프런 (Inflearn)",
    link:        "https://inf.run/TYiRp",
    description: "Google Cloud BigQuery의 핵심 기능과 SQL 분석 기법. 대용량 데이터 쿼리 최적화와 데이터 파이프라인 구축을 배웁니다.",
    language:    "Korean",
  },
  {
    id:          "inflearn-ai-engineer",
    title:       "AI 엔지니어 입문자를 위한 강의",
    platform:    "인프런 (Inflearn)",
    link:        "https://inf.run/NxGLB",
    description: "LLM, AI Agent, RAG 파이프라인 등 AI 엔지니어링의 핵심 개념과 실습. Claude API와 LangGraph를 활용한 실전 에이전트 구축.",
    language:    "Korean",
  },
  {
    id:          "udemy",
    title:       "Data Engineering & AWS on Udemy",
    platform:    "Udemy",
    link:        "https://www.udemy.com/user/sungmin-kim/",
    description: "Hands-on courses covering AWS data services, pipeline design, and cloud-native architectures for data engineers.",
    language:    "English / Korean",
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const certifications: Certification[] = [
  { name: "Google Cloud Professional Data Engineer",       issuer: "Google",              date: "2020" },
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", date: "2019" },
  { name: "SCWCD (Sun Certified Web Component Developer)", issuer: "Sun Microsystems",    date: "2009" },
  { name: "SCJP (Sun Certified Java Programmer)",          issuer: "Sun Microsystems",    date: "2009" },
  { name: "MOS Master",                                    issuer: "Microsoft",           date: "2008" },
];
