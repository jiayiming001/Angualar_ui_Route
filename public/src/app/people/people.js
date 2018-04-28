angular
    .module("app.people", [])
    .component("people", {
        templateUrl: "/src/app/views/people.html",
        controller: "peopleCtrl",
        bindings: {people: "<"}
    })
    .controller("peopleCtrl", ($scope) => {
    })
        