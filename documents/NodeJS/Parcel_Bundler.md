# parcel-bundler
## 사용 용도
- vscode에서 개발코드를 웹브라우저로 확인할때 Open with Live Server 플러그인을 활용하곤 하는데 이는 현재 legacy한 방법이다.
- 최신의 웹프론트 개발환경에서는 parcel-bundler를 많이 사용한다.

## 사전준비
index.html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./main.js"></script>
</head>
<body>
    
</body>
</html>
```
main.js
```javascript
console.log('Hello World!')
```
## parcel-bundler 실행
- vscode > terminal > parcel index.html을 실행하면 오류가 발생
  - 'parcel'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.
  - 명령어 실행이 실패하는 이유는 parcel 모듈은 npm_test 프로젝트 하위에 설치 된것이기 때문에 운영체제 자체에 설치되거나 path가 잡혀있는것이 아니기 때문이다.
- 이를 해결하기 위해서는 Project내의 package.json의 script에서 명령어를 실행할 수 있게 정의해준다.
```json
"scripts": {
    "dev": "parcel index.html"
  },
```
package.json
```json
{
  "name": "node_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```
- scripts가 정의가 되었다면 terminal 창에서 npm run 명령어로 실행을 해준다.
```shell
C:\TIL\node_test>npm run dev

> node_test@1.0.0 dev C:\TIL\node_test
> parcel index.html

Server running at http://localhost:1234
√  Built in 5.06s.
```
- 정상적으로 실행이 된다면 http://localhost:1234라는 주소로 서버가 실행이 된다.
- 해당 주소를 웹브라우저로 접근하면 된다.

# Lodash
## lodash import 선언
main.js
```javascript
import _ from 'lodash';  // lodash라는 모듈을 _라는 이름으로 import

console.log('hello world');
console.log(_.camelCase('hello world')); // 메서드 위치 : node_test/node_modules/lodash/camelCase.js
```

## package.json에 build script 정의
```json
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
```
- dev는 개발환경에서 사용
- build는 실제 환경에 배포할때 사용된다

package.json
```json
{
  "name": "node_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel-bundler": "^1.12.5"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```
- build 명령을 실행하기 위해 vscode terminal 실행 (dev에서 실행했던 서버가 떠있다면 종료해준다 ctrl+c)
```shell
C:\TIL\node_test>npm run build

> node_test@1.0.0 build C:\TIL\node_test
> parcel build index.html

√  Built in 10.17s.

dist\main.51c917c4.js.map    715.83 KB     55ms
dist\main.51c917c4.js         92.81 KB    5.58s
dist\index.html                  221 B    4.43s
```
- dev처럼 서버가 실행이 되지 않고, 서비스에 필요한 난독화된 파일
들이 dist 디렉토리에 생성된다.
- dist 파일을 netlify 같은 서비스와 연결하여 유저에게 서비스를 제공한다.
- 코드 난독화는 작성된 코드를 읽기 어렵게 만드는 작업을 말한다.
- 빌드된 결과(제품)는 브라우저에서 해석되는 용도로, 용량을 축소하고 읽기 어렵게 만드는 등의 최적화를 거치는 것이 좋다.

## 번들 (Bundle)
- 우리가 프로젝트 개발에 사용한 여러 모듈(패키지)을 하나로 묶어내는 작업을 말합니다.
