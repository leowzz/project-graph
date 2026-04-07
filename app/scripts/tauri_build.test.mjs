import test from "node:test";
import assert from "node:assert/strict";

import { getSpawnOptions, shouldForceCiForDmgBuild } from "./tauri_build.js";

test("forces CI for default macOS bundle builds", () => {
  assert.equal(shouldForceCiForDmgBuild([], "darwin"), true);
});

test("forces CI when dmg is explicitly requested", () => {
  assert.equal(shouldForceCiForDmgBuild(["--bundles", "app,dmg"], "darwin"), true);
});

test("does not force CI when dmg is excluded", () => {
  assert.equal(shouldForceCiForDmgBuild(["--bundles", "app"], "darwin"), false);
});

test("does not force CI on non-macOS platforms", () => {
  assert.equal(shouldForceCiForDmgBuild([], "linux"), false);
});

test("injects CI for default macOS dmg builds", () => {
  const { env } = getSpawnOptions({ npm_execpath: "/tmp/pnpm" }, "darwin");
  assert.equal(env.CI, "true");
});

test("preserves an existing CI value", () => {
  const { env } = getSpawnOptions({ CI: "1", npm_execpath: "/tmp/pnpm" }, "darwin");
  assert.equal(env.CI, "1");
});

test("leaves CI unset for macOS app-only bundles", () => {
  const { env } = getSpawnOptions(
    { TAURI_BUILD_ARGS: "--bundles app", npm_execpath: "/tmp/pnpm" },
    "darwin",
  );
  assert.equal(env.CI, undefined);
});
