/********************************
 * Introduction to DOM Events
 * with JavaScript
 * 1.4.1
 *
 *******************************/




























/********************************
 * Track Mouse Movement
 * 1.4.1.1
 *
 *******************************/
//
// var logMousePosition = function() {
//   console.log( event.clientX + ' x ' + event.clientY );
// }
//
// document.addEventListener( 'mousemove', logMousePosition, false );
























/********************************
 * When Mouse Moves Over or
 * Enters an Element
 * 1.4.1.2
 *
 *******************************/

// var child = document.querySelector( '.child' ),
//     mouseOver,
//     mouseEnter,
//     mouseLeave;
//
// mouseOver = function mouseOver() {
//   console.log( 'Mouse over' );
// }
// mouseEnter = function mouseEnter() {
//   console.log( 'Mouse enter' );
//   child.style.cursor = 'wait';
// }
// mouseLeave = function mouseLeave() {
//   console.log( 'Mouse left' );
//   child.style.cursor = 'pointer';
// }
//
// child.addEventListener( 'mouseover', mouseOver );
// child.addEventListener( 'mouseenter', mouseEnter );
// child.addEventListener( 'mouseleave', mouseLeave );
//
//































/********************************
 * Log Keys Pressed and
 * Creating Shortcuts
 * 1.4.1.3
 *
 *******************************/

// var logKeys,
//     updateText,
//     showShortcuts;
//
// logKeys = function(){
//   var keynum;
//
//   if( window.event ) {
//     // For IE
//     key = event.keyCode;
//   } else if( event.which ) {
//     // Other browsers
//     key = event.which;
//   }
//
//   updateText( key, event );
//
//
// }
//
// updateText = function( key ) {
//
//   var textContainer = document.getElementById( 'loggedKeys' ),
//       text = textContainer.textContent;
//
//   console.log( key );
//
//   if ( 3 === key ) {
//
//     console.log( 'Cleared!' );
//     text = '';
//
//   } else if ( 19 === key ) {
//
//     console.log( 'Saved!' );
//
//   } else if ( 32 === key) {
//
//     text += ' ';
//
//   } else {
//
//     text += String.fromCharCode( key );
//
//   }
//
//   textContainer.innerHTML = text;
//
// }
//
//
// showShortcuts = function() {
//
//   var parentEl = document.querySelector( '.parent' ),
//       helpTextEl = document.createElement( 'p' ),
//       helpText = document.createTextNode( 'Shortcuts: Save [crt + s] -- Clear [crt + c]' );
//
//   helpTextEl.appendChild( helpText );
//   parentEl.appendChild( helpTextEl );
//
//
// }
//
// showShortcuts();
// document.addEventListener( 'keypress', logKeys );






























/********************************
 * Scroll to an Element
 * 1.4.1.4
 *
 *******************************/

// var parentEl = document.querySelector( '.parent' ),
//     footer = document.getElementsByTagName( 'footer' )[0],
//     pEl = document.createElement( 'p' ),
//     linkEl = document.createElement( 'a' ),
//     aText = document.createTextNode( 'Scroll to Footer' ),
//     footerY;
//
// footer.style.marginTop = '4000px';
// footerY = footer.getBoundingClientRect().top,
// linkEl.setAttribute( 'href', '#' );
// linkEl.classList.add( 'button' );
// linkEl.appendChild( aText );
// pEl.appendChild( linkEl );
// parentEl.appendChild( pEl );
//
// scrollToFooter = function( event ) {
//
//   // For Chrome
//   // window.scrollBy( 0, footerY );
//   // event.preventDefault();
//
//   // For Firefox
//   window.scrollBy({
//     'left': 0,
//     'top': footerY,
//     'behavior': 'smooth',
//   });
//   event.preventDefault();
//
// };
//
// linkEl.addEventListener( 'click', scrollToFooter );
//
//






























/********************************
 * Form Events
 * 1.4.1.5
 *
 *******************************/


