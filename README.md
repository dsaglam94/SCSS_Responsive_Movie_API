<div align="center">
  
  # myMovie Web-App
  ## [Click Here](https://dsaglam94.github.io/SCSS_Responsive_Movie_API/) for live site



https://user-images.githubusercontent.com/98871279/171643247-925373ea-09eb-4aa6-b09f-34fd2e3fb019.mov


</div>
  
  ## How it's made:
  <strong>Tech used:</strong> HTML5, SCSS, Vanilla JavaScript

I started this project to test my knowledge for web development and see what I can accomplish on my own. Since my learning journey's begun, I learned, practiced and created many projects. This was one of the most challenging ones. I built and designed the website from scratch. 

## Lessons Learned:

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

## My different projects:

Take a look at these couple of examples that I have in my portfolio:

<strong>Crowd Web-App:</strong> https://github.com/dsaglam94/Crowd_reactApp_deploy

<strong>Todolist - ReactJs:</strong> https://github.com/dsaglam94/React_TodoList_App

<strong>ESLCanvas:</strong> https://github.com/dsaglam94/imgCanvas_forESL
