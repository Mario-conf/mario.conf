import { Button } from "@/components/ui/button";
import { Circle, Database, MoveRight, Ship, Waves } from "lucide-react";

export function Partners() {
  const partners = [
    { name: "Frame Blox", icon: <Database /> },
    { name: "Supa Blox", icon: <Circle /> },
    { name: "Hype Blox", icon: <Waves /> },
    { name: "Hype Blox", icon: <Waves /> },
    { name: "Ultra Blox", icon: <Database /> },
    { name: "Ship Blox", icon: <Ship /> },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {partners.map((partner, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-secondary/50 border-secondary rounded-full"
            >
              {partner.icon}
              {partner.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
