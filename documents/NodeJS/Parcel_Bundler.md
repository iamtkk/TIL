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