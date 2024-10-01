import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const getFixtureFile = (filename) => path.join(__dirname, '../__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixtureFile(filename), 'utf-8');

describe('test sylish', () => {
  test('default', () => {
    expect(genDiff('file3.json', 'file4.json')).toBe(readFile('stylish.txt'));
    expect(genDiff('file3.yml', 'file4.yml')).toBe(readFile('stylish.txt'));
  });
  test('stylish', () => {
    expect(genDiff('file3.json', 'file4.json', 'stylish')).toBe(readFile('stylish.txt'));
    expect(genDiff('file3.yml', 'file4.yml', 'stylish')).toBe(readFile('stylish.txt'));
  });
  test('plain', () => {
    expect(genDiff('file3.json', 'file4.json', 'plain')).toBe(readFile('plain.txt'));
    expect(genDiff('file3.yml', 'file4.yml', 'plain')).toBe(readFile('plain.txt'));
  });
  test('json', () => {
    expect(genDiff('file3.json', 'file4.json', 'json')).toBe(readFile('json.txt'));
  });
});