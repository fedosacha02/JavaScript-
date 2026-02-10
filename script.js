/* Завдання на урок:

1) Видалити всі рекламні блоки зі сторінки (права частина сайту)

2) Змінити жанр фільму, поміняти "комедія" на "драма"

3) Змінити заднє тло постера з фільмом на зображення "bg.jpg". Воно лежить у папці img.
Реалізувати лише за допомогою JS

4) Список фільмів на сторінці сформувати на підставі даних із цього JS файлу.
Сортувати за алфавітом

5) Додати нумерацію виведених фільмів */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
document.getElementsByClassName("promo__adv")[0].remove();
// 2
document.getElementsByClassName("promo__genre")[0].innerText = "ДРАМА";

// 3
document.getElementsByClassName("promo__bg")[0].style.background = 'url("../img/bg.jpg") center center/cover no-repeat';

// 4, 5
const items = document.getElementsByClassName('promo__interactive-item');

Array.from(items).forEach((item, index) => item.innerText = `${index + 1}) ${movieDB.movies.sort()[index]}`);


