const app = angular.module("myapp", [
    'ui.router',
    'app.header',
    'app.people',
    'app.people.person'  
]);

app.service('PeopleService', () => {
    this.getAllPeople = () => {
        var people = [
            {
                id: 55,
                name: "Ingrid Townsend",
                href: "people.person({personId: person.id})"
            },
            {
                id:66,
                name: "Estrada Nolan",
                href: "people.person({personId: person.id})"
            }
        ];
        return people;
    }
});

app.controller("Appctrl", () => {});

app.config(($stateProvider, $urlRouterProvider) => {
    const people = {
        name: "people",
        url: "/people",
        component: 'people',
        resolve: {
            people: () => {
                var people = [
                    {
                        id: 55,
                        name: "Ingrid Townsend",
                        href: "people.person({personId: person.id})"
                    },
                    {
                        id:66,
                        name: "Estrada Nolan",
                        href: "people.person({personId: person.id})"
                    }
                ];
                return people;
            }
        }
    };

    const personState = {
        name: "people.person",
        url: "/:personId",
        component: 'person',
        resolve: {
            person: (people, $stateParams) => {
                return people.find((person) => {
                    return person.id.toString() === $stateParams.personId;
                })
            }
        }
    };
    $stateProvider
        .state(people)
        .state(personState);

    $urlRouterProvider.otherwise("/");
});