/**
 * Chrome extensions built and published by Matteo Arellano.
 * Feeds the /chrome-extensions/ landing page and its structured data.
 * Descriptions follow each extension's Chrome Web Store listing and privacy policy.
 */

export type ChromeExtension = {
  slug: string;
  name: string;
  version: string;
  storeUrl: string;
  tagline: string;
  summary: string;
  features: string[];
  goodFor: string[];
  /** Plain-English summary of what the extension reads and where that data goes. */
  privacy: {
    reads: string;
    stays: string;
    permissions: string[];
  };
  note?: string;
  icon: "audit" | "links" | "map";
};

export const chromeExtensions: ChromeExtension[] = [
  {
    slug: "seo-page-audit",
    name: "SEO Page Audit",
    version: "1.0.4",
    storeUrl:
      "https://chromewebstore.google.com/detail/seo-page-audit/ehoodgoogeajolhoecncknkcgfgjnjji",
    tagline: "Check any webpage for SEO, structure, accessibility and technical basics.",
    summary:
      "Open a page, click the icon and get a quick read on whether the basics are in place: the tags search engines and social platforms read, the heading outline, image alt text and the technical setup in the page head.",
    features: [
      "Title tag and meta description",
      "Heading structure (H1 to H6)",
      "Image alt attributes",
      "Canonical, robots and viewport tags",
      "Open Graph and Twitter card metadata",
      "Structured data blocks, scripts and stylesheets",
    ],
    goodFor: ["Landing pages", "Ecommerce pages", "Blogs", "Documentation"],
    privacy: {
      reads: "The page you are viewing, only when you open the extension.",
      stays:
        "Everything runs in your browser. No page content or audit results are sent anywhere, and nothing is stored.",
      permissions: ["Active tab", "Scripting"],
    },
    note: "A fast first check, not a replacement for a full crawler or performance audit.",
    icon: "audit",
  },
  {
    slug: "link-page-checker-for-seo",
    name: "Link Page Checker for SEO",
    version: "0.1.0",
    storeUrl:
      "https://chromewebstore.google.com/detail/link-page-checker-for-seo/clngakebakeaccdkhjfclbaoeegpmhoi",
    tagline: "List every link on a page, check its status and export the report as CSV.",
    summary:
      "Scan the current page for links, see where each one really points, run an optional HTTPS status check and download a CSV you can filter in Excel or Google Sheets.",
    features: [
      "Every link with its text, original value and resolved URL",
      "Link type: internal, external, anchor, email or phone",
      "Target and rel attributes (nofollow, sponsored, ugc)",
      "Optional HTTPS status check for up to 100 unique URLs",
      "Final status code, final URL and key response headers",
      "Manual-review flags for links that can't be checked automatically",
    ],
    goodFor: ["Content QA before publishing", "Site migrations", "Internal linking reviews", "Client reports"],
    privacy: {
      reads: "Links on the page you are viewing, only when you run a scan.",
      stays:
        "Results are processed locally and held only while the popup is open. Status checks are sent without cookies, and private or local addresses are blocked.",
      permissions: ["Active tab", "Scripting", "Optional HTTPS access (status checks only)"],
    },
    icon: "links",
  },
  {
    slug: "mapsnap-csv",
    name: "MapSnap CSV",
    version: "0.1.0",
    storeUrl: "https://chromewebstore.google.com/detail/mapsnap-csv/efcmhpfnpefaplfepigbbejjemcmaidf",
    tagline: "Capture Google Maps listing details into rows and export them as a clean CSV.",
    summary:
      "Open a Google Maps listing, capture its details, review or edit the fields, save it as a row and export everything as a CSV. A tidy way to review many listings without building the spreadsheet by hand.",
    features: [
      "Current Google Maps URL",
      "Name, address and category",
      "Rating and review count",
      "Phone number and website",
      "Your own notes on each listing",
      "One-click CSV export and clear",
    ],
    goodFor: ["Local listing QA", "Location audits", "Market research", "Operations checks"],
    privacy: {
      reads: "The Google Maps listing you have open, only when you click capture.",
      stays:
        "Saved rows are kept in your browser's extension storage until you clear them. Nothing is sent to a server.",
      permissions: ["Storage", "Active tab", "Scripting"],
    },
    note: "Review captured fields before saving: Google Maps layouts vary by country, language and listing type.",
    icon: "map",
  },
];
