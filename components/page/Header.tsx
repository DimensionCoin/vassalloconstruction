import Image from "next/image";
import Link from "next/link";
import { Phone, Instagram } from "lucide-react";
import Logo from "@/assets/vassalloicon.png"

export default function Header() {
  return (
    <header className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <Image
              src={Logo}
              alt="Vassallo Construction Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <h1 className="text-2xl font-bold">Vassallo Construction</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="tel:+4167023183"
            className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Call Vassallo Construction"
          >
            <Phone className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/vassalloconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Follow Vassallo Construction on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
