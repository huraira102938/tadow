import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Globe, ShieldCheck, Building2 } from "lucide-react";
import starsynx from "@/assets/starsynx-logo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Tadow" },
      { name: "description", content: "Tadow is a brand by Starsynx (Pvt.) Ltd — a Pakistani technology company building modern shopping experiences." },
      { property: "og:title", content: "About Us — Tadow" },
      { property: "og:description", content: "Tadow is a brand by Starsynx (Pvt.) Ltd." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Building2 className="h-3.5 w-3.5" /> About Us
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            A brand by <span className="text-primary">Starsynx</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Tadow is a product of <strong className="text-foreground">Starsynx (Pvt.) Ltd</strong> — a registered Pakistani
            technology company building modern digital experiences. We're crafting Tadow with care, so shopping
            on your phone feels calm, simple and joyful.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-[280px_1fr] md:items-center">
          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="mx-auto grid h-48 w-48 place-items-center rounded-2xl bg-black">
              <img src={starsynx} alt="Starsynx logo" className="h-44 w-44 object-contain" />
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-2xl font-semibold md:text-3xl">Starsynx (Pvt.) Ltd</h2>
            <p className="text-muted-foreground">
              Starsynx is the parent company behind Tadow. We design and build software products from Pakistan,
              with a focus on craftsmanship, trust and long-term quality.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:contact@starsynx.com" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> contact@starsynx.com
              </a>
              <a href="https://starsynx.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground hover:text-primary">
                <Globe className="h-4 w-4 text-primary" /> starsynx.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Verified & trusted</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                Tadow operates under Starsynx (Pvt.) Ltd — the same legal entity registered with our payment
                partners. If you see Starsynx on a transaction or invoice, it's us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
