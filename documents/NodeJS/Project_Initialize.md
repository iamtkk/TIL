# NodeJS 개발을 위한 프로젝트 기본설정
# Project 디렉토리 생성
```shell
mkdir node_test
cd node_test
npm init -y
```
- init을 하게 되면 package.json 파일이 자동으로 생성된다.

# .gitignore
```json
node_modules
```
- npm init을 실행했던 최상위 디렉토리에 .gitignore 파일을 생성해준다


# package.json
```json
{
  "name": "node_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
1. name : project의 이름. 초기에는 디렉토리명으로 자동으로 입력 (필수)
1. version : 버전 (필수)
1. main : 진입점(entrypoint). 프로그램의 시작점이 되는 모듈의 ID이다. 패키지를 npm에 업로드할때 사용되기 때문에 단순 웹사이트 개발시에는 필요하지 않다. (삭제)
1. scripts : 프로젝트 내부에서 사용가능한 스크립트 명령  

# parcel-bundler 설치
```shell
npm install parcel-bundler -D
```
- 명령어 실행 이후 node_modules 디렉토리와 package-lock.json 파일이 생성된다.
- node_modules 안에는 parcel-bundler와 연관이 되어 있는 모듈들이 자동으로 설치된다. 
  - node_modules/parcle-bundler/package.json > dependencies에 의존성 패키지 목록이 기록되어 있다
- ./package.json
  - devDependencies
    - 설치한 패키지의 내역이 버전과 함께 기록된다.
    - "parcel-bundler": "^1.12.5"

# lodash 설치
```shell
npm install lodash
```
- -D 옵션이 없이 일반 의존성 패키지로 설치
- ./package.json
  - dependencies
    - "lodash": "^4.17.21"

# package.json의 역할
1. npm install 통해 package.json에 현재 관리되는 패키지의 목록이 파일에 업데이트 된다
1. package.json 파일만 있다면 node_modules 디렉토리는 삭제되어도 npm install 명령어로 다시 설치가 가능하다.
1. package.json은 필요한 패키지의 명세서와 같은 역할을 하고, 모듈 설치는 명세에 따라 자동으로 진행된다

# package-lock.json의 역할
1. package.json에서 명시적으로 지정한 패키지와 의존성이 있는 파일을 자동으로 업데이트하여 준다
1. package.json은 직접관리 필요
1. package-lock.json은 package.json에 의존하여 자동으로 관리되는 파일
1. package.json과 package-lock.json 파일은 삭제되면 안됨
    1. node_modules 디렉토리는 삭제되어도 package.json으로 재생성 가능

# 개발용 의존성 패키지 설치 (-D, --save-dev)
1. 설치한 패키지들이 개발할때만 필요하고 웹서비스 할때는 필요하지 않다는 뜻
    1. ex) parcle-bundler의 경우에는 개발용도로만 사용이된다.
1. 일반 의존성 설치
    1. 서비스를 위해서, 즉 웹브라우저에서도 동작할 수 있다
    1. ex) lodash
