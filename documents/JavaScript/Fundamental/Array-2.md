# 배열(Array)-2
# .filter()
```javascript
const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

const a = numbers.map(number => number < 3)
console.log(a)

const b =  numbers.filter(number => number <3)
console.log(b)

// expected output:
// [ true, true, false, false ]
// [ 1, 2 ] 
```
- [Array.prototype.filter()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.


# .find() .findIndex()
```javascript
const c = fruits.find(fruit => {
    return /^B/.test(fruit)
})

console.log(c)

// expected output:
// Banana
```
- [RegExp.prototype.test()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환합니다.

# .includes()
```javascript
const d = numbers.includes(3)
console.log(d)

const e = fruits.includes('iamtk')
console.log(e)
// expected output:
// true
// false
```

# .push() .unshift()
``` 원본 수정됨 주의!```
``` javascript
numbers.push(5)  // 배열의 가장 뒤쪽에 데이터를 밀어 넣는다
console.log(numbers)

numbers.unshift(0) // 배얼의 가장 앞쪽에 데이터를 밀어 넣는다
console.log(numbers)

// expected output:
// [ 1, 2, 3, 4, 5 ]
// [ 0, 1, 2, 3, 4, 5 ]
```

# .reverse()
```원본 수정됨 주의!```
```javascript
numbers.reverse()  
fruits.reverse()

console.log(numbers)
console.log(fruits)

// expected output:
// [ 4, 3, 2, 1 ]
// [ 'Cherry', 'Banana', 'Apple' ]
```

# .splice()  
```원본 수정됨 주의!```
```javascript
numbers.splice(2,1)
console.log(numbers)

numbers.splice(2,0,99) // 삭제하지 않고 끼워 넣기
console.log(numbers)

numbers.splice(2,1,100) // start index자리의 데이터를 삭제하고 끼워넣기
console.log(numbers)

// expected output:
// [ 1, 2, 4 ]
// [ 1, 2, 99, 4 ]
// [ 1, 2, 100, 4 ]
```
- [Array.prototype.splice()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
- 구문 : array.splice(start[, deleteCount[, item1[, item2[, ...]]]])