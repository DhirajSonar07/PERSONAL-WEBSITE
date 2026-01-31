import { GraduationCap, Target, MapPin, Code, Brain, Dumbbell, Book } from "lucide-react";

export function About() {
  const interests = [
    { icon: Code, label: "Full-Stack Development" },
    { icon: Brain, label: "AI & Machine Learning" },
    { icon: Dumbbell, label: "Fitness & Wellness" },
    { icon: Book, label: "Continuous Learning" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-6 lg:px-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">Home / About</p>
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Profile Section */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>
                <p className="text-lg font-medium mb-2">
                  Computer Engineering Student | Aspiring Software Developer
                </p>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>Pune, India</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <h3 className="font-semibold mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Science in Computer Engineering
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Savitribai Phule Pune University (SPPU)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Expected May 2027
                    </p>
                    <p className="text-sm text-muted-foreground">GPA: 3.8/4.0</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Open to Opportunities
                </div>
              </div>

              {/* Career Objective */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Career Objective</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking a software engineering internship or entry-level position
                  where I can apply my technical skills in a dynamic team
                  environment. Eager to contribute to impactful projects while
                  continuing to grow as a developer through mentorship and hands-on
                  experience with modern technologies and best practices.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* My Journey */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I am a passionate Computer Engineering student with a strong
                    foundation in software development, algorithms, and system
                    design. My journey in tech began with a curiosity about how
                    things work, which evolved into a dedication to building
                    innovative solutions that solve real-world problems.
                  </p>
                  <p>
                    Through academic projects, internships, and personal
                    initiatives, I've developed expertise in full-stack
                    development, with a particular interest in scalable
                    architectures and user-centric design. I thrive in
                    collaborative environments where I can learn from experienced
                    professionals while contributing my unique perspective.
                  </p>
                  <p>
                    When I'm not coding, I enjoy contributing to open-source
                    projects, exploring new technologies, and staying active
                    through fitness training and yoga.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h2 className="text-3xl font-semibold">Education</h2>
                </div>
                <div className="space-y-6">
                  {/* Bachelor's Degree */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          Bachelor of Science in Computer Engineering
                        </h3>
                        <p className="text-muted-foreground mb-1">
                          Savitribai Phule Pune University (SPPU)
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-primary whitespace-nowrap mt-2 md:mt-0">
                        Expected May 2027
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <strong>GPA:</strong> 3.8/4.0
                      </p>
                      <div>
                        <p className="text-sm font-semibold mb-2">
                          Relevant Coursework:
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Data Structures & Algorithms, Database Systems, Operating
                          Systems, Web Development, Machine Learning, Software
                          Engineering, Computer Networks
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* High School */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          High School Diploma
                        </h3>
                        <p className="text-muted-foreground">High School Name</p>
                      </div>
                      <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                        Graduated 2023
                      </span>
                    </div>
                    <div>
                      <p className="text-sm">
                        <strong>Honors:</strong> Valedictorian, AP Scholar with
                        Distinction, National Honor Society
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests & Hobbies */}
              <div>
                <h2 className="text-3xl font-semibold mb-6">Interests & Hobbies</h2>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => {
                    const Icon = interest.icon;
                    return (
                      <div
                        key={interest.label}
                        className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary hover:shadow-md transition-all"
                      >
                        <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                        <p className="text-sm font-medium">{interest.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
