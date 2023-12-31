/*
자바스크립트의 style제어
-자바스크립트는 HTML, js파일외에는 접근 권한이 없음
  - style 변경시 css파일이 변경되는 것이 아닌 HTML요소에 인라인형태로 style을 강제로 꽂아넣어서 스타일 덮어쓰기
*/

const btns = document.querySelectorAll('.list1 li');
const box = document.querySelector('.box');
console.dir(box);
btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'hotpink';
	console.dir(box);
});
//background-color이렇게 쓰면 안됨 왜냐 예약어로 알아들어서 변수 - 변수로 이렇게 마이너스로 알아들음
/*btns[1].addEventListener('click', () => {
	box.style.width = '100px';
});
*/
btns[2].addEventListener('click', () => {
	box.style.marginLeft = '300px';
});
//margin 값 padding은 %쓰지 말기 차라리 vw를 써라

//자스로 기존 스타일을 동적으로 덮어쓰는 것이 아닌 기존의 원래 있던 스타일값을 css로 가져오는 것은 불가능(JS는 css접근 불가)
//자바스크립트 역으로 화면에 출력되고 있는 결과물을 다시 수치적으로 재계산해서 가져옴
btns[1].addEventListener('click', () => {
	console.log(getComputedStyle(box).width);
	console.log(getComputedStyle(box).backgroundColor);
});
