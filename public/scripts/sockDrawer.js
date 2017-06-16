var myApp = angular.module( 'myApp', [] );

myApp.controller( 'SockController', function(){
  var vm = this;

  vm.getSocks = function(){
    console.log( 'in getSocks' );
  }; // get the socks
}); //  end Sock Controller
