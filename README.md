# Movie_API

## Why this project?

I started this project to test my knowledge for web development and see what I can accomplish on my own. Since my learning journey's begun, I learned, practiced and created many small and big projects. But so far this one is the most challenging of them all.

> Through my journey, I understood that the best way to learn is breaking, creating, trying stuff on your own.

## What will the project be like at the end

The user should be able to see and check:

- Top 250 movies fetched from IMDb API in a carousel
- The most popular movies fetched from IMDb API on the main page
- The movie details when click on the poster image
- The trailer of the movie

also the user will be able to:

- Search a movie via its 'title', 'genre' or 'rating'
- Have a random film suggestion

### The challenges I've come across so far

1. Creating DOM elements dynamically via JS brings a different problem.

Since the DOM element doesn't exist at first, it is not possible to add 'event listener' to a button or an element to have it behave.

> Solution for this problem can be found in this [link](https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)

So I learned about 'event delegation). The solution is to have 'body' to listen and check if certain condition is met. If the element has been clicked has a certain ID, do something. If not, ignore.

2. For filtering the search terms, I used 'radio buttons'. But didn't really know how to get the value from them.

> Solution for this problem can be found in this [link](https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button)

It seemed tricky at first but using a simple for loop solved the problem.

3. IMDb API doesn't have everything I need. Ex: Trailer for each movie.

I have to use a different API which is called OMDb and combine it with IMDb API but so far I haven't tried. I will update this part later on.

#### Here is the useful resources

> API I used

- [IMDb](https://imdb-api.com/api)
- [OMDb](http://www.omdbapi.com/)

> Blog posts for my problems

- [Event-delegation](https://davidwalsh.name/event-delegate)
