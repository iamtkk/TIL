# ES6 Classes

## 생성자 함수의 구조
```javascript
function User(first, last) {
  this.firstName = first
  this.lastName = last
}

User.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}
```
  
## 생성자 함수를 ES6 Class로 변환
```javascript
class User{
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}
```
- class라는 블럭 안에 생성자 함수와 prototype 함수가 들어간다.
- 함수를 생성하는 방법이 특히 간편해진다
- 문법적 설탕이기 때문에 실행 결과도 동일하다.

```javascript
const iamtk = new User('Taekwan','Kim')
const neo = new User('Neo','Kim')
const wiz = new User('Wiz','Kim')

console.log(iamtk.getFullName())
console.log(neo.getFullName())
console.log(wiz.getFullName())
```
- 생성자 함수 User를 작성하던, Class User를 작성하던 new 지시자로 호출하는 구조는 동일하게 유지 된다.