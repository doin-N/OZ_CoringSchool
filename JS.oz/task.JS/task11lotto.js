const todaySpan = document.querySelector('#today')
const numberDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')

let lottoNumbers = [] //비어있는 빈배열 하나 만들어서

// 날짜표시
const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() +1
let date = today.getDate()
todaySpan.textContent = ` ${year}년 ${month}월 ${date}일 `

//3_1 추첨번호를 화면에 추가하기
function paintNumber(number){
  const eachNumDiv = document.createElement("div") //div를 만든다.
  eachNumDiv.classList.add("eachnum") //div에 클래스를 추가한다. css를위해
  eachNumDiv.textContent = number //숫잘르 표시한다.
  numberDiv.append(eachNumDiv) 
}



//1 여섯개의번호 랜덤으로 표시하기
//이 빈배열을 채울것이다. 추첨 버튼을 눌렀을때 
drawButton.addEventListener("click", function(){
  //랜덤숫자 6개가 배열에 추가되게 1~45

  if (lottoNumbers.length === 6){
    //과제 부분
    lottoNumbers.splice(0,6);
    numberDiv.innerHTML = [];
  }
  
  while(lottoNumbers.length < 6 ){ //lottonumbers빈배열이 길이가 6보다 작으면 6이 될때까지 채워라
    let rn = Math.floor(Math.random() * 45) + 1//1~45까지 정수로 
    //랜덤넘버 rn이 만들어진다 

    //근데 배열객체는 같은 데이터가 들어가는걸 허용하기때문에 중복되지 않게 조건부를 넣어야한다.
    if(lottoNumbers.indexOf(rn) === -1){ //indexoOF 정확히 확인해보기
    lottoNumbers.push(rn) //로또넘버스 배열에 rn요소를 추가한다.

    //3숫자 하나씩을 화면에 추가하는 로직 추가
    paintNumber(rn)
  }}
   
})

//2 다시버튼을 누르면 리셋하기
resetButton.addEventListener("click", function(){
  lottoNumbers.splice(0, 6) //0번인덱스에서 부터 6개를 지울것이다.
  numberDiv.innerHTML = "" //4 다시버튼을 누르면 화면에서 숫자 없애기
})

//과제 추첨 버튼을 누른 후 다시 버튼을 누르지 않으 채 추첨 버튼을 또 눌러도 새롭게 번호가 추첨되도록 기능수정