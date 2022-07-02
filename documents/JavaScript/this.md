# this
// this  
// 일반(Normal) 함수는 호출 위치에 따라 this 정의!  
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!  

```javascript
const iamtk = {
    name: 'Taekwan',
    normal: function(){              // 익명의 일반 함수 할당
        console.log(this.name)
    },
    arrow: ()=>{
        console.log(this.name)
    }
}

iamtk.normal();  // 소괄호가 붙는다는것은 호출이다
// expected output: Taekwan
iamtk.arrow();
// expected output: undefined

const amy = {
    name: 'Amy',
    normal: iamtk.normal,  // 소괄호가 붙지 않은것은 함수를 할당하는것이다.
    arrow: iamtk.arrow
}

amy.normal();
// expected output: Taekwan
amy.arrow();
// expected output: undefined

```
- normal()은 호출 위치 즉 amy 객체가 this가 된다.




```javascript
function User(name) {
    this.name = name
}

User.prototype.normal = function(){
    console.log(this.name)
}

User.prototype.arrow = ()=>{
    console.log(this.name)
}

const iamtk = new User('Taekwan')
iamtk.normal()
// expected output: Taekwan
iamtk.arrow()
// expected output: undefined

```
- 생성자 함수로 정의하여도 결과는 마찬가지다.




```javascript
const timer = {
    name: 'Iamtk!!',
    timeout: function(){
        // setTimeout(함수,시간)
        setTimeout(function(){
            console.log(this.name)
        },2000)
    }
}

timer.timeout()
// expected output: undefined

```
- setTimout의 함수 매개변수를 일반함수로 정의
- setTimeout에서 호출되기 때문에 this.name은 undefined가 된다.




```javascript
const timer = {
    name: 'Iamtk!!',
    timeout: function(){
        // setTimeout(함수,시간)
        setTimeout(()=>{
            console.log(this.name)
        },2000)
    }
}

timer.timeout()
// expected output: Iamtk!!
```
- setTimout의 함수 매개변수를 화살표 함수로 정의
- setTimeout 함수를 호출하는 곳은 timeout이므로 정상적인 값을불러올 수 있다.
- 즉, 콜백함수는 화살표함수로 쓰는 경우가 더 많다고 한다.
