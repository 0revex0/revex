import { Colors } from "./colors";

export const Themes = {
  obsidian: {
    name: "Obsidian",
    colors: Colors.obsidian,
  },

  midnight: {
    name: "Midnight",
    colors: Colors.midnight,
  },

  emerald: {
    name: "Emerald",
    colors: Colors.emerald,
  },

  sand: {
    name: "Sand",
    colors: Colors.sand,
  },

  pearl: {
    name: "Pearl",
    colors: Colors.pearl,
  },
};

export type ThemeName = keyof typeof Themes;