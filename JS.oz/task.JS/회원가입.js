//제출 이벤트를 받는다 (이벤트 핸들링)
const form = document.getElementById("form")
form.addEventListener("submit" , function(event){
//function(){} 이름없이 쓰이는 함수를 익명함수라 한다.이벤트 객체를 받아서 객체로부터 입력값을 다 받는다.
  event.preventDefault()//기존 기능 차단

  let userId = event.target.id.value
  let userPw1 = event.target.pw1.value
  let userPw2 = event.target.pw2.value
  let userName = event.target.name.value
  let userPhone = event.target.phone.value
  let userPosition = event.target.position.value
  let userGender= event.target.gender.value
  let userEmail = event.target.email.value
  let userIntro = event.target.intro.value
  
  //문제를 감지하고 처리하기
  if(userId.length < 6){
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
    return //리턴을 씀으로 두가지 문제가 있지만 하나만 뜨게됨 그래서 각각의 이프문 안에 리턴을 적어주기
  }
  if(userPw1 !== userPw2){ //비밀번호가 1번과 2번이 다를경우 뜨는 경고차
    alert("비밀번호가 일치하지 않습니다.")
    return
  }

  //문제가 없이 통과가 되었을때 가입환영인사
  //회원가입이 끝나서 지금까지 모든 내용을 지워야 하는데
  document.body.innerHTML = "" //새로운 HTML을 대입하겟다.
  document.write(`<p>${userId}님 환영합니다. <br> 회원 가입 시 입력하신 내역은 다음과 같습니다.</p>`)
  document.write(`<p>아이디 : ${userId}</p>`)
  document.write(`<p>이름 : ${userName}</p>`)
  document.write(`<p>전화번호 : ${userPhone}</p>`)
  document.write(`<p>원하는 직무 : ${userPosition}</p>`)
  //코드를 추가하는 매소드 write(``)

  /* 확인용 코드
  console.log(userId, userPw1, userPw2, userName, userPhone, userPosition,
  userGender, userEmail, userIntro )
  */
})
