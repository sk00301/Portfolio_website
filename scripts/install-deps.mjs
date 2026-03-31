import { execSync } from "child_process";

console.log("Installing framer-motion...");
execSync("pnpm add framer-motion@^12.0.0", {
  cwd: "/vercel/share/v0-project",
  stdio: "inherit",
});
console.log("Done.");
