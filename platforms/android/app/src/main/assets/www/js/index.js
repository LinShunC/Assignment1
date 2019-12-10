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
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },



    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        this.receivedEvent('deviceready');
        document.addEventListener("resume", onResume, false);
        document.addEventListener("pause", onPause, false);
        document.getElementById('test').addEventListener('click', takePhoto);
        document.getElementById('addBtn').addEventListener('click', addTakePhoto);
        var c = localStorage.getItem("photo")
        var img = document.getElementById("photo");



        if (c != null) {
            img.src = c;
        }

        function takePhoto() {
            navigator.camera.getPicture(success, error, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URI
            })
        }

        function success(imageData) {
            var img = document.getElementById("photo");
            // img.src = "data:image/jpeg;base64," + imageData;
            img.src = imageData;
            localStorage.setItem('photo', imageData);
        }

        function error(err) {
            console.log("error:" + err)
        }

        function addTakePhoto() {
            navigator.camera.getPicture(addsuccess, adderror, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URI
            })
        }

        function addsuccess(imageData) {
            var img = document.getElementById("photo");
            // img.src = "data:image/jpeg;base64," + imageData;
            img.src = imageData;

            var value = document.querySelector('input');
            var inputValue = value.value;

            localStorage.setItem(inputValue, imageData);
            value.value = "";
        }

        function adderror(err) {
            console.log("error:" + err)
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //     var receivedElement = parentElement.querySelector('.received');

        //     listeningElement.setAttribute('style', 'display:none;');
        //   receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

function onPause() {
    this.receivedEvent('pause');
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var text = document.getElementById("message");
    localStorage.setItem("time", dateTime);
    text.innerHTML = "dsfsdf";
    alert("hi");
}

function onResume() {
    alert("welcome back!");
}

app.initialize();




/* var THIS = this;
 // add listeners
 $('#singup_btn').change(function () {
     if (this.checked) {
         window.location.href = "#signup";
     }
 });
 $('#login_btn').change(function () {
     if (this.checked) {
         THIS.validateUser();
     }
 });

 $('#save_btn').change(function () {
     if (this.checked) {
         THIS.saveNewUser();
     }
 });

 $('#cancel_btn').change(function () {
     if (this.checked) {
         window.location.href = "#login";
     }
 });*/