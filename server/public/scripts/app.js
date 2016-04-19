(function(){
    
    var app = angular.module('myApp',['ngRoute']);
    
    // controllers
    app.controller('MainCtrl',[function(){
        
    }]);
    
    app.controller('ProjectsCtrl', ['$scope',function($scope){
        $scope.tab = 1;
    }]);
    
    
    // config
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl : '../views/pages/home.html',
                controller : 'MainCtrl'
            })
            .when('/projects', {
               templateUrl : '../views/pages/project.html',
               controller : 'ProjectsCtrl' 
            })
            .otherwise({
                templateUrl : '../views/pages/home.html',
                controller : 'MainCtrl'
            });
    }]);
    
    
    
    
})();