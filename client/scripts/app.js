(function(){
    
    var app = angular.module('myApp',['ngRoute']);
    
    // controllers
    app.controller('MainCtrl',[function(){
        console.log('working');
    }]);
    
    
    // config
    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl : './pages/home.html'
            })
            .when('/projects', {
               templateUrl : './pages/project.html' 
            })
            .otherwise({
                templateUrl : './pages/home.html'
            });
    }]);
    
    
    
    
})();