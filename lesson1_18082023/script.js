// 1. При клике на параграф пееркаршивать его в красный цвет

// - Найти параграф в документе и присвоить его переменной
// - Повесить слушатель события на эту перeменную
// - При клике менять стиль

const par = document.querySelector('.par');
console.log(par);
par.addEventListener('click', function() {
    par.style.color = 'red';
    par.style.fontSize = '30px';
});

// 2. Прик лике на параграф пееркрашивать его в красный цвет и менять размер
// шрифта на 30px. При повторном клике возвращать все обратно.

const par2 = document.querySelector('.par2');
par2.addEventListener('click', function() {
    par2.classList.toggle('par2_styles')
});

// add() - добавить класс
// remove() - удалить класс
// toggle() - добавить класс, если его нет, или удалить его, если он есть

// 3. Создать кнопку Click и параграф. 
// При клике на кнопку у параграфа меняется цвет заднего фона 
// на зеленый и увеличивается шрифт до 25px. 
// При повторном клике на кнопку все возвращается.

const click_btn = document.querySelector('.click_btn');
const par3 = document.querySelector('.par3');
click_btn.addEventListener('click', function() {
    par3.classList.toggle('par3_styles')
});

// 4. Создать три параграфа. При клике на первый параграф у второго менять цвет 
// текста и текст заднего фона. При клике на второй параграф, 
// выводить сообщение в консоль - произошел клик на второй параграф.
// При клике на третий параграф - удалять стили у второго параграфа. 

const par4 = document.querySelector('.par4');
const par5 = document.querySelector('.par5');
const par6 = document.querySelector('.par6');
par4.addEventListener('click', function() {
    par5.classList.add('par5_styles')
});
par5.addEventListener('click', function() {
    console.log('произошел клик на второй параграф');
});
par6.addEventListener('click', function() {
    par5.classList.remove('par5_styles')
});

// 5. Создать кнопку Add paragraph и div. 
// При клике на кнопку в контейнер добавляется параграф с произвольным тесктом.

const add_par_btn = document.querySelector('.add_par_btn');
const pars_container = document.querySelector('.pars_container');
add_par_btn.addEventListener('click', function() {
    // создать элемент
    const par = document.createElement('p');

    // добавить элементу текст
    par.innerText = 'Hello!!!';

    // добавить созданный элемент в контейнер
    pars_container.append(par)
});

// 6. Создать div в html-документе. Через js добавить в этот div параграф красного цвета
// - найти элемент
const task5 = document.querySelector('.task5');
// - создать параграф
const partask5 = document.createElement('p');
// - наполнить параграф текстом
partask5.innerText = 'Guten Morgen!';
// - покрасить цвет параграфа в красный
partask5.style.color = 'red';
// - положить параграф в контейнер
task5.append(partask5);


// 7. Создать прарграф с произвольным текстом в HTML. Создать переменную с любым числом в JS. 
// Если число в переменной больше 10, 
// то покрасить цвет текста в параграфе в синий, если меньше или равно 10, то покрасить в зеленый.

// - найти параграф
const color_text = document.querySelector('.color_text');
// - создать переменную с любым числом
const num = 11;
// - прописать стили для параграфа через if else
if (num > 10) {
    color_text.style.color = 'blue';
} else {
    color_text.style.color = 'green';
};

// 8. Создать кнопку и параграф. При каждом клике на кнопку размер шрифта в параграфе увеличивается на 5px

// - найти кнопку и параграф
const incr_btn = document.querySelector('.incr_btn');
const incr_text = document.querySelector('.incr_text');
const incr_btnmin = document.querySelector('.incr_btnmin');
// - повесить на кнопку событие клик
// - при клике изменять fontSize параграфа на 5px
let size = 14;
incr_btn.addEventListener('click', function() {
    size += 5;
    incr_text.style.fontSize = size + 'px';
});

incr_btnmin.addEventListener('click', function() {
    size -= 5;
    incr_text.style.fontSize = size + 'px';
});


