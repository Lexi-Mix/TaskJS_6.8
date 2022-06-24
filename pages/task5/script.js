document.querySelector('#text').addEventListener('input', function () {
    document.querySelector('#duplicateField').textContent = text.value;
});

document.querySelector('#button').onclick = function () {
    event.preventDefault();
    console.log(document.querySelector('#text').value);
    document.querySelector('#text').value = '';
    document.querySelector('#duplicateField').textContent = 'Посмотрите в консоль - ваш текст там.';
}