import React, { useState } from 'react';
import { Cloud, Database, Server, Code, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Cloud Infrastructure Automation",
            company: "Personal Project",
            period: "2024",
            description: "Automated AWS infrastructure deployment using Terraform and GitHub Actions. Implemented CI/CD pipelines for seamless deployment.",
            tech: ["AWS", "Terraform", "Docker"],
            icon: "☁️"
        },
        {
            id: 2,
            title: "Serverless API Gateway",
            company: "Learning Project",
            period: "2024",
            description: "Built a serverless REST API using AWS Lambda, API Gateway, and DynamoDB. Implemented authentication and rate limiting.",
            tech: ["Lambda", "API Gateway", "DynamoDB"],
            icon: "⚡"
        },
        {
            id: 3,
            title: "Container Orchestration",
            company: "Study Project",
            period: "2023",
            description: "Deployed and managed containerized applications using Kubernetes. Configured auto-scaling and load balancing.",
            tech: ["Kubernetes", "Docker", "Helm"],
            icon: "🐳"
        },
        {
            id: 4,
            title: "Monitoring & Logging System",
            company: "Practice Project",
            period: "2023",
            description: "Set up comprehensive monitoring using Prometheus and Grafana. Implemented centralized logging with ELK stack.",
            tech: ["Prometheus", "Grafana", "ELK"],
            icon: "📊"
        }
    ];

    const techStack = [
        { icon: "☁️", name: "AWS" },
        { icon: "🔷", name: "Ansible" },
        { icon: "🐳", name: "Docker" },
        { icon: "⎈", name: "Kubernetes" },
        { icon: "🔧", name: "Terraform" },
        { icon: "🐍", name: "Python" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0933] to-[#2d1155] text-white scroll-smooth">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-[#0a0118]/80 backdrop-blur-lg z-50 border-b border-purple-500/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                        NP
                    </div>
                    <div className="flex gap-8">
                        <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
                        <a href="#work" className="text-gray-300 hover:text-purple-400 transition-colors">Work</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
                {/* Glowing orb effect */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="mb-8 inline-block">
                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-600/40 rounded-3xl blur-2xl animate-pulse"></div>
                            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-purple-800 rounded-3xl flex items-center justify-center text-5xl shadow-2xl">
                                👨‍💻
                            </div>
                        </div>
                    </div>

                    <p className="text-purple-400 mb-4 text-lg">Hello! I'm <span className="text-purple-300 font-semibold">Norbert</span></p>

                    <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Junior <span className="text-purple-400">Cloud Developer</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8">
                        Welcome to my website <span className="text-purple-400">☁️</span>
                    </p>

                    <p className="text-white text-2xl font-bold max-w-2xl mx-auto leading-relaxed mb-2">
                        My Tech Stack:
                    </p>
                    {/* Tech Stack Icons */}
                    <div className="flex justify-center gap-4 mt-6">
                        {techStack.map((tech, idx) => (
                            <div
                                key={idx}
                                className="w-16 h-16 bg-purple-900/30 border border-purple-500/30 rounded-xl flex items-center justify-center text-3xl hover:bg-purple-800/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                                title={tech.name}
                            >
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <section id="work" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
                                onMouseEnter={() => setActiveProject(project.id)}
                                onMouseLeave={() => setActiveProject(null)}
                            >
                                {/* Background glow effect */}
                                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/5 transition-all duration-300"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 bg-purple-600/30 rounded-xl flex items-center justify-center text-2xl">
                                            {project.icon}
                                        </div>
                                        <span className="text-sm text-purple-400">{project.period}</span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-purple-400 text-sm mb-3">{project.company}</p>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex gap-2 flex-wrap">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-purple-800/30 border border-purple-500/30 rounded-full text-xs text-purple-300"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover indicator */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="w-5 h-5 text-purple-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6 relative">
                <div className="absolute inset-0 bg-purple-600/5 backdrop-blur-3xl"></div>

                <div className="relative z-10 max-w-6xl mx-auto">
                    {/* Section Title */}
                    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left Side - Photo */}
                        <div className="flex-1 flex flex-col items-center">
                            <div className="relative group">
                                {/* Glowing effect */}
                                <div className="absolute inset-0 bg-purple-600/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>

                                {/* Photo placeholder - replace with your actual photo */}
                                <div className="relative w-64 h-64 bg-gradient-to-br from-purple-500 to-purple-800 rounded-3xl flex items-center justify-center text-8xl shadow-2xl overflow-hidden border-4 border-purple-500/30">
                                    {
                                    <img
                                        src="/photo.png"
                                        alt="Norbert Pietrzak"
                                        className="w-full h-full object-cover"
                                    />
                                    }
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center gap-4 mt-8">
                                <a href="https://github.com/MED1123" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-purple-900/30 border border-purple-500/30 rounded-xl flex items-center justify-center hover:bg-purple-800/40 hover:-translate-y-1 transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/norbert-pietrzak-490245239/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-purple-900/30 border border-purple-500/30 rounded-xl flex items-center justify-center hover:bg-purple-800/40 hover:-translate-y-1 transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="mailto:norbertpietrzak1123@protonmail.com" className="w-12 h-12 bg-purple-900/30 border border-purple-500/30 rounded-xl flex items-center justify-center hover:bg-purple-800/40 hover:-translate-y-1 transition-all">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/*Timeline & Description */}
                        <div className="flex-1 space-y-8">
                            {/* Main Description */}
                            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-2xl p-6">
                                <h3 className="text-2xl font-bold mb-4 text-purple-300">My Journey</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Hello, my name is Norbert and I am very interested in DevOps and cloud solutions. I'm currently 23 years old and have been gaining knowledge about cloud systems administration since early 2025. Check out my projects - if you'd like to contact me, all the links are below.
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-purple-300 mb-4">Timeline</h3>

                                {/* Timeline Item 1 */}
                                <div className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                                    <div className="mb-1">
                                        <span className="text-purple-400 font-semibold">2024 - Present</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Cloud Development Journey</h4>
                                    <p className="text-gray-400 text-sm">
                                        Began exploring cloud technologies and infrastructure automation.
                                        Learned containerization with Docker and Kubernetes fundamentals.<br/><br/>
                                        Actively learning AWS services, Terraform, and DevOps practices. Building
                                        personal projects
                                        to gain hands-on experience with cloud infrastructure.
                                    </p>
                                </div>

                                {/* Timeline Item 2 */}
                                <div className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                                    <div className="mb-1">
                                        <span className="text-purple-400 font-semibold">2025</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">BMM internships</h4>
                                    <p className="text-gray-400 text-sm">
                                        I completed an internship at BMM company, which taught me how to create, administer, and maintain medical software in the healthcare system. I was responsible for implementing Asseco Poland software on the healthcare unit's, which were hosted on Oracle servers. I learned how to properly manage software based on Linux RHEL systems.
                                    </p>
                                </div>
                                {/* Timeline Item 3 */}
                                <div className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                                    <div className="mb-1">
                                        <span className="text-purple-400 font-semibold">2024</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Beginning of studies at WSB Merito Chorzów</h4>
                                    <p className="text-gray-400 text-sm">
                                        I consolidated my knowledge of computer networks: TCP/IP HTTP/HTTPS DNS DHCP protocols, improved my knowledge of SQL, noSQL, PostgreSQL databases.
                                    </p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-purple-500/30 hover:border-purple-500/60 transition-colors">
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                                    <div className="mb-1">
                                        <span className="text-purple-400 font-semibold">2019 - 2023</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">Beginning and completing studies at Technical School No. 9 in Rzeszów</h4>
                                    <p className="text-gray-400 text-sm">
                                        I acquired knowledge of the basics of the Internet network using the ISO/OSI TCP/IP standard, creating simple responsive websites in JavaScript, and connecting to servers using PHP. I learned basic SQL queries—combining tables, searching for information across multiple tables, and creating new tables or columns. I can manage servers—connecting a client to a server using Apache Web Server.
                                    </p>
                                    <a
                                        href="/dyplomy-technikum.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 px-4 py-2 bg-purple-600/30 border border-purple-500/40 rounded-lg text-sm text-purple-300 hover:bg-purple-600/50 hover:border-purple-400 transition-all"
                                    >
                                        📜 Check Diploma/Certificate
                                    </a>
                                </div>
                            </div>


                            <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 rounded-2xl p-6 mt-8">
                                <p className="text-gray-300 text-center">
                                    I'm currently looking to join a <span className="text-purple-400 font-semibold">cross-functional</span> team
                                    that values improving people's lives through <span className="text-purple-400 font-semibold">cloud solutions</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section with Mockups */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto space-y-32">
                    {/* Project 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <p className="text-purple-400 text-sm mb-2">Featured Project</p>
                            <h3 className="text-3xl font-bold mb-4">Cloud Dashboard</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                A web app for visualizing personalized cloud metrics data, view your
                                top artists, top tracks, recently played tracks, and detailed audio
                                information about each track. Create and save new playlists of
                                recommended tracks based on your existing playlists and more.
                            </p>
                            <div className="flex gap-4">
                                <Github className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
                                    <div className="bg-gray-950 rounded-lg p-4 h-64 flex items-center justify-center text-6xl">
                                        📊
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="flex-1">
                            <p className="text-purple-400 text-sm mb-2">Featured Project</p>
                            <h3 className="text-3xl font-bold mb-4">Infrastructure Monitor</h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
                                and more. Available on Visual Studio Marketplace, Package Control,
                                Atom Package Manager, and npm.
                            </p>
                            <div className="flex gap-4">
                                <Github className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                                <ExternalLink className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
                                    <div className="bg-gray-950 rounded-lg p-4 h-64 flex items-center justify-center text-6xl">
                                        🖥️
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-gray-500 border-t border-purple-500/10">
                <p>Built with React & Tailwind CSS</p>
                <p className="mt-2">© 2025 MED1123</p>
            </footer>
        </div>
    );
}