/**
 * Compact functional strip: sizes, delivery charge, payment method.
 * Deliberately secondary — no shipping times, exchange promises,
 * material claims, discounts, reviews, or guarantees.
 */
const ITEMS = [
  { label: "Sizes", value: "EU 36–40 and EU 41–46" },
  { label: "Delivery", value: "35 MAD" },
  { label: "Payment", value: "Pay on delivery available" },
] as const;

export function ReassuranceStrip() {
  return (
    <section aria-label="Shopping information" className="bg-luma-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-7 lg:px-12">
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-onyx/15 bg-onyx/15 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.label} className="bg-luma-white px-5 py-4">
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-onyx/55">
                {item.label}
              </dt>
              <dd className="mt-1 font-medium text-onyx">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
