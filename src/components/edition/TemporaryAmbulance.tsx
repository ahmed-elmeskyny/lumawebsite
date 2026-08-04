import { cn } from "@/lib/cn";

/**
 * Temporary campaign artwork for the Healthy Shifts journey.
 *
 * This deliberately stays a simple, code-native route marker rather than
 * pretending to be finished Luma character artwork. It can be replaced by
 * the commissioned campaign illustration without changing the page layout.
 */
export function TemporaryAmbulance({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 138"
      className={cn("h-auto w-full drop-shadow-[0_12px_18px_rgba(56,54,57,0.2)]", className)}
    >
      <path
        d="M28 45c0-12 10-22 22-22h91c12 0 22 10 22 22v8h18c8 0 15 4 19 11l12 20c3 5 5 11 5 17v8H23V45h5Z"
        fill="#F1F1F1"
        stroke="#383639"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M163 58h17c5 0 9 2 12 7l10 17h-39V58Z"
        fill="#AADDE1"
        stroke="#383639"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M25 88h190v21H25z" fill="#1D987C" />
      <path
        d="M93 43h18v15h15v18h-15v15H93V76H78V58h15V43Z"
        fill="#FE564B"
      />
      <path
        d="M55 23h23v-9h28v9h23"
        fill="none"
        stroke="#383639"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M81 14h22v10H81z" fill="#FDD400" />
      <circle cx="62" cy="109" r="19" fill="#383639" />
      <circle cx="62" cy="109" r="8" fill="#F1F1F1" />
      <circle cx="174" cy="109" r="19" fill="#383639" />
      <circle cx="174" cy="109" r="8" fill="#F1F1F1" />
      <path
        d="M31 47h26M31 61h18"
        fill="none"
        stroke="#1A5EDB"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
