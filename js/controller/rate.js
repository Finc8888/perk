app.controller("rate",function($scope,$location){
	$scope.opt = 10;
	$scope.norm = 0;
	$scope.pes = 0;
	//$scope.baseUrl = $location.abcUrl();
	$scope.mid_rate = function(){
		return ($scope.opt+4*$scope.norm+$scope.pes)/6};
	$scope.dif_rate = function(){
		return ($scope.pes-$scope.opt)/6};
})