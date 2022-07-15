console.log(this) // anonymous의 this는 global이 아니다. 빈객체 {}를 반환한다.
console.log(this === module.exports) // 전역스코프의 this만 module.exports이다. 나머지는 global

function a() { // function 안의 this는 global
  console.log(this === global);
  console.log(this);
}
a();