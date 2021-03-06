/**
 * Project "Wohnbaukunst" 1
 * Tech stack Angular driven

 * @author Yogi <Langnickel.Thomas@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('wohnbaukunst', ['ngRoute']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/impressum", {templateUrl: "partials/impressum.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 5000
  // });

  // $('.panel panel-default').hover(function() {
  //   console.log('fires');
  //       $('#collapse1').show()
  //           .css("width", "338px");
  //   });
  //   $('#collapse1').mouseleave(function() {
  //     console.log('fires too');
  //       $('#collapse1').css("display", "none");
  //   });


  // $('.collapse').collapse()

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
