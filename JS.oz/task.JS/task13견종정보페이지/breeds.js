//**** 지우는 로직 만들어보기
// 다운기능 만들어보기

/* 과제
- 견종 고르는 셀렉트 옆에다 버튼을 하나 추가한다
- 버튼에는 리셋이라고 쓴다
- 해당 버튼을 누르면 강아지 42마리의 소스를 새롭게 요청해 받아온다
- 기존에 뿌려져 있던 강아지는 모두 사라지고, 새로운 강아지 42마리로 채운다
*/

// 1차

const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-btn")
const select = document.getElementById("filter-select")
const main = document.getElementById("main")

//현재 화면에 표시되고 있는 강아지의 전부를 배열형태로 관리하기위해 빈배열생성
const currentDogs = [];

function displayDogs(item){
  const dogImgDiv = document.createElement("div")
    dogImgDiv.classList.add("flex-item")
    dogImgDiv.innerHTML = `
    <img src=${item}>`

    main.appendChild(dogImgDiv)
}

//페이지가 처음 로드 됐을때 일어날 일 - 강아지 사진뿌리기 
window.addEventListener("load", function(){
  request1.open("get", apiRandomDogs)
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    console.log(response)
    //서버로 부터 받은 정보가 리스폰즈에 저장됨
    response.message.forEach(function(item){
      currentDogs.push(item)
      displayDogs(item)
    })
  })
  request1.send()

  //셀렉트에 견종 정보 뿌리기
  request2.open("get", apiAllBreeds)
  request2.addEventListener("load", function(){
    const response = JSON.parse(request2.response)
    Object.keys(response.message).forEach(function(item){
      const option = document.createElement("option")
      option.textContent = item
      option.value = item
      select.appendChild(option)
    });

  })
  request2.send()

})

// 2차 
// 검색 필터링 버튼누르면 내가 원하는거만 남게
button.addEventListener("click", function(){ //내가 남기고 싶은거만 남긴채 화면에 뿌리기
  main.innerHTML = "" //원래 내용 메인에 이너 지우기
  let filteredDogs = currentDogs.filter(function(item){ 
    return item.indexOf(input.value) !== -1
    //인덱스오브는 문자열 메소드 문자열안에 주어진 문자열 포함하면 반한 아니면 -1반환
  })

  input.value = "" //인풋벨류 지우기

 filteredDogs.forEach(function(item){
  displayDogs(item)
 })
})

//셀렉트 검색 하는법
select.addEventListener("change", function(){
  main.innerHTML = ""
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(select.value) !== -1
  })

  filteredDogs.forEach(function(item){
    displayDogs(item)

  })
})

// 3차 
// 모어와 탑버튼 기능 
const more = document.getElementById("more")
const tothetop = document.getElementById("tothetop")

more.addEventListener("click", function(){
  request1.open("get", apiRandomDogs)//또다시 강아지 사진 가져오기
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
      currentDogs.push(item)
      displayDogs(item)

    })

  })
  request1.send()
})

tothetop.addEventListener("click", function(){
  //scrollTo : 주어진 위치로 스크롤을 이동한다.
  window.scrollTo({ top : 0 }) // 값을 주는 위치로 스크롤이 이동됨
  //뿅 순간이동 움직임을 부드럽게 바꿀수 있는것 css의 속성에 넣었음
})


/*
과제 부분
*/
/* 과제
- 견종 고르는 셀렉트 옆에다 버튼을 하나 추가한다
- 버튼에는 리셋이라고 쓴다
- 해당 버튼을 누르면 강아지 42마리의 소스를 새롭게 요청해 받아온다
- 기존에 뿌려져 있던 강아지는 모두 사라지고, 새로운 강아지 42마리로 채운다
*/
const reset = document.getElementById("reset-button")

reset.addEventListener("click", function(){
  main.innerHTML = "" //기존 강아지 삭제
  request1.open("get", apiRandomDogs) // 새로운강아지 받아오기
  request1.addEventListener("load", function(){ //받아온 강아지 로드하기
    const response = JSON.parse(request1.response)
    response.message.forEach(function(item){
     currentDogs.push(item)
     displayDogs(item)})
   
   })
   
   request1.send()
})