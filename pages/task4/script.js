let UserTextLink = document.querySelector('#link');
UserTextLink.addEventListener('click', function () {
    event.preventDefault();
    this.textContent = prompt('Ввведите текст который заменит текст ссылки:');
    alert('Был заблокирован переход на yandex.ru, нажми ОК для изменения текста ссылки');
})