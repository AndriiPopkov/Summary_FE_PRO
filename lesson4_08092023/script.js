// console.log('4585');


// function doubleTwo(){
//     return 2+2
// }

// function doubleThree(){
//     return 2*3
// }

// function doubleFour(){
//     return 2*4
// }

// function doublenum(num){
//     return 2*num
// }
// console.log(doublenum(5));

// const numbers = arr => {
//     const newarr = []
//     for(let i = 0; i < arr.length; i++){
//         newarr.push(arr[i]*2)
//     }
//     return newarr
// }


const users = [
    {
      id: 1,
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 30,
      score: 44.52
    },
    {
      id: 2,
      first_name: 'Kirill',
      last_name: 'Shmanov',
      age: 13,
      score: 144.33
    },
    {
      id: 3,
      first_name: 'Petr',
      last_name: 'Ivanov',
      age: 54,
      score: 10.08
    },
    {
      id: 4,
      first_name: 'Irina',
      last_name: 'Sokolova',
      age: 29,
      score: 78.94
    },
    {
      id: 5,
      first_name: 'Boris',
      last_name: 'Pechkin',
      age: 24,
      score: 18.25
    }
  ]

//  // 1. Вывести в консоль первого и последнего пользователей в списке
//  console.log(users[0], users[users.length-1]);

//  // 2. Вывести в консоль имена первого и последнего пользователя в списке
//  console.log(users[0].first_name);
//  console.log(users[users.length-1].first_name);

// 3. Вывести в консоль каждый эелемент массива
// const users3 = arr => {
//         for(let i = 0; i < arr.length; i++){
//             console.log(arr[i]);
//         }
//     }
// users3(users)

// users.map(el => console.log(el))

// users.forEach(el => console.log(el))

// 4. Вывести в консоль для каждого пользователя сообщение в формате: Имя Фамилия: возраст
// users.forEach(el => console.log('Имя Фамилия: '+el.first_name + ' '+el.last_name +', возраст: '+el.age))
// users.forEach(el => console.log(`${el.first_name} ${el.last_name}: ${el.age}`))

// 5. Получить из каждого объекта имя и фамилию пользователя и сформировать из этих имен новый массив
// const users5 = users.map(el => `${el.first_name} ${el.last_name}`)
// console.log(users5);

// users.map(el => console.log(`${el.first_name} ${el.last_name}`))

// 6. Получить из массива пользователя с именем Kirill и записать его в отдельную переменную. Вывести переменную в консоль

// const user_kirill = users.find(el => el.first_name === 'Kirill'); // возвращает ЭЛЕМЕНТ, подощедщий по условию
// const user_kirill1 = users.filter(el => el.first_name === 'Kirill'); // возвращает МАССИВ ЭЛЕМЕНТОВ, подощедщих по условию

// console.log(user_kirill);
// console.log(user_kirill1);

// 7. Получить из массива пользователя с именем Kirill и записать его имя в отдельную переменную. Вывести переменную в консоль
// const name_kirill = users.find(el => el.first_name === 'Kirill').first_name;
// console.log(name_kirill);

// const users8 = users.filter(el => el.age >= 18)
// console.log(users8);

// 9. Сформировать новый массив строк, куда попадет информация о совершеннолетних пользователях в формате Имя Фамилия: возраст
// => ['Olga Petrova: 30', 'Petr Ivanov: 54', 'Irina Sokolova: 29', 'Boris Pechkin: 24']

// const users9 = users
//                     .filter(el => el.age >= 18)
//                     .map(el => `${el.first_name} ${el.last_name}: ${el.age}`)
// console.log(users9);

const arr = [1, 2, 3, 4, 5, 6]
const function1 = (arr, calfunc) => {
  const narr = [];
  for (let i = 0; i < arr.length; i++) {
    narr.push(calfunc(arr[i]))
  }
  return narr
}
const formula = num => num * 5
console.log(function1(arr, formula));