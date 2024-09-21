### Hexlet tests and linter status:
[![Actions Status](https://github.com/Rogozhnikova/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Rogozhnikova/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/e8c90e0a80421bb145e5/maintainability)](https://codeclimate.com/github/Rogozhnikova/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e8c90e0a80421bb145e5/test_coverage)](https://codeclimate.com/github/Rogozhnikova/frontend-project-46/test_coverage)

<h3>Вычислитель отличий</h3>
 <p>Это программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.<p>

<h4>Возможности утилиты:</h4>
<ul>
<li>Поддержка разных входных форматов: yaml, json</li>
<li>Генерация отчета в виде plain text, stylish и json</li>
</ul>

Для работы с проектом необходимо:

1. Склонировать репозиторий, одной из команд:
<pre>
  <code>
    >> git@github.com:Rogozhnikova/frontend-project-46.git
    >> git clone https://github.com/Rogozhnikova/frontend-project-46.git
  </code>
</pre>

2. Выполнить установку зависимостей:
<pre>
  <code>
    >> make install
  </code>
</pre>

3. Выполните глобальную установку проекта в корневой директории:
<pre>
  <code>
    >> make link
  </code>
</pre>

Команды
<ul>
<li> Вывод справочной информации по утилите:<pre>
  <code>
    >> gendiff -h
  </code>
</pre></li>
<li>Вывод различий между файлами формата JSON<pre>
  <code>
    >> gendiff file1.json file2.json
  </code>
</pre>[![asciicast](https://asciinema.org/a/pvf4Z0bUSBj8ac81F2vVQuqzo.svg)](https://asciinema.org/a/pvf4Z0bUSBj8ac81F2vVQuqzo)</li>
<li>Вывод различий между файлами формата YML<pre>
  <code>
    >> gendiff file1.yml file2.yml
  </code>
</pre>[![asciicast](https://asciinema.org/a/Sl2tYRWVSzw8P9yrwruIAVb5X.svg)](https://asciinema.org/a/Sl2tYRWVSzw8P9yrwruIAVb5X)</li>
<li>Вывод информации сравнения в формате Plain<pre>
  <code>
    >> gendiff --format plain file1.json file2.json
  </code>
</pre>[![asciicast](https://asciinema.org/a/br2khkyjHTOGoG0NANFKH6t68.svg)](https://asciinema.org/a/br2khkyjHTOGoG0NANFKH6t68)
</li>
<li>Вывод в формате json<pre>
  <code>
    >> gendiff --format json file1.json file2.json
  </code>
</pre>
[![asciicast](https://asciinema.org/a/zRDAZJ0flbzO9ILEhEoNBz83U.svg)](https://asciinema.org/a/zRDAZJ0flbzO9ILEhEoNBz83U)
</li>
</ul>

Различия между плоскими файлами формата YML
[![asciicast](https://asciinema.org/a/Sl2tYRWVSzw8P9yrwruIAVb5X.svg)](https://asciinema.org/a/Sl2tYRWVSzw8P9yrwruIAVb5X)

Различия между вложенными структурами
[![asciicast](https://asciinema.org/a/71F3a33KRraTJ3PyNmtZCzLfP.svg)](https://asciinema.org/a/71F3a33KRraTJ3PyNmtZCzLfP)

Пример работы формата Plain
[![asciicast](https://asciinema.org/a/br2khkyjHTOGoG0NANFKH6t68.svg)](https://asciinema.org/a/br2khkyjHTOGoG0NANFKH6t68)

Вывод в формате json
[![asciicast](https://asciinema.org/a/zRDAZJ0flbzO9ILEhEoNBz83U.svg)](https://asciinema.org/a/zRDAZJ0flbzO9ILEhEoNBz83U)
