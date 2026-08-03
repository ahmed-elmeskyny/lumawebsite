import type { Metadata } from "next";
import { Disclosure } from "@/components/ui/Disclosure";

export const metadata: Metadata = {
  title: "FAQ | Luma Socks",
  description:
    "Find answers about Luma sizes, fixed editions, cash on delivery, packaging, and ordering.",
};

/**
 * The complete approved FAQ from docs/CONTENT.md, verbatim. Questions
 * about delivery areas, delivery times, order changes, returns,
 * exchanges, materials, care, and refunds stay unpublished until those
 * rules are approved.
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
    question: "Can I change one design inside an edition?",
    answer:
      "No. The three designs in each edition cannot be swapped or removed.",
  },
  {
    question: "Can I choose different sizes inside one box?",
    answer:
      "No. You choose one size range, and it applies to all three pairs in the box.",
  },
  {
    question: "Can I buy the edition designs separately?",
    answer:
      "Most of them, yes. Kickflip Luma, Luma Doodle, Plus Pulse, and Vital Signs are also sold as single pairs. Watch Your Step and Luma Med Team are available only inside their editions.",
  },
  {
    question: "Which designs are sold as single pairs?",
    answer:
      "Hypno Wave, Daydream, Shroom Pop, Vibe Attack, Kickflip Luma, Luma Doodle, Plus Pulse, and Vital Signs are available as standalone pairs. Watch Your Step and Luma Med Team come only with their editions.",
  },
  {
    question: "Does a single pair come in the rigid box?",
    answer:
      "No. Standalone pairs are packed in a Luma zipper bag. The rigid magnetic box is included with the fixed three-pair editions.",
  },
] as const;

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-24">
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
        FAQ
      </h1>
      <div className="mt-8 max-w-3xl divide-y divide-onyx/15 border-y border-onyx/15">
        {FAQ_ITEMS.map((item) => (
          <Disclosure key={item.question} summary={item.question}>
            <p>{item.answer}</p>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
