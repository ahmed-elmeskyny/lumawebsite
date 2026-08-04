import type { Metadata } from "next";
import Image from "next/image";
import { storeConfig } from "@/config/store";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Luma team about orders, sizing, or anything else.",
};

const { contact, social } = storeConfig;

export default function ContactPage() {
  return (
    <div className="bg-eggshell">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-7 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="max-w-2xl">
            <p className="subtitle text-sm uppercase tracking-[0.16em] text-luma-green">
              Say hello
            </p>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] tracking-tight text-onyx">
              Talk to us.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-onyx/80">
              Questions about sizing, an order, or a design you would like to
              see? We read everything.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <ContactItem label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-celtic-blue underline underline-offset-4 hover:text-onyx"
                >
                  {contact.email}
                </a>
              </ContactItem>
              <ContactItem label="Phone">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-celtic-blue underline underline-offset-4 hover:text-onyx"
                >
                  {contact.phone}
                </a>
              </ContactItem>
              {contact.whatsapp && (
                <ContactItem label="WhatsApp">
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-celtic-blue underline underline-offset-4 hover:text-onyx"
                  >
                    {contact.whatsapp}
                  </a>
                </ContactItem>
              )}
              <ContactItem label="Hours">{contact.hours}</ContactItem>
              <ContactItem label="Instagram">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-celtic-blue underline underline-offset-4 hover:text-onyx"
                >
                  {social.handle}
                </a>
              </ContactItem>
            </dl>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <Image
              src="/assets/mascot/luma-wave-blue.svg"
              alt=""
              width={234}
              height={230}
              unoptimized
              className="h-48 w-auto sm:h-64"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-luma-white p-5">
      <dt className="subtitle text-xs uppercase tracking-[0.14em] text-onyx">
        {label}
      </dt>
      <dd className="mt-1.5 text-onyx">{children}</dd>
    </div>
  );
}
