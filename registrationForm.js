document.getElementById('RegistrationForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = getTnputValue('InputFullName');
    var email = getTnputValue('InputEmail');
    var dob = getTnputValue('InputDOB');
    var phone = getTnputValue('InputPhone');
   
    saveMessage(name, email, dob, phone);
}

function getTnputValue(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, dob, phone){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user){     
         db.collection("RegisteredUsers").add({
                        name: name,
                        email: email,
                        dob: dob,
                        phone: phone
                    }).then(function () {
                        console.log("New user added to firestore");
                    })
                    .catch(function (error) {
                        console.log("Error adding new user: " + error);
                    });
                 }
        });
    }
