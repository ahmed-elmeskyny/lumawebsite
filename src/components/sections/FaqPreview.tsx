import { Disclosure } from "@/components/ui/Disclosure";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Compact FAQ preview — three approved questions from docs/CONTENT.md,
 * verbatim, collapsed by default. The complete list lives on /faq.
 */
const FAQ_ITEMS = [
  {
    question: "What sizes are available?",
    answer:
      "Every sellable Luma product is available in EU 36–40 and EU 41–46, subject to live Shopify availability.",
  },
  {
    question: "Can I build my own box?",
    answer:
      "Not at launch. Color Your Steps and Healthy Shifts are fixed editions with three predetermined designs.",
  },
  {
    question: "How can I pay?",
    answer:
      "Luma currently accepts cash on delivery. You pay when your order arrives.",
  },
] as const;

export function FaqPreview() {
  return (
    <section aria-labelledby="faq-preview-heading" className="bg-luma-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14">
          <div>
            <h2
              id="faq-preview-heading"
              className="font-display text-[clamp(2.25rem,6vw,3.5rem)] leading-[0.98] tracking-tight text-onyx"
            >
              A few things before you step out.
            </h2>
            <div className="mt-6">
              <CtaLink href="/faq" variant="outlineDark">
                See all questions
              </CtaLink>
            </div>
          </div>
          <div className="divide-y divide-onyx/15 border-y border-onyx/15">
            {FAQ_ITEMS.map((item) => (
              <Disclosure key={item.question} summary={item.question}>
                <p>{item.answer}</p>
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
