'use strict';

describe('Service: Feedfactory', function () {

  // load the service's module
  beforeEach(module('appersicetoApp'));

  // instantiate service
  var Feedfactory;
  beforeEach(inject(function (_Feedfactory_) {
    Feedfactory = _Feedfactory_;
  }));

  it('should do something', function () {
    expect(!!Feedfactory).toBe(true);
  });

});
