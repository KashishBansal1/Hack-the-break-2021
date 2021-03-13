// JavaScript source code

function handleForm() {
    var firstName = $('#fname').val()
    var lastName = $('#lname').val()
    var phoneNum = $('#phone').val()
    var dob = $('#dateOfBirth').val()
    var adr = $('#adress').val()
    var code = $('#zip').val()
    var town = $('#city').val()
    var control = $('#ccn').val()

    var writeTarget = db.collection("users").doc(control)

    writeDataIntoDoc(firstName, lastName, dob, phoneNum, town, adr, code, writeTarget)

    console.log(firstName + " " + lastName);

}