let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
};

//cta popup
let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}

function closepopup(){
    popup.classList.remove("open-popup");
}


//send email with javascript

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "bookie.abayomi.2003@gmail.com",
        Password : "0CD78A2D94E062F902995B80A424408EDBD4",
        To : 'bookie.abayomi.2003@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New content form Enquiry",
        Body : "Name" + document.getElementById("name").value 
        + "<br> Email" + document.getElementById("email").value
        + "<br> Phone no." + document.getElementById("phone").value
        + "<br> Message" + document.getElementById("message").value,
    }).then(
      message => alert("Message sent successfully")
    );
}
