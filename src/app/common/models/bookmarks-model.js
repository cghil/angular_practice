angular.module('eggly.models.bookmarks', [
])
	.service('BookmarksModel', function($http, $q){
		var model = this,
			URLS = {
				FETCH: "data/bookmarks.json"
			},
			bookmarks;

		function extract(result){
			return result.data;
		}

		function cacheBookmarks(result){
			bookmarks = extract(result);
			return bookmarks;
		}

        model.getBookmarks = function(){
        	return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheBookmarks);
        };

        
	})	
;
