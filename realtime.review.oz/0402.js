//**제곱  %나머지
//많은 산술 연산자 중 +는 문자에서 사용 가능
let str1 = 'Hello'
let str2 = "world"

console.log(str1+ ' ' +str2) //띄어 쓰기를 따로 넣지 않으면 띄어쓰기 안됨
console.log(str1+123)
console.log(123+str1) 
console.log(str1 / true) //NaN = Not a number 숫자가 아닌데 연산을 할려고 시도하면 뜸


//++증가 연산자 -- 감소 연산자
let num = 10
num ++
console.log(num) // 11이 뜸

num --
console.log(num) // 9 가 뜸

// 사용하는 위치에 따라 결과값이 달라짐.앞에 붙힐지 뒤에 붙힐지 ++num++
let ber = 20
console.log = (ber++) // 20 원래의 값
console.log = (++ber) // 21
console.log = (--ber) // 19
console.log = (ber--) // 20

//할당 연산자 = 
let no = 10
no = no + 10 //no 값에 10을 더해서 no를 만들것이다. 
//이걸 줄인값이 num+=10

// 비교연산자
// ===일치 !==불일치 _____ (==) & (!=) 문제점이 억지로 문자열로 만들기 때문에 안쓰는게 좋음

//논리 연산자 불린 값을 다룰 때 사용
// && _ and 연산자 - 둘다 참이여자이 true. 한쪽이라도 false면 false
// || _ or 연산자 - 둘 중 하나라도 참이면 참
// ! _ not 연산자 - 참과 거짓을 반대로 _ 조건문 
// 불린값이 아닌데도 true false로 취급하는 경우가 있다.
// Falsy한 값은 = 0, null, undefined, NaN, 빈문자열 ("") fales가 아닌데 false로 취급
// Truthy한 값은 = 0이 아닌 숫자, 객체, 배열, 비어있지 않은 문자열 true가 아닌데 true로 취급

// 조건문 = 조거네 따라 다른 행동이 필요할 때 사용 하는것

/* if 문 = if(조건) {조건이 true일 때 할 행동}
if( 지금 비가오나? ) {
  우산을 챙겨서 나간다
}
if ( 신호등이 빨간불인가? ){
  멈춘다
}
if (신호등이 초록불인가?) {
  앞으로 나아간다
}
// 연달아 적을때는 if(조건) {
  조건이 true일 때 할 행동
}else{
  조건이 false일 때 할 행동
}
if ( 빨간불인가? ){
  멈춘다
}else{
  앞으로 나아간다
}
if (아보카도가 있나?){
  우유를 6개 산다
}else{
  우유를 1개 산다.
}
if ( 아보카도가 있나? ){
  아보카도를 6개 산다.
}else{
  우유를 1개 산다.
}
*/ 

/*switch (확인할 변수){
  case변수의 기대값 1:
  변수값이 기대값1과 같을때 할 행동
  default : 변수값이 기대값들과 같지 않을 때 할 행동
} */

 /* switch ( 챕터번호 ) { 내가 의도 해서 끝까지 실행할 거 아니면 break 를 넣어줘야 함
  case 1:
    'HTML'
  case 2:
    'CSS'
  case 3:
    'JavaScript'
  case 4:
    'Node.js'
  default :
    '또 뭐가 있을까요~?!'
 }

 switch ( 숫자 ) {
  case 1:
  case 3:
  case 5:
    '홀수'
  case 2:
  case 4:
  case 6:
    '짝수'
  default :
    'case를 묶을 수 있어요!'
 } */

 /* const number = prompt('숫자를 입력하세요')

 switch (number) {
  case 1:
      alert('HTML')
  case 2:
      alert('css')
  case 3:
      alert('Javascript')
  default:
      alert('해다되는게 없어요!')
 }
*/

/*
//삼항 연산자 사용법 _ 물음표 = if와 같다.
조건 ? 조건이 true일 때 할 행동 : 조건이 false일 때 할 행동
^ > if (조건) {
  조건이 true일 때 할 행동
}else{
  조건이 false일 때 할 행동
}
// 그럼 조건이 추가되면?
조건1 ? 조건1일 true일 때 할 행동
: 조건2 ? 조건2가 true일 때 할 행동
: 조건 2가 false일 때 할 행동

if (90점 이상){
  A학점을 준다
}else if (80점 이상){
  B학점을 준다
}else if (70점 이상){
  C학점을 준다
}else if (60점 이상){
  D학점을 준다
}else{
  F학점을 준다
}
^ 이걸 삼항식으로 바꾸면 v

90점 이상 ? A학점을 준다
: 80점 이상 ? B학점을 준다
: 70점 이상 ? C학점을 준다
: 60점 이상 ? D학점을 준다
: F학점을 준다

*/

