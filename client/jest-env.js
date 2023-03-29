const { JSDOM } = require("jsdom");
const { readFileSync } = require("fs");
const { join } = require("path");

const nextConfig = require("./next.config.js");

const distDir = join(__dirname, nextConfig.distDir);

const appDocument = readFileSync(join(distDir, "_document.js")).toString();
const appComponent = readFileSync(join(distDir, "_app.js")).toString();

const dom = new JSDOM("<!DOCTYPE html>");
const window = dom.window;
const document = window.document;

// Set up the necessary
