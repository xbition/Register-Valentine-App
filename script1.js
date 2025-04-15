<script>
  const form = document.getElementById('registrationForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const usernameError = document.getElementById('usernameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Сброс сообщений об ошибках
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    let isValid = true;

    // Проверка имени пользователя
    if (username.value.trim() === '') {
      usernameError.textContent = 'Введите имя пользователя.';
      isValid = false;
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailError.textContent = 'Введите корректный email.';
      isValid = false;
    }

    // Проверка пароля
    if (password.value.length < 6) {
      passwordError.textContent = 'Пароль должен быть не менее 6 символов.';
      isValid = false;
    }

    // Если все данные валидны
    if (isValid) {
      successMessage.textContent = 'Регистрация прошла успешно!';
      setTimeout(() => {
        // Перенаправление на указанный сайт
        window.location.href = 'https://xbition.github.io/Valentine-dayApp/';
      }, 2000); // Через 2 секунды после сообщения об успехе
    }
  });
</script>