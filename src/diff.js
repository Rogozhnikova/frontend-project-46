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

  const sortedResults = [];
  uniqueResults.forEach((item) => {
    // Здесь вы можете определить, как вы хотите отсортировать
    // Например, добавим в отсортированный массив в зависимости от первого символа
    const index = sortedResults.findIndex((sortedItem) => sortedItem[3] > item[3]);
    if (index === -1) {
      sortedResults.push(item); // Добавляем в конец, если не нашли
    } else {
      sortedResults.splice(index, 0, item); // Вставляем в нужное место
    }
  });

  return sortedResults;
};

export default compare;
