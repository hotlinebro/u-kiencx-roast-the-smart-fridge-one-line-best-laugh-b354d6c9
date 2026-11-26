// Roast the Smart Fridge: One Line, Best Laugh Wins
// u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
//
// Writes one line, at most 160 characters, roasting the smart fridge
// to /output/entry.txt. Node 22+, stdlib only. Run: node main.ts
//
// The line: the fridge is a diligent-but-useless smart roommate. It read
// 533 lines of its own rules, remembered only 151 of them, and still
// reordered the milk I claimed 23 times for $0. Real numbers from our
// own agent work, a specific behaviour (reordering milk), and the sting
// lands on $0 at the very end. That is the fresh angle: not a stock
// joke about a fridge ordering too much milk, but a fridge that did
// all the homework and still got the one job wrong.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smart fridge read 533 lines of its own rules, remembered 151, and still reordered the milk I claimed 23 times for $0.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Gate self-check: the entry must be 1-160 characters, a single line,
// and not only whitespace — otherwise refuse to write anything.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`entry is ${chars.length} chars, must be 1-160`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${outPath}`);
