/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. 객체 리터럴을 이용해 사용자 정보를 정의해야합니다.
// 2. JSON.stringify() 메서드를 이용해 객체를 JSON 형식의 문자열로 변환해야합니다.
// 3. JSON.parse() 메서드를 이용해 JSON 형식의 문자열을 객체로 변환해야합니다.
// 4. localstorage.getItem() 메서드를 이용해 사용자 정보를 불러와야합니다.
// 5. localstorage.setItem() 메서드를 이용해 사용자 정보를 저장해야합니다.
// 6. 개발자 도구 Application/Local Storage 에서 저장한 사용자 정보를 확인해야합니다.
/* -----------------------------------------------------------------------------*/

// 사용자 정보 저장 함수
function saveUserInfo() {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;

  // 'name'과'email'을 키로 사용하는 객체 리터럴 userInfo를 생성하세요.
  // 여기에 코드를 작성하세요
  const userInfo = {
    name,
    email 
    /* 
   처음에 내가 쓴내용
   name : 'value',
   email : 'value' 
   출력결과 
   key usrinfo
   Value {"name":"value","email":"value"}
   필요한 정보가 안나오고 내가 입력한 값이 나옴
   변수가 이미 할당되어있는데 그걸 생각못하고 속성을 설정해버려서 이렇게 출력됨.
   */
  };

  // 로컬스토리지에 사용자의 정보를 저장하는 코드를 작성하세요
  // 여기에 코드를 작성하세요
  localStorage.setItem('userInfo',JSON.stringify(userInfo))
  /* @@@@@@@궁금... 
  로컬 스토리지에 사용자 정보를 저장하는데 꼭 JSON.stringify으로
  문자열로 바꾸는 이유는?
, JSON.stringify(userInfo) 이걸쓰지않으면 에러가 뜸
  에러내용 Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
  setItem 인자가 하나만 전달되었다 값을 넣어라 
  */

  document.getElementById(
    'userInfo'
  ).innerText = `이름: ${name}, 이메일: ${email}`;
}

// 로컬 스토리지에서 사용자 정보 불러오는 코드를 작성하세요
// 여기에 코드를 작성하세요

const savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) 
//논리연산자를 안써어도 딱히 문제가 일어나진 않는다
//localStorage.getItem('userInfo')
/*@@@@@궁금
오즈 문제풀이 const savedUserInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
그 값을 세이브유저인포에 변수로 할당 = 가져온 값이 제이슨형식의 문자열이기 때문에 자바객체로 변환한다(로컬스토리지.에서가져온다('유저인포값을'))
왜 새로 const를 할당해서 jsaon.parse로 객체리터럴로 변환하나?
거기에 논리 연산자를 사용해서 빈객체를 만드는이유는? 

localStorage.getItem('userInfo', JSON.parse(userInfo)) 
에러메세지 : JSON.parse(userInfo) 이부분의 userInfo is not defined
왜 못찾을까? json.stringify형식 문자열이기 때문에?
*/ 

// 페이지 로드 시 저장된 사용자 정보가 있으면 화면에 표시
if (savedUserInfo.name && savedUserInfo.email) {
  document.getElementById(
    'userInfo'
  .innerText = `이름: ${savedUserInfo.name}, 이메일: ${savedUserInfo.email}`);
}
/* 에러메세지 : cannot set properties of null(setting 'innertext')
이너텍스트에서 속성을 사용할려는 요소는 savedUserInfo인데 이 요소가 HTMl문서에 존재하지 않는다.
이럴때 해결 방안은? 
오류났을때 함수
).innerText = `이름: ${savedUserInfo.name}, 이메일: ${savedUserInfo.email}`;}
innerText앞에 괄호를 백팁뒤로 옮기니 오류 해결됨
 */

/*
최종 application 출력값
Key = userInfo Value {"name":"노도인","email":"skek1267@naver.com"}
*/
