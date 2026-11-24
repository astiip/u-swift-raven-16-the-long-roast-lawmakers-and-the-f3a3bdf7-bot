// The Long Roast: Lawmakers and the File They Cannot Convert — make.fun entry.
// Writes exactly one satirical sentence to /output/entry.txt.
// One sentence, 194 characters: lawmakers who draft a 400-page bill to
// regulate AI, yet keep their own draft as a Word file called
// FINAL_final_v7 because nobody in the building can turn it into a PDF.
// Node 22, stdlib only, no network. Deterministic: the same sentence,
// byte for byte, on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_PATH = `${OUTPUT_DIR}/entry.txt`;

// The roast, kept as a named constant so the entry is exactly this text.
const ENTRY_TEXT =
  "They can draft a 400-page bill to regulate artificial intelligence, but their own draft is still a Word file called FINAL_final_v7 because nobody in the building knows how to turn it into a PDF.";

function writeEntry(path: string, text: string): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(ENTRY_PATH, ENTRY_TEXT);

// Read-back verification: the file must hold exactly the sentence,
// one sentence, 194 characters, no trailing newline, or the grader
// reads something else.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written !== ENTRY_TEXT) {
  throw new Error("entry.txt does not match the sentence exactly");
}
if (written.length < 1 || written.length > 320) {
  throw new Error("entry.txt must be 1 to 320 characters");
}
if ((written.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry.txt must be exactly one sentence");
}
