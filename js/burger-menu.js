window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#burger").addEventListener("click", function () {
      document.querySelector("#menu").classList.toggle("is-active");
    });
    document.querySelector("#close_menu").addEventListener("click", function () {
        document.querySelector("#menu").classList.toggle("is-active");
    });
    document.querySelector("#search").addEventListener("click", function () {
      document.querySelector("#search-input").classList.toggle("overflow");
  });
});


