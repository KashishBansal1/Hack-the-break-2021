// JavaScript source code

function writeDataIntoDoc(fname, lname, dateOfBirth, phoneNum, cityAdr, streetAdr, code, doc){
    doc.set({
        firstName: fname,
        lastName: lname,
        dob: dateOfBirth,
        phone: phoneNum,
        city: cityAdr,
        streetAdress: streetAdr,
        postalCode: code
    })
}