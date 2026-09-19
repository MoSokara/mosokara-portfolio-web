import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const messagesDir = path.resolve(__dirname, "../messages");

const localeFiles = ["en.json", "ar.json"];

function readJson(fileName) {
  const filePath = path.join(messagesDir, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function flattenKeys(obj, basePath = "") {
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return [basePath];
  }

  return Object.entries(obj).flatMap(([key, value]) => {
    const currentPath = basePath ? `${basePath}.${key}` : key;
    return flattenKeys(value, currentPath);
  });
}

const keySets = Object.fromEntries(
  localeFiles.map((fileName) => {
    const keys = new Set(flattenKeys(readJson(fileName)));
    return [fileName, keys];
  }),
);

const [sourceFile, ...otherFiles] = localeFiles;
const sourceKeys = keySets[sourceFile];

let hasMismatch = false;

for (const targetFile of otherFiles) {
  const targetKeys = keySets[targetFile];

  const missingInTarget = [...sourceKeys].filter((key) => !targetKeys.has(key));
  const extraInTarget = [...targetKeys].filter((key) => !sourceKeys.has(key));

  if (missingInTarget.length > 0 || extraInTarget.length > 0) {
    hasMismatch = true;
    console.error(`\n❌ ${targetFile} is out of sync with ${sourceFile}`);

    if (missingInTarget.length > 0) {
      console.error(`Missing keys in ${targetFile}:`);
      missingInTarget.sort().forEach((key) => console.error(`- ${key}`));
    }

    if (extraInTarget.length > 0) {
      console.error(`Extra keys in ${targetFile}:`);
      extraInTarget.sort().forEach((key) => console.error(`- ${key}`));
    }
  }
}

if (hasMismatch) {
  process.exit(1);
}

console.log("✅ Locale message files are in sync.");
