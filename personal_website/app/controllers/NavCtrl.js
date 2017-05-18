"use strict";

app.controller("NavCtrl", function($scope, $state, PageLocation) {
  let s = $scope;   

  s.NavList = ['About', 'Projects', 'Contact'];

  s.showNavBorderBottom = () => {      
    s.pageLocation = PageLocation.location.toLowerCase();        
    $( 'nav' ).find( 'a' ).addClass( 'nav-' + s.pageLocation );        
  };

  /*
      This watch function is for potentially changing the background color of the page between views as well as change 
      the color of the navbar lettering
  */
  // s.$watch(
  //   function( ) { return PageLocation.location; },    
  //   function( newValue, oldValue ) {
  //     let currentNav = oldValue.toLowerCase();
  //     let newNav = newValue.toLowerCase();
  //     $( nav ).find( 'a' ).removeClass( 'nav-' + currentNav);      
  //   });
  



});

