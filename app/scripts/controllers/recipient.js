'use strict';

/**
 * @ngdoc function
 * @name itcApp.controller:RecipientCtrl
 * @description
 * # RecipientCtrl
 * Controller of the itcApp
 */
angular.module('itcApp')
.controller('RecipientCtrl', ['$scope', '$interval', function ($scope, $interval) {
    
    var maxDataPoints =  100;

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
    }, 1000);

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

   //  $scope.temp.timeScale = [0,1,2,3,4,5];
  	// $scope.series = ['Temperature'];
  	// $scope.data = [
   //  	[65, 59, 80, 81, 56, 55, 40]
  	// ];
  	
  	// $scope.onClick = function (points, evt) {
   //  console.log(points, evt);
   //  $scope.temperatureObj.timeScale = [1,2,3,4,5,6];
   //  $scope.temperatureObj.data = [[59, 80, 81, 56, 55, 40, 72]];
  }
  ]);
