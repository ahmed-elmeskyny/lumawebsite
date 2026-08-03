import type { Metadata } from "next";
import { PolicyPage, PolicySection } from "@/components/ui/PolicyPage";
import { storeConfig } from "@/config/store";

export const metadata: Metadata = {
  title: "Privacy Policy | Luma Socks",
  description:
    "How Luma collects, uses, and protects your personal information.",
};

const { legal, contact } = storeConfig;

/**
 * Working privacy policy covering how the storefront actually behaves.
 * Have it reviewed against Moroccan Law 09-08 (and GDPR if selling into
 * the EU) before launch.
 */
export default function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy policy."
      intro={`How ${legal.entity} collects, uses, and protects your information.`}
    >
      <PolicySection heading="What we collect">
        <p>
          When you place an order we collect your name, phone number, delivery
          address, and email address. We need these to confirm your order and
          deliver it.
        </p>
        <p>
          If you subscribe to our newsletter we store your email address only.
        </p>
      </PolicySection>

      <PolicySection heading="How we use it">
        <p>
          We use your details to process and deliver your order, to contact you
          about it, and — if you subscribed — to send you occasional updates
          about new designs.
        </p>
        <p>We do not sell your personal information to anyone.</p>
      </PolicySection>

      <PolicySection heading="Who we share it with">
        <p>
          We share what is necessary with the couriers who deliver your order
          and the payment and store platforms that run our shop. They may only
          use it to provide that service.
        </p>
      </PolicySection>

      <PolicySection heading="Cookies">
        <p>
          We use cookies that are necessary to run the shop — remembering your
          cart, for example. If we add analytics or advertising cookies, we
          will ask for your consent first.
        </p>
      </PolicySection>

      <PolicySection heading="How long we keep it">
        <p>
          Order records are kept as long as we are required to for accounting
          purposes. Newsletter subscriptions are kept until you unsubscribe.
        </p>
      </PolicySection>

      <PolicySection heading="Your rights">
        <p>
          You can ask us what data we hold about you, to correct it, or to
          delete it. Email{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-celtic-blue underline underline-offset-4"
          >
            {contact.email}
          </a>{" "}
          and we will respond.
        </p>
        <p>
          You can unsubscribe from our emails at any time using the link in any
          message we send.
        </p>
      </PolicySection>

      <PolicySection heading="Who is responsible">
        <p>
          {legal.entity}, {legal.address}. Contact us at {contact.email}.
        </p>
      </PolicySection>
    </PolicyPage>
  );
}
