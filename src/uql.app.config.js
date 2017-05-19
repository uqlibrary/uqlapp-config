/**
 * Author: Jan-Willem Wisgerhof <j.wisgerhof at library.uq.edu.au>
 * Date: 13/02/2016
 *
 * Main UQL App config constant
 */
(function() {
  'use strict';

  var apiVersion = 'v1';

  // temp line for branch: test in testing branch
  apiVersion = 'staging';

  var uqlApiUrl = uqlApiUrl || 'https://api.library.uq.edu.au/' + apiVersion + '/';
  var uqlAppUrl = uqlAppUrl || 'https://app.library.uq.edu.au';
  var uqlAppMock = uqlAppMock || '';

  angular.module('uql.app.config', []).constant('UQL_APP_CONFIG', {
    apiUrl: uqlApiUrl,
    appUrl: uqlAppUrl,
    defaultPageTitle: 'UQ Library',
    apiFileAllowedTypes: ['image/jpeg', 'image/png', 'application/pdf'],
    apiFileMaxSize: 3145728,
    uqlCookieName: 'UQLID',
    uqlTokenHeader: 'X-Uql-Token',
    uqlIsMocked: uqlAppMock
  });
})();