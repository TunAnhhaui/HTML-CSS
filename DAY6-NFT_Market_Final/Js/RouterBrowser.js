document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".link-browser");
  let elements = document.querySelectorAll(".link-browser");

  elements.forEach((el) => {
    el.addEventListener("click", function () {
      let url = "BrowserPage.html";

      // Kiểm tra nếu có URL thì chuyển trang
      if (url) {
        window.location.href = url;
      }
    });
  });
});
