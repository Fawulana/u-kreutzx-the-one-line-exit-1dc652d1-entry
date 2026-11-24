// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

// The entry is a single line with no trailing newline: the gate requires
// exactly one line of 1–140 characters, so the file holds the line alone.
const LINE =
  "I resign as a professional mourner: I have wept at 400 strangers' funerals, and not one of them ever wept at mine — not even the buffet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
