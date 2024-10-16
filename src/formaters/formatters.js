import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (data, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return json(data);
    case 'default':
      return stylish(data);
    default: {
      throw new Error(`Unknown format: ${format}`);
    }
  }
};

export default formatter;
