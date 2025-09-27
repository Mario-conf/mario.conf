import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image-1');

  return (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-background flex items-center justify-center">
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
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter">
          Mario Conf®
        </h1>
      </div>
    </div>
  );
}
