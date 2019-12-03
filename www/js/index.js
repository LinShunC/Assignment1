/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor


    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        document.addEventListener('deviceready', app.initialize);
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            console.log(navigator.camera);
        }
        /*  let app = {
              init: function() {
                  document.getElementById("test").addEventListener('click', app.takephoto);
              },
              takephoto: function() {
                  let opts = {
                      quality: 80,
                      destinationType: Camera.DestinationType.FILE_URI,
                      sourceType: Camera.PictureSourceType.CAMERA,
                      mediaType: Camera.MediaType.PICTURE,
                      encodingType: Camera.encodingType.JPEG,
                      cameraDirection: Camera.Direction.BACK,
                      targetWidth: 300,
                      targetHeight: 400

                  };
                  navigator.camera.getPicture(app.ftw, app, wtf, opts);

              },
              ftw: function(imgURI) {
                  document.getElementById("photo").src = imgURI;
              },
              wtf: function(msg) {
                  alert(msg);
              }
          };*/
        document.getElementById("test").addEventListener('click', openCamera());

        function openCamera(selection) {

            var srcType = Camera.PictureSourceType.CAMERA;
            var options = setOptions(srcType);
            var func = createNewFileEntry;

            navigator.camera.getPicture(function cameraSuccess(imageUri) {

                displayImage(imageUri);
                // You may choose to copy the picture, save it somewhere, or upload.
                func(imageUri);

            }, function cameraError(error) {
                console.debug("Unable to obtain picture: " + error, "app");

            }, options);
        }

        function setOptions(srcType) {
            var options = {
                // Some common settings are 20, 50, and 100
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                // In this app, dynamically set the picture source, Camera or photo gallery
                sourceType: srcType,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true
            }
            return options;
        }

        function displayImage(imgUri) {

            var elem = document.getElementById('photo');
            elem.src = imgUri;
        }











        /*  var THIS = this;
        $('#singup_btn').change(function() {
            if (this.checked) {
                window.location.href = "#signup";
            }
        });
        $('#login_btn').change(function() {
            if (this.checked) {
                //THIS.validateUser();
                window.location.href = "#home";
            }
        });

        $('#save_btn').change(function() {
            if (this.checked) {
                // THIS.saveNewUser();
                window.location.href = "#login";
            }
        });

        $('#cancel_btn').change(function() {
            if (this.checked) {
                window.location.href = "#login";
            }
        });
*/
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};