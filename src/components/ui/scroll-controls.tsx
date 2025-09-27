"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./button";

export function ScrollControls() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Button variant="secondary" size="icon" onClick={scrollToTop} className="rounded-full">
        <ArrowUp />
      </Button>
      <Button variant="secondary" size="icon" onClick={scrollToBottom} className="rounded-full">
        <ArrowDown />
      </Button>
    </div>
  );
}
