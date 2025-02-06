document.addEventListener("DOMContentLoaded", function () {
  //   const OPEN_CLASS = "is-open";
  const menuBtn = document.querySelector(".js-btn-menu");
  const headerNav = document.querySelector(".js-header-nav");
  const headerRight = document.querySelector(".header-right");
  const STATUS = {
    IS_OPEN: "is-open",
    IS_TRANS: "trans",
  };

  //Sự kiện cho nút menu icon để mở list item
  //   menuBtn.addEventListener("click", function () {
  //     headerNav.classList.add(STATUS.IS_OPEN);
  //   });

  //   Cách 2:
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

//Mobile Hero section
document.addEventListener("DOMContentLoaded", function () {
  const heroInner = document.querySelector(".js-hero-inner");
  const heroContent = document.querySelector(".js-hero-content");
  const heroMedia = document.querySelector(".js-hero-media");
  const heroHeading = document.querySelector(".js-hero-heading");

  function moveHeroMedia() {
    if (window.innerWidth <= 767) {
      // Nếu màn hình nhỏ hơn hoặc bằng 760px, di chuyển hero-media vào hero-content
      if (!heroHeading.contains(heroMedia)) {
        heroHeading.insertBefore(
          heroMedia,
          heroHeading.querySelector(".js-hero-btn")
        );
      }
    } else {
      // Nếu màn hình lớn hơn 760px, trả hero-media về vị trí ban đầu
      if (heroHeading.contains(heroMedia)) {
        heroInner.appendChild(heroMedia);
      }
    }
  }

  moveHeroMedia();

  window.addEventListener("resize", moveHeroMedia);

  // script.js
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
});
