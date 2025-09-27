"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollControls() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className={cn("fixed bottom-4 right-4 z-50 flex flex-col gap-2 transition-opacity duration-300", isVisible ? "opacity-100" : "opacity-0 pointer-events-none")}>
      <Button variant="secondary" size="icon" onClick={scrollToTop} className="rounded-full">
        <ArrowUp />
      </Button>
      <Button variant="secondary" size="icon" onClick={scrollToBottom} className="rounded-full">
        <ArrowDown />
      </Button>
    </div>
  );
}
