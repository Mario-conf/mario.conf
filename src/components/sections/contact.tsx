import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";

export function Contact() {
  const socialLinks = [
    {
      icon: <Mail />,
      label: "Email",
      href: "mailto:mario04asir@gmail.com",
      handle: "mario04asir@gmail.com",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mario-conf/",
      handle: "Mario Conf",
    },
    {
      icon: <Github />,
      label: "GitHub",
      href: "https://github.com/Mario-conf",
      handle: "Mario-conf",
    },
    {
      icon: <Instagram />,
      label: "Instagram",
      href: "https://instagram.com/_mario.conf?igshid=OGQ5ZDc2ODk2ZA==",
      handle: "_mario.conf",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or just want to say hi? I'd love to hear
            from you. Here's how you can reach me.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p-6 bg-secondary/30 border border-secondary rounded-lg text-center h-full flex flex-col justify-center items-center hover:bg-secondary/60 transition-colors">
                <div className="mb-4 text-primary">{link.icon}</div>
                <h3 className="text-xl font-bold mb-1">{link.label}</h3>
                <p className="text-muted-foreground">{link.handle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
