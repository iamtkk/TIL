# 1대의 PC에서 gitlab과 github의 name, email을 구분하여 관리하는 방법
## 배경
- 업무로 사용하는 gitlab과 개인적으로 사용하는 github를 사용자를 구분하여 push하는 방안이 필요
- 업무용 PC에서 설정하는 것이기 때문에 기본적인 설정은 --global로 유지해야 한다
## includeIf 활용
~/.gitconfig
```
[includeIf "gitdir:~/TIL/"]
    path = ~/TIL/.gitconfig
```
- gitdir이 TIL일 경우 ~/TIL/.gitconfig을 사용한다

~/TIL/.gitconfig
```
[user]
    name = iamtkk
    email = iamtkk2@gmail.com
```
- TIL에서 작업되는 디렉토리는 github용 유저가 등록된다.

## ssh config를 설정하여 도메인별 ssh key 분기
~/.ssh/config
```
host github.com
   HostName github.com
   User git
   IdentityFile ~/.ssh/github_iamtkk
```
- host가 매칭이 되면 지정한 ssh private key를 사용하여 ssh 접속을 시도한다.