// Events Practice #2 - Adding Event Listeners to Links
// 1. Select all post title links on the page
// 2. Add an event listener to each link that logs the title of that post when clicked


// Set Variables
let links = document.querySelectorAll('.entry-title a');

// Loop through links and add event listeners
for ( let link of links ) {
	link.addEventListener( 'click', logTitle, false );
}

// Write function to log post title
function logTitle() {
	let e = arguments[0] || event;
	e.preventDefault();
	console.log( e.target.innerText );
}
