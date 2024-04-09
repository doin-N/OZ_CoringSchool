/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
// 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
// 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
// 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/
// 트윗 게시 버튼 요소
const postTweet = document.querySelector('#postTweet');
postTweet.addEventListener('click', function () {
  // 트윗을 입력할 input 요소
  const tweetInput = document.querySelector('#tweetInput');
  // 트윗이 게시될 컨테이너
  const tweetsContainer = document.querySelector('#tweets_container');
  // 여기에 코드를 입력하세요.
  if (tweetInput.value) {
    //css에는 있지만 html에는 없는거 찾아서 추가 순서대로
    //새로운 트윗의 글,좋아요,좋아요카운트
    const newTweet = document.createElement('div');
    newTweet.classList.add('tweet');

    const tweetText = document.createElement('span');
    tweetText.classList.add('tweet-text');
    tweetText.textContent = tweetInput.value;

    const likeBtn = document.createElement('button');
    likeBtn.classList.add('like-button');
    likeBtn.textContent = '👍';

    const likeCount = document.createElement('span');
    likeCount.classList.add('like-counter');
    let likeCounter = 0;

    //만든 요소들을 하나로 묶어줘야함
    newTweet.appendChild(tweetText);
    newTweet.appendChild(likeBtn);
    newTweet.appendChild(likeCount);

    //버튼 이벤트
    likeBtn.addEventListener('click', function () {
      likeCounter++;
      likeCount.textContent = `${likeCounter}`;
    });

    //지금까지 만든거 트위터 콘텐츠에 추가
    tweetsContainer.appendChild(newTweet);

    // 글 게시하고 나면 메세지창 초기화
    tweetInput.value = '';
  }
});
