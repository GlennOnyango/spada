// document
//   .querySelector(".dropdown-title")
//   .addEventListener("click", function () {
//     //   document
//     //     .querySelector(".dropdown-content")
//     //     .scrollIntoView({ behavior: "smooth" });

//     if (document.querySelector(".dropdown-content").style.display === "flex") {
//       document.querySelector(".dropdown-content").style.display = "none";
//     } else {
//       document.querySelector(".dropdown-content").style.display = "flex";
//     }
//   });

// hover effect

document
  .querySelector(".dropdown-title")
  .addEventListener("mouseover", function () {
    document.querySelector(".dropdown-content").style.display = "flex";
  });

document.querySelector(".dropdown").addEventListener("mouseleave", function () {
  console.log("mouse leave");
  document.querySelector(".dropdown-content").style.display = "none";
});

// check if number-client is on the page
if (document.querySelector(".number-client")) {
  // create for to add number of client
  for (let i = 0; i <= 1000; i++) {
    setTimeout(() => {
      console.log(i);
      document.querySelector(".number-client").textContent = i;
    }, 10 * i/10);
  }
}

// check if homes-cleaned is on the page
if (document.querySelector(".homes-cleaned")) {
    // create for to add number of client
    for (let i = 0; i <= 2538; i++) {
      setTimeout(() => {
        console.log(i);
        document.querySelector(".homes-cleaned").textContent = i;
      }, 10 * i/10);
    }
  }


// check if delivery is on the page
if (document.querySelector(".delivery")) {
  // create for to add number of client
  for (let i = 0; i <= 500; i++) {
    setTimeout(() => {
      console.log(i);
      document.querySelector(".delivery").textContent = i;
    }, 10 * i/10);
  }
}  

// make carousel
let slideIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.querySelectorAll(".slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}