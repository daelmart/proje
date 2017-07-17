angular.module("proje").controller("projeCtrl", function($scope){
	$scope.app = "P R O J E\xa0\xa0G E N E R A T O R";
	$scope.mensagem = "clique no botão para gerar um P R O J E";
	$scope.urls = ['','-Tdu4uKSZ3M', 'LdpMpfp-J_I', 'Gcagz8epRN8'];
	$scope.noMoreLinks = true;
	$scope.youtube = false
	var array= [];



	$scope.geraUrl = function gimmeLinks() {
		var i = $scope.urls.length - 1;

		$scope.randomCode = $scope.urls[Math.floor((Math.random() * i) + 1)];
		if(array.indexOf($scope.randomCode)==-1){

			array.push($scope.randomCode);
			// *** futuramente remover o document.getElementById e colocar uma solução mais "Angular" ***

			document.getElementById("linkYT").src = "https://www.youtube.com/embed/"+$scope.randomCode;
		} else if(array.length == i) {
			console.log('acabou');
			$scope.noMoreLinks = false;
			$scope.youtube = true;
		} else
			gimmeLinks();

	}

	$scope.colocaUrl = function adicionarUrl(){
		var url = document.getElementById("urlAdd").value;
		var urlTrim = url.substring(url.lastIndexOf('=') + 1);

		console.log(urlTrim);

		$scope.urls.push(urlTrim);

	}

});

//	https://www.youtube.com/watch?v=LTweat11TdE