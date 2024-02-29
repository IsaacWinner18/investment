const checkCre = () => {

const username = document.querySelector('#username').value;
const password = document.querySelector('#password').value;
const mssg = document.querySelector('#mssg')

if (username === 'username' && password === 'password') {
    window.location.href= 'second.html'
}
else {
    mssg.style.display = 'block';
}

}