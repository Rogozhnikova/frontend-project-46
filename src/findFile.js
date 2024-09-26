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
        search(filePath);
      } else if (file === filename) {
        results.push(filePath);
      }
    }
  }

  search(searchPath);

  return results[0];
}

export default findFile;