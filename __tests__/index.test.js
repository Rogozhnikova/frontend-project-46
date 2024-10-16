import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const getFixtureFile = (filename) => path.join(__dirname, '../__fixtures__', filename);

const readFile = (filename) => readFileSync(getFixtureFile(filename), 'utf-8');

const file1JSON = getFixtureFile('file3.json');
const file2JSON = getFixtureFile('file4.json');

const file1YML = getFixtureFile('file3.yml');
const file2YML = getFixtureFile('file4.yml');

describe('test sylish', () => {
  const testCases = [
    {
      file1: file1JSON, file2: file2JSON, format: 'default', expected: readFile('stylish.txt'),
    },
    {
      file1: file1YML, file2: file2YML, format: 'default', expected: readFile('stylish.txt'),
    },
    {
      file1: file1JSON, file2: file2JSON, format: 'stylish', expected: readFile('stylish.txt'),
    },
    {
      file1: file1YML, file2: file2YML, format: 'stylish', expected: readFile('stylish.txt'),
    },
    {
      file1: file1JSON, file2: file2JSON, format: 'plain', expected: readFile('plain.txt'),
    },
    {
      file1: file1YML, file2: file2YML, format: 'plain', expected: readFile('plain.txt'),
    },
    {
      file1: file1JSON, file2: file2JSON, format: 'json', expected: readFile('json.txt'),
    },
    {
      file1: file1YML, file2: file2YML, format: 'json', expected: readFile('json.txt'),
    },
  ];

  test.each(testCases)('should generate diff for $file1 and $file2 in $format format', ({
    file1, file2, format, expected,
  }) => {
    expect(genDiff(file1, file2, format)).toBe(expected);
  });

  test('non-existent files', () => {
    expect(() => genDiff('nonexistent1.json', 'nonexistent2.json')).toThrow();
  });

  test('unsupported file format', () => {
    expect(() => genDiff('file3.txt', 'file4.txt')).toThrow();
  });
});
