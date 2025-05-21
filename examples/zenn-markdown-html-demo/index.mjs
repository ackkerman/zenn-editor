import fs from 'fs';
import markdownModule from '../../packages/zenn-markdown-html/lib/index.js';

const markdownToHtml = markdownModule.default;

const md = fs.readFileSync('./sample.md', 'utf-8');
const html = markdownToHtml(md);
fs.writeFileSync('./index.html', html);
console.log('generated index.html');
