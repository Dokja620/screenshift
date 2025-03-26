#!/usr/bin/env bun
// bin/generate.ts
// Copies the default _screenshift-responsive.scss file for user customization.

import path from "node:path";
import fs from "node:fs/promises"; // Using promises-based fs
import readline from "node:readline/promises"; // For user prompt

// --- Configuration ---
const SOURCE_FILE_NAME = "_screenshift-responsive.scss";
// Important: Find the source file relative to *this script's location* within node_modules
// When installed, this script will be in node_modules/screenshift/bin/generate.ts
// So, the source SCSS will be one level up in src/scss/
const sourceFilePath = path.join(
  __dirname,
  "..",
  "src",
  "scss",
  SOURCE_FILE_NAME
);

// --- Helper Functions ---
async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function parseArgs(): { targetDir: string; force: boolean } {
  // Very basic argument parsing:
  // Looks for --dir=<path> and --force
  const args = process.argv.slice(2); // Remove 'bun' and script path
  let targetDir = path.join(process.cwd(), "src", "scss"); // Default target directory
  let force = false;

  for (const arg of args) {
    if (arg.startsWith("--dir=")) {
      // Use path.resolve to handle relative paths correctly from CWD
      targetDir = path.resolve(process.cwd(), arg.substring(6));
    } else if (arg === "--force" || arg === "-f") {
      force = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log(`Screenshift Generator Usage:
  bunx screenshift generate [--dir=<target-directory>] [--force | -f]

Options:
  --dir=<path>  Specify the target directory (default: ./src/scss)
  --force, -f   Overwrite the file if it already exists without prompting
  --help, -h    Show this help message`);
      process.exit(0); // Exit after showing help
    }
  }
  return { targetDir, force };
}

// --- Main Execution ---
async function main() {
  console.log("🚀 Initializing Screenshift config generator...");

  const { targetDir, force } = parseArgs();
  const targetFilePath = path.join(targetDir, SOURCE_FILE_NAME);

  console.log(`Source file: ${sourceFilePath}`);
  console.log(`Target path: ${targetFilePath}`);

  try {
    // 1. Check if source file exists (sanity check)
    if (!(await fileExists(sourceFilePath))) {
      console.error(
        `❌ Error: Source file not found at ${sourceFilePath}. Installation might be corrupted.`
      );
      process.exit(1); // Exit with error code
    }

    // 2. Ensure target directory exists
    try {
      await fs.mkdir(targetDir, { recursive: true });
      console.log(`📂 Ensured target directory exists: ${targetDir}`);
    } catch (err) {
      console.error(
        `❌ Error creating target directory ${targetDir}:`,
        err.message
      );
      process.exit(1);
    }

    // 3. Check if target file exists and handle overwrite
    const targetExists = await fileExists(targetFilePath);

    if (targetExists && !force) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      const answer = await rl.question(
        `❓ Target file ${targetFilePath} already exists. Overwrite? (y/N) `
      );
      rl.close(); // Close the readline interface

      if (answer.toLowerCase() !== "y" && answer.toLowerCase() !== "yes") {
        console.log("🚫 Operation cancelled by user. No file was written.");
        process.exit(0); // Exit gracefully
      }
      console.log("Overwriting existing file as requested...");
    } else if (targetExists && force) {
      console.log("Target file exists, overwriting due to --force flag.");
    }

    // 4. Copy the file
    await fs.copyFile(sourceFilePath, targetFilePath);
    console.log(
      `✅ Successfully copied ${SOURCE_FILE_NAME} to ${targetFilePath}`
    );
    console.log("   You can now edit this file to customize breakpoints.");
    console.log(
      "   Remember to update your SCSS imports to point to your local version if you modify it!"
    );
  } catch (error) {
    console.error(`❌ An unexpected error occurred:`, error.message);
    process.exit(1);
  }
}

main();
