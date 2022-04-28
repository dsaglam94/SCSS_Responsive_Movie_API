# Movie_API

## Why this project?

I started this project to test my knowledge for web development and see what I can accomplish on my own. Since my learning journey's begun, I learned, practiced and created many projects. But so far this one is the most challenging of them all.

> Through my journey, I understood that the best way to learn is breaking, creating, trying stuff on your own.

Disclamer: I am still learning. The code I am writing can be fatal for your eyes or the logic might give you headaches. Therefore I am always open for constructive criticism.

## What will the project be like at the end

The user should be able to:

- See 'Top 250 Movies' fetched from IMDb API in a carousel
- See 'The Most Popular' movies fetched from IMDb API on the main page
- Check the movie details when click on the poster image
- See the trailer of the movie
- Search a movie via its 'title', 'genre' or 'rating'
- Have a random film suggestion

### The challenges I've come across so far

1. Creating DOM elements dynamically via JS brings a different problem.

Since the DOM element doesn't exist at first, it is not possible to add 'event listener' to a button or an element to have it behave.

> Solution for this problem can be found in this [link](https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript)

So I learned about 'event delegation'. The solution is to have 'body' to listen and check if certain condition is met. If the element has been clicked has a certain ID, do something. If not, ignore.

2. For filtering the search terms, I used 'radio buttons'. But didn't really know how to get the value from them.

> Solution for this problem can be found in this [link](https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button)

It seemed tricky at first but using a simple for loop solved the problem.

here is the code snippet:

```
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
```

3. Top 250 movies or the most popular movies IMDb APIs don't have any 'trailer', 'genres' and'director' datas in them.

> Problem: I need these datas in order to show them inside the movie details UI.
> Solution: IMDb API has a 'trailer' endpoint which has everything I need.

Once I show the most popular movies and top 250 movies on the page, the user can click the images. When it's clicked, it takes the valid IMDb ID (tt1234567) and put it inside the trailer API.

- The movie details are shown via another IMDb API. I managed to chain them.

4. Random film suggestion, I had to figure out a way to make it random.

To bring the data from the API, I need to use a valid IMDb ID. It starts with 'tt' but the numbers after that is unique. So randomizing it was problematic.

> Solution: I used the 'The Most Popular Movies' API to get the valid ID. Created a helper function which generates random number between 0 and 100. Once the user clicks the random button, it picks a random movie's ID and hands it to 'trailer' APIs. And then it calls the movie details UI to show the movie.

This one was the most challenging issue so far. Figuring out how to make it work taught me a good amount of valuable knowledge.

4. The user should be informed about the keyword search style or else the filter term won't work.

I didn't know how to change the placeholder text inside the input area. So a little googling helped me.

This little code snippet is all needed. I created helper functions to dynamically change the text according to the user selection.

```
document.getElementsByName("email")[0].value="";
document.getElementsByName("email")[0].placeholder="your message";
```

#### Here is the useful resources

> API I used

- [IMDb](https://imdb-api.com/api)

> Blog posts for my problems

- [Event-delegation](https://davidwalsh.name/event-delegate)
- [Return-response-from-asyc](https://stackoverflow.com/questions/14220321/how-to-return-the-response-from-an-asynchronous-call)
- [Change-placeholder-text](https://stackoverflow.com/questions/13506481/change-placeholder-text)
