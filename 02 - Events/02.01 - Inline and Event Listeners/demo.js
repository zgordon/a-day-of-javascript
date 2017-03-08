// Events Practice #1 - Event Listeners
// 1. Add an event listener to a link that logs out a message when clicked

// Set Variables
let link = document.querySelector('a.listener');

// Add event listener
link.addEventListener( 'click', sayHi, false );

function sayHi() {
	console.log( 'Event listener working' );
}
