/**
 * Created by HongchunShen on 2016/8/6.
 */
angular.module("app").controller("searchCtrl",function($scope){
    $scope.deleteAll=function(){
        $scope.searchItem="";
    };
    $scope.search=function(){
        $scope.searchItem.push("searchList");
    };
    $scope.searchList=["武汉","北京","上海"];
    $scope.clearAll=function(){
        $scope.searchList=[];
    }
});
