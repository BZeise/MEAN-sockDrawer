var myApp = angular.module( 'myApp', [] );

myApp.controller( 'SockController', function( SockService ){
  var vm = this;

  vm.getSocks = function(){
    console.log( 'in getSocks' );
    SockService.checkSocks();
  }; // get the socks

  vm.postASockInIt = function(){
    console.log( 'in postASockInIt' );
    var newSock = {
      color: vm.colorIn,
      material: vm.materialIn,
      height: vm.heightIn,
      holey: vm.holeyIn,
      complete: vm.completeIn,
      howMuchIWantIt: vm.howMuchIWantItIn
    }; // end new sock
    SockService.postSocks( newSock );
  }; // get the socks
}); //  end Sock Controller
