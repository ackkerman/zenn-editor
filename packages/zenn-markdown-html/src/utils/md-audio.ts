import MarkdownIt from 'markdown-it';

// Detect plain <audio> tags when HTML parsing is disabled
const AUDIO_RE = /^<audio[\s\S]*?>.*?<\/audio>$|^<audio[\s\S]*?\/>$/i;

export function mdAudio(md: MarkdownIt): void {
  md.core.ruler.after('inline', 'md-audio', (state) => {
    for (const token of state.tokens) {
      if (token.type !== 'inline' || !token.children) continue;
      for (const child of token.children) {
        if (child.type === 'text' && AUDIO_RE.test(child.content.trim())) {
          child.type = 'html_inline';
          child.tag = '';
        }
      }
    }
  });
}
