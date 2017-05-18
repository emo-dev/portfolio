"use strict";

app.controller("NavCtrl", function($scope, PageLocation) {
  let s = $scope; 
  let nav = $('nav');    

  s.NavList = ['About', 'Projects', 'Contact'];

  s.showNavBorderBottom = () => {      
    s.pageLocation = PageLocation.location.toLowerCase();        
    $( nav ).find( 'a' ).addClass( 'nav-' + s.pageLocation );        
  };

  s.changePageLocation = (page) => PageLocation.location = page;  

  s.$watch(
    function( ) { return PageLocation.location; },    
    function( newValue, oldValue ) {
      let currentNav = oldValue.toLowerCase();
      let newNav = newValue.toLowerCase();
      $( nav ).find( 'a' ).removeClass( 'nav-' + currentNav);      
    });

});

