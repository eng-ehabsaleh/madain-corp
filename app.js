'use strict';

let user;

let compiter;

const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')
const six = document.getElementById('6')
const seven = document.getElementById('7')
const eight = document.getElementById('8')
const nine = document.getElementById('9')

let gameArr = []

one.addEventListener('click',handleUserClick)
two.addEventListener('click',handleUserClick)
three.addEventListener('click',handleUserClick)
four.addEventListener('click',handleUserClick)
five.addEventListener('click',handleUserClick)
six.addEventListener('click',handleUserClick)
seven.addEventListener('click',handleUserClick)
eight.addEventListener('click',handleUserClick)
nine.addEventListener('click',handleUserClick)

let arr = [];

function handleUserClick(e){
	
		if(e.target.id == '1'){
			one.textContent='X';
			arr.push(1);
			gameArr.push(1)
		}
		if(e.target.id == '2'){
			two.textContent='X';
			arr.push(2);
			gameArr.push(2)
		}
		if(e.target.id == '3'){
			three.textContent = "X";
			arr.push(3);
			gameArr.push(3)
		}
		if(e.target.id == '4'){
			four.textContent = "X";
			arr.push(4);
			gameArr.push(4)
		}
		if(e.target.id == '5'){
			five.textContent = "X";
			arr.push(5);
			gameArr.push(5)
		}
		if(e.target.id == '6'){
			six.textContent ="X";
			arr.push(6);
			gameArr.push(6)
		}
		if(e.target.id == '7'){
			seven.textContent = "X";
			arr.push(7);
			gameArr.push(7)
		}
		if(e.target.id == '8'){
			eight.textContent = "X";
			arr.push(8);
			gameArr.push(8)
		}
		if(e.target.id == '9'){
			nine.textContent = "X";
			arr.push(9);
			gameArr.push(9)
		}
		
	
		computer()
}

function randomNumber(){
	return Math.ceil(Math.random() * 9);
}


function computer(){
	let oPlayer = randomNumber();

	while(arr.includes(oPlayer)){
		oPlayer = randomNumber();
	}

	if(oPlayer == 1){
		one.textContent="O";
		arr.push(1);
		gameArr.push(11)
	}
	if(oPlayer == 2){
		two.textContent="O";
		arr.push(2)
		gameArr.push(12)
	}
	if(oPlayer == 3){
		three.textContent = "O";
		arr.push(3);
		gameArr.push(13);
	}
	if(oPlayer == 4){
		four.textContent = "O";
		arr.push(4);
		gameArr.push(14);
	}
	if(oPlayer == 5){
		five.textContent = "O";
		arr.push(5);
		gameArr.push(15)
	}
	if(oPlayer == 6){
		six.textContent ="O";
		arr.push(6)
		gameArr.push(16)
	}
	if(oPlayer == 7){
		seven.textContent = "O";
		arr.push(7);
		gameArr.push(17)
	}
	if(oPlayer == 8){
		eight.textContent = "O";
		arr.push(8);
		gameArr.push(18)
	}
	if(oPlayer == 9){
		nine.textContent = "O";
		arr.push(9);
		gameArr.push(19)
	}

	if(gameArr.includes(1)&&gameArr.includes(2)&&gameArr.includes(3) || gameArr.includes(1)&&gameArr.includes(5)&&gameArr.includes(9) || gameArr.includes(7)&&gameArr.includes(8)&&gameArr.includes(9) ||gameArr.includes(4)&&gameArr.includes(5)&&gameArr.includes(6) ||gameArr.includes(3)&&gameArr.includes(5)&&gameArr.includes(7) ||gameArr.includes(1)&&gameArr.includes(4)&&gameArr.includes(7)||gameArr.includes(2)&&gameArr.includes(5)&&gameArr.includes(8)||gameArr.includes(3)&&gameArr.includes(6)&&gameArr.includes(9)){
		alert('you won');
		// window.location.reload();
	}

	else if(gameArr.includes(11)&&gameArr.includes(12)&&gameArr.includes(13) || gameArr.includes(11)&&gameArr.includes(15)&&gameArr.includes(19) || gameArr.includes(17)&&gameArr.includes(18)&&gameArr.includes(19) ||gameArr.includes(14)&&gameArr.includes(15)&&gameArr.includes(16) ||gameArr.includes(13)&&gameArr.includes(15)&&gameArr.includes(17) ||gameArr.includes(11)&&gameArr.includes(14)&&gameArr.includes(17)||gameArr.includes(12)&&gameArr.includes(15)&&gameArr.includes(18)||gameArr.includes(13)&&gameArr.includes(16)&&gameArr.includes(19)){
		alert('you lost');
		// window.location.reload();
	}
	else if(gameArr.length == 8){
		alert('Draw')
		// window.location.reload();
	}
}

const main = document.getElementById('main')

const button = document.createElement('button');
main.appendChild(button)
button.addEventListener('click',handleReset)
button.textContent = "reset"
function handleReset(){
	window.location.reload();
}