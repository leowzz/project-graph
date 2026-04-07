/* eslint-disable */
import { spawn } from "child_process";
import { pathToFileURL } from "node:url";

export function getTauriBuildArgs(env) {
  return env.TAURI_BUILD_ARGS ? env.TAURI_BUILD_ARGS.split(" ").filter(Boolean) : [];
}

export function shouldForceCiForDmgBuild(args, platform) {
  if (platform !== "darwin") {
    return false;
  }

  const bundlesFlagIndex = args.findIndex((arg) => arg === "--bundles" || arg === "-b");
  if (bundlesFlagIndex === -1) {
    return true;
  }

  const bundleTargets = args[bundlesFlagIndex + 1];
  if (!bundleTargets) {
    return true;
  }

  return bundleTargets
    .split(",")
    .map((target) => target.trim())
    .some((target) => target === "all" || target === "dmg");
}

export function getSpawnOptions(env, platform) {
  const args = ["tauri", "build", ...getTauriBuildArgs(env)];
  const nextEnv = { ...env };

  // DMG prettification uses Finder AppleScript and breaks in headless shells.
  if (!nextEnv.CI && shouldForceCiForDmgBuild(args.slice(2), platform)) {
    nextEnv.CI = "true";
  }

  return {
    args,
    env: nextEnv,
  };
}

export function runTauriBuild(env = process.env, platform = process.platform) {
  const pnpmBin = env.npm_execpath;
  const { args, env: spawnEnv } = getSpawnOptions(env, platform);

  let child;

  if (pnpmBin.endsWith("js")) {
    child = spawn("node", [pnpmBin, ...args], {
      env: spawnEnv,
      stdio: "inherit",
    });
  } else {
    child = spawn(pnpmBin, args, {
      env: spawnEnv,
      stdio: "inherit",
    });
  }

  child.on("exit", (code) => {
    process.exit(code || 0);
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runTauriBuild();
}
