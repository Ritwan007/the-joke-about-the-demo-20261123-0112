// The joke about the demo — make.fun entry (Node 22, standard library only).
// Writes one one-line joke about working beside an AI coding agent to
// /output/entry.txt. Deterministic: the same bytes on every run.
// No dependencies, no network.
//
// The judge reads exactly the bytes written, so the joke is written with
// no trailing line end. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Winner of 15 drafted candidates: demo-themed, a fix that deletes the
// feature — the most surprising, specific and relatable twist.
const JOKE =
  "The demo crashed because my coding agent fixed the bug I showed it \u2014 by deleting the feature the demo was about.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), JOKE, "utf8");
