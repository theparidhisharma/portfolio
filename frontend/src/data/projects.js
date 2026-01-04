export const PROJECTS = [
  {
    id: '01',
    name: 'Retarget IQ',
    cat: 'Distributed Systems',
    shortDesc: 'Event-driven microservices prototype exploring Kafka consumers and throughput.',
    overview: 'RetargetIQ is a learning-focused distributed system designed to simulate high-throughput event processing. It uses an event-driven architecture with Apache Kafka to decouple services, managing partitions and consumer groups to handle event streams efficiently. The project explores patterns for data consistency and scalability in a containerized environment.',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker'],
    year: '2025',
    github: "https://github.com/theparidhisharma/RetargetIQ", 
    liveLink: "https://retarget-iq-frontend.vercel.app/", 
    demoImage: "/RETARGETIQ_1.png" 
  },
  {
    id: '02',
    name: 'Auto IQ',
    cat: 'Agentic AI',
    shortDesc: 'Prototype for predictive maintenance using ML inference and backend logic.',
    overview: 'Auto IQ is an experimental agentic AI system exploring the intersection of machine learning and backend engineering. It ingests sensor-like data, runs it through a predictive model to assess failure risks, and simulates automated maintenance workflow triggers based on defined thresholds.',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'Postgres'],
    year: '2025',
    github: "https://github.com/theparidhisharma/AutoIQ",
    liveLink: "#", 
    demoImage: "/AUTOIQ_1.png" 
  },
  {
    id: '03',
    name: 'Student Portal',
    cat: 'Full Stack App',
    shortDesc: 'Comprehensive academic management portal designed for student workflows.',
    overview: 'A full-stack web application built to address the usability challenges of legacy academic systems. The portal features a responsive React frontend consuming RESTful APIs to display grades, attendance, and schedules. It focuses on modular component design and clean data visualization.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Tailwind'],
    year: '2024',
    github: "https://github.com/theparidhisharma/StudentPortal",
    liveLink: "https://student-portal-navy-six.vercel.app/", 
    demoImage: "/STUDENTPORTAL_1.png" 
  }
];