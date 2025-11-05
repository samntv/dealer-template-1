// ============================================
// GLOBAL SITE CONFIGURATION
// This file reads from src/config.yaml
// Edit config.yaml to update your brand globally
// ============================================

import fs from "fs";
import path from "path";
import yaml from "js-yaml";

// Read and parse config.yaml
const configPath = path.join(process.cwd(), "src", "config.yaml");
const configFile = fs.readFileSync(configPath, "utf8");
const config = yaml.load(configFile) as any;

export const SITE_NAME = config.site.name;
export const SITE_URL = config.site.site;
export const SITE_DESCRIPTION = config.metadata.description;

export function getPageTitle(pageTitle?: string): string {
  if (!pageTitle) return config.metadata.title.default;
  return config.metadata.title.template.replace("%s", pageTitle);
}

export default config;
