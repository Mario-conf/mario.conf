import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image-1');

  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-background">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-top"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      <div className="absolute bottom-20 left-0 right-0 z-10 w-full max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter">
            Mario Conf®
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl">
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
