'use strict';
describe("controllers", function() {
	beforeEach(module("app.controllers"));
	describe("MyCtrl1", function() {
		return it("should make scope testable", inject(function($rootScope, $controller) {
			var ctrl, scope;
			scope = $rootScope.$new();
			ctrl = $controller("MyCtrl1", {
				$scope: scope
			});
			return expect(scope.onePlusOne).toEqual(2);
		}));
	});
	return describe("MyCtrl2", function() {
		return it("should...");
	});
});