
/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. 주어진 ‘users’ 배열에서 나이가 25 이상 35 미만인 사용자를 필터링하여 새로운 배열을 생성해야합니다.
// 2. 필터링된 사용자 중에서 이메일 주소가 ‘gmail.com’ 도메인을 사용하는 사용자만을 추출하여 새로운 배열을 생성해야합니다.
// 3. ‘renderUserData’함수 내부에서는 각 사용자의 정보를 HTML 요소로 구성하여 화면에 표시합니다.
/* -----------------------------------------------------------------------------*/

const users = [
  { name: 'John', age: 30, email: 'john@example.com' },
  { name: 'Alice', age: 25, email: 'alice@gmail.com' },
  { name: 'Bob', age: 35, email: 'bob@gmail.com' },
  { name: 'Emma', age: 28, email: 'emma@example.com' },
  { name: 'Steve', age: 32, email: 'steve@gmail.com' },
];

// 25세 이상 35세 미만인 사용자만을 필터링하여 새로운 배열 생성하세요
// 여기에 코드를 작성하세요
/*
1. 새로운 배열을 만든다
2. 나이만 필터링 한다.
3. 필터링한 나이를 25세 이상 35세 미만의 사용자만 남게 하기
*/ 
 const userAge = 
 users.filter ((value) => value.age >= 25 && value.age < 35);
 // 그리고 유저필터에서 필터링된 값만 userAge에 할당하다 
 // (그걸 value로 반환(==>)25세이상 35세 미만 조건을 각각 만들어 && 두조건이 맞으면 그걸)

// 필터링된 사용자 중에서 이메일 주소가 gmail.com 도메인을 사용하는 사용자만을 추출하여 새로운 배열 생성하세요
// 여기에 코드를 작성하세요
const gmailUsers =
filteredUsers.filter((em) => em.email.includes('gmail.com'));
// 문자열의 특정요소나 문자열이 포함되어있는지 확인하는 메서드 includes를 사용
// 결과 요소(2)개 찾음 엘리스 스티브

// 결과를 화면에 그리는 함수
function renderUserData(userData) {
  const userDataDiv = document.getElementById('userData');
  userDataDiv.innerHTML = userData //여기까지 작성완료 그이후는 모르겠음..
  = userData.map((user) =>
  `<div class="user">
    <p><strong> Name: </strong>${user.name}</p>
    <p><strong> Age: </strong>${user.age}</p>
    <p><strong> Email: </strong>${user.email}</p>
  </div>
  `
  )
  // innerHTML을 사용해 결과를 화면에 그려보세요
  // 여기에 코드를 작성하세요
  

}

renderUserData(gmailUsers); // 사용자 데이터를 그리는 함수 실행

/*
//민주님
function renderUserData(userData) {
  const userDataDiv = document.getElementById('userData');
  userDataDiv.innerHTML
  = userData.map(function (item) {
  `<div class="user">
    <p><strong> Name: </strong>${user.name}</p>
    <p><strong> Age: </strong>${user.age}</p>
    <p><strong> Email: </strong>${user.email}</p>
  </div>
  `
})
}
*/