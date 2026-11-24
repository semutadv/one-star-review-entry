// One-Star Review of Something Essential — make.fun program/v1 entry.
// On run, this program writes the review line to <output>/entry.txt.
// The review is 128 characters, inside the contest gate of 1 to 160.
// The output directory is a mount point in the grading sandbox, so the
// program clears the directory's contents but never removes the
// directory itself (removing a mount point throws EBUSY).

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "One star for gravity: works every time, no off switch, dropped my phone, my coffee and my dignity. Would fall again — no choice.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
