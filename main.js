/*let txt = 'hello';
console.log(txt);
const h1 = document.querySelector('h1');
console.log(h1);
*/
const section = document.querySelector('section');
const aricles = section.querySelectorAll('article'); //유사배열
const btn = section.querySelector('.btn');
const childrenEl = section.children;
const parentEl = btn.parentElement.parentElement;
const grandParentEl = btn.closest('section');
const prevEl = btn.previousElementSibling;
const nextEl = btn.nextElementSibling;
const siblings = btn.parentElement.children;
//위와 비슷하게 찾는 법(btn형제 다 찾기)const siblings = btn.parentElement.querySelectorAll('li');

console.log(nextEl);
