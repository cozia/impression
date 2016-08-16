/**
 * Created by HongchunShen on 2016/8/5.
 */
var app=angular.module("app",["ngMaterial","ui.router","oc.lazyLoad","ngAnimate"]);
app.config(function($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("index",{
            url:"/index",
            templateUrl:"views/tour.html",
            controller:"TourCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load("scripts/controllers/TourCtrl.js");
            }]}
        })
        .state("index.search",{
            url:"/search",
            templateUrl:"views/search.html",
            controller:"searchCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/searchCtrl.js","styles/search.css"]});
            }]}
        })
        .state("index.login",{
            url:"/login",
            templateUrl:"views/login.html"
//            controller:"loginCtrl",
//            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
//                return $ocLazyLoad.load({files:["scripts/controllers/loginCtrl.js","styles/login.css"]});
//            }]}
        })
        .state("index.logining",{
            url:"/logining",
            templateUrl:"views/logining.html",
            controller:"loginingCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/loginingCtrl.js"]});
            }]}
        })
        .state("index.register",{
            url:"/register",
            templateUrl:"views/register.html",
            controller:"registerCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/registerCtrl.js","styles/register.css"]});
            }]}
        })
        .state("index.agendaMaker",{
            url:"/agendaMaker",
            templateUrl:"views/agendaMaker.html",
            controller:"agendaMakerCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/agendaMakerCtrl.js","styles/agendaMaker.css"]});
            }]}
        })
        .state("index.agendaDetails",{
            url:"/agendaDetails",
            templateUrl:"views/agendaDetails.html",
            controller:"agendaDetailsCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/agendaDetailsCtrl.js","styles/agendaDetails.css"]});
            }]}
        })
        .state("index.myCollection",{
            url:"/myCollection",
            templateUrl:"views/myCollection.html",
            controller:"myCollectionCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/myCollectionCtrl.js","styles/myCollection.css"]})
            }]
            }
        })
        .state("index.presonalCenter",{
            url:"/presonalCenter",
            templateUrl:"views/presonalCenter.html",
            controller:"presonalCenterCtrl",
            resolve:{loadFile:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load({files:["scripts/controllers/presonalCenterCtrl.js","styles/presonalCenter.css"]})
            }]
            }
        })

});
//app.animation('.view-slide-in', function () {
//    return {
//        enter: function(element, done) {
//            element.css({
//                opacity: 0,
//                position: "relative",
//                width:0,
//                top: 0
//            })
//                .animate({
//                    width:"100%",
//                    top: 0,
//                    left: 0,
//                    opacity: 1
//                }, 300, done);
//        }
//    };
//});


