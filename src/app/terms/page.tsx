import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";
import { storeConfig } from "@/config/store";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you shop with Luma Socks.",
};

const { legal, delivery, returns, contact } = storeConfig;

/**
 * Working terms of service. Have these reviewed by a lawyer against
 * Moroccan consumer law before launch.
 */
export default function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of service."
      intro={`These terms apply when you buy from ${legal.entity}.`}
    >
      <PolicySection heading="About us">
        <p>
          This shop is operated by {legal.entity}, {legal.address}.
        </p>
      </PolicySection>

      <PolicySection heading="Placing an order">
        <p>
          When you place an order you are making an offer to buy. The order is
          confirmed once we accept it and contact you to arrange delivery. We
          may decline an order if a product is unavailable or the delivery
          address is outside the areas we serve.
        </p>
      </PolicySection>

      <PolicySection heading="Prices and payment">
        <p>
          Prices are shown in Moroccan dirham (MAD) and include applicable
          taxes. Delivery is {delivery.feeMad} MAD per order.
        </p>
        <p>
          Payment is cash on delivery. You pay the courier when your order
          arrives.
        </p>
      </PolicySection>

      <PolicySection heading="Products">
        <p>
          We work hard to show our designs accurately, but colours can look
          different from screen to screen. Sizes are sold in the ranges shown
          on each product page.
        </p>
        <p>
          Edition boxes contain three predetermined designs which cannot be
          swapped, and one selected size applies to all three pairs.
        </p>
      </PolicySection>

      <PolicySection heading="Returns">
        <p>
          You may contact us within {returns.windowDays} days of receiving your
          order to arrange a return of unworn socks in their original
          packaging. Full details are on our shipping and returns page.
        </p>
      </PolicySection>

      <PolicySection heading="Our content">
        <p>
          The Luma name, logo, mascot, sock designs, photography, and website
          content belong to {legal.entity}. Please do not reproduce them
          commercially without our permission.
        </p>
      </PolicySection>

      <PolicySection heading="Liability">
        <p>
          We are responsible for delivering the products you ordered in good
          condition. We are not liable for indirect losses arising from use of
          the site or products, to the extent permitted by law.
        </p>
      </PolicySection>

      <PolicySection heading="Governing law">
        <p>
          These terms are governed by Moroccan law. Any dispute will be handled
          by the competent courts of Morocco.
        </p>
      </PolicySection>

      <PolicySection heading="Contact">
        <p>
          Questions about these terms? Email {contact.email}.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
