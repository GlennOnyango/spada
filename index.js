const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// check if number-client is on the page
// if (document.querySelector(".number-client")) {
//   // create for to add number of client
//   for (let i = 0; i <= 1000; i++) {
//     setTimeout(() => {
//       console.log(i);
//       document.querySelector(".number-client").textContent = i;
//     }, (10 * i) / 10);
//   }
// }

// check if homes-cleaned is on the page
// if (document.querySelector(".homes-cleaned")) {
//   // create for to add number of client
//   for (let i = 0; i <= 2538; i++) {
//     setTimeout(() => {
//       console.log(i);
//       document.querySelector(".homes-cleaned").textContent = i;
//     }, (10 * i) / 10);
//   }
// }

// check if delivery is on the page
// if (document.querySelector(".delivery")) {
//   // create for to add number of client
//   for (let i = 0; i <= 500; i++) {
//     setTimeout(() => {
//       console.log(i);
//       document.querySelector(".delivery").textContent = i;
//     }, (10 * i) / 10);
//   }
// }
