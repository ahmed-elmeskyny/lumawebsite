import { storeConfig } from "@/config/store";

/** Shared layout for policy and information pages. */
export function PolicyPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-celtic-blue">
        {eyebrow}
      </p>
      <h1 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
        {title}
      </h1>
      {intro && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-onyx/80">
          {intro}
        </p>
      )}
      <div className="mt-10 max-w-2xl">{children}</div>
      <p className="mt-12 text-sm text-onyx/60">
        Last updated {storeConfig.legal.lastUpdated}. Questions?{" "}
        <a
          href={`mailto:${storeConfig.contact.email}`}
          className="text-celtic-blue underline underline-offset-4"
        >
          {storeConfig.contact.email}
        </a>
      </p>
    </div>
  );
}

export function PolicySection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-9">
      <h2 className="font-display text-2xl leading-tight text-onyx sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-3 flex flex-col gap-3 leading-relaxed text-onyx/85">
        {children}
      </div>
    </section>
  );
}
