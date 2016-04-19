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
                templateUrl : '../views/pages/home.html',
                controller : 'MainCtrl'
            })
            .when('/projects', {
               templateUrl : '../views/pages/project.html',
               controller : 'MainCtrl' 
            })
            .otherwise({
                templateUrl : '../views/pages/home.html',
                controller : 'MainCtrl'
            });
    }]);
    
    
    
    
})();