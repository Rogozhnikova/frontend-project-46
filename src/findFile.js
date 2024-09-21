import fs from 'fs';
import path from 'path';

function findFile(searchPath, filename) {
  let results = [];

  function search(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat && stat.isDirectory()) {
        search(filePath); // Рекурсивный вызов для подкаталогов
      } else if (file === filename) {
        results.push(filePath); // Добавляем найденный файл
      }
    }
  }

  search(searchPath);

  return results[0]; // Возвращаем путь к первому найденному файлу
}

export default findFile;