function HomeCtrl($http) {

}

function ContactCtrl($http) {

}

function NotesCtrl($scope, $http) {
    $scope.notes = [{
        description: 'Note app running, add more by using the above textbox',
        dateTime: new Date()
    }];

    $scope.addNote = function () {
        $scope.notes.push({
            description: $scope.newNote,
            dateTime: new Date()
        });
    }
}

HomeCtrl.$inject = ['$http'];
ContactCtrl.$inject = ['$http'];
NotesCtrl.$inject = ['$scope', '$http'];