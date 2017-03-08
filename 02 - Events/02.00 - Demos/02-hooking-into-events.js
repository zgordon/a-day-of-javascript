// Inline Event Handler in HTML
// <a href="#" onclick="console.log('Clicked');">Link</a>
//
// Event Listener in JS
let link = document.querySelector( 'p.into a' );

link.addEventListener( 'click', sayHi, false );

function sayHi() {
	console.log( 'Hi!' );
}