// (function (window, document, undefined) {
//
//   var contactForm = document.getElementById( 'contact' ),
//       parentEl = document.querySelector( '.parent' ),
//       parentHeading = parentEl.querySelector( 'h2' ),
//       childEl = document.querySelector( '.child' );
//
//   childEl.remove();
//   parentHeading.innerText = 'Contact Us';
//   contactForm.style.display = 'block';
//
//   function processForm( event ) {
//
//     //Get all the form data
//     var name = document.getElementsByName( 'name' )[0].value,
//         email = document.getElementsByName( 'email' )[0].value,
//         message = document.getElementsByName( 'message' )[0].value,
//         pEl = document.createElement( 'p' ),
//         thankYouTextNode = document.createTextNode( 'a' ),
//         thankYouMessage = '';
//
// 		// Test that form data is not empty
// 		if( '' === email || '' === message || '' === name  ) {
// 			alert('Please complete all fields!');
// 		} else {
// 			thankYouMessage += 'Hey ';
// 			thankYouMessage += name;
// 			thankYouMessage += '! Thanks for your message :) ';
// 			thankYouMessage += ' We will email you back at ';
// 			thankYouMessage += email;
// 			thankYouMessage += '.';
//
// 			console.log( thankYouMessage );
//
// 			thankYouTextNode.nodeValue = thankYouMessage;
// 			pEl.appendChild( thankYouTextNode );
// 			contactForm.remove();
// 			parentEl.appendChild( pEl );
// 		}
//
//     event.preventDefault();
//
//   };
//
//   contactForm.addEventListener( 'submit', processForm );
//
// })(window, document);



























/********************************
 * Media Events
 * 1.4.1.6
 *
 *******************************/

// var videoContainer = document.getElementById( 'video' ),
//     videoEl = document.querySelector( 'video' ),
//     parentEl = document.querySelector( '.parent' ),
//     playBtn = document.getElementById( 'play' ),
//     pauseBtn = document.getElementById( 'pause' ),
//     restartBtn = document.getElementById( 'restart' ),
// 		forwardBtn = document.getElementById( 'skipForward' ),
//     timestamp = document.getElementById( 'timestamp' );
//
// // Remove parent element and show video container
// parentEl.remove();
// videoContainer.style.display = 'block';
//
// function playVideo() {
//   videoEl.play();
// }
//
// function pauseVideo() {
//   videoEl.pause();
// }
//
// function restartVideo() {
//   videoEl.currentTime = 0;
// }
//
// function skipForward() {
// 	videoEl.currentTime = videoEl.currentTime + 10;
// }
//
// function updateTimestamp() {
//   timestamp.innerHTML = parseInt( videoEl.currentTime );
// }
//
// playBtn.addEventListener( 'click', playVideo );
// pauseBtn.addEventListener( 'click', pauseVideo );
// restartBtn.addEventListener( 'click', restartVideo );
// forwardBtn.addEventListener( 'click', skipForward );
// videoEl.addEventListener( 'timeupdate', updateTimestamp );


// Hash change
//
// (function(window) {
//
//   // exit if the browser implements that event
//   if ( "onhashchange" in window.document.body ) { return; }
//
//   var location = window.location,
//     oldURL = location.href,
//     oldHash = location.hash;
//   // check the location hash on a 100ms interval
//   setInterval(function() {
//     var newURL = location.href,
//       newHash = location.hash;
//
//     // if the hash has changed and a handler has been bound...
//     if ( newHash != oldHash && typeof window.onhashchange === "function" ) {
//       // execute the handler
//       window.onhashchange({
//         type: "hashchange",
//         oldURL: oldURL,
//         newURL: newURL
//       });
//
//       oldURL = newURL;
//       oldHash = newHash;
//     }
//   }, 100);
//
// })(window);





















/********************************
 * Drag and Drop
 * 1.4.1.7
 *
 *******************************/

