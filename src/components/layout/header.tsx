import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Header() {
  return (
    <header className="absolute top-0 z-20 flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">Jay Cole®</span>
        <Badge variant="secondary" className="gap-1.5 pl-2 pr-2.5">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Available
        </Badge>
      </div>
      <Button variant="secondary" className="rounded-full">
        Menu
        <Menu className="h-4 w-4" />
      </Button>
    </header>
  );
}
