function sendEmail() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').textContent = "NAME CANNOT BE EMPTY";
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').textContent = "EMAIL CANNOT BE EMPTY";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').textContent = "EMAIL FORMAT INVALID";
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').textContent = "SUBJECT CANNOT BE BLANK";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').textContent = "MESSAGE CANNOT BE BLANK";
        return false;
    }
    
    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
    
    const serviceID = "service_mrc393v";
    const emailTemplate = "template_eu10bps";

    emailjs.send(serviceID, emailTemplate, params).then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            document.getElementById('status').value = "";
            alert("message sent successfully");
        }
    ).catch((err) => console.log(err));
}