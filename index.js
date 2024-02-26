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

document.querySelector(".quote_form").addEventListener("submit", (e) => {
  e.preventDefault();
  const first_name = document.querySelector("#first_name").value;
  const last_name = document.querySelector("#last_name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone_number").value;
  const service = document.querySelector("#service").value;
  const message = document.querySelector("#message").value;

  console.log(first_name, last_name, email, phone, service,message);

  fetch("https://sapdalimited.co.ke/php/", {
    method: "POST",
    body: JSON.stringify({
      data: {
        first_name,
        last_name,
        email,
        phone,
        service,
        message,
        "qoute-form": "true",
      },
    }),
  })
    .then((res) => {
      console.log(res);

      if (!res.ok) {
        throw new Error("An error occured");
      } else {
        document.querySelector(".quote_form").reset();
        document.querySelector(".quote_form").innerHTML = `
        <div class="alert alert-success" role="alert">
          Dear ${first_name} ${last_name},
          Thank you for reaching out, a member of our organisation will get back to you shortly.
        </div>
        `;
      }
    })
    .catch((err) => {
      console.log(err);
      document.querySelector(".response-sector").innerHTML = `
      <div class="alert alert-danger" role="alert">
        An error occured, please try again later.
      </div>
      `;
    });
});

document.querySelector(".contact_form").addEventListener("submit", (e) => {
  e.preventDefault();
  const first_name = document.querySelector("#contact_first_name").value;
  const last_name = document.querySelector("#contact_last_name").value;
  const email = document.querySelector("#contact_email").value;
  const phone = document.querySelector("#contact_phone_number").value;
  const message = document.querySelector("#contact_message").value;

  console.log(first_name, last_name, email, phone, message);

  fetch("https://sapdalimited.co.ke/php/", {
    method: "POST",
    body: JSON.stringify({
      data: {
        first_name,
        last_name,
        email,
        phone,
        message,
        "contact-form": "true",
      },
    }),
  })
    .then((res) => {
      console.log(res);

      if (!res.ok) {
        throw new Error("An error occured");
      } else {
        document.querySelector(".contact_form").reset();
        document.querySelector(".response-sector").innerHTML = `
        <div class="alert alert-success" role="alert">
          Dear ${first_name} ${last_name},
          Thank you for reaching out, a member of our organisation will get back to you shortly.
        </div>
        `;
      }
    })
    .catch((err) => {
      console.log(err);
      document.querySelector(".response-sector").innerHTML = `
      <div class="alert alert-danger" role="alert">
        An error occured, please try again later.
      </div>
      `;
    });
});