// Variables 
const searchIcon = document.querySelector('.search-icon i');
const searchInput = document.getElementById('search');
const form = document.getElementById('form');
const overviewBtn = document.querySelector('.overview-btn');
const overviewCloseBtn = document.querySelector('.close-btn');
const main = document.querySelector('#main');
const randomBtn = document.getElementById('random-btn');
const movieDetails = document.querySelector('.movie-details');
let searchPlaceholder = document.getElementsByName('search')[0].placeholder;

// dsaglam94 API Key k_lbf73nbh 

// dsaglam95 API Key k_9bavb3k2

// dsaglam96 API Key k_yq4s0foq

const api_mostPopularMovies_url = 'https://imdb-api.com/en/API/MostPopularMovies/k_lbf73nbh ';
const api_top250Movies_url = 'https://imdb-api.com/en/API/Top250Movies/k_lbf73nbh ';

const titleApiBase = 'https://imdb-api.com/API/AdvancedSearch/k_lbf73nbh?title=';
const genreApiBase = 'https://imdb-api.com/API/AdvancedSearch/k_lbf73nbh?genres=';
const ratingApiBase = 'https://imdb-api.com/API/AdvancedSearch/k_lbf73nbh?user_rating=';
const top_1000Movies = '&groups=top_1000';

// Get the movies on page load
window.addEventListener('load', () => {

    getMostPopular();
    getTop250Movies();

});

// Creating DOM elements dynamically. It is not possible to add eventlistener to something not exist.
// Body listens for click and checks if the condition is true
// If yes, event happens

// added flag to check whether the movie details UI open or not
// it is needed also for the random button to open/close the UI
let isMovieDetailsOpen = false;

document.body.addEventListener('click', (e) => {

   if (e.target.id === 'movie__img') {
       let data = e.target.alt
        getMovieDetails(data);
        movieDetails.style.display = 'block';
        isMovieDetailsOpen = true;
        document.querySelector('body').style.overflowY = 'hidden';
   } else if (e.target.id === 'movieDetails__close-btn') {
        movieDetails.style.display = 'none';
        isMovieDetailsOpen = false;
        document.querySelector('body').style.overflowY = 'scroll';
   } else if (e.target.value === 'title') {
        changePlaceholderTitle();
   } else if (e.target.value === 'genre') {
        changePlaceholderGenre();
   } else if (e.target.value === 'rating') {
        changePlaceholderRating();
   }
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
                if (filterWord[i].checked && filterWord[i].value === 'title') {
                    searchValue = searchInput.value;
                    return searchMovietitle(searchValue);
                } else if (filterWord[i].checked && filterWord[i].value === 'genre') {
                    searchValue = searchInput.value;
                    return searchMovieGenre(searchValue);
                } else if (filterWord[i].checked && filterWord[i].value === 'rating') {
                    searchValue = searchInput.value;
                    console.log(searchValue)
                    return searchMovieRating(searchValue);
                }
            }
    }
};

// Change the placeholder text 
// CHanges according to selected radio button's value
// First gotta clear the text written. Or it doesn't show the new text
function changePlaceholderGenre() {
    searchInput.value = '';
    searchInput.placeholder = 'action,drama,mystery';
}

function changePlaceholderRating() {
    searchInput.value = '';
    searchInput.placeholder = '1.0,8.9';
}

function changePlaceholderTitle() {
    searchInput.value = '';
    searchInput.placeholder = 'lord-of-the-rings';
}



// Search with 'tittle'
async function searchMovietitle(title) {
    try {

        const response = await fetch(`${titleApiBase}${title}${top_1000Movies}`);
        const data = await response.json();
        // console.log(data)
        showSearchedMovie(data);

    } catch (error) {
        console.error(error);
        console.log('error');
    }
}

// Search with 'genre'
async function searchMovieGenre(genre) {
    try {

        const response = await fetch(`${genreApiBase}${genre}${top_1000Movies}`);
        const data = await response.json();
        // console.log(data)
        showSearchedMovie(data);

    } catch (error) {
        console.error(error);
        console.log('error');
    }
}

// Search with 'rating'
async function searchMovieRating(rating) {
    try {

        const response = await fetch(`${ratingApiBase}${rating}${top_1000Movies}`);
        const data = await response.json();
        // console.log(data)
        showSearchedMovie(data);

    } catch (error) {
        console.error(error);
        console.log('error');
    }
}
// Show the searched movies on the main page 
function showSearchedMovie(data) {
    const popularMovies = document.querySelector('.popular-movies');
    
    popularMovies.innerHTML = '';
    // console.log(data.items)

    data.results.forEach(el => {
        // const popularMovies = document.querySelector('.popular-movies');
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML += `
        <div class="movie__poster">
            <img id="movie__img" src="${el.image}" alt="${el.id}">
        </div>
        <div class="movie__content">
        <p class="title">
            ${shortenTitle(el.title)}
        </p>
            <span class="rating ${showColor(el.imDbRating)}">
                ${hasRating(el.imDbRating)}
            </span>
        </div>
        `
        popularMovies.appendChild(movieEl);
    })
}

