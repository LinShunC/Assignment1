$(function() {
    // show the tasks
    var l = localStorage.length;
    for (var i = 0; i < l; i++) {
        var close = document.getElementsByClassName("close");
        var li = document.createElement("li");
        var a = localStorage.key(i);
        var b = localStorage.getItem(a);
        var c = document.createTextNode(b);
        li.className = "llist";
        li.appendChild(c);
        document.getElementById("myUL").appendChild(li);

    }



    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
    // Click on a close button to hide the current list item
    var i;
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            var info = div.textContent;
            var result = info.slice(0, -1);
            var n = localStorage.length;
            for (var i = 0; i < n; i++) {
                var close = document.getElementsByClassName("close");
                var li = document.createElement("li");
                var a = localStorage.key(i);
                var b = localStorage.getItem(a);
                if (b == result) {
                    localStorage.removeItem(a);
                }
            }
            alert("task is removed");
        }
    }
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

    // Create a new list item when clicking on the "Add" button
    var add = document.querySelector('span');
    add.addEventListener('click', function(ev) {
        var li = document.createElement("li");
        li.className = "llist";
        // var value = document.getElementById("input");
        var value = document.querySelector('input');
        var inputValue = value.value;

        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }

        var val = value.value;
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        localStorage.setItem(dateTime, val);
        //  document.getElementById("myInput").value = "";
        value.value = "";
        // document.getElementById("input").innerHTML = " ";
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

    }, false);


});

/*function openCamera(selection) {

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

/*function test() {
    document.getElementById("myInput").innerHTML = "Hello World";
}
(function() {
    var x = $("#myInput").val()
    alert("hi" + x);
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
})();*/