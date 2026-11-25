// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "It's 3 AM. My seed phrase is asleep, my secure element is off the clock, and the last time I signed at this hour you bought a monkey JPEG. No.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
