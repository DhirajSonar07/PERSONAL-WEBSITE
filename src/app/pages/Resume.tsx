import {
  Download,
  FileText,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";

export function Resume() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="py-16 px-6 lg:px-20 border-b border-border bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-2">Resume</h1>
              <p className="text-lg text-muted-foreground">
                Download my full resume or view key highlights below
              </p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg"
              style={{ height: "56px" }}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl shadow-md">
            <div className="p-12">
              {/* Header */}
              <div className="text-center mb-12 pb-12 border-b border-border">
                <h2 className="text-4xl font-bold mb-3">Dhiraj Sonar</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Computer Engineering Student | Aspiring Software Developer
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <a
                    href="mailto:Dhiraj.Sonar@email.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Dhiraj.Sonar@email.com
                  </a>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    (555) 123-4567
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    San Francisco, CA
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-semibold">Professional Summary</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Motivated Computer Engineering student with hands-on experience
                  in full-stack development and a passion for creating efficient,
                  user-centered solutions. Proven ability to work independently and
                  collaboratively in fast-paced environments. Seeking internship or
                  entry-level opportunities to contribute technical skills while
                  gaining industry experience.
                </p>
              </section>

              {/* Education */}
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold">
                          Bachelor of Science in Computer Engineering
                        </h4>
                        <p className="text-muted-foreground">University Name</p>
                      </div>
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">
                        Expected May 2027
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>GPA:</strong> 3.8/4.0
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Relevant Coursework:</strong> Data Structures &
                      Algorithms, Database Systems, Web Development, Machine
                      Learning
                    </p>
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold">
                          Software Engineering Intern
                        </h4>
                        <p className="text-muted-foreground">Tech Company Inc.</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        June 2025 - Aug 2025
                      </span>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Developed and deployed <strong>5+ features</strong> using
                          React and Node.js
                        </span>
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Optimized database queries, improving load time by{" "}
                          <strong>30%</strong>
                        </span>
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Implemented CI/CD pipeline using GitHub Actions
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-semibold">
                          Full-Stack Developer
                        </h4>
                        <p className="text-muted-foreground">
                          University Research Lab
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        Jan 2025 - May 2025
                      </span>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>
                          Built data visualization dashboard with React and D3.js
                        </span>
                      </li>
                      <li className="text-sm text-muted-foreground flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Designed RESTful APIs with Express.js</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="text-2xl font-semibold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <p className="text-sm text-muted-foreground">
                      Python, JavaScript/TypeScript, Java, C++, SQL, HTML/CSS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frameworks</h4>
                    <p className="text-sm text-muted-foreground">
                      React, Node.js, Express, Django, TailwindCSS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Databases</h4>
                    <p className="text-sm text-muted-foreground">
                      PostgreSQL, MongoDB, MySQL, Redis
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Git/GitHub, Docker, AWS, VS Code, Postman
                    </p>
                  </div>
                </div>
              </section>

              {/* Notable Projects */}
              <section>
                <h3 className="text-2xl font-semibold mb-6">Notable Projects</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      E-Commerce Platform
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Full-stack application with payment integration and
                      inventory management
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Technologies:</strong> React, Node.js, PostgreSQL,
                      Stripe
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      AI-Powered Task Manager
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Smart task management with ML-based priority recommendations
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Technologies:</strong> Python, TensorFlow, React,
                      MongoDB
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
