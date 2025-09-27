import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image-1');

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">About me</h2>
            <p className="text-muted-foreground text-lg">
              I’m Mario. Passion drives me to explore ideas that challenge the norm and create experiences that leave an impact. Curiosity and creative thinking help me turn concepts into meaningful results.
            </p>
            <p className="text-muted-foreground text-lg">
              From crafting memorable brand identities to building scalable backend systems, I thrive on turning ideas into reality. Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
