// let JSONString = '{ "id": 1, "title": "Hello!" }',
// 		post = JSON.parse( JSONString );
//
// console.log( post );
//

let post =  {
			id: 1,
			title: 'New Post'
		},
		postJSON = JSON.stringify( post );

		console.log( postJSON );
