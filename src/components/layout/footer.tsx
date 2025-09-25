import { Code, Cog, Database, PenTool, Shield } from 'lucide-react';

export function Footer() {
  const features = [
    {
      icon: <PenTool />,
      name: 'Brand',
      description: 'We craft bold, memorable brand identities that tell your story and leave a lasting impression.',
    },
    {
      icon: <Code />,
      name: 'UI/UX',
      description: 'Intuitive, user-focused interfaces that elevate engagement and drive seamless interactions.',
    },
    {
      icon: <Database />,
      name: 'Backend',
      description: 'Robust and scalable backend solutions to power your applications.',
    },
     {
      icon: <Cog />,
      name: 'Automation',
      description: 'Streamline your workflows and increase efficiency with our automation expertise.',
    },
  ];

  return (
    <footer className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="md:col-span-2 lg:col-span-1">
             <div className="flex items-start gap-2">
                <span className="text-sm transform -rotate-90 origin-top-left mt-4">©{new Date().getFullYear()}</span>
                <p className="text-sm max-w-xs">
                  Designing digital experiences that captivate, connect, and convert.
                </p>
              </div>
          </div>
          {features.slice(0, 3).map((feature) => (
            <div key={feature.name}>
              <h3 className="font-bold text-lg mb-2">{feature.name}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
