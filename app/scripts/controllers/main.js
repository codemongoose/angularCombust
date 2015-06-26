/*global Firebase*/
'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('MainCtrl', function ($scope, $timeout) {

    // define scope variable for the chat panel
    $scope.msgUser = null;
    $scope.msgText = null;

    var rootRef = new Firebase('https://combust1.firebaseio.com/');
    var msgRef = rootRef.child('message');
    var messagesRef = rootRef.child('messages');

    rootRef.on('value', function(snapshot){
      $timeout(function(){
        console.log("root Ref value : ", snapshot.val());
      });      
    });

    // for message - push test panel
    messagesRef.on('value', function(snapshot){
      $timeout(function(){
        $scope.messages = snapshot.val();
         console.log("MESSAGES Ref value : ", snapshot.val());
      });
    });
    
    $scope.sendMessage = function(){
      var msg = {
        user: $scope.msgUser,
        text: $scope.msgText,
      };
      // console.log("message being sent : ", msg );
      messagesRef.push(msg);
    };

    // for Basic Methods test panel
    msgRef.on('value', function(snapshot){
      $timeout(function(){
        
      /* DO NOT DELETE for now- move thse to TESTs --- methods on snapshot */
      //-----------------------------------------------------------------
        
        // console.log('snapshot - hasChildren() :' , snapshot.hasChildren());
        // console.log('snapshot - numChildren() :' , snapshot.numChildren());
        // console.log('snapshot - hasChild(\'name\') :' , snapshot.hasChild('user'));
        
        // snapshot.forEach(function(item){
        //   console.log('snapshot - forEach METHOD  - Item  : ', item);
        //   console.log('snapshot - forEach METHOD  - Item KEY : ', item.key());
        //   console.log('snapshot - forEach METHOD  - Item VALUE : ', item.val());
        //   console.log('snapshot - forEach METHOD  - Item hasChildren : ', item.hasChildren());
        //   console.log('snapshot - forEach METHOD  - Item ref() : ', item.ref());
        // });

        var updatedVal = snapshot.val();
        console.log("MSG On - Value: ", updatedVal);
        $scope.message = updatedVal;
      });
    });

    $scope.$watch('message.text', function(updatedVal){
      if (!updatedVal) {
        return;
      }
      console.log("watching : ", updatedVal);
      msgRef.update({
        text: updatedVal
      });
    });

    $scope.setMessage = function(){
      msgRef.set({
        user: 'Kd',
        text: 'Yo there'
      });
    };

    $scope.updateMessage = function(){
      msgRef.update({
        user: 'Richie',
        allnew: 'Updated Message'
      });
    };

    $scope.deleteMessage = function(){
      msgRef.remove();
    };

  });
