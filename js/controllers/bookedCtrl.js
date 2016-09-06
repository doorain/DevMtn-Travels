angular.module("devmtnTravel").controller('bookedCtrl', function($scope, mainSrv, $state){

      for (var i = 0; i < mainSrv.travelInfo.lemgth; i++){
        if(mainSrv.travelInfo[i].id === $state.params.id){
          $scope.locationData = mainSrv.travelInfo[i];
          
        }

    }

});
