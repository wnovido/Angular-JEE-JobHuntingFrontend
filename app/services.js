/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var customerServices = angular.module('myApp.services',['ngResource']);

customerServices.factory('Jobhunts', function($resource) {
   return $resource('http://localhost:8080/JobHuntingBackend/webresources/jobhunts', {}, {
       query: {method:'GET',isArray:true}
   });
});