// 1. Дан массив с разными типами данных. Написать функцию, 
// которая возвращает количество элементов в массиве с числовым типом данных. Если в массиве встречается NaN, то не увеличивать на единицу

const array = ['hello', 2, 9, NaN, undefined, 'hi', 88, true, 51, NaN]; // 4
const getSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum++;
        }
    }
    return sum
}
console.log('Задача 1:');
console.log(getSum(array));

// forEach()
const getSum1 = arr => {
    let sum = 0;
    arr.forEach(el => typeof el === 'number' && !isNaN(el) ? sum++ : '')
    return sum
  }
console.log(getSum1(array));

// filter()
const getSum2 = arr => arr.filter(el => typeof el === 'number' && !isNaN(el)).length;
console.log(getSum2(array));

// -----------------------------
const getSum3 = arr => {
  const arr_filtered = arr.filter(el => typeof el === 'number' && !isNaN(el))
  return arr_filtered.length
}
console.log(getSum3(array));
console.log('Задача 2:');

// 2. Написать функцию, которая принимает значение. Если значение число, 
// то функция возвращает это число умноженное на 15. Если значение любой другой тип данных, то возвращается 'Error'

const multNum = value => typeof value === 'number' ? value * 15 : 'Error';
console.log(multNum(true));

const returning = type => typeof type == 'number' ? type * 15 : 'Error'
console.log(returning(15));
console.log('Задача 3:');

// 3. Написать функцию, которая принимает массив и возвращает новый массив, в который попадают только положительные числа из исходного массива

const numbers = [4, -10, -7, 54, 1, -9, 45];

const getPositiv = arr => arr.filter(el => el > 0)
console.log(getPositiv(numbers));
console.log('Задача 4:');

// 4. Написать функцию, которая принимает массив с числами и возвращает новый массив только с четными числами
// [1, 4, 7, 2, 53, 64] => [4, 2, 64]

const numbers4 = [1, 4, 7, 2, 53, 64];
const newnumbers4 = arr => arr.filter(el => el % 2 === 0);
console.log(newnumbers4(numbers4));
console.log('\n');
console.log('Задача 5:');

// 5. Написать функцию, которая принимает массив с числами и возвращает массив с двумя значениями - суммой всех четных чисел и суммой всех нечетных чисел
// [1, 4, 7, 2, 53, 64] => [70, 61]
// [1, 2, 3, 4, 5] => [6, 9]

const numbers5 = [1, 4, 7, 2, 53, 64];
const getSumArray = arr => {
    sum1 = 0;
    sum2 = 0;
    arr.forEach(el => el % 2 === 0 ? sum2 += el : sum1 += el)
    return [sum2, sum1]
};
console.log(getSumArray(numbers5));
console.log(getSumArray([1, 2, 3, 4, 5]));


const getSumArray1 = arr => {
    const even_sum = arr.filter(el => el % 2 === 0).reduce((a, b) => a + b, 0);
    const odds_sum = arr.filter(el => el % 2 !== 0).reduce((a, b) => a + b, 0);
    return [even_sum, odds_sum]
}
console.log(getSumArray1(numbers5));
console.log(getSumArray1([1, 2, 3, 4, 5]));
console.log('\n');
console.log('Задача 6:');

// 6. Написать функцию, которая принимает массив с разными типами данных. Функция возаращает новый массив без строк. А числовые значения умножены на 2.
// ['hello', 2, 9, undefined, 'hi', 88, true, 51] => [4, 18, undefined, 196, true, 102]

const dif = ['hello', 2, 9, undefined, 'hi', 88, true, 51];
const diferent = arr => arr.filter(el => typeof el === 'number').map(el => typeof el === 'number' ? el * 2 : el);
console.log(diferent(dif));







