import type { ProductImage } from "@/types/product";

export interface BlogSection {
  heading: string;
  paragraphs: readonly string[];
  pullQuote?: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  cover: ProductImage;
  coverFit: "cover" | "contain";
  field: string;
  darkField?: boolean;
  sections: readonly BlogSection[];
}

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "how-socks-are-made",
    category: "Sock craft",
    title: "How socks are made: from an idea to a finished pair",
    excerpt:
      "A look inside the process that turns a design, yarn, and thousands of knitted loops into something ready to wear.",
    cover: {
      src: "/assets/products/socks/cutout/sock-luma-doodle-card.png",
      alt: "Luma Doodle sock cutout showing its knitted design",
      width: 363,
      height: 712,
    },
    coverFit: "contain",
    field: "bg-crystal",
    sections: [
      {
        heading: "It begins as a grid, not a drawing.",
        paragraphs: [
          "A sock design has to work with knitted loops. Before production, artwork is translated into a grid that tells a knitting machine where colors and structures should appear.",
          "Curves, tiny details, and color changes may need to be adjusted so the idea remains clear when it becomes fabric. The best result respects both the artwork and the way the knit naturally stretches around a foot and ankle.",
        ],
      },
      {
        heading: "The sock is knitted into shape.",
        paragraphs: [
          "Most modern socks are knitted rather than cut from flat fabric. On a circular knitting machine, needles build interlocking loops row by row while yarn feeds into the machine.",
          "The machine changes which needles are active to shape areas such as the heel and toe. Different yarn feeds can introduce colors, patterns, cushioning, or structural zones as the sock grows.",
        ],
        pullQuote: "A sock looks simple because most of its complexity is hidden inside the knit.",
      },
      {
        heading: "Closing, finishing, and checking.",
        paragraphs: [
          "After knitting, the toe opening is closed. The method varies by factory and product, but the goal is a secure finish that sits comfortably inside the shoe.",
          "Many socks are then washed or finished, shaped on forms in a process often called boarding, and inspected for knitting faults, loose threads, sizing, and visual consistency before they are paired and packed.",
        ],
      },
    ],
  },
  {
    slug: "sock-materials-explained",
    category: "Materials",
    title: "Sock materials explained: what each fibre brings",
    excerpt:
      "Cotton, wool, synthetics, and stretch fibres behave differently. Here is why most socks use a considered blend.",
    cover: {
      src: "/assets/products/socks/cutout/sock-plus-pulse-card.png",
      alt: "Plus Pulse sock cutout showing its knitted surface",
      width: 363,
      height: 712,
    },
    coverFit: "contain",
    field: "bg-light-green",
    sections: [
      {
        heading: "The main fibre sets the character.",
        paragraphs: [
          "Cotton is familiar and soft, while wool can help manage temperature and moisture across changing conditions. Synthetic fibres such as polyester or polyamide are often used where strength, shape retention, or faster drying matters.",
          "No fibre is automatically best for every sock. The right choice depends on the intended feel, thickness, climate, shoe, activity, and care routine.",
        ],
      },
      {
        heading: "Small percentages can do important work.",
        paragraphs: [
          "Stretch fibres such as elastane are usually present in much smaller amounts than the main fibre, but they help the sock stretch over the foot and recover toward its original shape.",
          "Reinforcement yarns may also be concentrated in areas that receive more friction. A composition list shows the overall blend, but construction determines where each yarn is doing its job.",
        ],
        pullQuote: "A material list tells you what is in the sock. The knit tells you how those fibres work together.",
      },
      {
        heading: "Read the blend with the purpose in mind.",
        paragraphs: [
          "For everyday use, many people look for a balance of softness, durability, and enough stretch to stay comfortable. Sport, cold-weather, and dress socks may prioritize those qualities differently.",
          "Always check the product’s actual composition and care label. Two socks that both mention cotton can feel very different because fibre quality, yarn size, knit density, finishing, and the rest of the blend all matter.",
        ],
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-socks",
    category: "Practical guides",
    title: "How to choose the right socks for your day",
    excerpt:
      "Start with the shoe, the weather, and what you will be doing—then decide how much personality you want to add.",
    cover: {
      src: "/assets/products/gallery/sock-hypno-wave-on-leg.jpg",
      alt: "Hypno Wave socks worn against a pale blue studio background",
      width: 2250,
      height: 2251,
    },
    coverFit: "cover",
    field: "bg-classic-rose",
    sections: [
      {
        heading: "Begin with where you are going.",
        paragraphs: [
          "The right pair for a long walk may not be the pair you choose for a formal shoe or a quiet day at home. Think about time on your feet, temperature, movement, and the space inside the shoe.",
          "Sock height should also work with the shoe. A cuff that sits above the shoe edge can help prevent direct rubbing, while a lower profile may suit a different look and use.",
        ],
      },
      {
        heading: "Fit should feel secure, not distracting.",
        paragraphs: [
          "A sock that is too large can bunch or shift. One that is too small can feel stretched and place seams or design zones in the wrong position.",
          "Use the maker’s size range as your starting point. If you sit between ranges, consider your usual shoe size and whether you generally prefer a closer or more relaxed fit.",
        ],
        pullQuote: "The best sock is the one you stop noticing for comfort—and keep noticing for style.",
      },
      {
        heading: "Then choose the mood.",
        paragraphs: [
          "Once the practical questions are handled, the visual decision is yours. Match a color already in the outfit, contrast with everything around it, or let the socks become the detail that interrupts a simple look.",
          "There is no universal formula. Choose the pair that fits the day and still feels like you.",
        ],
      },
    ],
  },
  {
    slug: "self-expression-starts-from-the-ground-up",
    category: "Luma thinking",
    title: "Why self-expression starts from the ground up",
    excerpt:
      "The smallest part of an outfit can say something surprisingly big about the person wearing it.",
    cover: {
      src: "/assets/products/gallery/sock-daydream-on-leg.jpg",
      alt: "Daydream socks worn against a blue studio background",
      width: 2250,
      height: 2251,
    },
    coverFit: "cover",
    field: "bg-cyber-yellow",
    sections: [
      {
        heading: "The details are never just details.",
        paragraphs: [
          "An outfit can be practical and still feel personal. Sometimes identity lives in the obvious choices. Sometimes it hides in one bright detail that only appears when you move.",
          "That is what makes socks such an interesting canvas. They can be quiet from a distance and completely expressive up close. A color, a character, or an unexpected pattern becomes a small signal: this is how I feel today.",
        ],
      },
      {
        heading: "Your mood is allowed to change.",
        paragraphs: [
          "Self-expression is not a uniform. You do not have to choose one version of yourself and wear it forever. Some days are loud. Some are dreamy. Some need a little weirdness.",
          "Choosing a pair by mood makes getting dressed less about following a rule and more about noticing what feels honest in the moment.",
        ],
        pullQuote: "You do not need to shout to be heard. Just wear what you feel.",
      },
      {
        heading: "Start with one step.",
        paragraphs: [
          "There is no correct way to wear personality. Start with the pair that makes you look twice. Let it interrupt the ordinary. Let it become the detail that turns an outfit into yours.",
          "Expression does not have to begin with a complete transformation. It can begin exactly where Luma begins: from the ground up.",
        ],
      },
    ],
  },
  {
    slug: "meet-luma-the-sidekick-behind-the-socks",
    category: "Inside Luma",
    title: "Meet Luma, the sidekick behind the socks",
    excerpt:
      "He is playful, curious, occasionally wise, and responsible for connecting every Luma story.",
    cover: {
      src: "/assets/mascot/luma-peace-red.svg",
      alt: "Luma making a peace sign",
      width: 340,
      height: 400,
    },
    coverFit: "contain",
    field: "bg-rose-pink",
    sections: [
      {
        heading: "A colorful world needed a guide.",
        paragraphs: [
          "Luma is not simply a mark placed beside the brand name. He is the character who gives the wider Luma world a point of view.",
          "He notices the strange details, finds the joke, and makes every new design feel like another chapter rather than another item on a shelf.",
        ],
      },
      {
        heading: "One character. Many moods.",
        paragraphs: [
          "Sometimes Luma is moving too fast. Sometimes he is painting, waving, thinking, or sleeping through the end of the story. That changeability is the point.",
          "People are not only one thing, and neither is he. His different moods make space for every Luma drop to feel distinct while still belonging to the same universe.",
        ],
        pullQuote: "Think of Luma as the sidekick who turns fashion into storytelling.",
      },
      {
        heading: "The story keeps growing.",
        paragraphs: [
          "Editions, standalone designs, creative experiments, and future collaborations can all speak differently. Luma is the thread that keeps them connected.",
          "Wherever the socks go next, expect him to appear somewhere nearby—probably with an opinion.",
        ],
      },
    ],
  },
  {
    slug: "inside-color-your-steps",
    category: "Edition stories",
    title: "Inside Color Your Steps: Luma arrives",
    excerpt:
      "Three socks trace Luma’s first journey from a mysterious hole to a world ready for more color.",
    cover: {
      src: "/assets/editions/luma-color-your-steps-open-filled-v1.png",
      alt: "Color Your Steps open box with its three sock designs",
      width: 1254,
      height: 1254,
    },
    coverFit: "contain",
    field: "bg-celtic-blue",
    darkField: true,
    sections: [
      {
        heading: "Every character needs an entrance.",
        paragraphs: [
          "Color Your Steps is Luma’s first edition and the beginning of his journey. The three designs are not random neighbors inside a box. Read in order, they become an arrival story.",
          "It begins below the surface, moves into the world at speed, and ends with the marks Luma leaves behind.",
        ],
      },
      {
        heading: "Watch Your Step: the arrival.",
        paragraphs: [
          "A hole opens in the pavement. Footprints lead away from it. Luma plants a sign, wanders across the yellow, and eventually finds a place to sleep.",
          "The design introduces him without explaining everything. He is suddenly here. The world will have to adjust.",
        ],
      },
      {
        heading: "Kickflip Luma and Luma Doodle: the change.",
        paragraphs: [
          "Once Luma arrives, he starts moving. Kickflip Luma turns that energy into boards, motion, and a green blur. Luma Doodle captures what happens next: symbols, questions, hearts, and scribbles appear wherever he goes.",
          "Together, the three pairs tell one simple story. Luma arrived, explored, and made the world a little less ordinary.",
        ],
        pullQuote: "Three pairs. One arrival. The first chapter of Luma starts here.",
      },
    ],
  },
  {
    slug: "inside-healthy-shifts",
    category: "Edition stories",
    title: "Inside Healthy Shifts: Luma is on call",
    excerpt:
      "A playful medical-inspired edition for long days, busy rounds, and feet that deserve more personality.",
    cover: {
      src: "/assets/editions/luma-healthy-shifts-open-filled-v1.png",
      alt: "Healthy Shifts open box with its three sock designs",
      width: 1254,
      height: 1254,
    },
    coverFit: "contain",
    field: "bg-luma-green",
    darkField: true,
    sections: [
      {
        heading: "Doctor Luma takes the shift.",
        paragraphs: [
          "Healthy Shifts turns a serious visual language into something colorful and unexpected. It is campaign wordplay, not a medical claim: Luma’s only prescription here is more personality.",
          "Each design represents a stop along his rounds, from the team arriving to the final pair on the prescription pad.",
        ],
      },
      {
        heading: "The rounds and the check-up.",
        paragraphs: [
          "Luma Med Team gathers the whole crew: clipboards, an X-ray, an ambulance, and several Lumas trying to look professionally busy.",
          "Vital Signs scatters familiar medical-inspired symbols across deep purple. It is the visual check-up in the middle of the story—clever, graphic, and slightly chaotic.",
        ],
      },
      {
        heading: "The prescription: Plus Pulse.",
        paragraphs: [
          "The last design lowers the volume. Plus signs settle into a cool teal grid, giving the edition a calmer ending after the activity of the rounds.",
          "The result is one fixed three-pair box with a complete visual story: the team, the tools, and the prescription.",
        ],
        pullQuote: "Doctor’s orders: choose your size, open the box, and wear the shift your way.",
      },
    ],
  },
  {
    slug: "choose-socks-for-your-mood",
    category: "Style notes",
    title: "Choose socks for your mood, not only your outfit",
    excerpt:
      "A simple way to make getting dressed feel more personal: start with how you want the day to feel.",
    cover: {
      src: "/assets/products/gallery/sock-vibe-attack-on-leg.jpg",
      alt: "Vibe Attack socks worn against a green studio background",
      width: 2250,
      height: 2251,
    },
    coverFit: "cover",
    field: "bg-light-green",
    sections: [
      {
        heading: "Start with a feeling.",
        paragraphs: [
          "Most styling advice starts with matching. Mood-led styling starts somewhere more useful: deciding what kind of energy you want to carry.",
          "Do you want the day to feel calm, loud, strange, playful, or focused? Your answer can make choosing the smallest details much easier.",
        ],
      },
      {
        heading: "Match, contrast, or interrupt.",
        paragraphs: [
          "A colorful pair can echo a shade already in your outfit, contrast with everything around it, or deliberately interrupt a simple look.",
          "None of those approaches is more correct. The strongest choice is usually the one that feels intentional to you.",
        ],
        pullQuote: "Your socks do not have to behave just because the rest of your outfit does.",
      },
      {
        heading: "Let the pair make the first move.",
        paragraphs: [
          "Try choosing the socks before the outfit. A graphic pair might lead you toward simpler clothes. A dreamy design might pull a familiar color into the rest of the look.",
          "There is no formula to memorize. Pick the mood, follow the color, and let the story build from there.",
        ],
      },
    ],
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
