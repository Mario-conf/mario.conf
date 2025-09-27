import { MapPin } from 'lucide-react';

export function Journey() {
  const journeyItems = [
    {
      date: 'May 2025',
      title: 'Internship Web Developer – Civica Software',
      description:
        'Developed and maintained web applications with a focus on performance and usability. Gained hands-on experience in full-stack development and deployment.',
      link: 'https://civica-soft.com/',
      location: 'Location',
    },
    {
      date: '2024 – 2026',
      title: 'Advanced Vocational Training in Web Application Development – IES Zaidín-Vergeles',
      description:
        'Currently pursuing training focused on technologies such as React, Java, Adobe Illustrator, and Laravel. Building projects that combine frontend design, backend logic, and systems integration.',
      link: 'https://www.ieszaidinvergeles.org/',
      location: 'Location',
    },
    {
      date: 'July 2024 – September 2024',
      title: 'Tourism Informer – Gualchos Town Hall',
      description:
        'Provided information and assistance to visitors at local tourist destinations. Developed communication and problem-solving skills in a professional environment.',
      link: 'https://www.gualchos.es/',
      location: 'Location',
    },
    {
      date: 'April 2024 – June 2024',
      title: 'Internship Sys Developer – Aguas y Servicios de la Costa Tropical de Granada',
      description:
        'Worked on web systems and applications, improving backend and frontend functionalities. Learned to integrate system administration concepts into practical projects.',
      link: 'https://www.aguasyservicios.es/',
      location: 'Location',
    },
    {
      date: '2022 – 2024',
      title: 'Advanced Vocational Training in Network Systems Administration – IES Francisco Javier de Burgos',
      description:
        'Acquired skills in network management, system administration, and virtual environments (Docker, Kubernetes). Implemented and maintained secure infrastructures for practical projects.',
      link: 'https://fjburgos.es/',
      location: 'Location',
    },
    {
      date: '2020 – 2022',
      title: "Bachelor’s Degree in Technological Sciences – IES Beatriz Galindo",
      description:
        'Focused on mathematics, computer sciences, and technological problem-solving. Built a strong foundation for web development, networking, and system administration.',
      link: 'https://ieslalatina.es/',
      location: 'Location',
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16">My Journey</h2>
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
