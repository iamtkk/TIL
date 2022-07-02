# 배열(Array)
```javascript
const numbers = [1,2,3,4]
const fruits = ['Apple','Banana','Cherry']

console.log(numbers[1])
console.log(fruits[2])
```
- [MDN : Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

# .find()
```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);

// expected output: 
12
```
- Array.prototype.find()
- ```find()``` 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
- find 메서드는 callback 함수가 참을 반환 할 때까지 해당 배열의 각 요소에 대해서 callback 함수를 실행합니다.

# .length
```javascript
console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)
console.log([].length)

// expected output: 
4
3
2
0
```

# .concat()
```javascript
console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

// expected output: 
[ 1, 2, 3, 4, 'Apple', 'Banana', 'Cherry' ]
[ 1, 2, 3, 4 ]
[ 'Apple', 'Banana', 'Cherry' ]
```
- 두개의 배열 데이터를 병합해서 새로운 배열을 생성해준다
- concat을 사용해도 원본의 배열 데이터가 수정되지 않는다

# .forEach()
```javascript
fruits.forEach(function(element,index,array){ // 메서드의 인수로 사용되는 함수를 Callback 함수라 한다.
    console.log(element,index,array)          // 메서드에 붙어 있는 배열데이터(fruits)의 아이템 갯수만큼, 콜백 함수에 인수(element)를 넘겨 반복적으로 실행한다.  
})

// expected output: 
Apple 0 [ 'Apple', 'Banana', 'Cherry' ]
Banana 1 [ 'Apple', 'Banana', 'Cherry' ]
Cherry 2 [ 'Apple', 'Banana', 'Cherry' ]

------------------------------------------------------
const a = fruits.forEach(function(fruit,index){
    console.log(`${fruit}-${index}`)
})
console.log(a)

// expected output: 
Apple-0
Banana-1
Cherry-2
undefined // forEach가 변수 a에 따로 반환한 값이 없기 때문에 undefined로 출력됨
```

# .map()
```javascript
const b = fruits.map(function(fruit,index){
    return `${fruit}-${index}` // forEach와는 다르게 return문을 선언하고, 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.
})

const c = fruits.map((fruit,index) => `${fruit}-${index}`) // 화살표 함수로 선언하면 중괄호와 return 키워드를 생략 가능하다

const d = fruits.map(function(fruit,index){
    return {  // 객체를 반환하는 형태도 많이 쓰는 패턴이다
        id: index,
        name: fruit
    } 
})

console.log(b)
console.log(c)
console.log(d)

// expected output: 
[ 'Apple-0', 'Banana-1', 'Cherry-2' ]
[ 'Apple-0', 'Banana-1', 'Cherry-2' ]
[
  { id: 0, name: 'Apple' },
  { id: 1, name: 'Banana' },
  { id: 2, name: 'Cherry' }
]
```