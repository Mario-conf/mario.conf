import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skills = [
    { name: "React / Next.js", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Backend (Node.js, Firebase)", level: 85 },
    { name: "Automation & CI/CD", level: 80 },
    { name: "Brand Strategy", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16">My Skills</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
