angular
    .module("app.people.person", [])
    .component("person", {
        templateUrl: "/src/app/views/person.html",
        controller: "personCtrl",
         bindings: {person : "<"}
    })
    .controller("personCtrl", ($scope) => {     
    });