'use strict';

describe('Controller: RecipientCtrl', function () {

  // load the controller's module
  beforeEach(module('itcApp'));

  var RecipientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipientCtrl = $controller('RecipientCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
