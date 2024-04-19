
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

/*
1. 새로운 배열을 만든다
2. 나이만 필터링 한다.
3. 필터링한 나이를 25세 이상 35세 미만의 사용자만 남게 하기
*/ 
 const usersAge = 
 users.filter = (value => value.age == 25 <= 35)
 console.log(usersAge) // (value) => valu.age == 25 =< 35
/*
 오류가남 잘못된 비교연산자 사용 
 각개체의 나이속성을 확인하게 만들어야함 
 */ 


// 25세 이상 35세 미만인 사용자만을 필터링하여 새로운 배열 생성하세요
// 여기에 코드를 작성하세요


// 필터링된 사용자 중에서 이메일 주소가 gmail.com 도메인을 사용하는 사용자만을 추출하여 새로운 배열 생성하세요
// 여기에 코드를 작성하세요

// 결과를 화면에 그리는 함수
function renderUserData(userData) {
  const userDataDiv = document.getElementById('userData');

  // innerHTML을 사용해 결과를 화면에 그려보세요
  // 여기에 코드를 작성하세요
}

renderUserData(gmailUsers); // 사용자 데이터를 그리는 함수 실행
