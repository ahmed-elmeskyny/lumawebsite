import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";
import { storeConfig } from "@/config/store";

export const metadata: Metadata = {
  title: "Shipping & Returns | Luma Socks",
  description:
    "How Luma orders are delivered across Morocco, what delivery costs, and how returns work.",
};

const { delivery, returns, contact } = storeConfig;

export default function ShippingReturnsPage() {
  return (
    <PolicyPage
      eyebrow="Orders"
      title="Shipping & returns."
      intro="Everything about getting your Luma order, and what happens if something is not right."
    >
      <PolicySection heading="Delivery cost">
        <p>
          Delivery is a flat {delivery.feeMad} MAD on every order, whatever
          you buy.
        </p>
      </PolicySection>

      <PolicySection heading="Where we deliver">
        <p>{delivery.areas}.</p>
      </PolicySection>

      <PolicySection heading="How long it takes">
        <p>
          Orders usually arrive within {delivery.estimate} after you place
          them. You will be contacted to confirm your order and delivery
          details.
        </p>
      </PolicySection>

      <PolicySection heading="How you pay">
        <p>
          Luma accepts cash on delivery. You pay the courier when your order
          arrives — nothing is charged upfront.
        </p>
      </PolicySection>

      <PolicySection heading="Returns and exchanges">
        <p>
          If something is not right, contact us within {returns.windowDays}{" "}
          days of receiving your order and we will sort it out.
        </p>
        <p>
          Socks must be unworn and in their original packaging to be returned.
          For hygiene reasons we cannot accept socks that have been worn or
          washed.
        </p>
        <p>{returns.returnShipping}.</p>
      </PolicySection>

      <PolicySection heading="Wrong or damaged item">
        <p>
          If your order arrives damaged or you received the wrong design, send
          a photo to{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-celtic-blue underline underline-offset-4"
          >
            {contact.email}
          </a>{" "}
          and we will replace it at no cost to you.
        </p>
      </PolicySection>

      <PolicySection heading="Cancelling an order">
        <p>
          Orders can be cancelled any time before they are handed to the
          courier. Get in touch as soon as you can and we will stop it.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
