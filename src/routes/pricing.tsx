import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Tadow" },
      { name: "description", content: "Simple, transparent seller plans for Tadow. Start free and scale as your shop grows." },
      { property: "og:title", content: "Pricing — Tadow" },
      { property: "og:description", content: "Simple, transparent seller plans for Tadow. Start free and scale as your shop grows." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Pricing — Tadow" },
      { name: "twitter:description", content: "Simple, transparent seller plans for Tadow. Start free and scale as your shop grows." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    emoji: "🆓",
    name: "Free",
    price: "PKR 0/month",
    tagline: "Try before you commit",
    features: [
      "Full storefront & dashboard access",
      "Order management system",
      "Location-based customer insights",
      "Tadow branding on storefront",
      "Sellers arrange their own delivery (buyer-seller coordinated)",
      "Email & WhatsApp support",
    ],
  },
  {
    emoji: "🥉",
    name: "Bronze",
    price: "PKR 599/month",
    tagline: "For home-based sellers",
    features: [
      "Full storefront & dashboard access",
      "Order management system",
      "Custom shop name & profile picture",
      "Location-based customer insights",
      "WhatsApp order notifications",
      "Push notifications to buyers",
      "Sellers arrange their own delivery",
      "Email & WhatsApp support",
    ],
  },
  {
    emoji: "🥈",
    name: "Silver",
    price: "PKR 1,499/month",
    tagline: "For growing shops & small retailers",
    features: [
      "Full storefront & dashboard access",
      "Order management system",
      "Custom shop name & profile picture",
      "Location-based customer insights",
      "Push notifications to buyers",
      "Silver badge (verification)",
      "Multi-staff account access",
      "Sellers arrange their own delivery",
      "Email & WhatsApp support",
    ],
  },
  {
    emoji: "🥇",
    name: "Gold",
    price: "PKR 3,499/month",
    tagline: "For established shops & active retailers",
    features: [
      "Full storefront & dashboard access",
      "Order management system",
      "Custom shop name & profile picture",
      "Location-based customer insights",
      "Push notifications to buyers",
      "Gold badge (verification)",
      "Multi-staff account access",
      "Sellers arrange their own delivery",
      "Email & WhatsApp priority support",
    ],
  },
  {
    emoji: "💎",
    name: "Platinum",
    price: "PKR 7,999/month",
    tagline: "For established brands scaling on Tadow",
    features: [
      "Full storefront & dashboard access",
      "Order management system",
      "Custom shop name & profile picture",
      "Location-based customer insights",
      "Push notifications to buyers",
      "Orange tick (highest verification)",
      "Multi-staff account access (multiple staff logins)",
      "Sellers arrange their own delivery",
      "Email & WhatsApp priority support",
    ],
  },
];

function Pricing() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 md:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Seller plans
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Pricing that grows with you.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free, upgrade when you're ready. Every plan includes the core tools you need to sell on Tadow.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl">{plan.emoji}</div>
              <h2 className="mt-4 font-display text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm font-medium text-primary">{plan.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://play.google.com/store/apps/details?id=com.mds.tadow"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card/60 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need a custom plan for your brand?{" "}
            <a
              href="https://wa.me/923701325467"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Chat with us on WhatsApp
            </a>{" "}
            or email{" "}
            <a
              href="mailto:support@tadow.shop"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              support@tadow.shop
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
