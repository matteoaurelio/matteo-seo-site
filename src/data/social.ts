/**
 * Social profiles and video links, kept in one place so the footer,
 * the digital card and articles always point to the same URLs.
 */

export const linkedInUrl = "https://www.linkedin.com/in/matteoarellano";

/** The YouTube channel itself (used in structured data to connect the channel to this site). */
export const youtubeChannelUrl = "https://www.youtube.com/@matteoarellano-payments";

/** The "Payment Systems, Explained" playlist on YouTube. It grows as new episodes are published. */
export const youtubePlaylistUrl = "https://www.youtube.com/playlist?list=PLCVWF4_Kwa-Y";

/** Videos referenced from articles (used for the embed and VideoObject structured data). */
export const youtubeVideos = {
  netherlandsEp1: {
    id: "PSkXdDwBMa4",
    url: "https://youtu.be/PSkXdDwBMa4",
  },
} as const;
