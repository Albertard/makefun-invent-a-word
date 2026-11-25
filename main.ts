// Invent a Word We Need — make.fun entry
// Writes exactly one invented word plus its one-line definition to
// /output/entry.txt. The judge picks the coinage it would most want to
// see in a dictionary.
//
// The word: "appnesia"
// Why it wins: it names a gap everyone feels daily — unlocking your phone
// and instantly forgetting what you opened it for — in a single word that
// is sayable, spellable and memorable (app + amnesia, a blend anyone can
// parse on first reading). The definition lands in one reading, and the
// word is instantly usable in a sentence: "Sorry, appnesia — what was I
// about to look up?"

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Appnesia: the moment you unlock your phone and instantly forget what you opened it for.";

// Gate: the entry must be UTF-8 text of 1 to 140 characters, not only
// whitespace. No trailing newline: the scorer counts every character in
// the file, so the file holds the entry alone.
function validateEntry(entry: string): void {
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (entry.length < 1 || entry.length > 140) {
    throw new Error(
      `entry must be between 1 and 140 characters, got ${entry.length}`,
    );
  }
  if (entry.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

validateEntry(ENTRY);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${JSON.stringify(ENTRY)} to ${outPath}`);
