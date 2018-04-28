angular
    .module('app.header', [])
    .component('myHeader', {
        templateUrl: '/src/app/components/header.html',
        controller: 'headerCtrl'
    })
    .controller('headerCtrl', function($scope, $location) {
        $scope.peo = [
            {
                href: "people",
                name: "点击peole"
            }
        ]
    });