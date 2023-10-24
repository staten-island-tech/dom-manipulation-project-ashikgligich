const DOMSelectors = {
  form: document.querySelector("form"),
  firstName: document.querySelector(".first-name"),
  h2s: document.querySelectorAll("h6"),

  form: document.querySelector("form1"),
  Title: document.querySelector(".card-title"),
  h2s: document.querySelectorAll("h2"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h6s.forEach((el) => {
    el.textContent = DOMSelectors.firstName.value;
  });
    event.preventDefault();
    console.log(DOMSelectors.Title.value);
    DOMSelectors.h2s.forEach((el) => {
      el.textContent = DOMSelectors.Title.value;
  });
});

function makeGalaxy(){


}

function addStar(Galaxy){
document
  .querySelector(".gallery")
  .insertAdjacentHTML(
"afterbegin",
`<div class="grow">
<div id="animation1">
  <img
    src="${DOMSelectors.Picture.value}"
    alt="F44"
  />
  <h2>${DOMSelectors.Title.value}</h2>
  <h4>${DOMSelectors.Data.value}</h4>
  <h6>${DOMSelectors.firstName.value}</h6>
</div>
</div>`
  );
}




function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}