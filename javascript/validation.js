//******FORM VALIDATION*********//
function formValidation() {
    //NAME
    var name = document.getElementById("fullName").value;   //name input
    var nameRegex = /\s+/;    //name regex - must include white space
    var alert1 = document.getElementById("alert1"); 
   
    if (nameRegex.test(name)) {//true - if name input passes regex test 
        alert1.innerHTML = "Valid Name";
    } else if(name == ""){//  false
        alert1.innerHTML = "Please do not leave blank";
    } else {
        alert1.innerHTML = "Full Name Please";
    }
    //EMAIL
    var email = document.getElementById("emailAdd").value;//email input
    var emailRegex = /@/; //must include the @ symbol
    var alert2 = document.getElementById("alert2"); //alert email display area
   
    if (emailRegex.test(email)) { //true - if email input passes regex test
        alert2.innerHTML = "Valid Email";
    } else {// false
        alert2.innerHTML = "Invalid Email";
    }
    
    //ROBOT
    var robot = parseInt(document.getElementById("robot").value);// robot input - parseInt converts data type STRING to INT
    var alert5 = document.getElementById("alert5");

    if (robot === 4) { //ONLY if robot input equal to 4 
        alert5.innerHTML = "Valid Response";
    } else {
        alert5.innerHTML = "Invalid Response" + "<br>" + "Robot Alert!";
     
    }

}
    //******END FORM VALIDATION*********//