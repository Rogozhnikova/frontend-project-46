import fs from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('genDiff', () => { 
  const file1PathJson = path.join(__dirname, '../__fixtures__', 'file3.json'); 
  const file2PathJson = path.join(__dirname, '../__fixtures__', 'file4.json'); 
  const expectedDiffJson = fs.readFileSync(path.resolve(__dirname, '../__fixtures__', 'stylish.txt'), 'utf-8');

  const file3PathJson = path.join(__dirname, '../__fixtures__', 'file3.json'); 
  const file4PathJson = path.join(__dirname, '../__fixtures__', 'file4.json'); 
  const expectedDiffJsons = fs.readFileSync(path.resolve(__dirname, '../__fixtures__', 'json.txt'), 'utf-8');

  const file1PathYaml = path.resolve(__dirname, '../__fixtures__', 'file3.yml'); 
  const file2PathYaml = path.resolve(__dirname, '../__fixtures__', 'file4.yml'); 
  const expectedDiffYaml = fs.readFileSync(path.resolve(__dirname, '../__fixtures__', 'stylish.txt'), 'utf-8'); 

  test('should return correct difference for JSON files', () => { 
    const result = genDiff(file1PathJson, file2PathJson, 'json'); 
    expect(result).toBe(expectedDiffJson); 
  }); 
 
  test('should return correct difference for YAML files', () => { 
    const result = genDiff(file1PathYaml, file2PathYaml, 'yml'); 
    expect(result).toBe(expectedDiffYaml); 
  });

  test('should return correct difference for plain-JSON files', () => {
    
  })

  test('should throw an error if one of the files does not exist', () => {
    expect(() => genDiff('nonexistent1.json', file2PathJson, 'json')).toThrow();
    expect(() => genDiff(file1PathJson, 'nonexistent2.json', 'json')).toThrow();
  });

  test('should throw an error for unsupported format', () => {
    expect(() => genDiff(file1PathJson, file2PathJson, 'unsupported')).toThrow();
  });
});