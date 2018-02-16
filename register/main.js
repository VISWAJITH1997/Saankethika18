 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyAqGS0IMacY4gd-hKonWygNC_mCblNH-sc",
     authDomain: "saankethika-2018.firebaseapp.com",
     databaseURL: "https://saankethika-2018.firebaseio.com",
     projectId: "saankethika-2018",
     storageBucket: "saankethika-2018.appspot.com",
     messagingSenderId: "621132676099"
 };
 firebase.initializeApp(config);


 var messagesRef = firebase.database().ref('Contact Details');


 var eve = null; //var to store cboxValue

 //     events list data
 (function ($) {
     "use_strict";
     var cboxArray = [];

     function itemExistsChecker(cboxValue) {
         var len = cboxArray.length;
         if (len > 0) {
             for (var i = 0; i < len; i++) {
                 if (cboxArray[i] == cboxValue) {
                     return true;
                 }
             }
         }
         cboxArray.push(cboxValue);
     }
     $('input[type="checkbox"]').each(function () {
         var cboxValue = $(this).val();
         var cboxChecked = localStorage.getItem(cboxValue) == 'true' ? true : false;
         if (cboxChecked) {
             $(this).prop('checked', true);
             itemExistsChecker(cboxValue);
         }
         $(this).change(function () {
             localStorage.setItem(cboxValue, $(this).is(':checked'));
             if ($(this).is(':checked')) {
                 itemExistsChecker(cboxValue);
             } else {
                 var cboxValueIndex = cboxArray.indexOf(cboxValue);
                 if (cboxValueIndex >= 0) {
                     cboxArray.splice(cboxValueIndex, 1);
                 }
             }
             console.log(cboxArray);
         });
     });
     console.log(cboxArray);
     eve = cboxArray;
 })(jQuery);


 //listener for form submit
 document.getElementById('ContactForm').addEventListener('submit', SubmitForm);


 function SubmitForm(e) {
     e.preventDefault();
     var name = getInputVal('name');
     var email = getInputVal('email');
     var num = getInputVal('num');
     location.reload();
     saveMessage(name, email, num);
     document.querySelector('.alert').style.display = 'block';

     setTimeout(function () {
         document.querySelector('.alert').style.display = 'none';
     }, 3000);
 }

 function getInputVal(id) {
     return document.getElementById(id).value;
 }

 // Save message to firebase
 function saveMessage(name, email, num) {
     alert("registration sucessful")
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         email: email,
         phone: num,
         event: eve
     });
 }
