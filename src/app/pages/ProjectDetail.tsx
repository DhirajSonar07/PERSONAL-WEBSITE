import { useParams, Link } from "react-router";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Target } from "lucide-react";

export function ProjectDetail() {
  const { id } = useParams();

  // In a real app, this would fetch from an API based on the ID
  const projectData: Record<string, any> = {
    "project-1": {
      title: "E-Commerce Platform",
      tagline: "A modern, scalable e-commerce solution",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200",
      category: "Web Development",
      duration: "3 months",
      team: "Solo project",
      problem:
        "Small businesses struggle with expensive e-commerce solutions that require technical expertise to set up and maintain. Many existing platforms are either too complex or lack essential features like real-time inventory management and seamless payment processing.",
      solution:
        "Developed a full-stack e-commerce platform with an intuitive admin dashboard, real-time inventory tracking, and integrated payment processing. The platform features a responsive design, automated email notifications, and comprehensive analytics to help business owners make data-driven decisions.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "Redis", "AWS S3"],
      features: [
        "User authentication and authorization with JWT",
        "Product catalog with advanced search and filtering",
        "Shopping cart with persistent state",
        "Stripe payment integration with webhook handling",
        "Real-time inventory management",
        "Order tracking and status updates",
        "Admin dashboard with analytics",
        "Email notifications for orders and shipping",
        "Responsive design for mobile and desktop",
      ],
      outcome:
        "Successfully reduced checkout time by 40% through optimized UX flow. The platform handles 1000+ daily transactions with 99.9% uptime. Featured in local tech community showcase and received positive feedback from 50+ beta users.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      screenshots: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800",
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800",
      ],
    },
    "project-2": {
      title: "AI-Powered Task Manager",
      tagline: "Smart task management with ML-based prioritization",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200",
      category: "Machine Learning",
      duration: "4 months",
      team: "Team of 3",
      problem:
        "Traditional task managers don't help users prioritize effectively. Users often feel overwhelmed by long task lists and struggle to identify what to focus on first. Manual prioritization is time-consuming and often subjective.",
      solution:
        "Built an intelligent task management system that uses machine learning to automatically suggest task priorities based on deadlines, estimated effort, user behavior patterns, and historical completion data. The system learns from user feedback to improve recommendations over time.",
      tech: ["Python", "TensorFlow", "React", "TypeScript", "MongoDB", "FastAPI", "Docker"],
      features: [
        "ML-based priority recommendations",
        "Natural language task input",
        "Productivity analytics and insights",
        "Smart deadline suggestions",
        "Task categorization with tags",
        "Collaborative task boards",
        "Integration with Google Calendar",
        "Mobile-responsive progressive web app",
        "Dark mode support",
      ],
      outcome:
        "Reached 10,000+ active users within 6 months of launch. Users report 35% improvement in task completion rates. The ML model achieved 82% accuracy in priority predictions. Featured on Product Hunt and covered by tech blogs.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      screenshots: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      ],
    },
    "project-3": {
      title: "Real-Time Analytics Dashboard",
      tagline: "Live business intelligence and data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      category: "Data Visualization",
      duration: "2 months",
      team: "Solo project",
      problem:
        "Business teams need real-time insights but existing analytics tools have delays of minutes to hours. Static reports don't capture the dynamic nature of modern business operations, making it difficult to respond quickly to trends or issues.",
      solution:
        "Created a real-time analytics dashboard that processes and visualizes streaming data with sub-second latency. Built with WebSocket connections for live updates and D3.js for interactive visualizations. Includes customizable widgets and drill-down capabilities.",
      tech: ["React", "D3.js", "WebSocket", "Redis", "Node.js", "ClickHouse", "Docker"],
      features: [
        "Real-time data streaming with WebSockets",
        "Interactive charts and graphs",
        "Customizable dashboard layouts",
        "Drill-down analytics",
        "Data export functionality",
        "Alert system for threshold breaches",
        "Multiple data source integration",
        "Responsive design for all devices",
        "Historical data comparison",
      ],
      outcome:
        "Now processing 1M+ events per day with 99.95% uptime. Reduced decision-making time by 60% for business teams. Deployed across 5 departments in the organization. Received internal innovation award.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      screenshots: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800",
      ],
    },
  };

  const project = projectData[id as string];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[400px] bg-muted relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.tagline}</p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{project.team}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Problem
          </h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">Solution</h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">Key Features</h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot: string, idx: number) => (
              <div
                key={idx}
                className="aspect-video rounded-lg overflow-hidden border border-border"
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section>
          <h2 className="text-2xl mb-4">Outcome & Impact</h2>
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-lg">
            <p className="text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
