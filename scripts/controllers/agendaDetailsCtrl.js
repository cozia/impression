/**
 * Created by HongchunShen on 2016/8/9.
 */
angular.module("app").controller("agendaDetailsCtrl",function($scope,$mdDialog){
    $scope.impression=["自驾","度假","古镇" ,"+"];
    $scope.impressionAdd=function(){

    };



//    $scope.agendaList=[
//        {
//            whatDay:"DAY 1",
//            Date:"2016/08/10",
//            type:"traffic"
//        }
//    ];
//    $scope.trafficStatus=[
//        {
//            startTime:"8:30",
//            startStation:"荆州",
//            transportation:"train",
//            arriveTime:"10:00",
//            terminalStation:"武昌"
//        }
//    ];


    $scope.agendaList=[
        {
            whatDay:"DAY 1",
            Date:"2016/08/10",
            what:[
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"8:30",
                            startStation:"荆州",
                            transportation:"train",
                            arriveTime:"10:00",
                            terminalStation:"武昌"
                        }
                    ]
                },
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }


            ]
        },
        {
            whatDay:"DAY 2",
            Date:"2016/08/10",
            what:[
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"8:30",
                            startStation:"荆州",
                            transportation:"train",
                            arriveTime:"10:00",
                            terminalStation:"武昌"
                        }
                    ]
                },
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }
                ,
                {
                    type:"traffic",
                    status:[
                        {
                            startTime:"10:30",
                            startStation:"武昌",
                            transportation:"train",
                            arriveTime:"11:00",
                            terminalStation:"黄鹤楼"
                        }
                    ]
                }


            ]
        }

    ];
    $scope.$on("toParent",function(en){
        console.log(1111111)
    });





    $scope.showPrepare = function(ev) {
        $mdDialog.show({
            controller: showPrepareCtrl,
            templateUrl: 'views/tourPrepareBefore.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false
        })
    };
    function showPrepareCtrl($scope, $mdDialog) {
        $scope.prepareList=[
            "旅行牙膏，牙刷，浴巾",
            "相机及电源，SD卡",
            "转换插头，手机充电器，移动电源",
            "身份证，学生证",
            "现金及信用卡",
            "阳台收衣服，浇花，切断家里电源"
        ];
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }





    $scope.showAddAgenda = function(ev) {
        $mdDialog.show({
            controller: showAddAgendaCtrl,
            templateUrl: 'views/showAddAgenda.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
    };
    function showAddAgendaCtrl($scope, $mdDialog) {
        $scope.arrTriffic={
            type:"traffic",
            status:[
                {
                    startTime:"10:30",
                    startStation:"武昌",
                    transportation:"train",
                    arriveTime:"11:00",
                    terminalStation:"黄鹤楼"
                }
            ]
        };
        $scope.pushTriffic=function(){
            $scope.$emit("toParent","hello,angular.");
        };
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

});