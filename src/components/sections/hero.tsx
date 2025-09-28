import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image-1');

  return (
    <div id="hero" className="relative h-[300px] md:h-auto md:min-h-[80vh] w-full overflow-hidden bg-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="absolute bottom-4 left-0 right-0 z-10 w-full max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter whitespace-nowrap -translate-y-4">
            Mario Conf®
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-muted-foreground max-w-2xl">
            A creative designer and developer focused on building immersive digital experiences.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full">
            <Link href="#work">
              View My Work
              <ArrowDown />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
