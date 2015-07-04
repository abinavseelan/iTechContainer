"use strict";var app=angular.module("itcApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial"]).config(["$routeProvider","$mdThemingProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/recipient",{templateUrl:"views/recipient.html",controller:"RecipientCtrl"}).when("/simulation",{templateUrl:"views/simulation.html",controller:"SimulationCtrl"}).otherwise({redirectTo:"/"}),b.theme("default").primaryPalette("teal").accentPalette("deep-purple").warnPalette("red")}]);angular.module("itcApp").controller("MainCtrl",["$scope",function(a){Parse.initialize("WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv","BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd");var b=Parse.Object.extend("Users");a.clearData=function(){a.username="",a.password=""},a.authUser=function(){var a=new Parse.Query(b);a.find({success:function(){for(var b in a);},error:function(a){console.log("Query Error: "+a.message)}})}}]),angular.module("itcApp").controller("SimulationCtrl",["$scope","$mdSidenav",function(a,b){function c(){var b=a.sense.temp,c=a.sense.hum,g=a.sense.pres,h=new d,i=new f,j=new e;i.set({value:c}),i.save({success:function(){},error:function(a){console.log("Error: "+a.message)}}),j.set({value:g}),j.save({success:function(){},error:function(a){console.log("Error: "+a.message)}}),h.set({value:b}),h.save({success:function(){},error:function(a){console.log("Error: "+a.message)}})}a.openLeftMenu=function(){b("left").toggle()},Parse.initialize("WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv","BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd");var d=Parse.Object.extend("Temperature"),e=Parse.Object.extend("Pressure"),f=Parse.Object.extend("Humidity");Parse.Object.extend("Moisture");setInterval(c,5e3)}]),angular.module("itcApp").controller("RecipientCtrl",["$scope",function(a){}]);