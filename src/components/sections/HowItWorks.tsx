import Image from "next/image";

/**
 * Three-step explanation, copy from docs/CONTENT.md "How Luma works".
 * Mascot poses are decorative (empty alt) — the steps carry the meaning.
 */
const STEPS = [
  {
    title: "Pick your pair or edition.",
    detail: "Go for one standalone design or a fixed three-pair box.",
    mascot: "/assets/mascot/luma-paint-pink.svg",
    field: "bg-classic-rose",
  },
  {
    title: "Choose your size.",
    detail: "Select EU 36–40 or EU 41–46.",
    mascot: "/assets/mascot/luma-skate-yellow.svg",
    field: "bg-cyber-yellow",
  },
  {
    title: "Pay on arrival.",
    detail: "Place your order through Shopify and pay cash when it arrives.",
    mascot: "/assets/mascot/luma-wave-blue.svg",
    field: "bg-crystal",
  },
] as const;

export function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="bg-luma-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
        <h2
          id="how-it-works-heading"
          className="max-w-2xl font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx"
        >
          Your mood, in three steps.
        </h2>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3 lg:gap-8">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className={`${step.field} relative flex flex-col gap-4 overflow-hidden rounded-[2rem] p-6 sm:p-8`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-6xl leading-none text-onyx/25"
                >
                  {`0${index + 1}`}
                </span>
                <Image
                  src={step.mascot}
                  alt=""
                  width={80}
                  height={96}
                  unoptimized
                  className="h-24 w-auto"
                />
              </div>
              <h3 className="font-display text-2xl leading-tight text-onyx">
                {step.title}
              </h3>
              <p className="text-onyx/80">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
