import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

export function Header() {
  const menuItems = [
    { title: 'About', href: '#about' },
    { title: 'Journey', href: '#journey' },
    { title: 'Work', href: '#work' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header className="absolute top-0 z-20 flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold">Jay Cole®</span>
        <Badge variant="secondary" className="gap-1.5 pl-2 pr-2.5">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Available
        </Badge>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" className="rounded-full">
            Menu
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="mt-8">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-2 text-2xl font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
