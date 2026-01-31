import { Link } from "react-router";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const categories = [
    "All",
    "Web Development",
    "Machine Learning",
    "Mobile",
    "Data Visualization",
    "Developer Tools",
  ];

  const projects = [
    {
      id: "project-1",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration, inventory management, and real-time order tracking. Features include user authentication, shopping cart, order management, and comprehensive admin dashboard.",
      category: "Web Development",
      categoryColor: "bg-blue-500",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Stripe", "Redis", "AWS S3"],
      metrics: [
        "10,000+ active users",
        "Reduced checkout time by 40%",
        "1000+ daily transactions",
      ],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    },
    {
      id: "project-2",
      title: "AI-Powered Task Manager",
      description:
        "Smart task management system with ML-based priority recommendations and productivity insights. Uses TensorFlow for intelligent task prioritization based on user behavior patterns and historical completion data.",
      category: "Machine Learning",
      categoryColor: "bg-green-500",
      tech: ["Python", "TensorFlow", "React", "TypeScript", "MongoDB", "FastAPI", "Docker"],
      metrics: [
        "10,000+ active users in 6 months",
        "82% accuracy in priority predictions",
        "Featured on Product Hunt",
      ],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800",
    },
    {
      id: "project-3",
      title: "Real-Time Analytics Dashboard",
      description:
        "Live data visualization dashboard for business intelligence with WebSocket integration. Processes streaming data with sub-second latency and includes customizable widgets and drill-down capabilities.",
      category: "Data Visualization",
      categoryColor: "bg-purple-500",
      tech: ["React", "D3.js", "WebSocket", "Redis", "Node.js", "ClickHouse", "Docker"],
      metrics: [
        "Processing 1M+ events/day",
        "99.95% uptime",
        "60% reduction in decision-making time",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      id: "project-4",
      title: "Social Media Aggregator",
      description:
        "Platform that aggregates content from multiple social media APIs with sentiment analysis. Features include real-time feed updates, content filtering, and NLP-based sentiment tracking.",
      category: "Web Development",
      categoryColor: "bg-blue-500",
      tech: ["React", "Python", "Django", "NLP", "PostgreSQL", "Celery"],
      metrics: [
        "Featured on Product Hunt",
        "50K+ monthly active users",
        "Aggregating 100K+ posts daily",
      ],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    },
    {
      id: "project-5",
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for tracking workouts with custom exercise library. Includes workout planning, progress tracking, and social features for sharing achievements.",
      category: "Mobile",
      categoryColor: "bg-pink-500",
      tech: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
      metrics: [
        "5,000+ downloads",
        "4.8-star rating on App Store",
        "Active community of 2K+ users",
      ],
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800",
    },
    {
      id: "project-6",
      title: "Code Collaboration Tool",
      description:
        "Real-time collaborative code editor with syntax highlighting and live cursors. Built with Monaco Editor and WebSocket for seamless multi-user editing experience.",
      category: "Developer Tools",
      categoryColor: "bg-orange-500",
      tech: ["React", "Monaco Editor", "WebSocket", "Node.js", "Redis"],
      metrics: [
        "Used by 500+ developers",
        "Real-time collaboration",
        "99.9% uptime",
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Breadcrumb */}
      <section className="py-16 px-6 lg:px-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">Home / Projects</p>
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of web applications, tools, and experiments showcasing
            full-stack development, ML integration, and system design
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative">
              <button
                onClick={() => setSortMenuOpen(!sortMenuOpen)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors"
              >
                Sort: {sortBy}
                <ChevronDown className="w-4 h-4" />
              </button>
              {sortMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
                  {["Most Recent", "Most Impact"].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setSortMenuOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-accent transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <section className="py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative h-[450px] overflow-hidden">
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
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface text-sm font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="text-sm font-semibold mb-3 text-primary">
                      Impact & Results
                    </h4>
                    <ul className="space-y-2">
                      {project.metrics.map((metric, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Row */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border rounded-lg font-semibold hover:bg-accent hover:border-primary transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                    >
                      Case Study
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
