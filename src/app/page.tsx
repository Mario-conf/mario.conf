import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image-1");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

      <header className="absolute top-0 z-20 flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <span className="font-headline text-xl font-bold text-white">
          Mario.conf
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </header>

      <main className="relative z-10 flex h-screen flex-col items-center justify-center">
        <div className="max-w-4xl px-4 text-center text-white">
          <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Where Minds Meet
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-200 sm:text-xl">
            Join the brightest minds in technology and design for an unforgettable experience.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
              Get Your Ticket
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
