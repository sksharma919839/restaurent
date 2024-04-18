const scriptURL =
  "https://script.google.com/macros/s/AKfycby2u2s5RLH4JzyyHp5BVTHL5jbbWM0m0jUZFtJ5-ZldzJlCdDA4kKHyCjR9JDnYG8qHfg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
