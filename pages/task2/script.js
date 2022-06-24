document.querySelector('#consoleLog').addEventListener('click', function () {
    alert('Метод для вывода сообщения в консоль');
    document.querySelector('#ExampleConsoleLog').textContent = "Пример использования команды console.log: console.log('Какой-то текст');";
})
document.querySelector('#alert').addEventListener('click', function () {
    alert('Метод для вывода сообщения в браузере');
    document.querySelector('#ExampleAlertLog').textContent = "Пример использования команды alert(): alert('Какой-то текст');";
})
document.querySelector('#prompt').addEventListener('click', function () {
    alert('Метод для вывода запроса на ввод какой-то информации пользователем');
    document.querySelector('#ExamplePromptLog').textContent = "Пример использования команды prompt(): prompt('Введите какой-то текст');";
})