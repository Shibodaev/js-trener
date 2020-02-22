'use strict'
// В задаче Анимированный круг находится код для анимации появления круга.

// Давайте представим, что теперь нам нужен не просто круг, 
// а круг с сообщением внутри. И сообщение должно появляться после анимации
//  (когда круг достигнет своих размеров), иначе это будет некрасиво.

// В том решении функция showCircle(cx, cy, radius) рисовала круг, но способа 
// узнать, что всё нарисовано, не было.

// Поэтому добавим в параметры колбэк: showCircle(cx, cy, radius, callback), 
// который выполним, когда анимация будет завершена. Функция callback будет
//  добавлять в наш круг <div> элемент с сообщением.

// Посмотрите пример:
// Напишите функцию showCircle(cx, cy, radius), которая будет 
// рисовать постепенно растущий круг.
// cx,cy – координаты центра круга относительно окна браузера,
// radius – радиус круга.
// Нажмите на кнопку ниже, чтобы увидеть как это должно выглядеть:
 let w = window.innerWidth;
 let h = window.innerHeight;

let showCircle = (cx, cy, radius) => {
    let container = document.querySelector('.container');
    let circle = document.createElement('div');
    circle.style.top = `${h / 2}px` ;
    circle.style.left = `${w / 2}px` ;
    circle.style.width = 0;
    circle.style.height = 0;
    circle.style.borderRadius = `${radius}%`;

    circle.setAttribute("class","circle");
    container.append(circle);
    setTimeout(() => {
        circle.style.width = `${cx}px`;
        circle.style.height = `${cy}px`;
    }, 1);
}

var button = document.querySelector('button');
button.onclick = function(){
    return  showCircle(150,150,100);
}
// showCircle(150,150,100 );

// let loadScriptJs = (src, callback) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
// }
// loadScriptJs("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js", script =>  {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert( _ );
// });