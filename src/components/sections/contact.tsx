import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>
        <form className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="text" placeholder="Your Name" className="bg-secondary/30 border-secondary" />
            <Input type="email" placeholder="Your Email" className="bg-secondary/30 border-secondary" />
          </div>
          <Textarea placeholder="Your Message" className="bg-secondary/30 border-secondary min-h-[150px]" />
          <div className="text-center">
            <Button type="submit" size="lg" className="rounded-full">Send Message</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
