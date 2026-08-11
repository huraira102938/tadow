import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Facebook, Phone } from "lucide-react";
import logo from "@/assets/tadow-logo.jpg";

const socials = [
  { href: "https://wa.me/923701325467", label: "WhatsApp", icon: Phone },
  { href: "https://www.instagram.com/tadow.pk", label: "Instagram", icon: Instagram },
  { href: "https://www.facebook.com/tadow.pk", label: "Facebook", icon: Facebook },
  { href: "https://www.tiktok.com/@tadow.pk", label: "TikTok", icon: TikTokIcon },
  { href: "https://x.com/tadow_pk", label: "X (Twitter)", icon: XIcon },
];

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.4 8.4 0 0 1-4.5-1.4v6.6a6.5 6.5 0 1 1-6.5-6.5c.34 0 .67.03 1 .08v3.1a3.5 3.5 0 1 0 2.5 3.32V3h3z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.97 22H2.21l6.97-7.96L2 2h6.91l4.29 5.66L18.24 2zm-1.19 18h1.86L7.04 4H5.1l11.95 16z" />
    </svg>
  );
}

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
              A new way to shop. Discover, decide and check out — all in a single, beautifully simple app. Now live on Google Play.
            </p>
            <p className="mt-4 text-sm font-medium text-primary">Deals that hit you like… TADOW!</p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
              <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <a href="mailto:support@tadow.shop" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" /> support@tadow.shop
            </a>
            <a href="https://wa.me/923701325467" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="h-4 w-4" /> +92 370 1325467
            </a>
            <p className="mt-4 text-xs text-muted-foreground">A brand by Starsynx (Pvt.) Ltd</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Tadow — Starsynx (Pvt.) Ltd. All rights reserved.</p>
          <p>Made with care for the curious shopper.</p>
        </div>
      </div>
    </footer>
  );
}
