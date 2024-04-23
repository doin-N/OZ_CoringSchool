const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];

// 로컬 저장소에 저장하기
function saveTodos(){
  const todoString = JSON.stringify(todoArr)
  localStorage.setItem('myTodos', todoString)
}

//로컬 저장소에서 가져오기
function loadTodos(){ 
  const myTodos = localStorage.getItem("myTodos") //로컬스토리지로부터 마이투드스를 가져와서 저장
  if(myTodos !== null){ // 마이투드스가 없어서 널이라고 나올때도 있으니 널이 아닐때만 이라는 조건을 넣으면 좋음
    todoArr = JSON.parse(myTodos) // 저장한 결과를 파싱해서 투두어레이에  갱신한다.
    displayTodos()
  }
}
loadTodos() // 페이지 열렸을때 한번 호출하면되는거라 바로 호출

//할일 삭제하기
function hendleTodoDelBtnClick(clickedId){
  todoArr = todoArr.filter(function(aTodo){
    return aTodo.todoId !== clickedId
  })
  displayTodos()
  saveTodos()
}

// 할일 수정하기
function headleTodoItemClick(clickedId){ // 투두아이템을 클릭햇을때 일어날 이벤트
  todoArr = todoArr.map(function(aTodo){//각각의 투두를 받겠다. //맵 함수가 완성된후 todoArr에 덮어쓰기
    if(aTodo.todoId === clickedId){ //만약 해당 투두의 아이디값이 클릭아이디랑 같을 경우에 
      return { //바꾼다
        ...aTodo, todoDone: !aTodo.todoDone //기존의 투두내용에, 투두던을 : 반전(!)시켜서 내보낸다.
      }
    }else{
      return aTodo // 그렇지 않으면 aTodo의 원래상태를 내보낸다.
    }
  })
  displayTodos()
  saveTodos()
}

//할일 보여주기
function displayTodos(){
  todoList.innerHTML ="" //원래 있던 내용을 지우기
  //배열 요소의 수가 곧 내가 보여줘야 할 할일의 수이기 때문에 todoArr 에 하면됨
  todoArr.forEach(function(aTodo){//할일을 받을때의 이름은 aTodo로 한다.
    //추가할때는 리스트에 추가해야되는데 리스트가 ul이니 li를 만들어서 추가해줘야함
    const todoItem = document.createElement("li")
    todoItem.textContent = aTodo.todoText //li의 텍스트 콘텐츠로 할일내용을 두투텍스트로 대체
    todoItem.title = "클릭시 할일 완료!"
    todoItem.addEventListener("click", function(){//투두아이템을 클릭햇을때의 이벤트 핸들러
      headleTodoItemClick(aTodo.todoId)
      
    })
    todoList.appendChild(todoItem)


    //할일이 하나 추가되면 부가기능으로 삭제,수정이 되어야한다 그 기능
    const todoDelBtn = document.createElement('span')
    todoDelBtn.textContent ="X"
    todoDelBtn.title = "삭제하려면 클릭하세요"
    todoDelBtn.addEventListener("click", function(){
      hendleTodoDelBtnClick(aTodo.todoId)
    })
    //todoItem.classList.add(aTodo.todoDone) aTodo가 던이야 던이아냐에 따라 값을 줄지말지 결정할것임
    if(aTodo.todoDone){
      todoItem.classList.add("done") // 각각의 투두에 대해서 투두상태가 트루면 끝났으니 던이라는 클라스를 추가
    }else{
      todoItem.classList.add("yet") // 아니면 아직 안끝났으니 옛 클라스를 가지고 기본클라스는 옛
    }
    todoItem.appendChild(todoDelBtn)
    //여기까지 하고나니 문제가 추가할때마다 전에 썻던 내용이 같이 추가됨 
  })
}

//할일 추가하기
todoForm.addEventListener("submit", function(e){
  e.preventDefault() //submit 발생할때마다 새로고침하는 특성을 차단해주기
  
  //할일이라는 데이터를 만들어 표현해야함 (객체로 생성해서 )
  const toBeAdded = {
    todoText : todoForm.todo.value, // 할일의 내용은 투두폼에 투두네임으로 부터 정보를 받는다
    todoId : new Date().getTime(), 
    // 투두가 하나 추가될때마다 할일이 가지게될 고유한 식별값을 추가될때 시간정보로 받는다
    // getTime = 숫자형태로 가지고 시간정보를 정수형태로 반환해주는 메소드
    todoDone : false // 모든할일은 추가될때마다 다 하지않은상태여서 false
  }
  
  todoArr.push(toBeAdded)
  if(todoForm.todo.value === "") {
    alert("내용이 입력되지 않았습니다. 내용을 입력해주세요")
    todoArr.pop(toBeAdded)
  }

  todoForm.todo.value = "" // 추가한뒤에 todo텍스트박스에 내용이 그대로 남는거를 비우겠다.
  // 다 만들었으면 어떻게 해야하나? 추가해야한다.

  //할일을 화면에 추가할 함수
  displayTodos()
  saveTodos()
})
