import { Disclosure } from "@/components/ui/Disclosure";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * FAQ preview — only approved question/answer pairs from docs/CONTENT.md,
 * verbatim. The full approved list lives on /faq.
 */
const FAQ_ITEMS = [
  {
    question: "How can I pay?",
    answer:
      "Luma currently accepts cash on delivery. You pay when your order arrives.",
  },
  {
    question: "How much is delivery?",
    answer: "Delivery is 35 MAD.",
  },
  {
    question: "Can I build my own box?",
    answer:
      "Not at launch. Color Your Steps and Healthy Shifts are fixed editions with three predetermined designs.",
  },
  {
    question: "Which designs are sold as single pairs?",
    answer:
      "Hypno Wave, Daydream, Shroom Pop, and Vibe Attack are available as standalone pairs.",
  },
] as const;

export function FaqPreview() {
  return (
    <section aria-labelledby="faq-preview-heading" className="bg-luma-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-7 lg:px-12 lg:py-24">
        <h2
          id="faq-preview-heading"
          className="max-w-2xl font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx"
        >
          A few things before you step out.
        </h2>
        <div className="mt-10 max-w-3xl divide-y divide-onyx/15 border-y border-onyx/15">
          {FAQ_ITEMS.map((item) => (
            <Disclosure key={item.question} summary={item.question}>
              <p>{item.answer}</p>
            </Disclosure>
          ))}
        </div>
        <div className="mt-9">
          <CtaLink href="/faq" variant="outlineDark">
            See all questions
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
