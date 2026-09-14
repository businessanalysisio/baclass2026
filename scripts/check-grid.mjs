#!/usr/bin/env node
/**
 * Grid validator for block-character mascots.
 * Every ["glyphs", "mask"] pair in a mascot HTML file must be the same
 * length (so columns line up) and every glyph must be a Block Element,
 * a space, or a mask letter. Run this before rendering.
 *
 *   node scripts/check-grid.mjs mascots/sol.html
 */
import { readFileSync } from "node:fs";

const file = process.argv[2];
if (!file) { console.error("usage: node scripts/check-grid.mjs <mascot.html>"); process.exit(1); }
const src = readFileSync(file, "utf8");

// Block Elements U+2580-U+259F, plus space.
const BLOCK = /^[▀-▟ ]+$/u;
const PAIR = /\["([^"]*)",\s*"([^"]*)"\]/gu;

let rows = 0, width = null, bad = 0;
for (const [, glyphs, mask] of src.matchAll(PAIR)) {
  rows++;
  if ([...glyphs].length !== [...mask].length) {
    console.error(`✗ length mismatch (${[...glyphs].length} vs ${[...mask].length}): "${glyphs}" / "${mask}"`);
    bad++;
    continue;
  }
  if (width === null) width = [...glyphs].length;
  else if ([...glyphs].length !== width) {
    console.error(`✗ width ${[...glyphs].length}, expected ${width}: "${glyphs}"`);
    bad++;
  }
  if (!BLOCK.test(glyphs)) {
    console.error(`✗ non-block glyph in: "${glyphs}"`);
    bad++;
  }
}

if (!rows) { console.error("✗ no [glyphs, mask] rows found"); process.exit(1); }
console.log(bad ? `✗ ${bad} problem(s) in ${rows} rows` : `✓ ${rows} rows, ${width} columns, Block Elements only`);
process.exit(bad ? 1 : 0);
