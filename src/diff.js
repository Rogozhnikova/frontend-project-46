import _ from 'lodash';

const compare = (file1, file2) => {
  const keys = [Object.keys(file1), Object.keys(file2)].flat();

  const result = keys.reduce((acc, key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === file2[key]) {
        return [...acc, `   ${key}:${file1[key]}`];
      }
      return [
        ...acc,
        ` - ${key}:${file1[key]}`,
        ` + ${key}:${file2[key]}`,
      ];
    }

    if (_.has(file1, key)) {
      return [...acc, ` - ${key}:${file1[key]}`];
    }

    if (_.has(file2, key)) {
      return [...acc, ` + ${key}:${file2[key]}`];
    }

    return acc; // Возвращаем аккумулятор без изменений
  }, []);

  const uniqueResults = _.uniq(result);

  return uniqueResults.map((item) => item).sort((a, b) => {
    if (a[3] < b[3]) return -1;
    return 1;
  });
};

export default compare;
