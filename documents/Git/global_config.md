# global_config

## initialize
```console
git config --global core.autocrlf input (mac)  
git config --global core.autocrlf true (windows)
git config --global user.name 'iamtkk'  
git config --global user.email 'iamtkk2@gmail.com'
git config --global --list  
```

## vscode
1. vscode 실행 > 터미널(terminal)
1. git init
1. git branch -M main  // 기본 브랜치를 main으로 변경해준다. 선택사항
1. git remote add origin https://github.com/iamtkk/TIL.git  // 원격저장소를 origin이라는 이름으로 저장. 다른 이름을 써도 정상적으로 동작하지만 origin으로 쓰는것이 관례
1. git push -u origin main // origin이라는 원격저장소의 main 브랜치에 push 한다.