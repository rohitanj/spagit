/// <reference path="" />
/// <reference path="Pages/ContactUs/contactus.html" />
/// <reference path="" />
/// <reference path="" />
/// <reference path="" />

// Define your Routing here.
(function(angular) {
    'use strict';
    angular.module("myApp")

        .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
       
        .state('home', {
            url: '/home',
            templateUrl: 'App/Pages/Home/home.html',
            controller: 'homeController'
        })
        .state('services', {
            url: '/services',
            templateUrl: 'App/Pages/Services/services.html',
            controller: 'servicesController'
        })
       .state('projects', {
                url: '/projects',
                templateUrl: 'App/Pages/Projects/projects.html',
                controller: 'projectsController'
            })
        .state('conferencepreperations', {
            url: '/conferencepreperations',
            templateUrl: 'App/Pages/conferencepreperations/conferencepreperations.html',
            controller: 'conferencepreperationsController'
        })
        .state('root.About', {
            url: '/About',
            templateUrl: 'App/Pages/About/about.html',
            controller: 'aboutController'
        })
        .state('root.Contactus', {
            url: '/Contactus',
            templateUrl: 'App/Pages/Contact/contact.html',
            controller: 'contactusController'
        })
        .state('root.photos', {
            url: '/photos',
            templateUrl: 'App/Pages/photos/photos.html',
            controller: 'photosController'
        })
       .state('industriesnews', {
           url: '/industriesnews',
           templateUrl: 'App/Pages/Blogs/industrynews.html',
           controller: 'industrynewsController'
       })
      .state('download', {
                 url: '/download',
                 templateUrl: 'App/Pages/Download/download.html',
                 controller: 'downloadController'
             })
      .state("root.otherwise", {
            url: "*path",
            templateUrl: "App/Pages/NotFound/notFound.html"
        });
    }])

     
})(window.angular);