import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MobileMenu() {
  const location = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="text-violet-800">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-4">
        <div className="flex flex-col gap-4">
          {navigationItems.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={cn(
                location === link.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
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