(function (window, document, undefined) {

var childEl = document.querySelector( '.child' ),
    dragDemo = document.getElementById( 'drag-and-drop-demo' ),
    movable = document.querySelector( '.move' ),
    copyable = document.querySelector( '.copy' ),
    droppable = document.querySelector( '.droppable' ),
    moving,
    copying,
    classes,
    moveableDragStartHandler,
    moveableDragEndHandler,
    droppableEnterHandler,
    droppableLeaveHandler,
    dropHandler;


childEl.remove();
dragDemo.style.display = 'block';

moveableDragStartHandler = function moveableDragStartHandler( event ) {


  if ( event.target.classList.contains( 'copy' ) ) {
    copying = event.target;
  }
  if ( event.target.classList.contains( 'move' ) ) {
    moving = event.target;
    moving.classList.add( 'active' );
  }

  event.dataTransfer.setData( 'text/plain', event.target.classList );

};

moveableDragEndHandler = function moveableDragEndHandler( event ) {

  event.target.classList.remove( 'active' );
  droppable.classList.remove( 'active' );

};

droppableEnterHandler = function droppableEnterHandler( event ) {

  event.preventDefault();
  droppable.classList.add( 'active' );

};

droppableLeaveHandler = function droppableLeaveHandler( event ) {

  droppable.classList.remove( 'active' );

};

dropHandler = function dropHandler( event ) {


  event.preventDefault();
  classes = event.dataTransfer.getData( 'text' );


  if ( classes.indexOf( 'copy' ) > -1 ) {

    newCopy = copying.cloneNode( true );
    droppable.appendChild( newCopy );
    copying = null;

  }

  if ( classes.indexOf( 'move' ) > -1 ) {

    droppable.appendChild( moving );
    moving.classList.remove( 'active' );
    moving = null;

  }

  droppable.classList.remove( 'active' );


};

movable.addEventListener( 'dragstart', moveableDragStartHandler, false );
movable.addEventListener( 'dragend', moveableDragEndHandler, false );

copyable.addEventListener( 'dragstart', moveableDragStartHandler, false );

droppable.addEventListener( 'dragenter', droppableEnterHandler, false );
droppable.addEventListener( 'dragover', droppableEnterHandler, false );
droppable.addEventListener( 'dragleave', droppableLeaveHandler, false );
droppable.addEventListener( 'drop', dropHandler, false );

})(window, document);


































/********************************
 * Simple Lightbox
 * 1.4.1.8
 *
 *******************************/

// var body = document.querySelector( 'body' ),
//     lightboxDemo = document.getElementById( 'lightbox-demo' ),
//     lightboxLinks = document.querySelectorAll( 'a.lightbox' ),
//     wapuuLink = lightboxLinks[0],
//     overlay = document.createElement( 'div' ),
//     overlayCloseLink = document.createElement( 'a' ),
//     overlayCloseText = document.createTextNode( 'X' ),
//     displayOverlay,
//     openLightbox,
//     closeLightBox,
//     addImageToOverlay;
//
// closeLightBox = function closeLightBox( e ) {
//
//   e.preventDefault();
//   overlayCloseLink.removeEventListener( 'click', closeLightBox, false );
//   overlay.querySelector( 'img' ).remove();
//   overlay.remove();
//
// };
//
// displayOverlay = function displayOverlay() {
//
//   overlay.setAttribute( 'id', 'overlay'  );
//   overlayCloseLink.appendChild( overlayCloseText );
//   overlayCloseLink.setAttribute( 'href', '#' );
//   overlayCloseLink.classList.add( 'close' );
//   overlayCloseLink.addEventListener( 'click', closeLightBox, false );
//
//   overlay.appendChild( overlayCloseLink );
//   body.appendChild( overlay );
//   //console.log( 'here' );
//
// };
//
// addImageToOverlay = function addImageToOverlay( img ) {
//
//   overlay.appendChild( img )
//
// }
//
// openLightbox = function openLightbox( e ) {
//
//   e.preventDefault();
//   displayOverlay();
//   addImageToOverlay( e.target.cloneNode() );
//
// };
//
//
//
// wapuuLink.addEventListener( 'click', openLightbox );
//
// lightboxDemo.style.display = 'block';










// End 1.4.1
