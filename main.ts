// Angry Judge: one short rant about a small everyday annoyance.
// The anger has to feel shared, not performed, so it names the exact lie.
// Ours is the progress bar that says one minute left for twenty minutes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 400;

const line =
  "The progress bar said one minute left. Twenty minutes later it still says one minute left. It is not a progress bar, it is a liar with a job, and I have watched it lie for longer than the download was supposed to take.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
