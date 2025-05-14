/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

const promoAdv = document.querySelector(".promo__adv"),
    ads = promoAdv.querySelectorAll("img"),
    promoBg = document.querySelector(".promo__bg"),
    promoGenre = promoBg.querySelector(".promo__genre"),
    promoList = document.querySelector(".promo__interactive-list");

ads.forEach(item => {
    item.remove();
});

promoGenre.textContent = "ДРАМА";

promoBg.style.background = "url('img/bg.jpg') center top / cover no-repeat";

promoList.innerHTML = "";

const sortedMovies = movieDB.movies.slice().sort();

sortedMovies.forEach((item, i) => {
    promoList.insertAdjacentHTML("beforeend", `
        <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>
    `);
});