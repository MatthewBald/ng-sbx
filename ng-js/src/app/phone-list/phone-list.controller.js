function PhoneListController($http) {
  const self = this;
  self.orderProp = 'age';

  $http.get('phones/phones.json')
    .then((response) => {
      self.phones = response.data;
    });
}

PhoneListController.$inject = ['$http'];

export default PhoneListController;
