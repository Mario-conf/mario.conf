"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { allWorkItems } from '@/lib/work-projects';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'Games', 'Applications', 'Web Design'];

export function Work() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorkItems = useMemo(() => {
    return allWorkItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of my projects. Each one is a story of collaboration,
            creativity, and problem-solving.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-10 bg-secondary/30 border-secondary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'secondary'}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {filteredWorkItems.map((item) => {
              const image = PlaceHolderImages.find((img) => img.id === item.id);
              return (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group h-full flex flex-col">
                      <CardContent className="p-0 flex flex-col flex-grow">
                        <div className="relative h-64 md:h-80">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                               <h3 className="text-2xl font-bold">{item.title}</h3>
                               <Badge variant="outline">{item.year}</Badge>
                            </div>
                            <Badge variant="secondary" className="mt-2">{item.category}</Badge>
                          </div>
                          <Button asChild className="mt-6 w-full rounded-full">
                            <Link href={item.link}>View Project</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14" />
        </Carousel>
         {filteredWorkItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects found. Try a different search or filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
