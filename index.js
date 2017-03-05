#! /usr/bin/env node

const markdownpdf = require('markdown-pdf');
const hljs = require('highlight.js');
const classy = require('remarkable-classy');
const path = require('path');
const fs = require('fs');

// setup default PDF options
const pdfOptions = {
  cssPath: path.join(__dirname, 'main.css'),
  paperBorder: '2cm',
  runningsPath: path.join(__dirname, 'runnings.js'),
  remarkable: {
    html: true,
    breaks: true,
    plugins: [classy],
    syntax: ['footnote', 'sup', 'sub'],

    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) {}
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ''; // use external default escaping
    }

  }
};

// create a default config and read overrides from consumers package.json
const contents = fs.readFileSync(path.join(process.cwd(), 'package.json'));
const package = JSON.parse(contents.toString('utf8'));

const defaultConfig = {
  file_in: 'input.md',
  file_out: 'output.pdf'
};

const config = Object.assign(defaultConfig, package.coderdojo_workshop_options);

// convert markdown to pdf
markdownpdf(pdfOptions)
  .from(config.file_in)
  .to(config.file_out);
