/*
 * JBoss, Home of Professional Open Source
 * Copyright Red Hat, Inc., and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

function ShowNotificationController($scope, $rootScope, $routeParams, $location,
		dataService, notifierService) {
	var showBar = false;
    $scope.notificationMessage = 'notification';

    $scope.onNotification = function(e) {
        switch (e.event) {
            case 'registered':
                if (e.regid.length > 0) {
                    console.log('REGISTERED -> REGID:' + e.regid);
                    //now you can register this device with this registration id
                    notifierService.registerDevice(e.regid)
                }
                break;

            case 'message':
                $scope.notificationMessage = e.payload.alert;
                showBar = true;
                $rootScope.$broadcast('refreshLeads', 'refresh');
                $scope.$apply();

                break;

            case 'error':
                console.log('ERROR -> MSG:' + e.msg);
                break;

            default:
                console.log('EVENT -> Unknown, an event was received and we do not know what it is');
                break;
        }
    }

	$scope.$on('hideNotif', function(e,arg){
		showBar = false;
	});

	$scope.showNotification = function() {
		return showBar;
	};

}