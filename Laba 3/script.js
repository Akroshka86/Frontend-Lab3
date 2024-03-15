// Функция для проверки фокуса на странице и изменения фона
function checkFocus() {

    // Проверяем, находится ли фокус на странице
    var focused = document.hasFocus();
    var body = document.body;

    if (focused) {
        body.style.backgroundImage = "url('Fon.jpg')";
        //document.getElementById("status").textContent = "TRUE";
    } else {
        body.style.backgroundImage = "url('False.jpg')";
        //document.getElementById("status").textContent = "FALSE";
    }
}

// Вызываем функцию при загрузке страницы и при изменении фокуса
// Событие срабатывает, когда веб-страница полностью загружена
window.onload = checkFocus;

// Событие срабатывает, когда окно браузера становится активным
window.onfocus = checkFocus;

// Событие срабатывает, когда окно браузера теряет фокус
window.onblur = checkFocus;