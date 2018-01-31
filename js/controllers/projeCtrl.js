angular.module("proje").controller("projeCtrl", function($scope){
	$scope.app = "P R O J E\xa0\xa0G E N E R A T O R";
	$scope.mensagem = "clique no botão para gerar um P R O J E";
	$scope.urls = ['','-Tdu4uKSZ3M', 'LdpMpfp-J_I', 'Gcagz8epRN8','R2F_hGwD26g','EDlC7oG_2W4','nEVDZl5UvN4'];
	$scope.noMoreLinks = true;
	$scope.youtube = false
	var array= [];



	$scope.geraUrl = function gimmeLinks() {
		//var i = Math.floor((Math.random() * 3) + 1);
		$scope.randomCode = $scope.urls[Math.floor((Math.random() * 3) + 1)];
		if(array.indexOf($scope.randomCode)==-1){

			array.push($scope.randomCode);
			document.getElementById("linkYT").src = "https://www.youtube.com/embed/"+$scope.randomCode;
		} else if(array.length == 3) {
			console.log('acabou');
			$scope.noMoreLinks = false;
			$scope.youtube = true;
		} else
			gimmeLinks();

	}

});

//achar uma forma de não repetir o processo de gerar Url
//regExp talvez?
