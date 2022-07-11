# Object
[MDN : Object](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object)

## 정적메서드와 prototype메서드의 차이
- 정적메서드의 경우에는 리터럴로 생성된 객체에 메서드 체이닝을 연결할 수 없다.
- example) 
  - Object.assign() > [].reverse()는 실행 불가능하다.
  - Object.prototype.toString() > {}.toString()은 실행 가능하다

## . Object.assign() 
```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(target === returnedTarget) // 같이 객체를 가르킨다
// expected output: true

const a = { k: 123 }
const b = { k: 123 }
console.log(a === b)  // 내용이 같다고 해서 true가 나오지 않는다. 참조형 데이터(객체{},배열[],함수function)를 비교하기 때문이고 a와b는 다른 객체이고 다른 메모리 주소를 참조하고 있다.
// expected output: false

// 추가적인 assign 메서드 활용 방안
const newReturnedTarget = Object.assign({}, target, source); // 원본 데이터를 건들지 않고, 새로운 객체 생성하고 싶으면 target 인수 자리에 빈객체 리터럴을 선언해주면 된다.
const copyReturnedTarget = Object.assign({}, target); // 내용이 같은 객체를 복제할때 사용한다
```
- 메서드는 출처 객체(source)들의 모든 열거 가능한 자체 속성을 복사해 대상 객체(target)에 붙여넣습니다. 그 후 대상 객체를 반환합니다.

## .keys()
```javascript
const user = {
    name: 'Iamtk',
    age: 41,
    email: 'iamtkk2@gmail.com'
}

const keys = Object.keys(user) // 객체의 프로퍼티 이름만 추출하여 새로운 객체 데이터를 만들어준다.
console.log(keys)
// expected output: [ 'name', 'age', 'email' ]

console.log(user['email'])
// expected output: iamtkk2@gmail.com

const values = keys.map(key => user[key]) // 인덱싱을 이용하여 프로퍼티의 값만 추출(return)하여 객체를 생성한다.
console.log(values)
// expected output: [ 'Iamtk', 41, 'iamtkk2@gmail.com' ]
```