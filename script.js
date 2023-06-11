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
    >
     const scriptURL = '<https://script.google.com/macros/s/AKfycbzvsWaKnM3yk2FzxkOI6H01je-q6JE0eosZrh0gcNgfb1o4f2Uj_8qndRhxNb-NjOCRLA/exec>'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML =""
        }, 4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
    