// Bring a random movie 
randomBtn.addEventListener('click', bringRandomMovie);

function bringRandomMovie() {
    if (!isMovieDetailsOpen) {
        movieDetails.style.display = 'block';
        isMovieDetailsOpen = true;
        document.querySelector('body').style.overflowY = 'hidden';
    } else {
        movieDetails.style.display = 'none';
        isMovieDetailsOpen = false;
        document.querySelector('body').style.overflowY = 'scroll';
    }

    fetch(api_mostPopularMovies_url)
        .then(response => response.json())
        .then(data => {
            let movieId = data.items[getRandomNumber()].id;
            console.log(movieId)
            getMovieDetails(movieId);
        });
}

// Data comes when the user clicks on poster images. 
// Images return valid IMDb ID
// For now I had to attach the ID to "alt attribute" so it's not shown in the UI but still reachable
// Then fetch the data needed through this ID
async function getMovieDetails(data) {
    const url = `https://imdb-api.com/en/API/Title/k_lbf73nbh/${data}/Trailer,`;
    
    try {
        const response = await fetch(url);
        const newData = await response.json();
        showMovieDetails(newData);
        console.log(newData);
        
    } catch (error) {
        console.error(error);
        console.log('Movie Details Error');
    }

}

// Create necessary elements in DOM and append them in the existing element
// Show the movie details 
function showMovieDetails(data) {
    // console.log(data)
    // console.log(data.trailer.linkEmbed)
    const movieDetailsContainer = document.querySelector('.movie-details__container');
    const videoLink = data.trailer.linkEmbed;

    movieDetailsContainer.innerHTML = `
    <div class="close-btn">
        <i id="movieDetails__close-btn" class="fas fa-times"></i>
    </div>
            <div class="movie__info">
                <div class="movie__poster">
                    <img src="${data.image}" alt="">
                </div>
                <div class="movie__info--text">
                    <div class="title">
                        <span>Title:</span>
                        <h1>${data.title}</h1>
                    </div>
                    <div class="crew">
                        <span>Crew: </span>
                        <p>${data.stars}</p>
                    </div>
                    <div class="sub-info">
                        <div class="left-col">
                            <div class="rating">
                                <span>rating: </span>
                                    <p class="${showColor(data.imDbRating)}">
                                        ${data.imDbRating}
                                    </p>
                            </div>
                            <div class="year">
                                <span>Year: </span>
                                <p>${data.year}</p>
                            </div>
                        </div>
                        <div class="right-col">
                            <div class="director">
                                <span>Director: </span>
                                <p>${data.directors}</p>
                            </div>
                            <div class="genres">
                            <span>Genres: </span>
                            <p>
                                ${data.genres}
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <p class="plot">
                ${data.plot}
            </p>
                <iframe src="${videoLink}" title="IMDb video trailer" frameborder="0" allowfullscreen>
                </iframe>
            
    `
}


async function getTop250Movies() {
    try {
        const response = await fetch(api_top250Movies_url);
        const data = await response.json();
        showTop250Movies(data);

        // console.log(data.items[0].title);
    } catch (error) {
        console.error(error);
        console.log('Top 250 Movies Error');
    }
}

// Create necessary elements in DOM and append them in the existing element
// Show the most popular movies on the main page 
function showTop250Movies(data) {

    // console.log(data.items)

    data.items.forEach(el => {
        const slides = document.querySelector('.slides');

        slides.innerHTML += `
        <div class="slide swiper-slide">
                    <div class="top-movies__poster">
                        <img id="movie__img" src="${el.image}" alt="${el.id}">
                    </div>
                    <div class="top-movies__content">
                        <p class="title">
                            ${shortenTitle(el.title)}
                        </p>
                        <span class="rating ${showColor(el.imDbRating)}">${hasRating(el.imDbRating)}</span>
                    </div>
                </div>
        `
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
// Create necessary elements in DOM and append them in the existing element
// Show the most popular movies on the main page 
function showMostPopular(data) {

    data.items.forEach(el => {
        const popularMovies = document.querySelector('.popular-movies');
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML += `
        <div class="movie__poster">
            <img id="movie__img" src="${el.image}" alt="${el.id}">
        </div>
        <div class="movie__content">
        <p class="title">
            ${shortenTitle(el.title)}
        </p>
            <span class="rating ${showColor(el.imDbRating)}">
                ${hasRating(el.imDbRating)}
            </span>
        </div>
        `
        popularMovies.appendChild(movieEl);
    })

}

// Here is the helper functions for small tasks

// get random number
    function getRandomNumber() {
        return Math.floor((Math.random() * 100) + 1);
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

let swiper = new Swiper(".top-movies__swiper", {
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        400: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
        1300: {
            slidesPerView: 6,
        },
        1480: {
            slidesPerView: 8,
        }
      },
  });

 