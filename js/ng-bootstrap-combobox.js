angular.module("BootstrapCombobox", [])
.directive("bootstrapCombobox", [ function(combos){
	return {
       restrict: 'AC',
       link: function(scope, element, attrs){
       		$(element).combobox();
       		scope.$watch(attrs.ngOptions.split(" in ")[1], function() {
	          scope.$evalAsync(function() {
	          	$(element).combobox("refresh");
	          });
	        });
       }
    }
}]);