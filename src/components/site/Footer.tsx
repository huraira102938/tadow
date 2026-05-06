import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import logo from "@/assets/tadow-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Tadow logo" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-lg object-cover ring-1 ring-primary/30" />
              <span className="font-display text-xl font-semibold">Tadow</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A new way to shop. Discover, decide and check out — all in a single, beautifully simple app. Launching soon.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">Deals that hit you like… TADOW!</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <a href="mailto:support@tadow.shop" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" /> support@tadow.shop
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Tadow. All rights reserved.</p>
          <p>Made with care for the curious shopper.</p>
        </div>
      </div>
    </footer>
  );
}
