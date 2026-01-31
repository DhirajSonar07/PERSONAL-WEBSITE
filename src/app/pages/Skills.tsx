import {
  Code,
  Database,
  Wrench,
  Server,
  Globe,
  Users,
  MessageCircle,
  Lightbulb,
  Award,
  ExternalLink,
} from "lucide-react";

export function Skills() {
  const programmingLanguages = [
    { name: "Python", level: "Advanced", years: "3 years", proficiency: 100 },
    { name: "JavaScript/TypeScript", level: "Advanced", years: "3 years", proficiency: 100 },
    { name: "Java", level: "Intermediate", years: "2 years", proficiency: 70 },
    { name: "C++", level: "Intermediate", years: "2 years", proficiency: 70 },
    /*{ name: "SQL", level: "Advanced", years: "Production experience", proficiency: 100 },
    { name: "HTML/CSS", level: "Advanced", years: "3 years", proficiency: 100 },*/
  ];

  const frameworks = [
    { name: "React", level: "Advanced", years: "Production experience", proficiency: 100 },
    { name: "Node.js", level: "Advanced", years: "Production experience", proficiency: 100 },
    { name: "Express", level: "Intermediate", years: "2 years", proficiency: 70 },
    { name: "Django", level: "Intermediate", years: "1 year", proficiency: 70 },
    { name: "TailwindCSS", level: "Advanced", years: "2 years", proficiency: 100 },
  ];

  const databases = [
    { name: "PostgreSQL", level: "Advanced", years: "Production experience", proficiency: 100 },
    { name: "MongoDB", level: "Intermediate", years: "2 years", proficiency: 70 },
    { name: "MySQL", level: "Intermediate", years: "2 years", proficiency: 70 },
    { name: "Redis", level: "Beginner", years: "6 months", proficiency: 40 },
  ];

  const toolsDevOps = [
    { name: "Git/GitHub", level: "Advanced", years: "3 years", proficiency: 100 },
    { name: "Docker", level: "Intermediate", years: "1 year", proficiency: 70 },
    { name: "AWS", level: "Intermediate", years: "1 year", proficiency: 70 },
    { name: "VS Code", level: "Advanced", years: "3 years", proficiency: 100 },
    { name: "Postman", level: "Advanced", years: "2 years", proficiency: 100 },
  ];

  const otherTech = [
    { name: "REST APIs", level: "Advanced", years: "Production experience", proficiency: 100 },
    { name: "GraphQL", level: "Beginner", years: "6 months", proficiency: 40 },
    { name: "WebSockets", level: "Intermediate", years: "1 year", proficiency: 70 },
    { name: "TensorFlow", level: "Beginner", years: "Academic projects", proficiency: 40 },
  ];

  const skillGroups = [
    { title: "Programming Languages", icon: Code, skills: programmingLanguages },
    { title: "Frameworks & Libraries", icon: Globe, skills: frameworks },
    { title: "Databases", icon: Database, skills: databases },
    { title: "Tools & DevOps", icon: Wrench, skills: toolsDevOps },
    { title: "Other Technologies", icon: Server, skills: otherTech },
  ];

  const softSkills = [
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Experience working in agile teams and cross-functional environments. Comfortable with pair programming and code reviews.",
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description:
        "Strong written and verbal communication skills for technical and non-technical audiences. Experience presenting technical concepts to stakeholders.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Analytical thinking and systematic approach to debugging and optimization. Passionate about finding elegant solutions to complex problems.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "December 2025",
      credentialId: "AWS-ASA-123456",
      credentialUrl: "https://aws.amazon.com/certification",
    },
    {
      name: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "October 2025",
      credentialId: "PSM-789012",
      credentialUrl: "https://scrum.org",
    },
    {
      name: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "August 2025",
      credentialId: "MDB-345678",
      credentialUrl: "https://university.mongodb.com",
    },
  ];

  const courses = [
    {
      title: "Machine Learning Specialization",
      platform: "Coursera",
      instructor: "Andrew Ng",
      completed: "November 2025",
    },
    {
      title: "Full Stack Web Development",
      platform: "Udemy",
      instructor: "Colt Steele",
      completed: "July 2025",
    },
    {
      title: "System Design Interview",
      platform: "educative.io",
      instructor: "Design Gurus",
      completed: "September 2025",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary";
      case "Intermediate":
        return "bg-secondary";
      case "Beginner":
        return "bg-muted-foreground";
      default:
        return "bg-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-6 lg:px-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">Home / Skills</p>
          <h1 className="text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to build scalable, user-centered solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
            {/* Left Column: Technical Skills */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>

                <div className="space-y-10">
                  {skillGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.title}>
                        <div className="flex items-center gap-3 mb-6">
                          <Icon className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-semibold">{group.title}</h3>
                        </div>
                        <div className="space-y-5">
                          {group.skills.map((skill) => (
                            <div key={skill.name}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <div className="flex items-center gap-3">
                                  <span className="text-sm text-muted-foreground">
                                    {skill.years}
                                  </span>
                                  <span
                                    className={`px-2 py-1 ${getLevelColor(
                                      skill.level
                                    )} text-white text-xs font-semibold rounded`}
                                  >
                                    {skill.level}
                                  </span>
                                </div>
                              </div>
                              <div className="h-2 bg-surface rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getLevelColor(skill.level)} transition-all duration-500`}
                                  style={{ width: `${skill.proficiency}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Soft Skills & Certifications */}
            <div className="space-y-12">
              {/* Soft Skills */}
              <div>
                <h2 className="text-3xl font-semibold mb-8">Soft Skills</h2>
                <div className="space-y-6">
                  {softSkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.title}
                        className="bg-card border border-border rounded-xl p-6"
                      >
                        <Icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Featured Certifications */}
              <div>
                <h2 className="text-3xl font-semibold mb-8">
                  Featured Certifications
                </h2>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div
                      key={cert.credentialId}
                      className="bg-card border-2 border-primary/20 rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground mb-3">
                            Issued: {cert.date}
                          </p>
                          <p className="text-xs font-mono text-muted-foreground mb-3">
                            ID: {cert.credentialId}
                          </p>
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-medium"
                          >
                            View Credential
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Online Courses */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Online Courses</h2>
                <div className="space-y-4">
                  {courses.map((course, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-border rounded-lg p-4"
                    >
                      <h3 className="font-semibold mb-1 text-sm">{course.title}</h3>
                      <p className="text-xs text-muted-foreground mb-1">
                        {course.platform} • {course.instructor}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Completed: {course.completed}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
