function emailSend() {
  const emailfrom = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;
  console.log(emailfrom, msg);
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "sanjaysekar0321@gmail.com",
    Password: "73B51CD0E6E8D70C2B561732254A1092918F",
    To: "sanjaysekar0321@gmail.com",
    From: emailfrom,
    Subject: "contact",
    Body: msg,
  }).then((message) => alert(message));
}
