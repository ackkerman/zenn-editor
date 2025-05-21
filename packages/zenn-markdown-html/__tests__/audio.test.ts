import { describe, test, expect } from 'vitest';
import { parse } from 'node-html-parser';
import markdownToHtml from '../src/index';

describe('<audio /> タグのテスト', () => {
  test('audioタグを保持する', () => {
    const html = markdownToHtml('<audio src="sound.mp3" controls></audio>');
    const audio = parse(html).querySelector('audio');
    expect(audio?.getAttribute('src')).toBe('sound.mp3');
    expect(audio?.getAttribute('controls') !== null).toBe(true);
  });
});
