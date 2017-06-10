// Events Practice #3 - Handling Form Submission
// 1. Get the values from the form when submitted
// 2. Append the new post values as a new post on the page


// Set Variables
let form = document.querySelector('form.add-post');

// Add event listener to form
form.addEventListener( 'submit', addPost, false );

// Function to add post to page
function addPost( event ) {
	let post= {
				title: document.querySelector('input.title-editor').value,
				content: document.getElementById('content-editor').value
			},
			articleEl = document.createElement('article'),
			postMarkup = '',
			mainContentEl = document.getElementById('main');

	event.preventDefault();

	if( '' === post.title || '' === post.content ) {
		alert('Please fill in both fields');
		return;
	}

	// Create post markup
	postMarkup += `<h2 class="entry-title"><a href="#">${post.title}</a></h2>`;
	postMarkup += `<div class="entry-content"><p>${post.content}</p></div>`;

	articleEl.innerHTML = postMarkup;
	articleEl.classList.add( 'post' );
	mainContentEl.appendChild( articleEl );

	clearForm();

}

// Clear the form
function clearForm() {
	document.querySelector('input.title-editor').value = '';
	document.getElementById('content-editor').value = '';
}
