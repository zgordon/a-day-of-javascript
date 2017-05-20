// Array

let postIds = [ 1, 2, 7, 8 ],
    postTitles = [ 'Hello World!', 'Hello Variables', 'Hello Arrays' ];

// Add item to front of array
postTitles.push( 'Newest Post' );
// Remove from end of array
postTitles.pop();
// Remove from front of array

// Access to array items is zero indexed
// First post title
console.log( postTitles[0] );
// Second post title
console.log( postTitles[1] );
// Array length
console.log( postTitles.length );
