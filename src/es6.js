"use strict";


// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия

function fioToName(fio) {
    const [lastName, firstName, middleName] = fio.split(' ');

  // Проверяем, есть ли отчество
  if (middleName) {
    return `${firstName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`.trim(); // исправление: добавлен trim()
  }
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {return Array.from(new Set(array));}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    // Проверяем, что массив не пуст
  if (array.length === 0) {
    return false;
  }

  // Находим максимальное и минимальное значение в массиве
  const maxSalary = Math.max(...array);
  const minSalary = Math.min(...array);

  // Вычисляем разницу между максимальной и минимальной зарплатой
  const difference = maxSalary / minSalary;

  return difference;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.wordsMap = new Map();
      }
    
      // Добавление слова в словарь
      addWord(key, value) {
        // Проверка на null и undefined
        if (key != null && value != null) {
          // Проверка, что ключ и значение являются строками
          if (typeof key === 'string' && typeof value === 'string') {
            this.wordsMap.set(key, value);
          } else {
            throw new Error('Ключ и значение должны быть строками');
          }
        } else {
          throw new Error('Ключ и значение не могут быть null или undefined');
        }
      }
    
      // Получение значения по ключу
      getWord(key) {
        return this.wordsMap.get(key);
      }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};


