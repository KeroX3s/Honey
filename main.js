let header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 80)
})

let favorites = document.querySelectorAll(".top-icon i");

favorites.forEach(favorite => {
  favorite.addEventListener("click", function(){
    if (favorite.classList.contains("bx-heart")) {
      favorite.classList.remove("bx-heart");
      favorite.classList.add("bxs-heart");
    } else {
      favorite.classList.remove("bxs-heart");
      favorite.classList.add("bx-heart");
    }
  });
});



let Stars = document.querySelectorAll(".box-custmors .profile .information .rating li i");

Stars.forEach(star => {
  star.addEventListener("click", function(){
    if (star.classList.contains("bx-star")) {
      star.classList.remove("bx-star");
      star.classList.add("bxs-star");
    } else {
      star.classList.remove("bxs-star");
      star.classList.add("bx-star");
    }
  });
});

let pages = document.querySelectorAll("header .navlist li a");

pages.forEach(pageActive => {
  pageActive.addEventListener("click", function() {
    // Remove "active" class from all links
    pages.forEach(page => page.classList.remove("active"));
    
    // Add "active" class to the currently clicked link
    this.classList.add("active");
  })
})