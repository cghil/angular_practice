angular.module('categories.bookmarks.create', [
])
	
	.config(function($stateProvider){
		$stateProvider
			.state('eggly.categories.bookmarks.create', {
				url: '/bookmarks/create',
				templateUrl: 'app/categories/bookmarks/create/bookmark-create.tmpl.html',
				controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
			})
		;
	})

	.controller('CreateBookmarkCtrl', function($state, $stateParams, BookmarksModel){
		 var createBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('eggly.categories.bookmarks', {
                category: $stateParams.category
            })
        }

        function cancelCreating() {
            returnToBookmarks();
        }

        function createBookmark() {
            BookmarksModel.createBookmark(createBookmarkCtrl.newBookmark);
            returnToBookmarks();
        }

        function resetForm() {
            createBookmarkCtrl.newBookmark = {
                title: '',
                url: '',
                category: $stateParams.category
            };
        }

		// behaves as like scope but this cannot be inherited from parent controller implicitly.
        createBookmarkCtrl.cancelCreating = cancelCreating;
        createBookmarkCtrl.createBookmark = createBookmark;

		// when controller loads we reset the form for new bookmark
        resetForm();
	})
;
