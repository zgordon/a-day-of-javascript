// Practice selecting following elements and logging to console:
// 1. Main content body
// 2. First post title
// 3. First post content
// 4. All post titles

// Set Variables
let mainContentEl = document.getElementById('main'),
		post1 = {
			title: document.querySelector('article.post .entry-title a'),
			content: document.querySelector('article.post .entry-content')
		},
		postTitles = document.querySelectorAll('article.post .entry-title a');

// Log Values
console.log( 'Main Content:', mainContentEl );
console.log( 'First Post Title: ', post1.title.innerText );
// See difference between innerText and innerHTML
console.log(  'First Post Content: ', post1.content.innerText );
console.log(  'First Post Content: ', post1.content.innerHTML );
console.log( 'List of Posts: ' );
for( let title of postTitles  ) {
	console.log( title.innerText );
}
