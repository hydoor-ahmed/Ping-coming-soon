const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const error = document.querySelector(".error");

btn.addEventListener("click", () => {
  if (input.value.includes("@email.com")) {
    error.classList.add("hidden");
    btn.classList.remove("md:mb-2");
    input.classList.remove("border-lightRed");
  } else {
    btn.classList.add("md:mb-4");
    error.classList.remove("hidden");
    input.classList.add("border-lightRed");
  }
});
