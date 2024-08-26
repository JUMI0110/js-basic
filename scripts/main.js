// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'hello world'

// 변수 선언 
var myVariable  
// 값 할당
myVariable = 10
// 출력
// console.log(myVariable)

// ES6이전 변수(재선언, 재할당 가능)
var myV1 = 1
// 변경가능데이터(재선언 불가)
let myV2 = 2
// 불변한 데이터 => 상수(재선언, 재할당 불가)
const myV3 =3

// console.log(myV1, myV2, myV3)

var myV1 = 10
myV1 = 20 

// let myV2 = 20
myV2 = 20

// const myV3 = 30
// myV3 = 20
// main.js:27 Uncaught 
// TypeError: Assignment to constant variable.
// at main.js:27:6

// 데이터 타입 (string, number, boolean, array, object)
let a = 'bob'
let b = 10
let c = true
let d = [1, 2, 3, 4, 5]
let e = {
    'key': 10,
}

// console.log(a, b, c, d, e)

d.push(10)

// python 코드 e['name'] = 'kim' -> dict + class 느낌
// javascript `object` notation  JSON 
e.name = 'kim'
e.location = 'seoul'
// console.log(e)


let myVarA = '10'
let myVarB = 10

// console.log(myVarA == myVarB)  값을 비교(레거시코드)
// console.log(myVarA === myVarB) 타입까지 비교


// 조건문 들여쓰기 -> {} / elif -> else if
// let iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//     console.log('i love choco')
// } else{
//     console.log(':(')
// }

// 반복문
console.log('while')
let i = 0
while (i < 5) {
    console.log(i)
    // i+=1
    i ++
}
// for (변수선언;조건;데이터변경)
console.log('for1')
for (let i=0 ; i<5 ; i++) {
    console.log(i)
}
// 인덱스 접근
console.log('for2')
let myArray = [1, 2, 3, 4, 5]
for (let i=0 ; i<myArray.length ; i++ ) {
    console.log(myArray[i])
}
// 인덱스, Key 출력
console.log('for in')
for (let item in myArray) {
    console.log(item)
}
// 특정한 값 접근
console.log('for of')
for (let item of myArray) {
    console.log(item)
}

//python Map()과 비슷 
console.log('forEach')
myArray.forEach( function(item, index, array){
    console.log(item, index, array)
} )



//함수
//def func():

function multiply1(num1, num2) {
    let result = num1 * num2
    return result
}
// console.log(multiply1(2, 3))
// console.log(multiply1(5, 6))

// 함수표현식 변수에 함수 저장가능
let multiply2 = function(num1, num2) {
    let result = num1 * num2 
    return result
}
console.log(multiply2(3, 5))

// 화살표함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(3, 4))

//화살표함수 생략 1
// {}안에 코드가 return 하는 문장 하나만 있는 겨우
// {}, return을 생략가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(4, 5))

//화살표함수 생략2
// ()안의 매개변수가 1개이면 ()생략가능
// let multiply5 = (num) => {return num*2}
let multiply5 = num => num*2
console.log(multiply5(20))

// 이벤트
// document.querySelector('html').onclick = function(){
//     alert('ouch!!')
//     console.log('hello')
// }
let myH1 = document.querySelector('h1')

// addEventListener(무슨일이 일어났을 때, 무슨행동을 할 지)
// myH1.addEventListener('click', function(e){
//     console.log('hello')
//     console.log(e)
//     console.log(e.target)
// })

let myImage = document.querySelector('img')
myImage.addEventListener('click', function(e){
    let src = myImage.getAttribute('src')
    
    if (src==='images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/dog.jpg')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
})


// 비동기

// console.log('hi')
// setTimeout(function(){console.log('1234')}, 1000) // 콜백함수 
// console.log('bye')

//promise 패턴 
// fetch.then 보낸 요청에 응답했을 때 실행
const URL = 'https://jsonplaceholder.typicode.com/todos/1'
fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))

console.log('after fetch')


// promise 패턴 - async await
async function fetchAndPrint(){
    let res = await fetch(URL)
    let result = await res.json()

    console.log(result)
}
fetchAndPrint()

let liList = document.querySelectorAll('li')

liList.forEach(function(li){
    li.style.color = 'red'
    li.style.backgroundColor = 'black'
})

liList.forEach(function(li){
    li.addEventListener('click', function(e){
        console.log(e.target)
    })
})



