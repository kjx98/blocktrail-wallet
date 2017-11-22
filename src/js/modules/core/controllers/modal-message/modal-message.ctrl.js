(function() {
    "use strict";

    angular.module("blocktrail.core")
        .controller("ModalMessageCtrl", ModalMessageCtrl);

    function ModalMessageCtrl($scope, $ionicPlatform, parameters) {
        $scope.title = parameters.title;
        $scope.titleClass = parameters.titleClass;
        $scope.body = parameters.body;
        $scope.bodyClass = parameters.bodyClass;
        $scope.button = parameters.button;

        // Methods
        $scope.cancel = cancel;
        // The back button handler
        $ionicPlatform.onHardwareBackButton(cancel);
        // On scope destroy
        $scope.$on("$destroy", onScopeDestroy);

        /**
         * Cancel
         */
        function cancel() {
            $scope.closeModal(null);
        }

        /**
         * On scope destroy
         */
        function onScopeDestroy() {
            // Remove the back button handler
            $ionicPlatform.offHardwareBackButton(cancel);
        }
    }
})();
