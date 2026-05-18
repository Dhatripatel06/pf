export const profile = {
  name: "Dhatri Patel",
  role: "Flutter Developer",
  tagline: "I build beautiful and scalable mobile apps",
  email: "dhatripatel67@gmail.com",
  phone: "+916355506411",
  location: "Bhavnagar / Ahemdabad, Gujarat, India",
  github: "https://github.com/Dhatripatel06",
  linkedin: "https://www.linkedin.com/in/dhatri-patel-426846322",
  website: "https://dhatripatel.vercel.app/",
  resumeUrl: "/dhatri-paladiya-resume.pdf",
  summary:
    "Computer Engineering student pursuing BCA at SSCCS, Bhavnagar. Passionate about crafting clean, scalable Flutter apps with thoughtful UI/UX. Strong foundation in mobile development, REST APIs, Firebase and modern state management with GetX.",
};

export const stats = [
  { label: "Projects Completed", value: 9 },
  { label: "Technologies Learned", value: 20 },
  { label: "Certifications", value: 5 },
  { label: "Awards Won", value: 2 },
];

export const skillGroups = [
  {
    title: "Mobile Development",
    icon: "Smartphone",
    skills: ["Flutter", "Dart", "Android Studio", "Firebase", "REST APIs", "JSON Parsing", "Android/iOS", "BLoC/Cubit", "GetX", "Riverpod", "Provider"],
  },
  {
    title: "Frontend & UI/UX",
    icon: "Palette",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive UI", "Pixel-Perfect Design", "Custom Widgets", "Animations", "Material Design", "Figma"],
  },
  {
    title: "Backend & APIs",
    icon: "Database",
    skills: ["Firebase Firestore", "Firebase Auth", "Firebase Storage", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Authentication", "Socket.io"],
  },
  {
    title: "AI / ML Integration",
    icon: "Cpu",
    skills: ["ONNX Runtime", "TensorFlow Lite", "Google ML Kit", "Generative AI", "Machine Learning", "Prompt Engineering", "Python"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["Firebase Hosting", "Vercel", "GitHub Actions", "Play Store", "App Store"],
  },
  {
    title: "Tools & Architecture",
    icon: "Code2",
    skills: ["Git", "GitHub", "VS Code", "Postman", "SQL", "Java", "Clean Architecture", "Async Programming", "Streams", "API Integration", "App Deployment"],
  },
];

export const projects = [
  {
    title: "MindHeal",
    subtitle: "AI Mental Health Companion",
    icon: "🧠",
    award: "Award Winner 2025",
    description:
      "A cross-platform Flutter application for mental health and mindfulness. the Aim of app is control Suicide rates which is rise globally. There is a critical need for a system that can detect early signs of emotional distress, provide instant support, and connect individuals with a counsellor-like companion before the situation escalates. Features: It provides multi-modal mood detection by analyzing user BPM & sentiment from both facial expressions (image)and vocal tone (audio). The app leverages AI/ML models (like ONNX and Google ML Kit) for this analysis. Based on the detected mood, a Generative AI-powered adviser & app also includes an interactive chatbot for on-demand support.",
    stack: ["Flutter", "ONNX", "Google ML Kit", "GenAI", "Firebase"],
    accent: "from-sky-500/30 to-cyan-400/20",
    demo: "https://drive.google.com/file/d/1rQqaEvDNxxFuvWvjv9LHzea5fUYvreR8/view?usp=sharing",
    source: "https://github.com/Dhatripatel06/MindHeal_org",
  },
  {
    title: "AgreeCare",
    subtitle: "Smart Agriculture IoT",
    icon: "🌱",
    award: "Award Winner 2024",
    description:
      "Developed an IoT-based smart agriculture system to monitor and automate plant growth conditions using sensors for soil moisture, temperature, and humidity. Collaborated with a senior to build an Android app integrated with Firebase for real-time data tracking, disease prediction, and weather insights. Implemented automated irrigation using NodeMCU and Arduino, improving water efficiency and crop management. The system also provides farmers with analytics, government scheme access, and agriculture-related updates. ",
    stack: ["Flutter", "Firebase", "NodeMCU", "Arduino", "Android"],
    accent: "from-emerald-400/30 to-teal-400/20",
    demo: "",
    source: "https://github.com/hetvidudhela/Agricare",
  },
  {
    title: "Masjid",
    subtitle: "Interactive 3D Simulation",
    icon: "🕌",
    award: "freelance",
    description:
      "Developed an interactive 3D simulation of the Al-Aqsa Mosque using C++ and OpenGL, enabling users to explore a realistic virtual environment. Implemented advanced graphics features such as lighting, texture mapping, and camera controls to enhance visual accuracy and user experience. Designed multiple viewing modes, including day/night simulation, with smooth navigation and real-time interaction. Focused on optimizing rendering performance and creating an immersive architectural visualization.",
    stack: ["C++", "OpenGL", "Graphics", "GLUT"],
    accent: "from-amber-400/30 to-orange-400/20",
    demo: "https://drive.google.com/file/d/1LqqJLJpwOlUpJsZKSKQMzcm35qwenmpz/view?usp=sharing",
    source: "https://github.com/ubeduk/masjid-e-aqsa",
  },
  {
    title: "Shiftly",
    subtitle: "Smart Shift Management Platform",
    icon: "⏰",
    award: "freelance",
    description:
      "Production-focused cross-platform Flutter application for freelance shift management. Enables efficient daily work scheduling, shift tracking, work hour calculation, and earnings management. Built with offline-first functionality, secure Google authentication, responsive layouts, and real-time Firebase Firestore synchronization across Android, iOS, Web, Windows, and macOS. Features break-time deduction support, multi-device sync, and enterprise-level architecture with CI/CD setup.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "GetX", "Hive", "Google Sign-In", "Codemagic", "REST APIs"],
    accent: "from-violet-400/30 to-purple-400/20",
    demo: "https://drive.google.com/file/d/1vF_Ej7Jjzy8C7JW5qqbZ49qwCPWeUw7r/view?usp=sharing",
    source: "https://github.com/Dhatripatel06/shift_manager",
  },
  {
    title: "JobZee",
    subtitle: "Full-Stack Job Portal",
    icon: "💼",
    award: "freelance",
    description:
      "Full-stack MERN job portal with responsive frontend interfaces using React.js and modern component-based architecture. Features dynamic job listings, employer dashboards, and comprehensive application management workflows. Integrated REST APIs and real-time messaging using Socket.io for seamless communication between job seekers and employers. Optimized user experience with responsive layouts and interactive UI components across all devices.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "REST APIs", "Tailwind CSS"],
    accent: "from-blue-400/30 to-cyan-400/20",
    demo: "https://jobzee-two.vercel.app/",
    source: "https://github.com/Dhatripatel06/jobzee",
  },
  {
    title: "LearnNova",
    subtitle: "eLearning Platform",
    icon: "📚",
    award: "Hackathon Finalist 2026",
    description:
      "Finalist project in Odoo x GVP Hackathon. Developed responsive frontend interfaces using React.js and Tailwind CSS with reusable UI components. Integrated REST APIs for dynamic content rendering and built interactive dashboards with role-based user experiences. Implemented features for students and instructors with seamless course management. Collaborated in a fast-paced hackathon development environment to deliver a production-ready eLearning solution.",
    stack: ["React.js", "Tailwind CSS", "REST APIs", "JavaScript", "UI Components"],
    accent: "from-yellow-400/30 to-orange-400/20",
    demo: "",
    source: "https://github.com/isha-gohel181/Learn_nova",
  },
];

export const experience = [
  {
    role: "Front-End Developer (Intern)",
    company: "Dashmesh Software Solution",
    period: "Jan 2026 — Feb 2026",
    stack: ["Next.js", "React", "MongoDB", "Tailwind", "Vercel"],
  },
];

export const certifications = [
  {
    name: "AI Foundations Associate",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=DF8C64BD7F6F8A01E7054216FE3DCF500FF14185A741F5976264A9F6BB25A31D",
  },
  {
    name: "Oracle Certified Generative AI Professional",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=14B28E2C8840F7237450363C0DF05EB473E02E29F2C26EDBF77FD940841CCD8A",
  },
  {
    name: "Summer Analytics 2025",
    url: "https://media.geeksforgeeks.org/auth-certificates/1751999400/feea77551e8072f275dfd73771c5e466.png",
  },
  {
    name: "Salesforce Certified",
    url: "https://certificate.givemycertificate.com/c/2887752f-d313-4e9e-a368-f9c39b7bf2e4",
  },
  {
    name: "Front-End Developer Internship",
    url: "https://drive.google.com/file/d/1ZptGwISEQo75evCEJpxaTr312vE6bEGp/view?usp=sharing",
  },
];

export const education = {
  degree: "Bachelor of Computer Application (BCA)",
  school: "Shree Swaminarayan College of Computer Science (SSCCS)",
  location: "Bhavnagar, Gujarat",
  period: "2023 — 2026",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats2 = [
  { value: "8+", label: "Projects Built" },
  { value: "25+", label: "Technologies" },
  { value: "2", label: "Awards Won" },
  { value: "4", label: "Certifications" },
];
