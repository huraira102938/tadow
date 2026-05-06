import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, ShoppingBag, Star, Search, ShieldCheck, Heart } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import heroPhone from "@/assets/hero-phone.jpg";
import catFashion from "@/assets/cat-fashion.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import catHome from "@/assets/cat-home.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tadow — Shopping, Simplified." },
      { name: "description", content: "Tadow is the upcoming e-commerce app that turns shopping into a calm, curated experience. Coming soon." },
      { property: "og:title", content: "Tadow — Shopping, Simplified." },
      { property: "og:description", content: "An upcoming e-commerce app built for the way you actually shop." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Zap, title: "Lightning-fast", desc: "From discovery to checkout in seconds. No friction, no bloat." },
  { icon: Sparkles, title: "Smart picks", desc: "Recommendations that learn your taste — not just your last click." },
  { icon: ShoppingBag, title: "Everything in one app", desc: "Fashion, beauty, electronics, groceries. One cart for it all." },
  { icon: ShieldCheck, title: "Secure by design", desc: "Privacy-first payments and end-to-end protected sessions." },
];

const categories = [
  { name: "Fashion", img: catFashion },
  { name: "Electronics", img: catElectronics },
  { name: "Home & Living", img: catHome },
  { name: "Beauty", img: catBeauty },
];

const steps = [
  { n: "01", title: "Open Tadow", desc: "Launch the app — your home feed is ready in an instant." },
  { n: "02", title: "Discover", desc: "Search, swipe, save. Smart filters do the heavy lifting." },
  { n: "03", title: "Tap to buy", desc: "One-tap checkout with saved cards and addresses." },
  { n: "04", title: "Track & enjoy", desc: "Live order tracking from warehouse to your door." },
];


function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-70" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:items-center md:pt-24">
          <div>
            <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Launching soon · Join the wait
            </span>
            <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Shopping, <em className="text-gradient not-italic">simplified.</em>
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-lg text-lg text-muted-foreground">
              Tadow is the upcoming mobile experience that puts everything you love about shopping
              into one calm, beautifully curated app.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-soft transition-transform hover:-translate-y-0.5">
                Coming Soon
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary-foreground">Soon</span>
              </button>
              <Link
                to="/features"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Explore Features
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="reveal reveal-delay-4 mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-warm" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-xs">12,400+ already on the waitlist</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[3rem] bg-warm opacity-60 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border shadow-glow">
              <img
                src={heroPhone}
                alt="Tadow app preview on a smartphone"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block float-slow">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Heart className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Saved for later</p>
                  <p className="text-sm font-semibold">+1,284 items</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-12 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block float-slow" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground"><Zap className="h-5 w-5" /></div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. checkout</p>
                  <p className="text-sm font-semibold">8 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border bg-card/50 py-5">
          <div className="flex gap-12 overflow-hidden">
            <div className="marquee flex shrink-0 gap-12 whitespace-nowrap pr-12 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {Array.from({ length: 2 }).map((_, k) => (
                <div key={k} className="flex gap-12">
                  {["Curated daily", "Tap to buy", "Built for you", "Made simple", "Verified sellers", "Shop with joy"].map(t => (
                    <span key={t}>✦ {t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Why Tadow</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Built for the way you actually shop.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} className="hover-lift rounded-3xl border border-border bg-card p-6 shadow-card" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories preview */}
      <section className="bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Categories</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">A little of everything.</h2>
            </div>
            <Link to="/categories" className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary">
              See all categories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card aspect-[4/5]">
                <img src={c.img} alt={c.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                  <h3 className="font-display text-xl font-semibold text-background">{c.name}</h3>
                  <span className="rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">Four taps to delight.</h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8">
              <div className="font-display text-5xl font-semibold text-primary/30">{s.n}</div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials section removed */}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-foreground p-12 text-background md:p-20">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <Search className="mb-6 h-8 w-8 text-primary-glow" />
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
              The shopping app you didn't know you needed.
            </h2>
            <p className="mt-4 text-base text-background/70">
              Be the first to try Tadow when we launch. No spam, just one calm announcement.
            </p>
            <div className="mt-8 flex max-w-md items-center gap-2 rounded-full border border-background/20 bg-background/10 p-1.5 backdrop-blur">
              <input
                type="email"
                placeholder="you@somewhere.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm text-background placeholder:text-background/50 focus:outline-none"
              />
              <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                Notify me
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
