/* // 6-1 TODO: 함수 선언문으로 정의된 함수를 함수 표현식으로 다시 정의해 보세요.
function functionDeclaration() {
  console.log('hello world');
}
// 여기에 작성하세요. 함수명은 functionExpression으로 작성하세요.
const functionExpression = function () {
  console.log("hello world");
};
// 함수 표현식으로 함수를 정의했다면 터미널에 node test1.js를 입력하세요. 아래 코드로 인해 함수가 호출되어 'hello world'가 출력되면 성공입니다. (아래 코드는 수정하지 마세요.)
functionExpression();


// 6-2 TODO: 함수 선언문으로 정의된 함수를 함수 표현식으로 다시 정의해 보세요.
const functionExpression = function () {
  console.log('hello world');
};
// 여기에 작성하세요. 함수명은 functionDeclaration으로 작성하세요.
function functionDeclaration (){
  console.log('hello world');
}
// 함수 선언문으로 함수를 정의했다면 터미널에 node test2.js를 입력하세요. 아래 코드로 인해 함수가 호출되어 'hello world'가 출력되면 성공입니다. (아래 코드는 수정하지 마세요.)
functionDeclaration();
// 6-3 TODO: 이 함수가 반환하는 값을 콘솔에 출력하세요.
function notice() {
  return '조심해!';
}
// 여기에 코드를 작성하세요.
let result = notice();
// 코드를 올바르게 작성했다면 터미널에 node test3.js를 입력하세요. 아래 코드로 인해 함수가 호출되어 '조심해!'가 출력되면 성공입니다. (아래 코드는 수정하지 마세요.)
console.log(result);


// 6-4 TODO: 함수 내부에 선언된 변수 num1과 num2의 타입이 숫자일 경우, 두 수의 합을 반환하는 함수 add를 정의하세요. (매개변수를 사용하지 않습니다.)
function add() {
  const num1 = 7;
  const num2 = 5;
  if (typeof num1 === "number" && typeof num2 === "number" ){
    return num1+num2
  }
  // 여기에 코드를 작성하세요.
}
// 함수를 작성했다면 터미널에 node test4.js를 입력하세요.
// 아래 코드는 작성한 함수를 테스트하기 위한 테스트 함수입니다. 절대 수정하지 마세요!
function testAddFunction() {
  const result = add(); // add 함수 호출
  // 결과값이 예상되는 범위 내에 있는지 검증
  if (typeof result === 'number') {
    console.log(
      `정답입니다: add 함수를 호출한 결과가 ${typeof result}타입입니다.`
    );
  } else {
    console.log(
      `정답이 아닙니다. add 함수를 호출한 결과가 number타입이어야 합니다. 지금은 ${typeof result} 타입입니다.`
    );
  }
}
// 테스트 함수 실행
testAddFunction();


// 6-5 TODO: 삼각형의 높이와 밑변의 길이를 입력받아 삼각형의 너비를 구하는 함수 triangle을 정의하세요. (삼각형의 높이와 밑변의 길이는 외부에서 전달받도록 코드를 작성해야 합니다.)
function triangle(height, width) {
  return (height * width) / 2;
}

// 함수를 작성했다면 터미널에 node test5.js를 입력하세요.
// 아래 코드는 작성한 함수를 테스트하기 위한 테스트 함수입니다. 절대 수정하지 마세요!
function testTriangleFunction() {
  const test1 = triangle(10, 5);
  console.log(
    `테스트 1 (높이: 10, 밑변: 5): 예상 결과는 25, 실제 결과는 ${test1}`
  );

  const test2 = triangle(7, 4);
  console.log(
    `테스트 2 (높이: 7, 밑변: 4): 예상 결과는 14, 실제 결과는 ${test2}`
  );

  const test3 = triangle(12.5, 6.5);
  console.log(
    `테스트 3 (높이: 12.5, 밑변: 6.5): 예상 결과는 약 40.625, 실제 결과는 ${test3}`
  );
}

// 테스트 함수 실행
testTriangleFunction(); 
*/


// 6-6 TODO: 사용자 정보를 입력받아, 사용자의 나이에 따라 다른 메시지를 출력하는 함수 userInfo를 작성하세요.
//조건1. 나이(age)가 18세 미만일 경우, 사용자의 이름과 함께 "You are under 18."라는 메시지를 반환합니다.
//조건2. 나이가 18세 이상일 경우, 사용자의 이름, 나이, 그리고 좋아하는 색상을 포함한 메시지를 반환합니다. 예를 들어, "Hello, [이름]! You are [나이] years old, and your favorite color is [색상]."
//조건3. 모든 정보는 매개변수를 통해 함수에 전달되어야 합니다.

function userInfo(name, age, favoriteColor) {
  if ( age < 18 ){
    return `${name}님은 18세 미만입니다.`;
  } else if (age >= 18) {
    return `안녕하세요, ${name}님! 당신은 ${age}살이고, 좋아하는 색상은 ${favoriteColor}입니다.`;
  }
}

// 함수를 작성했다면 터미널에 node test6.js를 입력하세요.
// 아래 코드는 작성한 함수를 테스트하기 위한 테스트 함수입니다. 절대 수정하지 마세요!
function testUserInfo() {
  // 테스트 케이스 1: 나이가 18세 미만
  const result1 = userInfo('Alice', 17, 'blue');
  console.log(
    result1 === 'Alice님은 18세 미만입니다.' ? '테스트 1 통과' : '테스트 1 실패'
  );

  // 테스트 케이스 2: 나이가 18세 이상
  const result2 = userInfo('Bob', 25, 'green');
  const expected2 =
    '안녕하세요, Bob님! 당신은 25살이고, 좋아하는 색상은 green입니다.';
  console.log(result2 === expected2 ? '테스트 2 통과' : '테스트 2 실패');

  // 추가 테스트 케이스: 정확한 메시지 출력 검증
  const result3 = userInfo('Charlie', 18, 'red');
  const expected3 =
    '안녕하세요, Charlie님! 당신은 18살이고, 좋아하는 색상은 red입니다.';
  console.log(result3 === expected3 ? '테스트 3 통과' : '테스트 3 실패');
}

// 테스트 함수 실행
testUserInfo();
