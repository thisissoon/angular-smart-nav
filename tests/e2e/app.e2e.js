'use strict';
/**
 * This module runs e2e test by setting up a module to make our
 * backend assertions e.g. mock the responses from our api before
 * lauching our actual application.
 * @main   sn.smartNav.e2e
 * @module sn.smartNav.e2e
 * @author SOON_
 */
angular.module('sn.smartNav.e2e', ['sn.smartNav', 'ngMockE2E'])
/**
 * @method run
 * @param  {Service} $httpBackend
 */
.run([
  '$httpBackend',
  function ($httpBackend) {

    $httpBackend.whenGET(/partials\/.*/).passThrough();

  }
]);
