import React from 'react';
import { Mail, Linkedin, Github, Instagram, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const socialLinks = [
    { name: "Email", href: "mailto:info@mario.conf.com", icon: <Mail /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/mario-conf/", icon: <Linkedin /> },
    { name: "GitHub", href: "https://github.com/Mario-conf", icon: <Github /> },
    { name: "Instagram", href: "https://instagram.com/_mario.conf", icon: <Instagram /> }
  ];

  const sections = [
    {
      title: "Sections",
      links: [
        { name: "About", href: "#about"},
        { name: "Journey", href: "#journey"},
        { name: "Work", href: "#work"},
        { name: "Skills", href: "#skills"},
        { name: "Contact", href: "#contact"}
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo, Nombre, Tagline, Ubicación y Email */}
          <div>
            <div className="flex items-start gap-2">
              <span className="text-sm transform -rotate-90 origin-top-left mt-4">©{new Date().getFullYear()}</span>
              <div>
                <Link href="#hero">
                  <h2> <span className="text-lg font-bold">Mario Conf®</span></h2>
                </Link>
                <p className="text-sm mb-1 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Granada, España</p>
              </div>
            </div>
          </div>

          {/* Secciones del sitio */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-4">{sections[0].title}</h3>
            <ul className="text-lg text-muted-foreground space-y-4">
              {sections[0].links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales con íconos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Social Media</h3>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={social.name}
                >
                  {React.cloneElement(social.icon, { className: 'w-6 h-6' })}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Políticas y copyright */}
        <div className="mt-16 border-t border-muted pt-8 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
          <span>Mario Acosta Vargas. All rights reserved.</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
