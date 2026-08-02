/**
 * Factual announcement bar — the one prominent place payment method is
 * mentioned. Kept deliberately quiet: cash on delivery is an available
 * payment method, not a brand proposition.
 */
export function AnnouncementBar() {
  return (
    <p className="bg-onyx px-4 py-2.5 text-center text-sm font-medium tracking-wide text-luma-white">
      Delivery 35 MAD <span className="text-cyber-yellow">·</span> Pay on
      delivery available
    </p>
  );
}
