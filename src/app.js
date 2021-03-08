import * as $ from 'jquery';
import Todo from './js/todo';
import './style/css/main.css';

let todo = new Todo();

const myLev = {'lev': true};
const myLev1 = {'gus': true};
const myLev2 = {'beer': true};


Object.setPrototypeOf(myLev, myLev1);

/*Тест*/
function assert(value, desc) {
    let li = document.createElement("li");
    li.className = value ? "pass " : " fail ";
    li.appendChild(document.createTextNode(desc));
    document.getElementByid("results").appendChild(li);
}

window.onload = function () {
    assert(true, " The test suite is running . ");
    assert(false, " Fail 1 ");
}


