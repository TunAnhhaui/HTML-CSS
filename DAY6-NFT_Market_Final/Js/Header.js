document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".js-btn-menu");
  const headerNav = document.querySelector(".js-header-nav");
  const headerRight = document.querySelector(".header-right");
  const STATUS = {
    IS_OPEN: "is-open",
    IS_TRANS: "trans",
  };

  menuBtn.addEventListener("click", handleOpenMenu);
  function handleOpenMenu() {
    headerNav.classList.add(STATUS.IS_OPEN);
  }

  function handleCloseMenu() {
    headerNav.classList.remove(STATUS.IS_OPEN);
  }

  document.addEventListener("click", function () {
    if (
      headerNav.classList.contains(STATUS.IS_OPEN) &&
      !headerNav.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      handleCloseMenu();
    }
  });

  /**/
  let lastScrollPosition = 0;
  const navbar = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset;
    const navbarHeight = navbar.offsetHeight;

    if (
      currentScrollPosition > lastScrollPosition &&
      currentScrollPosition > navbarHeight
    ) {
      // Trượt xuống và đã cuộn qua chiều cao của navbar: Ẩn menu
      navbar.style.transform = "translateY(-100%)";
    } else {
      // Trượt lên hoặc chưa cuộn đủ chiều cao navbar: Hiển thị menu
      navbar.style.transform = "translateY(0)";
    }

    lastScrollPosition = currentScrollPosition;
  });

  function handleResize() {
    if (window.innerWidth <= 1024) {
      headerNav.classList.add(STATUS.IS_TRANS);
    } else {
      headerNav.classList.remove(STATUS.IS_TRANS);
    }
  }
  window.addEventListener("resize", handleResize);

  //Router
  const btn = document.querySelector(".js-btn-register");

  // Thêm sự kiện click
  btn.addEventListener("click", () => {
    window.location.href = "RegisterPage.html";
  });
});
