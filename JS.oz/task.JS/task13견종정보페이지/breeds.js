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

//페이지가 처음 로드 됐을때 일어날 일 - 강아지 사진뿌리기
window.addEventListener("load", function(){
  request1.open("get", apiRandomDogs)
  request1.addEventListener("load", function(){
    const response = JSON.parse(request1.response)
    //서버로 부터 받은 정보가 리스폰즈에 저장됨
    response.message.forEach(function(item){
      currentDogs.push(item)
      const dogImgDiv = document.createElement("div")
      dogImgDiv.classList.add("flex-item")
      dogImgDiv.innerHTML = `
       <img src=${item}> `
      main.appendChild(dogImgDiv)
    })
  })
  request1.send()
})