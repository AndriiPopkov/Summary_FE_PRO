// Простые методы массивов
// push()
// pop()
// shift()
// unshift()

// Методы массивов, принимающие функцию в качестве аргументов

// forEach(() => {}) - метод массива, принимает в качестве аргумента функцию и выполняющий указанную функцию один раз для 
// КАЖДОГО элемента массива.
// Ничего не возвращает (undefinden). return в многострочной функции не нужен

// map() - метод массива, принимает в качестве аргумента функцию и выполняющий указанную функцию один раз для КАЖДОГО элемента массива.
// Возвращает новый массив

// filter()

// find()

// sort()

// callback - функция переданная в другую функцию в качестве аргумента
// функция высшего порядка (Higher-order function) - функция, которая принимает другую функцию в качестве аргумента

// ПРАКТИКА
// 1. Дан массив с числами. Создать новый массив с числами из массива, в который попадут все числа из массива numbers умноженные на 2.
// 1.1 СПОСОБ
const numbers = [2,6,17,32,9,1];
const numbers_2 =[];
numbers.forEach(item => 
    numbers_2.push(item*2));
console.log(numbers_2);

// 1.2 СПОСОБ
const numbers_3 = [];
for (let i = 0; i < numbers.length; i++) {
    numbers_3.push(numbers[i] * 2);
}
console.log(numbers_3);

// 1.3 СПОСОБ
const numbers_4 = numbers.map(el => el * 2);
console.log(numbers_4);

// 2. Создать новый массив, в который попадут все числа из массива numbers увеличенные на 10
// 2.1 СПОСОБ
const numbers_101 = [];
for (let i = 0; i < numbers.length; i++) {
    numbers_101.push(numbers[i] + 10);
}
console.log(numbers_101);

// 2.2 СПОСОБ
const numbers_102 = [];
numbers.forEach(item =>
    numbers_102.push(item + 10));
console.log(numbers_102);

// 2.3 СПОСОБ
const numbers_103 = numbers.map(el => el + 10);
console.log(numbers_103);

// 3. Создать новый массив. Если число из массива numbers >= 10, то умножить его на 3. Если < 10, то оставить без изменений.
// 3.1 СПОСОБ
const numbers_301 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        numbers_301.push(numbers[i] * 3);
    }
    else {
        numbers_301.push(numbers[i]);
    }
};
console.log(numbers);
console.log(numbers_301);

// 3.2 СПОСОБ
const numbers_302 = [];
numbers.forEach(item => item >= 10 ? numbers_302.push(item*3) : numbers_302.push(item));
console.log(numbers_302);
 
// 3.3 СПОСОБ
const numbers_303 = numbers.map(el => el >= 10 ? el * 3 : el);  
console.log(numbers_303);

// 4. Дан массив со строками. Создать массив. Если длина имени >= 5, то подставить вместо этого имени слово 'hello'.
// Если < 5 - то подставить 'hi'.
// 4.1 СПОСОБ
const names = ['Mark', 'Anna', 'David', 'Boris', 'Irina', 'Olga', 'Ekaterina'];
const names_2 = [];
names.forEach(el => el.length >= 5 ? names_2.push('hello') : names_2.push('hi'));
console.log(names_2);

// 4.2 СПОСОБ
const names_3 = names.map(el => el.length >= 5 ? 'hello' : 'hi');
console.log(names_3);

// 5. Дан массив с разными типами данных. Создать новый массив, в котором все числовые значение из массива будут заменены
// на строку 'number'.
const array = ['hello', 5, true, 78, 'hi', undefined, 1];
const array_2 = array.map(el => typeof(el) === 'number' ? 'number' : el);
console.log(array_2);

const array_3 = [];
array.forEach(el => typeof(el) === 'number' ? array_3.push('number') : array_3.push(el));
console.log(array_3);

// 6. Дан массив с разными типами данных. Создать новый массив. Все числа умножить на 2, 
// все строки заменить на 'good morning', остальное без изменений.
const array_4 = array.map(el => {
    if (typeof (el) === 'number') {
        return el * 2;
    } else if (typeof (el) === 'string') {
        return 'good morning';
    } return el;
});
console.log(array_4);
