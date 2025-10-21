export interface FontOption {
  label: string;
  value: string;
  fontFamily: string;
}

export const fontOptions: FontOption[] = [
  { label: "Sans Serif", value: "sans-serif", fontFamily: "Inter, sans-serif" },
  { label: "Serif", value: "serif", fontFamily: "Lora, serif" },
  { label: "Mono", value: "mono", fontFamily: "Inconsolata, monospace" },
];
