import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "mixed",
  tokens: {
    pageBg: "#14132A",
    surface1: "#1E1B38",
    surface2: "#F3E7CE",
    surface3: "#E8D9B5",
    surfaceInverse: "#C99A3D",
    textPrimary: "#F4ECD8",
    textMuted: "#B8AE9A",
    textInverse: "#14132A",
    textOnAccentPrimary: "#14132A",
    textLink: "#E0B14A",
    focusRing: "#F0C868",
    line: "#2C2848",
    lineStrong: "#5C4A2A",
    accentPrimary: "#C99A3D",
    accentSecondary: "#6B5BA1",
    accentBright: "#F0C868",
    statusConfirmed: "#7FB069",
    statusCaution: "#D29A3C",
    statusUnknown: "#8A8295",
  },
  typography: {
    headingFamily:
      "Cormorant Garamond, Iowan Old Style, Palatino Linotype, Georgia, serif",
    bodyFamily:
      "Inter, Source Sans Pro, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    headingWeight: 700,
  },
  shape: {
    radius: "6px",
    borderWidth: "1px",
    shadow: "0 2px 8px rgba(11, 9, 24, 0.35)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.4, position: "center top" },
  variants: {
    home: "media-hero",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;
