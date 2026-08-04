import type { Metadata } from "next";
import { Disclosure } from "@/components/ui/Disclosure";
import { PolicyPage } from "@/components/ui/PolicyPage";
import { storeConfig } from "@/config/store";
import {
  getEditionOnlyDesignNames,
  getFeaturedEditions,
  getStandaloneDesignNames,
} from "@/lib/catalogue";
import { formatMad } from "@/lib/money";
import { formatList } from "@/lib/text";
import { SIZE_RANGES } from "@/types/product";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers about Luma sizes, fixed editions, cash on delivery, packaging, and ordering.",
};

/**
 * Every answer that states a fact reads it from config/store.ts or the
 * catalogue. Nothing here restates a delivery window, return term, or
 * design list that could drift out of sync with the rest of the store.
 */
function buildFaqItems() {
  const singles = getStandaloneDesignNames();
  const editionOnly = getEditionOnlyDesignNames();
  const editionNames = getFeaturedEditions().map((edition) => edition.name);

  return [
    {
      question: "How can I pay?",
      answer:
        "Luma accepts cash on delivery. You pay when your order arrives — nothing is charged upfront.",
    },
    {
      question: "How much is delivery?",
      answer: `Delivery is a flat ${formatMad(storeConfig.delivery.feeMad)} on every order, whatever you buy.`,
    },
    {
      question: "How long does delivery take?",
      answer: `Orders usually arrive within ${storeConfig.delivery.estimate}. ${storeConfig.delivery.areas}.`,
    },
    {
      question: "What sizes are available?",
      answer: `Every sellable Luma product comes in ${formatList([
        ...SIZE_RANGES,
      ])}, subject to live availability.`,
    },
    {
      question: "Can I build my own box?",
      answer: `Not at launch. ${formatList(editionNames)} are fixed editions with three predetermined designs.`,
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
      question: "Which designs are sold as single pairs?",
      answer: `${formatList([...singles])} are available on their own. ${formatList([...editionOnly])} come only with their editions.`,
    },
    {
      question: "Does a single pair come in the rigid box?",
      answer:
        "No. Standalone pairs are packed in a Luma zipper bag. The rigid magnetic box is included with the fixed three-pair editions.",
    },
    {
      question: "Can I return or exchange an order?",
      answer: `Contact us within ${storeConfig.returns.windowDays} days of receiving your order. Socks must be unworn and in their original packaging. ${storeConfig.returns.returnShipping}.`,
    },
  ];
}

export default function FaqPage() {
  return (
    <PolicyPage
      eyebrow="Answers"
      title="Everything you asked."
      intro="Sizes, editions, delivery, and paying on the doorstep — the short version."
    >
      <div className="divide-y divide-onyx/15 border-y border-onyx/15">
        {buildFaqItems().map((item) => (
          <Disclosure key={item.question} summary={item.question}>
            <p>{item.answer}</p>
          </Disclosure>
        ))}
      </div>
    </PolicyPage>
  );
}
