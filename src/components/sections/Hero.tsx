import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { WaveField } from "@/components/ui/WaveField";

/**
 * Homepage hero, built in the language of the Luma campaign billboard:
 * a wavy yellow-and-white ribbon field, an oversized blue display
 * headline, the product worn and entering from the right, and the Luma
 * lockup anchored bottom-left.
 *
 * Note on copy: the billboard headline is a Morocco retail-availability
 * message. The approved geography rule in docs/CONTENT.md keeps Morocco
 * off the homepage, so the approved brand message is used here instead
 * and the retail claim is not published. See the checkpoint report.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-luma-white"
    >
      <WaveField />

      <div className="relative mx-auto grid max-w-[1440px] items-end gap-6 px-4 sm:px-7 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:gap-8 lg:px-12">
        <div className="pt-12 pb-6 lg:pt-20 lg:pb-16">
          <h1
            id="hero-heading"
            className="motion-rise font-display text-[clamp(3rem,13vw,5rem)] uppercase leading-[0.9] tracking-tight text-celtic-blue lg:text-[clamp(4rem,7vw,7.5rem)]"
          >
            Wear who you&nbsp;are.
          </h1>
          <p className="motion-rise-delayed mt-6 max-w-md text-lg leading-relaxed text-onyx">
            Color, character, and a little surprise—made to turn an everyday
            pair into part of your story.
          </p>

          <div className="motion-rise-delayed mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="/shop" variant="dark">
              Shop the drop
            </CtaLink>
            <CtaLink href="/collections/editions" variant="outlineDark">
              Explore the editions
            </CtaLink>
          </div>

          {/* Brand lockup anchored bottom-left, as on the campaign artwork */}
          <div className="motion-rise-delayed mt-10 flex items-center gap-5 lg:mt-14">
            <Image
              src="/assets/brand/logo-icon-blue.svg"
              alt="Luma Socks"
              width={96}
              height={96}
              unoptimized
              className="h-12 w-auto"
            />
            <span className="h-9 w-px bg-onyx/25" aria-hidden="true" />
            <p className="max-w-45 text-sm font-semibold leading-tight text-onyx/70">
              Socks for every side of you.
            </p>
          </div>
        </div>

        <div className="motion-settle relative mx-auto w-full max-w-md pb-6 lg:max-w-none lg:pb-8">
          {/* Brand animation, pinned back like a poster */}
          <div className="relative z-10 w-[62%] -rotate-3 overflow-hidden rounded-2xl bg-luma-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <video
              aria-hidden="true"
              tabIndex={-1}
              className="aspect-16/9 w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              playsInline
              preload="auto"
              poster="/assets/brand/luma-delivering-happiness-poster.jpg"
            >
              <source
                src="/assets/brand/luma-delivering-happiness-1280.webm"
                type="video/webm"
              />
              <source
                src="/assets/brand/luma-delivering-happiness-1280.mp4"
                type="video/mp4"
              />
            </video>
            <Image
              src="/assets/brand/luma-delivering-happiness-poster.jpg"
              alt=""
              width={1280}
              height={720}
              className="hidden aspect-16/9 w-full object-cover motion-reduce:block"
            />
          </div>

          {/* The product, worn — angled into frame like the campaign shot */}
          <Image
            src="/assets/products/lifestyle/luma-legs-watch-your-step.png"
            alt="Legs wearing Luma socks in the yellow Watch Your Step design"
            width={1200}
            height={1437}
            priority
            sizes="(min-width: 1024px) 42vw, 78vw"
            className="relative z-20 -mt-[24%] ml-auto block h-auto w-[74%] origin-bottom rotate-6 object-contain drop-shadow-[0_22px_38px_rgba(0,0,0,0.28)]"
          />
        </div>
      </div>
    </section>
  );
}
