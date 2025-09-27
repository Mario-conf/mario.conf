import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Contact() {
  const socialLinks = [
    {
      icon: <Mail />,
      label: "Email",
      href: "mailto:mario04asir@gmail.com",
    },
    {
      icon: <Linkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mario-conf/",
    },
    {
      icon: <Github />,
      label: "GitHub",
      href: "https://github.com/Mario-conf",
    },
    {
      icon: <Instagram />,
      label: "Instagram",
      href: "https://instagram.com/_mario.conf?igshid=OGQ5ZDc2ODk2ZA==",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socialLinks.map((link) => (
            <Button
              asChild
              key={link.label}
              variant="outline"
              className="h-14 w-full rounded-lg text-lg"
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
