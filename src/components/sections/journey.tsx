import { MapPin } from 'lucide-react';

export function Journey() {
  const journeyItems = [
     {
      date: 'May 2025',
      title: 'Internship Web Developer – Civica Software',
      description:
        'Developed and maintained full-stack web applications, focusing on React, TypeScript, Spring Boot, and API development. Gained hands-on experience in system integration and practical application of backend and frontend workflows.',
      link: 'https://www.civica.com/en-us/',
      location: 'Granada',
    },
    {
      date: '2024 – 2026',
      title: 'Advanced Vocational Training in Web Application Development – IES Zaidín-Vergeles',
      description:
        'Focused on TypeScript frameworks, Laravel, Java, UX/UI design, Adobe Illustrator, and system logic. Built projects combining frontend design, backend logic, and web application architecture. Developed adaptability, branding, and professional English communication.',
      link: 'https://www.ieszaidinvergeles.org/',
      location: 'Granada',
    },
    {
      date: 'Jul 2024 – Sep 2024',
      title: 'Tourism Informer – Gualchos Town Hall',
      description:
        'Worked as a tourism guide, focusing on negotiation, marketing, customer service, and communication. Strengthened soft skills including teamwork, problem-solving, and interpersonal communication.',
      link: 'https://www.gualchos.es/',
      location: 'Gualchos',
    },
    {
      date: 'Apr 2024 – Jun 2024',
      title: 'Internship Sys Developer – Aguas y Servicios de la Costa Tropical de Granada',
      description:
        'Worked on web systems and backend applications using Python, ticket management, and system maintenance. Gained practical experience in SysAdmin, problem resolution, and application support.',
      link: 'https://www.aguasyservicios.es/',
      location: 'Motril',
    },
    {
      date: '2022 – 2024',
      title: 'Advanced Vocational Training in Network Systems Administration – IES Francisco Javier de Burgos',
      description:
        'Acquired DevOps, SysAdmin, Linux Server, Bash, basic HTML, and Java skills. Implemented and maintained secure infrastructures and automated deployments. Developed technical problem-solving and team collaboration skills.',
      link: 'https://fjburgos.es/',
      location: 'Motril',
    },
    {
      date: '2020 – 2022',
      title: 'Bachelor’s Degree in Technological Sciences – IES Beatriz Galindo',
      description:
        'Focused on logical thinking, technical problem-solving, and foundational programming. Developed web and programming basics, as well as initial exposure to English for technology.',
      link: 'https://ieslalatina.es/',
      location: 'Motril',
    },
  ];

  return (
    <section id="journey" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-12">My Journey</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {journeyItems.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
              <div
                className={`w-full flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8' : 'pl-8'
                  }`}
                >
                  <div className={`p-6 rounded-lg bg-secondary/30 border border-secondary ${ index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="flex justify-between items-center mb-1 text-sm text-muted-foreground">
                      <p>{item.date}</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                        {item.title}
                      </a>
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
