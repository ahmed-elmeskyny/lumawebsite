/**
 * Factual announcement bar. Copy is the approved primary version from
 * docs/CONTENT.md — no countdowns, promotions, or delivery-time promises.
 */
export function AnnouncementBar() {
  return (
    <p className="bg-onyx px-4 py-2.5 text-center text-sm font-medium tracking-wide text-luma-white">
      Delivery: 35 MAD <span className="text-cyber-yellow">·</span> Pay cash on
      delivery
    </p>
  );
}
