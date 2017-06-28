
/// This is your main module
/// Angular's main module
/// Use a proper name for your module

angular.module("myApp", [
    // User defined modules
    'myApp.Templates', // templates
    'myApp.Pages', // Pages
    //'myApp.Core', // Core

    // Angular modules
    'ui.router', // state routing
    'ngRoute', // angular routing
    //'angular-flexslider',
])
