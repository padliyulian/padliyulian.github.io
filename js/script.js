window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document
      .querySelector("#julian-navbar-onscroll")
      .classList.remove("elevation-0");
  } else {
    document
      .querySelector("#julian-navbar-onscroll")
      .classList.add("elevation-0");
  }
};
