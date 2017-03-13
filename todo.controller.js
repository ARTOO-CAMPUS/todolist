// CREA UN CONTROLLER PER L'OGGETTO
angular.module('app').controller('TodoListController', function ($scope) {

	$scope.cosedafare = [];

	

	$scope.addTodo = function () {
		if ($scope.descrizione != "") {
			$scope.cosedafare.push({
				descrizione: $scope.descrizione,
				fatto: false
			});
		}
		$scope.descrizione = '';
	};

	$scope.removeTodo = function (index) {
		$scope.cosedafare.splice(index, 1);
	};






});