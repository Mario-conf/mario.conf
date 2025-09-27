import { Briefcase, Code, PenTool, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const technicalSkills = [
    { name: "UX/UI Design", level: 85 },
    { name: "SysAdmin Linux", level: 80 },
    { name: "DevOps / AWS", level: 80 },
    { name: "TypeScript / React", level: 75 },
    { name: "PHP / Laravel", level: 70 },
  ];

  const professionalSkills = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      name: "Team Collaboration",
      description: "Excelling in team environments, fostering communication and a shared sense of purpose.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      name: "Leadership",
      description: "Guiding teams to success by providing clear direction and mentorship.",
    },
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      name: "Creative Problem Solving",
      description: "Transforming complex challenges into elegant, innovative, and effective solutions.",
    },
     {
      icon: <Code className="h-8 w-8 text-primary" />,
      name: "Brand Strategy",
      description: "Developing strong brand identities that resonate with audiences and drive recognition.",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16">My Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center lg:text-left">Technical Expertise</h3>
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-medium">{skill.name}</h4>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div className="space-y-8">
             <h3 className="text-3xl font-bold text-center lg:text-left">Professional Abilities</h3>
            {professionalSkills.map((skill) => (
              <div key={skill.name} className="flex items-start gap-4">
                <div className="flex-shrink-0">{skill.icon}</div>
                <div>
                  <h4 className="text-lg font-bold">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
