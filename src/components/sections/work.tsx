import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Work() {
  const workItems = [
    {
      id: "work-image-1",
      title: "Project Alpha",
      category: "UI/UX",
    },
    {
      id: "work-image-2",
      title: "Project Beta",
      category: "Backend",
    },
    {
      id: "work-image-3",
      title: "Project Gamma",
      category: "Mobile",
    },
    {
      id: "work-image-4",
      title: "Project Delta",
      category: "Branding",
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-16">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workItems.map((item) => {
            const image = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <Card key={item.id} className="overflow-hidden group">
                <CardContent className="p-0">
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
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <Badge variant="secondary" className="mt-2">{item.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
