import fs from 'fs';
import path from 'path';

function findFile(searchPath, filename) {
    const results = [];
    function search(dir) {
      const files = fs.readdirSync(dir);
  
      files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
  
        if (stat && stat.isDirectory()) {
          search(filePath);
        } else if (file === filename) {
          results.push(filePath);
        }
      });
    }
  
    search(searchPath);
  
    return results[0];
  }
  
  export default findFile;