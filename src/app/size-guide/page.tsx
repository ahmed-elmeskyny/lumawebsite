import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sock Size Guide | Luma",
  description:
    "Choose between Luma sizes EU 36–40 and EU 41–46 for standalone pairs and fixed three-pair editions.",
};

/** Copy is the approved "Size Guide Copy" set from docs/CONTENT.md. */
export default function SizeGuidePage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-24">
      <h1 className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
        Find your Luma fit.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-onyx/80">
        Choose the range that includes your usual EU shoe size.
      </p>

      <table className="mt-8 w-full max-w-xl border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-onyx">
            <th scope="col" className="py-3 pr-4 font-semibold text-onyx">
              Your usual EU shoe size
            </th>
            <th scope="col" className="py-3 font-semibold text-onyx">
              Choose
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-onyx/15">
            <td className="py-3 pr-4 text-onyx/80">36–40</td>
            <td className="py-3 font-semibold text-onyx">EU 36–40</td>
          </tr>
          <tr className="border-b border-onyx/15">
            <td className="py-3 pr-4 text-onyx/80">41–46</td>
            <td className="py-3 font-semibold text-onyx">EU 41–46</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-8 max-w-xl rounded-2xl bg-crystal p-5">
        <p className="font-medium text-onyx">
          For an edition box, your selected size applies to all three pairs.
          Mixed sizes are not available.
        </p>
      </div>
      <p className="mt-5 max-w-xl text-onyx/80">
        Between ranges or unsure? Contact us before ordering.
      </p>
    </div>
  );
}
