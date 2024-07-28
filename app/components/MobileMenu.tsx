import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const location = usePathname();
  const [open, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return (
    <Sheet open={open} onOpenChange={(state) => setIsOpen(state)}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="text-violet-800">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-5 space-y-1">
          {navigationItems.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={cn(
                location === link.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-80",
                "group flex items-center rounded-md px-2 py-2 text-md font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
