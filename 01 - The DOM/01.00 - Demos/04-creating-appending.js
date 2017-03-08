// let li = document.createElement( 'li' ),
// 		liText = document.createTextNode( 'New text!!!' ),
// 		liFrag = document.createDocumentFragment(),
// 		ul = document.getElementsByTagName( 'ul' )[0];
//
// li.appendChild( liText );
// ul.appendChild( li );

let mainContentEl = document.getElementById( 'main' ),
		articleEl = document.createElement( 'article' ),
		post = {
			title: 'Hello!',
			content: '<p>Post content</p>'
		},
		markup = '';

markup += `<h2 class="entry-title">${post.title}</h2>`;

articleEl.innerHTML = markup;
mainContentE.appendChild( articleEl );



// liFrag.appendChild( liText );
// ul.appendChild( liFrag );

// document.createDocumentFragment()
// el.appendChild( childEl )
// parent.insertBefore( childEl, el )
// el.innerHTML = '<p>Text</p>';
// let cloneEl = el.cloneNode( true );




//
console.log( 'Yo!' );
