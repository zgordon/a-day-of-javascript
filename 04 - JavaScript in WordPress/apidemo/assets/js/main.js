(function($) {

	const articleContainer = $('main#main'),
				title = $('.title-editor'),
				saveBtn = $('#save-post');

	function init() {
		loadPosts();
	};
	init();

	function loadPosts() {
		let posts = new wp.api.collections.Posts();

		posts.fetch({ data: { per_page: 5 } }).done( () => {
				clearPosts();
				posts.each(function(post) {
						loadPost( post.attributes );
			  });
		});
	}

	function loadPost( post ) {
		let article = $('<article class="post"></article>'),
				titleLink = $('<a></a>').attr( 'href', post.link ).text( post.title.rendered ),
				title = $('<h2 class="entry-title"></h2>').append( titleLink ),
				content = $('<div class="entry-content"></div>').html( post.content.rendered );

		$(article).append(title).append(content);
		$(articleContainer).append(article) ;
	}

	function clearPosts() {
		$(articleContainer).html('');
	}

})( jQuery );
