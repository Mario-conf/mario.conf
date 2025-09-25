export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <span className="font-headline text-lg font-bold">Mario.conf</span>
            <p className="text-sm text-neutral-400 mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-neutral-300 hover:text-white">About</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white">Speakers</a>
            <a href="#" className="text-sm text-neutral-300 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
