import MarkdownIt from 'markdown-it';

function decodeEntities(str: string): string {
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
}

/**
 * Convert escaped <audio> tags back to real HTML elements.
 */
export function unescapeAudioTag(html: string): string {
  return html
    .replace(/&lt;(audio\b.*?)&gt;/g, (_, tag) => `<${decodeEntities(tag)}>`)
    .replace(/&lt;\/audio&gt;/g, '</audio>');
}

/**
 * Markdown-it plugin that restores <audio> tags when HTML parsing is disabled.
 */
export function mdAudio(md: MarkdownIt): void {
  const originalRender = md.render.bind(md);
  md.render = (...args) => {
    const html = originalRender(...args);
    return unescapeAudioTag(html);
  };
}
