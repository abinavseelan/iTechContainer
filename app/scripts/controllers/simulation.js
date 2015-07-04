'use strict';

/**
 * @ngdoc function
 * @name itcApp.controller:SimulationCtrl
 * @description
 * # SimulationCtrl
 * Controller of the itcApp
 */
angular.module('itcApp')
  .controller('SimulationCtrl', ['$scope','$mdSidenav', function($scope, $mdSidenav){
  	$scope.openLeftMenu = function() {
    	$mdSidenav('left').toggle();
  	};
  Parse.initialize("WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv", "BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd");
  
  var Temperature = Parse.Object.extend('Temperature');
  var Pressure = Parse.Object.extend('Pressure');
  var Humidity = Parse.Object.extend('Humidity');
  var Moisture = Parse.Object.extend('Moisture');


  function sendData(){

    var temperatureValue = $scope.sense.temp;
    var humidityValue = $scope.sense.hum;
    var pressureValue = $scope.sense.pres;
    //var moistureValue = $('#moisture-value').val();

    var temperature = new Temperature();
    var humidity = new Humidity();
    //var moisture = new Moisture();
    var pressure = new Pressure();


    humidity.set({value: humidityValue});
    humidity.save({success: function(){


    }, error: function(error){
      console.log("Error: " + error.message);
    }});

    /*moisture.set({value: moistureValue});
    moisture.save({success: function(){


    }, error: function(error){
      console.log("Error: " + error.message);
    }});*/

    pressure.set({value: pressureValue});
    pressure.save({success: function(){


    }, error: function(error){
      console.log("Error: " + error.message);
    }});

    temperature.set({value: temperatureValue});
    temperature.save({success: function(){


    }, error: function(error){
      console.log("Error: " + error.message);
    }});
  };
  setInterval(sendData,5000);
}]);
