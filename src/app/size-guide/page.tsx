import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/ui/PolicyPage";
import { SIZE_RANGES } from "@/types/product";

export const metadata: Metadata = {
  title: "Sock Size Guide",
  description:
    "Choose between Luma sizes EU 36–40 and EU 41–46 for standalone pairs and fixed three-pair editions.",
};

export default function SizeGuidePage() {
  return (
    <PolicyPage
      eyebrow="Fit"
      title="Find your Luma fit."
      intro="Two ranges, no half sizes to agonise over. Choose the one that includes your usual EU shoe size."
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-onyx">
            <th
              scope="col"
              className="subtitle py-3 pr-4 text-xs uppercase tracking-[0.14em] text-onyx"
            >
              Your usual EU shoe size
            </th>
            <th
              scope="col"
              className="subtitle py-3 text-xs uppercase tracking-[0.14em] text-onyx"
            >
              Choose
            </th>
          </tr>
        </thead>
        <tbody>
          {SIZE_RANGES.map((range) => (
            <tr key={range} className="border-b border-onyx/15">
              <td className="py-3 pr-4 text-onyx/80">
                {range.replace(/^EU\s*/, "")}
              </td>
              <td className="py-3 text-onyx">{range}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 rounded-2xl bg-crystal p-5">
        <p className="text-onyx">
          For an edition box, your selected size applies to all three pairs.
          Mixed sizes are not available.
        </p>
      </div>
      <p className="mt-5 text-onyx/80">
        Between ranges or unsure?{" "}
        <Link
          href="/contact"
          className="text-celtic-blue underline decoration-2 underline-offset-4 hover:text-onyx"
        >
          Contact us
        </Link>{" "}
        before ordering.
      </p>
    </PolicyPage>
  );
}
