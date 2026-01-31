import { Link } from "react-router";
import { Download, ExternalLink, Github, Linkedin, Mail, Trophy, Award, Clock, GitPullRequest } from "lucide-react";

export function Home() {
  // Tech stack for visual display
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration, inventory management, and real-time order tracking",
      category: "Web Development",
      categoryColor: "bg-blue-500",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      metrics: [
        { icon: "⚡", text: "40% faster checkout" },
        { icon: "👥", text: "1000+ daily users" },
      ],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    },
    {
      id: "project-2",
      title: "AI-Powered Task Manager",
      description:
        "Smart task management system with ML-based priority recommendations and productivity insights",
      category: "Machine Learning",
      categoryColor: "bg-green-500",
      tech: ["Python", "TensorFlow", "React", "MongoDB"],
      metrics: [
        { icon: "📊", text: "10K+ active users" },
        { icon: "🎯", text: "82% accuracy" },
      ],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    },
    {
      id: "project-3",
      title: "Real-Time Analytics Dashboard",
      description:
        "Live data visualization dashboard for business intelligence with WebSocket integration",
      category: "Data Visualization",
      categoryColor: "bg-purple-500",
      tech: ["React", "D3.js", "WebSocket", "Redis"],
      metrics: [
        { icon: "📈", text: "1M+ events/day" },
        { icon: "⚡", text: "Sub-second latency" },
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
  ];

  // Quick stats
  const stats = [
    { icon: GitPullRequest, number: "50+", label: "Open Source Contributions" },
    { icon: Trophy, number: "1st Place", label: "University Hackathon 2025" },
    { icon: Award, number: "3", label: "Professional Certifications" },
    { icon: Clock, number: "Available", label: "June 2026" },
  ];

  // Primary tech stack (for skills section)
  const primaryStack = [
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
  ];

  const toolsAndTech = [
    "Git",
    "Docker",
    "AWS",
    "VS Code",
    "Figma",
    "Postman",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-7xl w-full text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Open to Internships & Full-Time Roles
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            Dhiraj Sonar
          </h1>

          {/* Role */}
          <p className="text-xl font-medium text-muted-foreground mb-6">
            Computer Engineering Student | Aspiring Software Developer
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable web applications with React, Node.js, and cloud
            infrastructure. Passionate about solving real-world problems through
            innovative technology solutions.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
              style={{ height: "48px" }}
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border rounded-lg font-semibold hover:bg-accent hover:border-primary transition-all"
              style={{ height: "48px" }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-border rounded-lg hover:bg-accent hover:border-primary transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 border-2 border-border rounded-lg hover:bg-accent hover:border-primary transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Tech Stack Visual */}
          <div className="pt-16">
            <p className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-6">
              Core Technologies
            </p>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
                >
                  <div className="text-3xl">{tech.icon}</div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-semibold mb-3">Featured Projects</h2>
              <p className="text-lg text-muted-foreground">
                Real-world applications showcasing full-stack development and
                problem-solving
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 ${project.categoryColor} text-white text-xs font-semibold rounded`}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-surface text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 mb-5 text-sm text-muted-foreground">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <span>{metric.icon}</span>
                        <span>{metric.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Row */}
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded text-sm font-medium hover:bg-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-surface py-8 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-semibold mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Primary Stack */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
                Primary Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {primaryStack.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-muted-foreground">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {toolsAndTech.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-surface rounded-lg text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-right">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
            >
              View All Skills
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently seeking internship opportunities and full-time
            positions. Feel free to reach out to discuss how I can contribute to
            your team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
            style={{ height: "56px" }}
          >
            Get In Touch
          </Link>
          <p className="mt-6 text-muted-foreground">
            or email me at{" "}
            <a
              href="mailto:Dhiraj.Sonar@email.com"
              className="text-primary hover:underline"
            >
              Dhiraj.Sonar@email.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
