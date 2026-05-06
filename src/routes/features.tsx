import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, CreditCard, Sparkles, Lock, Truck, Bell, ArrowRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import mockup from "@/assets/features-mockup.jpg";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Tadow" },
      { name: "description", content: "Smart discovery, effortless checkout, personalized picks and secure payments — meet the features that make Tadow feel different." },
      { property: "og:title", content: "Features — Tadow" },
      { property: "og:description", content: "The thoughtful details that make shopping with Tadow feel calm and effortless." },
    ],
  }),
  component: FeaturesPage,
});

const big = [
  {
    icon: Search,
    eyebrow: "Discover",
    title: "Smart product discovery",
    desc: "Tadow learns what you love and surfaces it before you have to search. Visual search, mood boards and weekly drops keep your feed feeling fresh — never noisy.",
    bullets: ["Visual search by photo", "Curated daily drops", "Mood-based collections"],
  },
  {
    icon: CreditCard,
    eyebrow: "Checkout",
    title: "Easy checkout experience",
    desc: "One tap. Saved cards, addresses and preferences make checkout feel like an afterthought — exactly how it should.",
    bullets: ["1-tap purchase", "Apple & Google Pay", "Split payments"],
  },
  {
    icon: Sparkles,
    eyebrow: "Personal",
    title: "Personalized recommendations",
    desc: "An on-device taste model means your recommendations stay sharp — and your data stays yours.",
    bullets: ["Privacy-first AI", "Style fingerprint", "Cross-category suggestions"],
  },
  {
    icon: Lock,
    eyebrow: "Trust",
    title: "Secure transactions",
    desc: "Bank-grade encryption, verified sellers, and instant fraud protection — every order, every time.",
    bullets: ["End-to-end encryption", "Buyer protection", "Verified sellers only"],
  },
];

const small = [
  { icon: Truck, title: "Live order tracking", desc: "Watch packages move from shelf to step." },
  { icon: Bell, title: "Smart restock alerts", desc: "Get pinged the moment your size drops." },
  { icon: Sparkles, title: "Wishlist sharing", desc: "Send polished wish boards to friends." },
];

function FeaturesPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Features
          </span>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Small details. <em className="text-gradient not-italic">Big difference.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-muted-foreground">
            Every interaction in Tadow has been considered, refined and refined again. Here's a closer look at what makes it feel different.
          </p>
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pb-20">
          <div className="overflow-hidden rounded-[2.5rem] border border-border shadow-glow">
            <img src={mockup} alt="Tadow app interface mockups" width={1280} height={960} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="space-y-6">
          {big.map((b, i) => (
            <div
              key={b.title}
              className={`grid gap-10 rounded-[2rem] border border-border bg-card p-8 shadow-card md:grid-cols-2 md:items-center md:p-14 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-primary">{b.eyebrow}</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{b.title}</h2>
                <p className="mt-4 text-muted-foreground">{b.desc}</p>
                <ul className="mt-6 space-y-2">
                  {b.bullets.map(x => (
                    <li key={x} className="flex items-center gap-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-warm">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-24 w-24 place-items-center rounded-3xl bg-card/80 backdrop-blur shadow-soft">
                    <b.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="absolute left-6 top-6 rounded-full bg-card/90 px-3 py-1 text-xs font-medium">Coming Soon</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">More to love</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">And the little extras.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {small.map(s => (
            <div key={s.title} className="hover-lift rounded-3xl border border-border bg-card p-6">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-border bg-warm p-10 md:flex-row md:items-center md:p-14">
          <div>
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">See what's inside.</h3>
            <p className="mt-2 max-w-md text-muted-foreground">Browse the categories Tadow will launch with.</p>
          </div>
          <Link to="/categories" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:-translate-y-0.5 transition-transform">
            Explore categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
