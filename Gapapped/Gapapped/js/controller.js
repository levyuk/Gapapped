function HomeCtrl($scope, $http) {
    $scope.Title = 'Home';
}

function ContactCtrl($scope, $http) {
    $scope.Title = 'Contacts';
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

HomeCtrl.$inject = ['$scope', '$http'];
ContactCtrl.$inject = ['$scope', '$http'];
NotesCtrl.$inject = ['$scope', '$http'];