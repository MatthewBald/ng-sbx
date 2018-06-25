import angular from 'angular';

angular
  .module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'src/app/phone-detail/phone-detail.template.html',
    controller: ['$http', '$routeParams',
      function PhoneDetailController($http, $routeParams) {
        const self = this;

        $http.get(`phones/${$routeParams.phoneId}.json`).then((response) => {
          self.phone = response.data;
        });
      },
    ],
  });
