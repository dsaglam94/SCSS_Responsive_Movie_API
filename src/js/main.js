

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
const randomBtn = document.getElementById('random-btn');

// const api_mostPopularMovies_url = 'https://imdb-api.com/en/API/MostPopularMovies/k_lbf73nbh';

// const api_searchMovieTitle_url = 'https://imdb-api.com/en/API/SearchMovie/k_lbf73nbh/'

window.addEventListener('load', () => {

    getMostPopular();

});


searchIcon.addEventListener('click', searchFilter);

let isOpen = false;

function searchFilter(){

    if (!isOpen) {
        searchInput.classList.add('active');
        form.classList.add('active');
        searchIcon.classList.add('active');
        isOpen = true;
    } else if (isOpen) {
        let filterWord = document.forms[0]
        let searchValue = '';
        
            for (let i = 0; i < filterWord.length; i++) {
                if (filterWord[i].checked) {
                    searchValue = searchInput.value;

                    return searchMovietitle(searchValue);
                    // return [filterWord[i].value, searchValue];
                    // console.log(filterWord[i].value);
                    // console.log(searchValue)
                } 
            }
    }
};




async function searchMovietitle(title) {
    try {

        const response = await fetch(api_searchMovieTitle_url+title);
        const data = await response.json();
        // console.log(data)
        showSearchedTitle(data);

    } catch (error) {
        console.error(error);
        console.log('error');
    }
}

function showSearchedTitle(data) {
    main.innerHTML = '';
    // console.log(data.items)

    data.results.forEach(el => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <div class="movie__content">
        <p class="title">${shortenTitle(el.title)}</p>
        <span class="rating ${showColor(el.imDbRating)}">${hasRating(el.imDbRating)}</span>
    </div>
    <div class="movie__poster">
        <img src="${el.image}" alt="${el.title}">
    </div>
    
        `
        main.appendChild(movieEl);
    })
}


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
// Show the most popular movies on the main page 
function showMostPopular(data) {

    main.innerHTML = '';
    // console.log(data.items)

    data.items.forEach(el => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <div class="movie__content">
        <p class="title">${shortenTitle(el.title)}</p>
        <span class="rating ${showColor(el.imDbRating)}">${hasRating(el.imDbRating)}</span>
    </div>
    <div class="movie__poster">
        <img src="${el.image}" alt="${el.title}">
    </div>
    
        `
        main.appendChild(movieEl);
    })

}


// Shorten the title based on the length 
    function shortenTitle(title){
        if (title.length > 14) {
            return title.slice(0, 10) + '...';
        } else {
            return title;
        }
    }
// Shows the color of the rating based on rating number
    function showColor(rating) {
        rating = parseFloat(rating);

        if ( rating >= 8 ) {
            return 'green'
        } else if ( rating >= 5 ) {
            return 'orange'
        } else {
            return 'red';
        }
    }

// Check if ratings exist
function hasRating(ratingNum) {
    if (!ratingNum) {
        return '-'
    } else {
        return ratingNum;
    }
}

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
