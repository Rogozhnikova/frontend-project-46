import yaml from 'js-yaml';

const parse = (data, format = 'stylish') => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};

export default parse;
