var myApp = angular.module( 'myApp', [] );

myApp.controller( 'SockController', function( SockService ){
  var vm = this;

  vm.getSocks = function(){
    console.log( 'in getSocks' );
    SockService.checkSocks();
  }; // get the socks
}); //  end Sock Controller
