angular.module("proje").controller("projeCtrl", function($scope){
	$scope.app = "P R O J E\xa0\xa0G E N E R A T O R";
	$scope.mensagem = "clique no botão para gerar um P R O J E";
	$scope.urls = ['','-Tdu4uKSZ3M', 'LdpMpfp-J_I', 'Gcagz8epRN8']

	$scope.geraUrl = function(){
		var i = Math.floor((Math.random() * 3) + 1);
		$scope.randomCode = $scope.urls[i];
		document.getElementById("linkYT").src = "https://www.youtube.com/embed/"+$scope.randomCode;
	}

});