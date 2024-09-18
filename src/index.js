import { readFileSync } from 'fs';
import fs from 'fs';
import path, { resolve } from 'path';
import process from 'process';
import buildTree from './buildTree.js';
import parse from './parsers.js';
import formatter from './formaters/formatters.js';

const findFile = (dir, fileName) => {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      const found = findFile(filePath, fileName);
      if (found) return found;
    } else if (file === fileName) {
      return filePath; // Возвращаем полный путь к найденному файлу
    }
  }
  return null; // Файл не найден
};

const genDiff = (fileName1, fileName2, format) => {
  const pathToFile1 = findFile(process.cwd(), fileName1);
  const pathToFile2 = findFile(process.cwd(), fileName2);

  const file1 = parse(readFileSync(pathToFile1), path.extname(fileName1));
  const file2 = parse(readFileSync(pathToFile2), path.extname(fileName2));

  return formatter(buildTree(file1, file2), format);
};

export default genDiff;