document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".link-artist");
  let elements = document.querySelectorAll(".link-artist");

  // Nếu muốn thêm sự kiện click vào tất cả các phần tử có class đó
  elements.forEach((el) => {
    el.addEventListener("click", function () {
      let url = "ArtistPage.html";

      // Kiểm tra nếu có URL thì chuyển trang
      if (url) {
        window.location.href = url;
      }
    });
  });
});
