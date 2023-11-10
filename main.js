const btns = document.querySelectorAll('.list1 li');
console.log(btns);

/*
DOM(Document Object Model):Web Api
:브라우저가 HTML태그를 해석해서 렌더링을 할때 자바스크립트로 하여금 제어할 수 있도록 객체 형태로 만들어주는 API(Application programing interface) ->틀임
*/

console.dir(btns[0]);
/*
btns[0].addEventListener('click', () => {
	console.log('엄청중요한 작업');
});
btns[0].addEventListener('click', () => {
	console.log('실수로 연결');
});
*/
/*
btns[0].onclick = () => {
	console.log('button1');
};
btns[0].onclick = () => {
	console.log('button2');
};*/

//반복돌면서 각 버튼 믈릭시 button1~3출력
btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button${index + 1}`);
	});
});

btns.forEach((btn, index) => {
	btns[index].addEventListener('click', () => {
		console.log(`button${index + 1}`);
	});
});
