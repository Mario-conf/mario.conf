import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
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
  );
}
