/**
 *
 * *Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
 * *у локальне сховище і змінюй кнопку login на logout і роби поля введення
 * *недоступними для зміни.
 *
 * *Якщо введені дані не збігаються з потрібними даними, викликати аlert і
 * *повідомляти про помилку.
 *
 * *При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
 * *та недоступні для зміни поля з даними користувача.
 *
 * *Клік по кнопці logout повертає все в початковий вигляд та видаляє дані користувача
 * *З локального сховища.
 *
 */

/**
 *
 * *Если имейл и пароль пользователя совпадают, при саммите сохраняй данные из формы
 * *в локальное хранилище и меняй кнопку login на logout и делай поля ввода
 * *недоступны для изменения.
 *
 * *Если введенные данные не совпадают с нужными данными, вызвать аlert и
 * *сообщать об ошибке.
 *
 * *При перезагрузке страницы, если пользователь залогинен, мы должны видеть logout-кнопку
 * *и недоступны для изменения поля с данными пользователя.
 *
 * *Клик по кнопке logout возвращает все в первоначальный вид и удаляет пользовательские данные
 * *Из локального хранилища.
 *
 */


const emailEl = document.querySelector('[name="email"]');
const passwordEl = document.querySelector('[name="password"]');
const buttonEl = document.querySelector('[name="button"]');

const SAVED_LOGIN_DATA = "SAVED_LOGIN_DATA";
const USER_DATA = {
  email: "user@mail.com",
  password: "secret",
};



const formEl = document.querySelector('#login-form');
formEl.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const {
    elements: { email, password, button },
  } = evt.currentTarget;
  if (button.textContent === 'Login') {
    if (email.value.trim() === USER_DATA.email && password.value.trim() === USER_DATA.password) {
      const data = { email: email.value.trim(), password: password.value.trim() };
      localStorage.setItem('userData', JSON.stringify(data));
      email.disabled = true;
      password.disabled = true;
      button.textContent = "logout";
    } else {
      alert('One more time!')
    }
  }
  else {
    localStorage.removeItem("userData");
    formEl.reset();
    emailEl.disabled = false;
    passwordEl.disabled = false;
    buttonEl.textContent = "login";


  }
})


function checkStorage() {
  const localUserData = JSON.parse(localStorage.getItem('userData'))
  if (localUserData) {
    emailEl.value = localUserData.email;
    passwordEl.value = localUserData.password;
    emailEl.disabled = true;
    passwordEl.disabled = true;
    buttonEl.textContent = "logout";
  }
}
checkStorage();



