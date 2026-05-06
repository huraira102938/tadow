import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import catFashion from "@/assets/cat-fashion.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import catHome from "@/assets/cat-home.jpg";
import catBeauty from "@/assets/cat-beauty.jpg";
import catGroceries from "@/assets/cat-groceries.jpg";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Tadow" },
      { name: "description", content: "Explore the categories launching with Tadow: fashion, electronics, home & living, beauty and groceries." },
      { property: "og:title", content: "Categories — Tadow" },
      { property: "og:description", content: "Five thoughtfully curated categories — and many more on the way." },
    ],
  }),
  component: CategoriesPage,
});

const cats = [
  { name: "Fashion", desc: "Wardrobe staples and standout pieces from independent labels and household names.", img: catFashion, tone: "Editorial · Daily drops" },
  { name: "Electronics", desc: "Phones, audio, wearables and the gadgets you'll actually use every day.", img: catElectronics, tone: "Tested · Reviewed" },
  { name: "Home & Living", desc: "Quietly beautiful objects to make every room feel a little more yours.", img: catHome, tone: "Curated · Calm" },
  { name: "Beauty", desc: "Skincare, scent and self-care from clean brands and cult favourites.", img: catBeauty, tone: "Clean · Honest" },
  { name: "Groceries", desc: "Pantry essentials and weekly fresh delivered with a calm, thoughtful experience.", img: catGroceries, tone: "Fresh · Fast" },
];

function CategoriesPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium backdrop-blur">
            Launch line-up
          </span>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Five worlds. <em className="text-gradient not-italic">One app.</em>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg text-muted-foreground">
            We're launching with the categories you reach for most — each one carefully curated, never cluttered.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <article
              key={c.name}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card hover-lift ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/5] lg:aspect-[16/13]" : "aspect-[4/5]"}`}>
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground">
                  Coming Soon
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <p className="text-xs uppercase tracking-widest text-background/70">{c.tone}</p>
                  <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">{c.name}</h2>
                  <p className="mt-2 max-w-md text-sm text-background/80">{c.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-[2rem] border border-border bg-card p-10 text-center md:p-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">More on the way</p>
          <h3 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Toys, sports, books, pets and travel essentials are being curated for our next chapter.
          </h3>
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            We're adding categories slowly and intentionally — no clutter, only things worth your tap.
          </p>
        </div>
      </section>
    </Layout>
  );
}
