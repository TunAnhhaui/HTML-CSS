document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".link-nft");
  let elements = document.querySelectorAll(".link-nft");

  elements.forEach((el) => {
    el.addEventListener("click", function () {
      let url = "NftPage.html";

      // Kiểm tra nếu có URL thì chuyển trang
      if (url) {
        window.location.href = url;
      }
    });
  });
});
