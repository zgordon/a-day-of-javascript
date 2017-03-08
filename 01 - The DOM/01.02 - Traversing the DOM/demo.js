// DOM Practice #2 - Traversing the DOM
// 1. Select the parent element for the first post title
// 2. Select the first post, then log out next sibling post
// 3. Select the main post container and log out it’s children

// Set Variables
let firstPostTitleLink = document.querySelector('article.post .entry-title a'),
		firstPostTitleHeader = document.querySelector('article.post .entry-title'),
		firstPostTitleLinkParent = firstPostTitleLink.parentElement,
		firstPostTitleHeaderParent = firstPostTitleHeader.parentElement,
		firstPost = document.querySelector('article.post'),
		mainContentEl = document.getElementById('main');

// Log Values
console.log( firstPostTitleLink );
console.log( 'First Post Title Parent', firstPostTitleLinkParent, firstPostTitleHeaderParent );
console.log( 'First Post Sibling', firstPost.nextElementSibling );
console.log( 'Main Content Children', mainContentEl.children );
// Same data as a above, just using a loop below
for( let child of  mainContentEl.children ) {
	console.log( child );
}
