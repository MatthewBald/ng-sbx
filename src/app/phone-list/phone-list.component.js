import angular from 'angular';

angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'src/app/phone-list/phone-list.template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus s',
          snippet: 'next ushfuiwefwejcnw',
          age: 1,
        },
        {
          name: 'Some other s',
          snippet: 'next uwegwegwegnw',
          age: 2,
        },
        {
          name: 'item 3',
          snippet: 'nesome data',
          age: 3,
        },
      ];

      this.orderProp = 'age';
    },
  });
