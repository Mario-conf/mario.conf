
export function Journey() {
  const journeyItems = [
    {
      date: "2023 - Present",
      title: "Lead Developer @ Frame Blox",
      description: "Leading the development of next-generation web applications, focusing on performance and user experience. Mentoring a team of talented developers and driving technical strategy.",
    },
    {
      date: "2020 - 2023",
      title: "Senior UI/UX Designer @ Supa Blox",
      description: "Designed and prototyped intuitive user interfaces for a variety of digital products. Collaborated with cross-functional teams to deliver user-centered design solutions.",
    },
    {
      date: "2018 - 2020",
      title: "Full-Stack Developer @ Hype Blox",
      description: "Developed and maintained web applications using modern technologies. Gained extensive experience in both front-end and back-end development.",
    },
    {
      date: "2014 - 2018",
      title: "Bachelor of Science in Computer Science @ University of Technology",
      description: "Focused on software engineering, data structures, and algorithms. Graduated with honors.",
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
                    <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
