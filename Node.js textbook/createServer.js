//이벤트 리스너를 가진 노드 서버 만들기
const http = require("http");

http.createServer((req, res) => {
  //인자로 콜백함수를 주었으므로, 요청이 들어올 때마다 콜백함수가 실행됨.
  //req : 객체 요청에 관한 정보 / res : 객체 응답에 관한 정보
  //어떻게 응답할까요~
});
