// Select Element
let key = document.querySelector(".option-box .key");
let option = document.querySelector(".option-box");

// Add Event On Click
key.addEventListener("click", (e) => {
  option.classList.toggle("open");
});

// Call Element
let colorLi = document.querySelectorAll(".option-box ul li");

// Loop For Element
colorLi.forEach((li) => {
  // Add Event On Click On Element
  li.addEventListener("click", (e) => {
    // Arrive To Element By Document And Set Its Propertie
    document.documentElement.style.setProperty(
      "--main-",
      e.target.dataset.color
    );
  });
});

// Select Element
let span = document.querySelector(".scroll-top");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    bahavior: "smooth",
  });
};
