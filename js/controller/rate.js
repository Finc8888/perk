app.controller("rate",function($scope){
	$scope.opt = 0;
	$scope.norm = 0;
	$scope.pes = 0;
	$scope.mid_rate =($scope.opt+4*$scope.norm+$scope.pes)/6;
	$scope.dif_rate =($scope.pes-$scope.opt)/6;
})