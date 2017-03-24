
var app = angular
    .module('MyApp', ['ngMaterial', 'users'])
    .config(['$httpProvider','AppConfig', function ($httpProvider,AppConfig) {
        angular.injector(['ngCookies']).invoke(['$cookies', function ($cookies) {
            $httpProvider.defaults.headers.common['Authorization'] = "Bearer " + AppConfig.apiKey;
        }])
    }])
    .config(function ($mdThemingProvider, $mdIconProvider) {

        $mdIconProvider
            .defaultIconSet("./assets/svg/avatars.svg", 128)
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

    });
