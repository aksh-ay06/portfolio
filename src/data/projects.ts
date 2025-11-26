export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tags: string[]
  category: ('ml' | 'data' | 'fullstack' | 'infrastructure')[] | 'ml' | 'data' | 'fullstack' | 'infrastructure'
  image?: string
  link?: string
  github?: string
  featured: boolean
  date: string
}

export const projects: Project[] = [
  {
    id: 'p2-energy-analytics',
    title: 'Energy Analytics for Sustainable Manufacturing',
    description:
      'Data-driven energy assessment system for industrial facilities across West Virginia.',
    longDescription:
      'Developed analytical workflows for WVU’s Pollution Prevention Lab to evaluate energy usage across HVAC, lighting, motors, and process equipment. Built models to estimate kWh and fuel savings, greenhouse-gas reductions, and ROI/payback for REAP grants. Conducted on-site audits, created structured datasets, and delivered data-backed recommendations that improved energy efficiency for small and medium-sized businesses.',
    tags: ['Python', 'Pandas', 'Energy Modeling', 'Data Analysis', 'Sustainability'],
    category: 'data',
    featured: true,
    date: '2024-10',
  },

  {
    id: 'log-to-control',
    title: 'Security Log-to-Control Mapping System',
    description:
      'Confidential cybersecurity workflow for automated log parsing and control mapping.',
    longDescription:
      'As part of Data Driven WV’s experiential learning program (under NDA), contributed to a secure system that ingests, parses, and classifies logs to map events to relevant security controls. Designed components for structured log processing, anomaly identification, and compliance-aligned categorization. Focused on reliability, data quality, and building logic layers that support faster detection and actionable reporting while following strict security guidelines.',
    tags: ['Python', 'Security Analytics', 'Log Parsing', 'Automation','Transformers'],
    category: ['fullstack', 'ml'],
    featured: true,
    date: '2024-11',
  },

  {
    id: 'amr-path-planner',
    title: 'Autonomous Mobile Robot Path Planner',
    description:
      'Python package for AMR path planning with dynamic obstacle avoidance and real-time simulation.',
    longDescription:
      'Developed a comprehensive Python framework enabling autonomous mobile robot (AMR) navigation on grid maps. Supports classic search algorithms (A*, Dijkstra), dynamic obstacle handling, path smoothing (Bezier, spline, shortcut), and real-time simulation. Modular architecture allows plug-and-play of planning algorithms and movement models for rapid prototyping.',
    tags: ['Python', 'Robotics', 'Path Planning', 'Simulation', 'A*', 'Dijkstra'],
    category: 'fullstack',
    featured: false,
    date: '2023-12',
    github:
      'https://github.com/aksh-ay06/Autonomous-Mobile-Robot-Path-Planner',
  },

  {
    id: 'laliga-pca-analysis',
    title: 'La Liga Player Performance Analysis (PCA, 2023/24)',
    description:
      'Unsupervised learning study to uncover player archetypes using PCA on 2023/24 La Liga data.',
    longDescription:
      'Applied Principal Component Analysis (PCA) on ~3,600 match-records (≈681 players) from La Liga 2023/24. Reduced 150+ features into principal components to reveal hidden structure in playing styles—identifying archetypes like ball-playing defenders, creators, finishers, and high-consistency players. Demonstrates dimensionality reduction for sports analytics and talent evaluation.',
    tags: ['Python', 'Pandas', 'scikit-learn', 'PCA', 'Sports Analytics'],
    category: 'data',
    featured: false,
    date: '2024-06',
    github:
      'https://github.com/aksh-ay06/La-Liga-Player-Performance-Analysis-PCA-Study-2023-24-',
  },

  {
    id: 'heating-tunnel-optimization',
    title: 'Heating Tunnel Operational Efficiency ML Analysis',
    description:
      'Machine learning analysis to optimize heating-tunnel efficiency and energy use.',
    longDescription:
      'Performed feature engineering, statistical diagnostics, and ML modeling on industrial heating-tunnel data. Identified inefficiencies and recommended optimal process settings to reduce energy use while maintaining throughput. Demonstrates real-world industrial analytics and manufacturing optimization.',
    tags: [
      'Python',
      'scikit-learn',
      'Pandas',
      'Energy Optimization',
      'Industrial Analytics',
    ],
    category: 'ml',
    featured: false,
    date: '2024-04',
    github:
      'https://github.com/aksh-ay06/Operational-Efficiency-Analysis-Machine-Learning-for-Heating-Tunnel-Optimization',
  },

  {
    id: 'automated-defect-detection',
    title: 'Automated Defect Detection System for Manufacturing QA',
    description:
      'AI-powered defect detection system for automated quality assurance in manufacturing.',
    longDescription:
      'Developed a computer-vision based system to detect surface flaws, misalignments, and anomalies in manufacturing outputs. Built a modular ML pipeline for training, classification, and evaluation using high-resolution images. Reduces manual inspection load and improves defect detection accuracy for high-throughput production.',
    tags: [
      'Python',
      'Computer Vision',
      'Machine Learning',
      'Manufacturing',
      'Automation',
    ],
    category: 'ml',
    featured: false,
    date: '2024-08',
    github:
      'https://github.com/aksh-ay06/Automated-Defect-Detection-System-for-Quality-Assurance-in-Manufacturing',
  },

  {
    id: 'health-data-analytics-pipeline',
    title: 'Health Data Analytics Pipeline',
    description:
      'End-to-end pipeline for processing and analyzing healthcare data.',
    longDescription:
      'Built a reproducible analytics pipeline with Airflow orchestration, dbt modeling, PostgreSQL warehouse storage, Dockerized deployments, and Superset dashboards. Cleans, validates, transforms, and visualizes breast-cancer dataset records to extract clinical insights.',
    tags: ['Python', 'Airflow', 'dbt', 'PostgreSQL', 'Docker', 'Superset'],
    category: 'data',
    featured: false,
    date: '2024-12',
    github:
      'https://github.com/aksh-ay06/Health-data-Analytics-Pipeline',
  },

  // ---------- YOUR EXISTING SAMPLE PROJECTS BELOW ----------

  
];


export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'ml', label: 'Machine Learning' },
  { value: 'data', label: 'Data Engineering' },
  { value: 'fullstack', label: 'Full-Stack' },
  { value: 'infrastructure', label: 'Infrastructure' },
] as const
