// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      // username.innerText는 document.querySelector('#username');에서 가져온 객체의 text 값이다.
      // 현재는 빈값이지만 user[0].name으 대입하여 화면에 출력한다. 
      email.innerText = user[0].email;
      address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
