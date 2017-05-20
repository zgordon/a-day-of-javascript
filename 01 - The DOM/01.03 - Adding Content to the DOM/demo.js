// DOM Practice #3 - Creating and Appending HTML
// 1. Create a post with markup using JavaScript
// 2. Append post to the list of other posts on the page


// Set Variables
let post = {
      title: 'New Post',
      content: 'Get it going!!!'
    },
    articleEl = document.createElement('article'),
    postMarkup = '',
    mainContentEl = document.getElementById('main');

// Create post markup
postMarkup += `<h2 class="entry-title"><a href="#">${post.title}</a></h2>`;
postMarkup += `<div class="entry-content"><p>${post.content}</p></div>`;

  // Indent

articleEl.innerHTML = postMarkup;
articleEl.classList.add( 'post' );
mainContentEl.appendChild( articleEl );

console.log( articleEl );
