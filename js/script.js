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

promoBg.style.backgroundImage = "url('img/bg.jpg')";

promoList.innerHTML = "";

const sortedMovies = movieDB.movies.slice().sort();

sortedMovies.forEach((item, i) => {
    promoList.insertAdjacentHTML("beforeend", `
        <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>
    `);
});