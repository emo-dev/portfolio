"use strict";

app.controller("WrapperCtrl", function($scope, $state, $log, PageLocation) {
  let s = $scope;   

  /**
	This function is triggered on Nav click. It updates service PageLocation as well as changes states
  */
  s.changePageLocation = (page) => {
    PageLocation.location = page;
    $state.go( "wrapper." + page.toLowerCase() );          
  };


  /**
      Watcher function that waits for the views to change, mainly between the "Home" state and other states.
      If it switches to "Home", then the home container is shown. The functionality for the home page should also
      triggered at this point. 
  */
  s.$watch(
    function() { return $state.$current.toString(); },
    function( newValue, oldValue ) {
    	$log.info(newValue, oldValue);
      if (newValue === "wrapper") {
        $( '.wrapper-home-display' ).show();        
      } else{
        console.log(newValue);      
        $( '.wrapper-home-display' ).hide();        
        s.changePageLocation(newValue.split('.')[1]);        
      }
    }   
  );

});

