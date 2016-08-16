/**
 * Created by HongchunShen on 2016/8/6.
 */
app.controller("topCtrl",function($scope,$mdSidenav){
    $scope.menus=[
        {
            title:"首页",
            type:"link",
            state:"index"
        },
        {
            title:"行程制定",
            type:"link",
            state:"index.agendaMaker"
        },
        {
            title:"我的收藏",
            type:"link",
            state:"index.myCollection"
        },
        {
            title:"个人中心",
            type:"link",
            state:"index.presonalCenter"
        }
    ];
    $scope.userName="点击头像登录";
    $scope.userPic="img/face.jpg";
    $scope.openNav = function(){
        $mdSidenav('Right').toggle();
    };
    $scope.closeNav = function(){
        $mdSidenav('Right').close();
    };
});