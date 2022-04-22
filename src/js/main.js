// const form = document.getElementById('form');
// const search = document.getElementById('search');
// const anotherBtn = document.getElementById('another');

// anotherBtn.addEventListener('click', () => {

//     let value = document.forms[0]
//     let filterWord = '';

//     for (let i = 0; i < value.length; i++) {
//         if (value[i].checked) {
//             filterWord = search.value;
//             console.log(value[i].value);
//             console.log(filterWord)
//         }
//     }




// })

const searchIcon = document.querySelector('.search-icon i');
const searchInput = document.getElementById('search');
const form = document.getElementById('form');
const overviewBtn = document.querySelector('.overview-btn');
const overviewCloseBtn = document.querySelector('.close-btn');
const main = document.querySelector('#main');

const api_mostPopularMovies_url = 'https://imdb-api.com/en/API/MostPopularMovies/k_lbf73nbh';

window.addEventListener('load', () => {

    getMostPopular();

});

async function getMostPopular() {
    try {
        const response = await fetch(api_mostPopularMovies_url);
        const data = await response.json();
        showMostPopular(data);

        // console.log(data.items[0].title);
    } catch (error) {
        console.error(error);
        console.log('error');
    }
}

function showMostPopular(data) {

    main.innerHTML = '';
    console.log(data.items)

    data.items.forEach(el => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <div class="movie__content">
        <p class="title">${el.title}</p>
        <span class="rating">${el.imDbRating}</span>
    </div>
    <div class="movie__poster">
        <img src="${el.image}" alt="${el.title}">
    </div>
    
        `
        main.appendChild(movieEl);
    })

    // <div class="movie__overview">
    //     <div class="movie__overview--header">
    //         <h2>Overview</h2>
    //         <i class="close-btn fas fa-times"></i>
    //     </div>
    //     <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque in maxime! Eveniet quas harum non, laborum provident iure voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius itaque in maxime! Eveniet quas harum non, laborum provident iure voluptas?
    //     </p>
    // </div>
    // <button class="overview-btn" aria-label="shows overview of the movie">
    //     <i class="fas fa-question"></i>
    // </button>
    // console.log(data.items)
}


searchIcon.addEventListener('click', () =>{
    searchInput.classList.toggle('active');
    form.classList.toggle('active');
    searchIcon.classList.toggle('active');
    console.log('hello')
});

// overviewBtn.addEventListener('click', () => {
//     const movieOverview = document.querySelector('.movie__overview');

//     movieOverview.classList.add('active');
//     overviewBtn.style.display = 'none';
// });

// overviewCloseBtn.addEventListener('click', () => {
//     const movieOverview = document.querySelector('.movie__overview');

//     movieOverview.classList.remove('active');
//     setTimeout(() => {
//         overviewBtn.style.display = 'grid';
//     }, 350);
// });
