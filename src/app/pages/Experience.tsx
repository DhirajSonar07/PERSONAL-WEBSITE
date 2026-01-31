import { Briefcase, Calendar, MapPin, Download } from "lucide-react";
import { Link } from "react-router";

export function Experience() {
  const experiences = [
    {
      id: 1,
      date: "June 2025 - Aug 2025",
      role: "Software Engineering Intern",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      type: "Internship",
      typeColor: "bg-primary",
      description:
        "Worked on the core product team developing features for the company's main web application",
      responsibilities: [
        "Developed and deployed <strong>5+ features</strong> for company's main web application using <strong>React and Node.js</strong>",
        "Optimized database queries resulting in <strong>30% improvement</strong> in application load time",
        "Collaborated with senior engineers to implement <strong>CI/CD pipeline</strong> using GitHub Actions",
        "Participated in daily standups, code reviews, and sprint planning meetings",
        "Wrote comprehensive unit tests achieving <strong>85% code coverage</strong>",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: 2,
      date: "Jan 2025 - May 2025",
      role: "Full-Stack Developer",
      company: "University Research Lab",
      location: "Remote",
      type: "Part-time",
      typeColor: "bg-secondary",
      description:
        "Developed data visualization tools for research data analysis",
      responsibilities: [
        "Built a data visualization dashboard for research data analysis using <strong>React and D3.js</strong>",
        "Designed and implemented <strong>RESTful APIs</strong> with Express.js for data management",
        "Created responsive UI components following <strong>Material Design</strong> principles",
        "Worked with faculty to gather requirements and iterate on design",
        "Managed version control and collaborated with <strong>3 other student developers</strong>",
      ],
      technologies: ["React", "Express.js", "MongoDB", "D3.js", "Material-UI"],
    },
    {
      id: 3,
      date: "Sept 2024 - Dec 2024",
      role: "Web Development Volunteer",
      company: "Local Non-Profit Organization",
      location: "Remote",
      type: "Volunteer",
      typeColor: "bg-muted",
      description:
        "Redesigned and rebuilt the organization's website to improve user engagement",
      responsibilities: [
        "Redesigned organization's website, improving user engagement by <strong>50%</strong>",
        "Implemented online donation system integrated with <strong>Stripe payment gateway</strong>",
        "Trained staff on content management system usage",
        "Provided ongoing technical support and maintenance",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Stripe API"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-6 lg:px-20 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">Home / Experience</p>
          <h1 className="text-5xl font-bold mb-4">Experience</h1>
          <p className="text-lg text-muted-foreground">
            My professional journey in software development, from internships to
            volunteer work
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pb-16 last:pb-0">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-[120px_1fr] md:gap-8">
                  {/* Date Column */}
                  <div className="relative">
                    <div className="text-sm font-semibold text-muted-foreground sticky top-24">
                      {exp.date}
                    </div>
                    {/* Connector Line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-border" />
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[36px] top-1 w-3 h-3 bg-primary rounded-full border-4 border-background" />

                    {/* Card */}
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{exp.role}</h3>
                            <span
                              className={`px-2 py-1 ${exp.typeColor} text-white text-xs font-semibold rounded`}
                            >
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6">{exp.description}</p>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex gap-3"
                            >
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              <span dangerouslySetInnerHTML={{ __html: resp }} />
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary rounded-full border-4 border-background" />
                      {index < experiences.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-xs font-semibold text-muted-foreground mb-3">
                        {exp.date}
                      </div>
                      <div className="bg-card border border-border rounded-xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{exp.role}</h3>
                          <span
                            className={`px-2 py-1 ${exp.typeColor} text-white text-xs font-semibold rounded`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-sm font-medium mb-1">{exp.company}</p>
                        <p className="text-xs text-muted-foreground mb-4">
                          {exp.location}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {exp.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold mb-2">
                            Key Responsibilities:
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-muted-foreground flex gap-2"
                              >
                                <span className="text-primary mt-0.5">•</span>
                                <span dangerouslySetInnerHTML={{ __html: resp }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-surface border border-border rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">Looking for My Resume?</h3>
            <p className="text-muted-foreground mb-6">
              Download my full resume to see more details about my experience and
              qualifications
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
