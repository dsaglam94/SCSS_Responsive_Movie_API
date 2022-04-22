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

searchIcon.addEventListener('click', () =>{
    searchInput.classList.toggle('active');
    form.classList.toggle('active');
    searchIcon.classList.toggle('active');
    console.log('hello')
});

overviewBtn.addEventListener('click', () => {
    const movieOverview = document.querySelector('.movie__overview');

    movieOverview.classList.add('active');
    overviewBtn.style.display = 'none';
});

overviewCloseBtn.addEventListener('click', () => {
    const movieOverview = document.querySelector('.movie__overview');

    movieOverview.classList.remove('active');
    setTimeout(() => {
        overviewBtn.style.display = 'grid';
    }, 350);
});
