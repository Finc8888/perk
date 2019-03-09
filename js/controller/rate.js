app.controller("rate",function($scope,$location){
	$scope.opt = 0;
	$scope.norm = 0;
	$scope.pes = 0;
	$scope.project_name = 'Текущий проект';
	//$scope.baseUrl = $location.abcUrl();
	$scope.round2 =function(val){
		return parseFloat(val.toFixed(2));
	}
	$scope.mid_rate = function(){
		return $scope.round2(($scope.opt+4*$scope.norm+$scope.pes)/6)};
	$scope.dif_rate = function(){
		return $scope.round2(($scope.pes-$scope.opt)/6)};
})
