"use client";

import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const contactLinks = [
  {
    name: "Email",
    href: "mailto:info@mario.conf.com",
    icon: <Mail className="w-8 h-8" />,
    cta: "Send an Email",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mario-conf/",
    icon: <Linkedin className="w-8 h-8" />,
    cta: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/Mario-conf",
    icon: <Github className="w-8 h-8" />,
    cta: "Follow on GitHub",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/_mario.conf",
    icon: <Instagram className="w-8 h-8" />,
    cta: "Follow on Instagram",
  },
];


export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a project in mind or just want to say hello? I’d love to connect with you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="outline"
              className="h-auto w-full p-6 flex flex-col items-center justify-center gap-4 text-center rounded-lg bg-secondary/30 border-secondary hover:bg-secondary"
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{link.name}</span>
                  <span className="text-sm text-muted-foreground">{link.cta}</span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
