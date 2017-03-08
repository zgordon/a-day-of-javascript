// Array of post IDs
let postIds = [ 1, 2, 34, 55, 77 ];

// For Loop
for ( let i = 0, max = postIds.length; i < max; i++ ) {
  console.log( 'Display post #' + postIds[i] );
}


// For Of Loop
for( let id of postIds ) {
  console.log( 'Post ' + id );
}
