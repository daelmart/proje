angular.module("proje").controller("projeCtrl", function($scope){
	$scope.app = "P R O J E\xa0\xa0G E N E R A T O R";
	$scope.mensagem = "clique no botão para gerar um P R O J E";
	$scope.urls = ['','-Tdu4uKSZ3M', 'LdpMpfp-J_I', 'Gcagz8epRN8'];
	var array= [];

	$scope.geraUrl = function {
		//var i = Math.floor((Math.random() * 3) + 1);
		$scope.randomCode = $scope.urls[Math.floor((Math.random() * 3) + 1)];
		if(array.indexOf($scope.randomCode)==-1){

			array.push($scope.randomCode);
			document.getElementById("linkYT").src = "https://www.youtube.com/embed/"+$scope.randomCode;
		}

		else if(array.indexOf($scope.randomCode) == 1 && 2 && 3){
			console.log('acabou');
		}

		else{
			urlRand();
		}


	}

});

//achar uma forma de não repetir o processo de gerar Url
//regExp talvez?
