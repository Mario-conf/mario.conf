import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Have a project in mind?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          I&apos;m currently available for new opportunities. Let&apos;s collaborate and create something exceptional together.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="#contact">
            Get in Touch
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
