import angular from 'angular';

import './phone-list/phone-list.module';
import './phone-list/phone-list.component';
import './phone-detail/phone-detail.module';
import './phone-detail/phone-detail.component';

angular.module('phonecatApp', [
  'ngRoute',
  'phoneList',
  'phoneDetail',
]);
