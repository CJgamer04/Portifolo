export type Lang = 'pt' | 'en'

export interface BiText {
  pt: string
  en: string
}

export const tr = {
  nav: {
    home: { pt: 'Início', en: 'Home' },
    about: { pt: 'Sobre', en: 'About' },
    experience: { pt: 'Experiência', en: 'Experience' },
    skills: { pt: 'Competências', en: 'Skills' },
    projects: { pt: 'Projetos', en: 'Projects' },
    certifications: { pt: 'Certificações', en: 'Certifications' },
    resume: { pt: 'Currículo', en: 'Resume' },
  },

  common: {
    viewCaseStudy: { pt: 'Ver Case Study', en: 'View Case Study' },
    github: { pt: 'GitHub', en: 'GitHub' },
    downloadResume: { pt: 'Baixar Currículo', en: 'Download Resume' },
    openPDF: { pt: 'Abrir PDF', en: 'Open PDF' },
    contact: { pt: 'Contato', en: 'Contact' },
    backToProjects: { pt: '← Voltar aos Projetos', en: '← Back to Projects' },
    highlight: { pt: 'Destaque', en: 'Highlight' },
    present: { pt: 'Atual', en: 'Present' },
    brazil: { pt: 'Brasil', en: 'Brazil' },
  },

  home: {
    name: { pt: 'Charles Pereira Marcelino Júnior', en: 'Charles Pereira Marcelino Júnior' },
    title: { pt: 'Cientista da Computação', en: 'Computer Scientist' },
    headline: {
      pt: 'Cientista da Computação com foco em Análise de Requisitos, Gestão de Projetos, Produto e Métodos Ágeis (Scrum & Kanban), transformando necessidades de negócio em soluções tecnológicas por meio da colaboração entre usuários e equipes técnicas.',
      en: 'Computer Scientist focused on Requirements Analysis, Project Management, Product and Agile Methodologies (Scrum & Kanban), transforming business needs into technological solutions through collaboration between users and technical teams.',
    },
    summary: {
      pt: 'Graduado em Ciência da Computação com dois anos de experiência corporativa em TI. Atua com levantamento de requisitos, documentação, organização de backlog, prototipação de interfaces, metodologias ágeis e comunicação entre as áreas de negócio e técnica.',
      en: 'Computer Science graduate with two years of corporate IT experience. Works with requirements elicitation, documentation, backlog organization, interface prototyping, agile methodologies, and communication between business and technical teams.',
    },
    ctaWork: { pt: 'Conheça Meu Trabalho', en: 'See My Work' },
    ctaProjects: { pt: 'Projetos', en: 'Projects' },
    ctaResume: { pt: 'Currículo', en: 'Resume' },
    ctaContact: { pt: 'Contato', en: 'Contact' },
    featuresTitle: { pt: 'Minhas Especialidades', en: 'My Specializations' },
    featuresSubtitle: {
      pt: 'Combinando análise técnica e visão de produto para entregar soluções de alto valor.',
      en: 'Combining technical analysis and product vision to deliver high-value solutions.',
    },
    cards: [
      {
        title: { pt: 'Análise de Requisitos', en: 'Requirements Analysis' },
        desc: { pt: 'Transformando necessidades de negócio em requisitos funcionais bem definidos e documentados.', en: 'Transforming business needs into well-defined and documented functional requirements.' },
      },
      {
        title: { pt: 'Gestão de Projetos', en: 'Project Management' },
        desc: { pt: 'Planejamento, priorização e monitoramento de entregas com metodologias ágeis.', en: 'Planning, prioritization and monitoring of deliveries with agile methodologies.' },
      },
      {
        title: { pt: 'Prototipação de Interfaces', en: 'Interface Prototyping' },
        desc: { pt: 'Criação de wireframes e validação de soluções com Figma e Balsamiq.', en: 'Creating wireframes and validating solutions using Figma and Balsamiq.' },
      },
      {
        title: { pt: 'Negócio × Tecnologia', en: 'Business × Technology' },
        desc: { pt: 'Conectando stakeholders e equipes técnicas por meio de comunicação clara e estruturada.', en: 'Connecting stakeholders and technical teams through clear and structured communication.' },
      },
    ],
  },

  about: {
    pageTitle: { pt: 'Quem Sou', en: 'About Me' },
    pageSubtitle: { pt: 'Conheça minha trajetória e visão profissional', en: 'Get to know my journey and professional vision' },
    bioTitle: { pt: 'Biografia Profissional', en: 'Professional Biography' },
    bio: {
      pt: 'Sou graduado em Ciência da Computação pelo UDF Centro Universitário, com dois anos de experiência corporativa em TI atuando como estagiário de Help Desk no Sindilegis, em Brasília. Ao longo da minha trajetória, desenvolvi competências sólidas em análise de requisitos, gestão de projetos e produto, metodologias ágeis e comunicação entre equipes de negócio e técnicas.\n\nMinha experiência prática inclui levantamento e documentação de requisitos, organização de backlog, participação em sprints, prototipação de interfaces com Figma e Balsamiq, além de suporte técnico e especificação de hardware. Tenho facilidade em traduzir necessidades de negócio em soluções tecnológicas claras e bem estruturadas.\n\nAo unir minha base técnica em Ciência da Computação com habilidades de gestão e produto, busco contribuir com equipes que trabalham na intersecção entre tecnologia e estratégia de negócio.',
      en: "I hold a Bachelor's degree in Computer Science from UDF Centro Universitário, with two years of corporate IT experience as a Help Desk Intern at Sindilegis, in Brasília. Throughout my journey, I developed solid skills in requirements analysis, project and product management, agile methodologies, and communication between business and technical teams.\n\nMy practical experience includes requirements elicitation and documentation, backlog organization, sprint participation, interface prototyping with Figma and Balsamiq, as well as technical support and hardware specification. I have a strong ability to translate business needs into clear and well-structured technological solutions.\n\nBy combining my technical foundation in Computer Science with management and product skills, I seek to contribute to teams working at the intersection of technology and business strategy.",
    },
    objectivesTitle: { pt: 'Objetivos Profissionais', en: 'Career Objectives' },
    objectives: {
      pt: 'Atuar como Analista de Requisitos, Analista de Negócios ou Product Owner em empresas que valorizam a colaboração entre negócio e tecnologia. Busco contribuir com times ágeis na definição, priorização e entrega de soluções de alto valor, aprofundando continuamente meu conhecimento em Product Management e Business Analysis.',
      en: 'Work as a Requirements Analyst, Business Analyst, or Product Owner in companies that value collaboration between business and technology. I seek to contribute to agile teams in the definition, prioritization and delivery of high-value solutions, while continuously deepening my knowledge in Product Management and Business Analysis.',
    },
    valuesTitle: { pt: 'Valores Profissionais', en: 'Professional Values' },
    values: [
      { pt: 'Comunicação Clara e Objetiva', en: 'Clear and Objective Communication' },
      { pt: 'Colaboração e Trabalho em Equipe', en: 'Collaboration and Teamwork' },
      { pt: 'Melhoria Contínua', en: 'Continuous Improvement' },
      { pt: 'Foco no Usuário', en: 'User Focus' },
      { pt: 'Responsabilidade e Comprometimento', en: 'Responsibility and Commitment' },
      { pt: 'Aprendizado Constante', en: 'Constant Learning' },
    ],
    interestsTitle: { pt: 'Áreas de Interesse', en: 'Areas of Interest' },
    interests: [
      { pt: 'Análise de Requisitos', en: 'Requirements Analysis' },
      { pt: 'Análise de Negócios', en: 'Business Analysis' },
      { pt: 'Gestão de Produto', en: 'Product Management' },
      { pt: 'Gestão de Projetos', en: 'Project Management' },
      { pt: 'Metodologias Ágeis', en: 'Agile Methodologies' },
      { pt: 'Melhoria de Processos', en: 'Process Improvement' },
    ],
    educationTitle: { pt: 'Formação Acadêmica', en: 'Education' },
    degree: { pt: 'Bacharelado em Ciência da Computação', en: "Bachelor's Degree in Computer Science" },
    university: { pt: 'UDF Centro Universitário', en: 'UDF Centro Universitário' },
    locationLabel: { pt: 'Localização', en: 'Location' },
    educationLocation: { pt: 'Brasília, Distrito Federal, Brasil', en: 'Brasília, Distrito Federal, Brazil' },
    languagesTitle: { pt: 'Idiomas', en: 'Languages' },
    languages: [
      { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
      { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Básico', en: 'Basic' } },
      { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'Básico', en: 'Basic' } },
    ],
  },

  experience: {
    pageTitle: { pt: 'Experiência', en: 'Experience' },
    pageSubtitle: { pt: 'Minha trajetória profissional', en: 'My professional journey' },
    role: { pt: 'Estagiário de Help Desk', en: 'Help Desk Intern' },
    company: 'Sindilegis',
    period: { pt: 'Dezembro 2023 – Dezembro 2025', en: 'December 2023 – December 2025' },
    location: { pt: 'Brasília, DF', en: 'Brasília, DF' },
    overviewTitle: { pt: 'Visão Geral', en: 'Overview' },
    overview: {
      pt: 'Atuei como estagiário de Help Desk no Sindilegis, sindicato de servidores do Legislativo Federal em Brasília, onde desenvolvi experiência prática em suporte técnico, análise de requisitos, prototipação de interfaces e gestão de backlog. O papel me permitiu trabalhar diretamente com usuários e equipes técnicas, desenvolvendo habilidades essenciais de comunicação, documentação e organização de demandas.',
      en: 'I worked as a Help Desk Intern at Sindilegis, a union of Federal Legislative servants in Brasília, where I developed hands-on experience in technical support, requirements analysis, interface prototyping, and backlog management. The role allowed me to work directly with users and technical teams, developing essential skills in communication, documentation, and demand organization.',
    },
    responsibilitiesTitle: { pt: 'Responsabilidades', en: 'Responsibilities' },
    responsibilities: [
      { pt: 'Levantamento de requisitos com usuários e stakeholders', en: 'Requirements elicitation with users and stakeholders' },
      { pt: 'Documentação de requisitos funcionais e não-funcionais', en: 'Documentation of functional and non-functional requirements' },
      { pt: 'Prototipação de interfaces com Figma e Balsamiq', en: 'Interface prototyping with Figma and Balsamiq' },
      { pt: 'Organização e gestão de backlog no ClickUp e Trello', en: 'Backlog organization and management in ClickUp and Trello' },
      { pt: 'Participação em sprints e cerimônias ágeis', en: 'Participation in sprints and agile ceremonies' },
      { pt: 'Suporte técnico a usuários internos', en: 'Technical support for internal users' },
      { pt: 'Especificação de hardware e equipamentos', en: 'Hardware and equipment specification' },
      { pt: 'Suporte tecnológico para eventos institucionais', en: 'Technology support for institutional events' },
    ],
    achievementsTitle: { pt: 'Conquistas', en: 'Achievements' },
    achievements: [
      { pt: 'Estruturação do processo de levantamento de requisitos para novos projetos internos', en: 'Structuring the requirements elicitation process for new internal projects' },
      { pt: 'Criação de protótipos de interface que reduziram o retrabalho no desenvolvimento', en: 'Creating interface prototypes that reduced development rework' },
      { pt: 'Organização do backlog com critérios claros de priorização e estimativas', en: 'Backlog organization with clear prioritization criteria and estimates' },
      { pt: 'Melhoria na comunicação entre equipes de negócio e técnica', en: 'Improved communication between business and technical teams' },
    ],
    toolsTitle: { pt: 'Ferramentas Utilizadas', en: 'Tools Used' },
    tools: ['ClickUp', 'Trello', 'Slack', 'Figma', 'Balsamiq', 'Microsoft Office', 'Windows'],
  },

  skills: {
    pageTitle: { pt: 'Competências', en: 'Skills' },
    pageSubtitle: { pt: 'Habilidades técnicas e comportamentais', en: 'Technical and behavioral skills' },
    categories: [
      {
        id: 'requirements',
        title: { pt: 'Análise de Requisitos', en: 'Requirements Analysis' },
        color: 'blue',
        items: [
          { pt: 'Levantamento de Requisitos', en: 'Requirements Elicitation' },
          { pt: 'Requisitos Funcionais', en: 'Functional Requirements' },
          { pt: 'Documentação', en: 'Documentation' },
          { pt: 'UML', en: 'UML' },
          { pt: 'BPMN', en: 'BPMN' },
          { pt: 'Histórias de Usuário', en: 'User Stories' },
        ],
      },
      {
        id: 'projectManagement',
        title: { pt: 'Gestão de Projetos', en: 'Project Management' },
        color: 'teal',
        items: [
          { pt: 'Ágil', en: 'Agile' },
          { pt: 'Scrum', en: 'Scrum' },
          { pt: 'Kanban', en: 'Kanban' },
          { pt: 'Gestão de Backlog', en: 'Backlog Management' },
          { pt: 'Sprint Planning', en: 'Sprint Planning' },
        ],
      },
      {
        id: 'product',
        title: { pt: 'Produto', en: 'Product' },
        color: 'purple',
        items: [
          { pt: 'Product Discovery', en: 'Product Discovery' },
          { pt: 'Product Thinking', en: 'Product Thinking' },
          { pt: 'Comunicação com Stakeholders', en: 'Stakeholder Communication' },
        ],
      },
      {
        id: 'tools',
        title: { pt: 'Ferramentas', en: 'Tools' },
        color: 'orange',
        items: [
          { pt: 'ClickUp', en: 'ClickUp' },
          { pt: 'Figma', en: 'Figma' },
          { pt: 'Balsamiq', en: 'Balsamiq' },
          { pt: 'Trello', en: 'Trello' },
          { pt: 'Slack', en: 'Slack' },
          { pt: 'Microsoft Office', en: 'Microsoft Office' },
        ],
      },
      {
        id: 'development',
        title: { pt: 'Desenvolvimento', en: 'Development' },
        color: 'slate',
        items: [
          { pt: 'Spring Boot', en: 'Spring Boot' },
          { pt: 'Angular', en: 'Angular' },
          { pt: 'MySQL', en: 'MySQL' },
          { pt: 'Git', en: 'Git' },
        ],
      },
      {
        id: 'softSkills',
        title: { pt: 'Soft Skills', en: 'Soft Skills' },
        color: 'green',
        items: [
          { pt: 'Comunicação', en: 'Communication' },
          { pt: 'Pensamento Analítico', en: 'Analytical Thinking' },
          { pt: 'Organização', en: 'Organization' },
          { pt: 'Resolução de Problemas', en: 'Problem Solving' },
          { pt: 'Trabalho em Equipe', en: 'Teamwork' },
          { pt: 'Aprendizado Contínuo', en: 'Continuous Learning' },
        ],
      },
    ],
  },

  projects: {
    pageTitle: { pt: 'Projetos', en: 'Projects' },
    pageSubtitle: { pt: 'Cases e sistemas desenvolvidos', en: 'Cases and developed systems' },
    sigebd: {
      title: 'SIGEBD',
      subtitle: { pt: 'Sistema de Gestão Escolar', en: 'School Management System' },
      description: {
        pt: 'Sistema web completo para gestão escolar desenvolvido com Angular, Spring Boot e MySQL. Inclui módulos para gestão de alunos, professores, turmas e avaliações.',
        en: 'Complete web system for school management developed with Angular, Spring Boot and MySQL. Includes modules for student, teacher, class and assessment management.',
      },
      tags: ['Angular', 'Spring Boot', 'MySQL', 'Requirements Engineering'],
      role: { pt: 'Analista de Requisitos & Desenvolvedor Back-end', en: 'Requirements Analyst & Back-end Developer' },
      year: '2024',
    },
  },

  projectSigebd: {
    title: 'SIGEBD',
    subtitle: { pt: 'Sistema de Gestão Escolar', en: 'School Management System' },
    overviewTitle: { pt: 'Visão Geral', en: 'Overview' },
    overview: {
      pt: 'O SIGEBD é um sistema web completo para gestão escolar, desenvolvido como projeto acadêmico. O sistema foi projetado para digitalizar e otimizar os processos administrativos e pedagógicos de instituições de ensino, desde a matrícula de alunos até o acompanhamento de notas e frequência.',
      en: 'SIGEBD is a complete web system for school management, developed as an academic project. The system was designed to digitize and optimize the administrative and pedagogical processes of educational institutions, from student enrollment to grade and attendance tracking.',
    },
    problemTitle: { pt: 'O Problema', en: 'The Problem' },
    problem: {
      pt: 'Muitas instituições de ensino ainda utilizam processos manuais ou sistemas legados desatualizados para gerenciar suas operações. Isso resulta em perda de dados, retrabalho, dificuldade de comunicação entre gestores, professores e alunos, além de ineficiências operacionais significativas.',
      en: 'Many educational institutions still use manual processes or outdated legacy systems to manage their operations. This results in data loss, rework, communication difficulties between managers, teachers and students, as well as significant operational inefficiencies.',
    },
    objectivesTitle: { pt: 'Objetivos', en: 'Objectives' },
    objectives: [
      { pt: 'Digitalizar os processos de matrícula e cadastro de alunos', en: 'Digitize enrollment and student registration processes' },
      { pt: 'Facilitar o acompanhamento de notas e frequência', en: 'Facilitate grade and attendance tracking' },
      { pt: 'Melhorar a comunicação entre gestores, professores e alunos', en: 'Improve communication between managers, teachers and students' },
      { pt: 'Gerar relatórios gerenciais automatizados', en: 'Generate automated management reports' },
      { pt: 'Garantir segurança e controle de acesso por perfil de usuário', en: 'Ensure security and access control by user profile' },
    ],
    myRoleTitle: { pt: 'Meu Papel', en: 'My Role' },
    myRole: {
      pt: 'Atuei como responsável pelo levantamento de requisitos, análise e documentação do sistema. Conduzi entrevistas com stakeholders, elaborei o documento de requisitos funcionais e não-funcionais, criei os protótipos de interface no Figma e Balsamiq, e participei ativamente do desenvolvimento back-end com Spring Boot.',
      en: "I was responsible for requirements elicitation, analysis and system documentation. I conducted stakeholder interviews, prepared the functional and non-functional requirements document, created interface prototypes in Figma and Balsamiq, and actively participated in back-end development with Spring Boot.",
    },
    requirementsTitle: { pt: 'Levantamento de Requisitos', en: 'Requirements Elicitation' },
    requirementsText: {
      pt: 'O levantamento foi realizado por meio de entrevistas, análise de documentação existente e workshops com stakeholders. Foram identificados e priorizados requisitos funcionais e não-funcionais com base no valor de negócio e viabilidade técnica.',
      en: 'Requirements gathering was conducted through interviews, analysis of existing documentation and stakeholder workshops. Functional and non-functional requirements were identified and prioritized based on business value and technical feasibility.',
    },
    frTitle: { pt: 'Requisitos Funcionais', en: 'Functional Requirements' },
    functionalRequirements: [
      { id: 'RF001', pt: 'Cadastro e gestão de alunos', en: 'Student registration and management' },
      { id: 'RF002', pt: 'Cadastro e gestão de professores', en: 'Teacher registration and management' },
      { id: 'RF003', pt: 'Criação e gestão de turmas', en: 'Class creation and management' },
      { id: 'RF004', pt: 'Lançamento e consulta de notas', en: 'Grade recording and querying' },
      { id: 'RF005', pt: 'Controle de frequência', en: 'Attendance control' },
      { id: 'RF006', pt: 'Geração de relatórios', en: 'Report generation' },
      { id: 'RF007', pt: 'Autenticação e controle de acesso', en: 'Authentication and access control' },
      { id: 'RF008', pt: 'Notificações e comunicados', en: 'Notifications and announcements' },
    ],
    profilesTitle: { pt: 'Perfis de Usuário', en: 'User Profiles' },
    profiles: [
      {
        name: { pt: 'Gestor', en: 'Manager' },
        icon: 'shield',
        permissions: {
          pt: ['Gerenciar todos os usuários', 'Criar e editar turmas', 'Gerar relatórios gerenciais', 'Configurar o sistema', 'Visualizar todos os dados'],
          en: ['Manage all users', 'Create and edit classes', 'Generate management reports', 'Configure the system', 'View all data'],
        },
      },
      {
        name: { pt: 'Professor', en: 'Teacher' },
        icon: 'book',
        permissions: {
          pt: ['Gerenciar suas turmas', 'Lançar notas e frequência', 'Visualizar dados dos seus alunos', 'Comunicar-se com alunos'],
          en: ['Manage their classes', 'Record grades and attendance', "View their students' data", 'Communicate with students'],
        },
      },
      {
        name: { pt: 'Aluno', en: 'Student' },
        icon: 'user',
        permissions: {
          pt: ['Visualizar suas notas', 'Consultar frequência', 'Acessar comunicados', 'Visualizar grade horária'],
          en: ['View their grades', 'Check attendance', 'Access announcements', 'View class schedule'],
        },
      },
    ],
    techTitle: { pt: 'Tecnologias', en: 'Technologies' },
    technologies: [
      { name: 'Angular', category: { pt: 'Front-end', en: 'Front-end' }, desc: { pt: 'Framework para construção da interface web', en: 'Framework for building the web interface' } },
      { name: 'Spring Boot', category: { pt: 'Back-end', en: 'Back-end' }, desc: { pt: 'Framework Java para desenvolvimento da API REST', en: 'Java framework for REST API development' } },
      { name: 'MySQL', category: { pt: 'Banco de Dados', en: 'Database' }, desc: { pt: 'Sistema de gerenciamento de banco de dados relacional', en: 'Relational database management system' } },
      { name: 'Figma', category: { pt: 'Design', en: 'Design' }, desc: { pt: 'Prototipação de interfaces e wireframes', en: 'Interface prototyping and wireframes' } },
      { name: 'Balsamiq', category: { pt: 'Design', en: 'Design' }, desc: { pt: 'Wireframes de baixa fidelidade', en: 'Low-fidelity wireframes' } },
    ],
    architectureTitle: { pt: 'Arquitetura do Sistema', en: 'System Architecture' },
    architecture: {
      pt: 'O sistema segue uma arquitetura de três camadas: camada de apresentação (Angular SPA), camada de negócio (Spring Boot REST API) e camada de dados (MySQL). A comunicação entre front-end e back-end é feita via API REST com autenticação JWT.',
      en: 'The system follows a three-tier architecture: presentation layer (Angular SPA), business layer (Spring Boot REST API), and data layer (MySQL). Communication between front-end and back-end is done via REST API with JWT authentication.',
    },
    resultsTitle: { pt: 'Resultados', en: 'Results' },
    results: [
      { pt: 'Sistema funcional com todos os módulos principais implementados', en: 'Functional system with all main modules implemented' },
      { pt: 'Interface intuitiva validada com usuários reais', en: 'Intuitive interface validated with real users' },
      { pt: 'Documentação completa de requisitos e arquitetura', en: 'Complete requirements and architecture documentation' },
      { pt: 'Controle de acesso seguro por perfil de usuário', en: 'Secure access control by user profile' },
    ],
    lessonsTitle: { pt: 'Lições Aprendidas', en: 'Lessons Learned' },
    lessons: {
      pt: 'Este projeto reforçou a importância de um levantamento de requisitos estruturado antes de iniciar o desenvolvimento. A prototipação antecipada com Figma permitiu validar a experiência do usuário e identificar problemas de usabilidade antes da implementação, reduzindo significativamente o retrabalho. A comunicação constante e o uso de metodologia ágil foram essenciais para a entrega dentro do prazo.',
      en: 'This project reinforced the importance of structured requirements gathering before starting development. Early prototyping with Figma allowed us to validate the user experience and identify usability issues before implementation, significantly reducing rework. Constant communication and the use of agile methodology were essential for on-time delivery.',
    },
    galleryTitle: { pt: 'Galeria', en: 'Gallery' },
  },

  certifications: {
    pageTitle: { pt: 'Certificações', en: 'Certifications' },
    pageSubtitle: { pt: 'Formações e certificados profissionais', en: 'Professional training and certificates' },
    institutions: [
      {
        id: 'scrumStudy',
        name: 'Scrum Study',
        certs: [
          { title: { pt: 'Scrum Fundamentals Certified (SFC)', en: 'Scrum Fundamentals Certified (SFC)' }, highlight: true, year: '2024' },
          { title: { pt: 'Product Owner Certified', en: 'Product Owner Certified' }, highlight: true, year: '2024' },
        ],
      },
      {
        id: 'clickup',
        name: 'ClickUp',
        certs: [
          { title: { pt: 'ClickUp Expert', en: 'ClickUp Expert' }, highlight: true, year: '2024' },
          { title: { pt: 'ClickUp Admin', en: 'ClickUp Admin' }, highlight: true, year: '2024' },
        ],
      },
      {
        id: 'alura',
        name: 'Alura',
        certs: [
          { title: { pt: 'Gestão de Projetos com Metodologias Ágeis', en: 'Project Management with Agile Methodologies' }, highlight: true, year: '2024' },
          { title: { pt: 'Análise de Negócios', en: 'Business Analysis' }, highlight: true, year: '2024' },
          { title: { pt: 'Kanban', en: 'Kanban' }, highlight: true, year: '2023' },
          { title: { pt: 'Scrum', en: 'Scrum' }, highlight: false, year: '2023' },
          { title: { pt: 'Fundamentos de UX e Produto', en: 'UX and Product Fundamentals' }, highlight: false, year: '2024' },
        ],
      },
      {
        id: 'linkedinLearning',
        name: 'LinkedIn Learning',
        certs: [
          { title: { pt: 'Fundamentos de Inteligência Artificial', en: 'Artificial Intelligence Fundamentals' }, highlight: true, year: '2024' },
          { title: { pt: 'Prompt Engineering para Profissionais', en: 'Prompt Engineering for Professionals' }, highlight: true, year: '2024' },
          { title: { pt: 'Gestão de Produto Digital', en: 'Digital Product Management' }, highlight: false, year: '2024' },
        ],
      },
      {
        id: 'santander',
        name: 'Santander',
        certs: [
          { title: { pt: 'Tecnologia e Inovação', en: 'Technology and Innovation' }, highlight: false, year: '2023' },
          { title: { pt: 'Programação para Iniciantes', en: 'Programming for Beginners' }, highlight: false, year: '2023' },
        ],
      },
      {
        id: 'enap',
        name: 'ENAP',
        certs: [
          { title: { pt: 'Gestão de Projetos no Setor Público', en: 'Project Management in the Public Sector' }, highlight: false, year: '2024' },
          { title: { pt: 'Transformação Digital', en: 'Digital Transformation' }, highlight: false, year: '2024' },
        ],
      },
      {
        id: 'websis',
        name: 'Websis',
        certs: [
          { title: { pt: 'Análise e Levantamento de Requisitos', en: 'Requirements Analysis and Elicitation' }, highlight: false, year: '2024' },
          { title: { pt: 'Documentação de Sistemas', en: 'Systems Documentation' }, highlight: false, year: '2024' },
        ],
      },
    ],
  },

  resume: {
    pageTitle: { pt: 'Currículo', en: 'Resume' },
    pageSubtitle: { pt: 'Visualize ou baixe meu currículo profissional', en: 'View or download my professional resume' },
    downloadBtn: { pt: 'Baixar Currículo', en: 'Download Resume' },
    openPDFBtn: { pt: 'Abrir PDF', en: 'Open PDF' },
    previewNote: { pt: 'Visualização do currículo profissional', en: 'Professional resume preview' },
    infoNote: { pt: 'Currículo atualizado em 2025. Disponível para download em PDF.', en: 'Resume last updated in 2025. Available for download in PDF format.' },
  },

  footer: {
    copyright: { pt: '© 2025 Charles Pereira Marcelino Júnior. Todos os direitos reservados.', en: '© 2025 Charles Pereira Marcelino Júnior. All rights reserved.' },
    location: { pt: 'Brasília • DF • Brasil', en: 'Brasília • DF • Brazil' },
  },
}
