myApp.service( 'SockService', function( $http ){
  var sv = this;

  sv.checkSocks = function(){
    console.log( 'in checkSocks' );
    $http.get( '/socks' ).then( function( response ){
      console.log( 'back from server with:', response );
    }); // end $http
  }; // end checkSocks

  sv.postSocks = function( newSock ){
    console.log( 'in postSocks:', newSock );
    return $http({
      method: 'POST',
      url: '/socks',
      data: newSock
    }).then( function( response ){
      console.log( 'back from server with:', response );
      sv.checkSocks();
    });
  }; //end postSocks
}); // end SockService
