import angular from 'angular';
import PhoneListController from './phone-list.controller';

angular
  .module('phoneList')
  .component('phoneList', {
    templateUrl: 'src/app/phone-list/phone-list.template.html',
    controller: PhoneListController,
  });
