angular.module('categories', [
    'eggly.models.categories'
])

	.config(function($stateProvider){
		$stateProvider
			.state('eggly.categories', {
				url: '/',
				views: {
					'categories@': {
                        // @ symbol for absolute path
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
					},
                    'bookmarks@': {
                        controller: 'BookmarksListCtrl as bookmarksListCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    }
				}
			})
	})
    .controller('CategoriesListCtrl', function CategoriesCtrl(CategoriesModel){
        var categoriesListCtrl = this;
        CategoriesModel.getCategories()
            .then(function(result){
                categoriesListCtrl.categories = result;
            });
    })
;