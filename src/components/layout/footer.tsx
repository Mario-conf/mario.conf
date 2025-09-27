import { Mail, Linkedin, Github, Instagram, MapPin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: "Email", href: "mailto:info@mario.conf.com", icon: <Mail /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mario-conf/", icon: <Linkedin /> },
    { name: "GitHub", href: "https://github.com/Mario-conf", icon: <Github /> },
    { name: "Instagram", href: "https://instagram.com/_mario.conf", icon: <Instagram /> }
  ];

  const sections = [
    {
      title: "Secciones",
      links: ["About", "Journey", "Work", "Skills", "Contact"]
    }
  ];

  return (
    <footer className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo, Nombre, Tagline, Ubicación y Email */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-2">
              <span className="text-sm transform -rotate-90 origin-top-left mt-4">©{new Date().getFullYear()}</span>
              <div>
                <h2> <span className="text-lg font-bold">Mario Conf®</span></h2>
                <p className="text-sm mb-1 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Granada, España</p>
              </div>
            </div>
          </div>

          {/* Secciones del sitio */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-2">{section.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Redes Sociales con íconos */}
          <div>
            <h3 className="font-bold text-lg mb-2">Redes Sociales</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Políticas y copyright */}
        <div className="mt-12 border-t border-muted-foreground pt-6 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <span>© 2025 Mario Conf. Todos los derechos reservados.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Cookies</a>
            <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
