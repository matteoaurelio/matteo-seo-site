export type LanguageLevel = {
  /** Label shown on the page. */
  label: string;
  /** Optional clarification shown under the label. */
  note?: string;
  /** Position on a simple four-step scale, used only for the visual indicator. */
  step: 1 | 2 | 3 | 4;
  languages: {
    name: string;
    /** The language's own name for itself. */
    endonym: string;
    /** BCP 47 code, used for the lang attribute and structured data. */
    code: string;
  }[];
};

export const languageLevels: LanguageLevel[] = [
  {
    label: "Native",
    step: 4,
    languages: [
      { name: "Spanish", endonym: "Español", code: "es" },
      { name: "Catalan", endonym: "Català", code: "ca" },
    ],
  },
  {
    label: "Advanced professional",
    step: 3,
    languages: [
      { name: "English", endonym: "English", code: "en" },
      { name: "Dutch", endonym: "Nederlands", code: "nl" },
    ],
  },
  {
    label: "Conversational",
    step: 2,
    languages: [
      { name: "French", endonym: "Français", code: "fr" },
      { name: "Portuguese", endonym: "Português", code: "pt" },
    ],
  },
  {
    label: "A2 level",
    note: "Elementary, on the CEFR scale",
    step: 1,
    languages: [{ name: "Norwegian", endonym: "Norsk", code: "no" }],
  },
];
