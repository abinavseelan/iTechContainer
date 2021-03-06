'use strict';

/**
 * @ngdoc function
 * @name itcApp.controller:SimulationCtrl
 * @description
 * # SimulationCtrl
 * Controller of the itcApp
 */
angular.module('itcApp')
  .controller('SimulationCtrl', ['$scope', '$location', function($scope, $location){

  	Parse.initialize('WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv', 'BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd');
    $scope.currentUser = Parse.User.current();
    if($scope.currentUser) {
        $scope.currentUserName = $scope.currentUser.get('username');
    } else {   //no valid user
        $location.path('/');
    }
    
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
        console.log('Error: ' + error.message);
      }});

      /*moisture.set({value: moistureValue});
      moisture.save({success: function(){


      }, error: function(error){
        console.log('Error: ' + error.message);
      }});*/

      pressure.set({value: pressureValue});
      pressure.save({success: function(){


      }, error: function(error){
        console.log('Error: ' + error.message);
      }});

      temperature.set({value: temperatureValue});
      temperature.save({success: function(){


<<<<<<< HEAD
    }, error: function(error){
      console.log('Error: ' + error.message);
    }});
  }
  setInterval(sendData,5000);
=======
      }, error: function(error){
        console.log('Error: ' + error.message);
      }});
    }
    //setInterval(sendData,5000);
>>>>>>> 8bcd0a9fa1e98f68527e73732e92ce7f4036069e
}]);
