'use strict';

/**
 * @ngdoc function
 * @name itcApp.controller:RecipientCtrl
 * @description
 * # RecipientCtrl
 * Controller of the itcApp
 */
angular.module('itcApp')
.controller('RecipientCtrl', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {
    
    var maxDataPoints =  20;

    Parse.initialize('WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv', 'BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd');
    $scope.currentUser = Parse.User.current();
    if($scope.currentUser)
    {
        $scope.currentUserName = $scope.currentUser.get('username');
    }
    else
    {   //no valid user
        $location.path('/');
    }

  	$scope.temperatureObj = {
  		'timeScale' : [],
  		'seriesName' : ['Temperature'],
  		'data' : [[]],
  		'options' : { 
  			animation: false,
  			showTooltips: false,
  			datasetStrokeWidth: 0.5
  		}
  	};

  	// Update the dataset at 25FPS for a smoothly-animating chart
    $interval(function () {
      getLiveChartData();
    }, 3000);

    function getLiveChartData () {
    	if($scope.temperatureObj.data[0].length)
    	{
    		$scope.temperatureObj.timeScale = $scope.temperatureObj.timeScale.slice(1);
    		$scope.temperatureObj.data[0] = $scope.temperatureObj.data[0].slice(1);
    	}
    	while( $scope.temperatureObj.data[0].length < maxDataPoints )
    	{
    			$scope.temperatureObj.timeScale.push(getRandomValue($scope.temperatureObj.timeScale));
    			$scope.temperatureObj.data[0].push(getRandomValue($scope.temperatureObj.data[0]));
    	}
    }

    function getRandomValue(data) {
    		var l = data.length, previous = l ? data[l - 1] : 50;
    		var y = previous + Math.floor((Math.random() * 10) + 1) - 5;
    		return y < 0 ? 0 : y > 100 ? 100 : y;
    }

    $scope.logUserOut = function () {
      Parse.User.logOut();
      $scope.currentUser = Parse.User.current();
      $location.path('/');
      //$scope.$apply();
    }
  }
  ]);
