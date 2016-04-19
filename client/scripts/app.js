(function(){
    
    var app = angular.module('myApp',['ngRoute']);
    
    // controllers
    app.controller('MainCtrl',[function(){
        
    }]);
    
    app.controller('ProjectsCtrl', ['$scope',function($scope){
        $scope.tab = 1;
        
        $scope.setTab = function (num) {
            return $scope.tab = num;
        }
        
        $scope.checkTab = function (num){
            if ($scope.tab === num) {
                return true;
            }   else {
                return false;
            }
        }
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