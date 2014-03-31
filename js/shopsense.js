var newspaperApp = angular.module('newspaperApp', [])

newspaperApp.controller('articleCtrl', function($scope){
  $scope.article_full = {
    title: 'Title',
    section: ''
  }
})
.directive('articleMaker', function(){
  return {
    template: '{{article_full.section}}'
  }
});