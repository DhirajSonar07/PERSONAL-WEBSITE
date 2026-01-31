import { Award, ExternalLink, Calendar, CheckCircle, Trophy, Star } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "December 2025",
      credentialId: "AWS-ASA-123456",
      credentialUrl: "https://aws.amazon.com/certification",
      skills: ["Cloud Architecture", "AWS Services", "System Design"],
      logo: "☁️",
    },
    {
      id: 2,
      title: "Professional Scrum Master I (PSM I)",
      issuer: "Scrum.org",
      date: "October 2025",
      credentialId: "PSM-789012",
      credentialUrl: "https://scrum.org",
      skills: ["Agile", "Scrum", "Team Leadership"],
      logo: "🎯",
    },
    {
      id: 3,
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "August 2025",
      credentialId: "MDB-345678",
      credentialUrl: "https://university.mongodb.com",
      skills: ["NoSQL", "Database Design", "MongoDB"],
      logo: "🍃",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Machine Learning Specialization",
      platform: "Coursera",
      instructor: "Andrew Ng",
      completed: "November 2025",
      certificateUrl: "https://coursera.org",
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      platform: "Udemy",
      instructor: "Colt Steele",
      completed: "July 2025",
      certificateUrl: "https://udemy.com",
    },
    {
      id: 3,
      title: "System Design Interview",
      platform: "educative.io",
      instructor: "Design Gurus",
      completed: "September 2025",
      certificateUrl: "https://educative.io",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "1st Place - University Hackathon 2025",
      description: "Led team to develop an AI-powered study assistant in 24 hours",
      date: "March 2025",
      category: "Competition",
      categoryColor: "bg-blue-500",
    },
    {
      id: 2,
      title: "Dean's List",
      description: "Academic excellence recognition for maintaining 3.8+ GPA",
      date: "Fall 2024, Spring 2025",
      category: "Academic",
      categoryColor: "bg-green-500",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "50+ contributions to various open-source projects on GitHub",
      date: "Ongoing",
      category: "Community",
      categoryColor: "bg-purple-500",
    },
    {
      id: 4,
      title: "Best Project Award - Software Engineering Course",
      description: "Recognized for outstanding e-commerce platform implementation",
      date: "December 2024",
      category: "Academic",
      categoryColor: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-6 lg:px-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Home / Certifications
          </p>
          <h1 className="text-5xl font-bold mb-4">
            Certifications & Achievements
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional certifications, courses, and recognitions showcasing
            continuous learning and growth
          </p>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            Professional Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{cert.logo}</div>
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                <div className="mb-4 p-3 bg-surface rounded-lg">
                  <p className="text-xs font-mono text-muted-foreground">
                    ID: {cert.credentialId}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-semibold"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Courses */}
      <section className="py-16 px-6 lg:px-20 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">
            Online Courses & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {course.platform} • {course.instructor}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Completed: {course.completed}</span>
                </div>
                <a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-semibold"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Achievements & Awards</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {achievement.category === "Competition" ? (
                        <Trophy className="w-6 h-6 text-primary" />
                      ) : achievement.category === "Academic" ? (
                        <Star className="w-6 h-6 text-primary" />
                      ) : (
                        <Award className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">
                          {achievement.title}
                        </h3>
                        <span
                          className={`px-2 py-1 ${achievement.categoryColor} text-white text-xs font-semibold rounded`}
                        >
                          {achievement.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {achievement.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
