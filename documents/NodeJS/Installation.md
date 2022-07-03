# NodeJS와 Package Manager 설치
- NodeJS version은 ```NVM``` (Node Version Manager)으로 관리한다.
- Package는 ```NPM``` (Node Package Manager)으로 관리하는것을 기본으로 한다.
  - npm은 NodeJS가 설치될때 같이 자동으로 된다.
  - npm 대신 ```yarn```이라는 패키지 매니저가 있는데 사용하지 않고 npm을 통일한다.
  - 단 기존 프로젝트에 yarn.lock 파일이 존재한다면 어쩔수 없이 사용한다.

## nvm 기본 명령어
```console
nvm ls available    // 설치가능한 버전의 목록을 보여준다. nvm list의 약어이다.
nvm install 16.13.2 // nvm install lts
nvm ls
sudo nvm use 16.13.2
node --version
```

## npm 패키지 관리자 업데이트
NodeJS 설치후 최초 한번 실행
```console
npm install --global npm
# 또는 npm i -g npm

npm --version
```

## yarn 설치
```console
# 주의! NodeJS 설치 버전마다 따로 설치 필요
npm i -g yarn
yarn --version
```