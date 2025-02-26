const ball = document.querySelector(".cursor-ball");
const textElements = document.querySelectorAll(".text-anime-style");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  ball.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
});

// Cursor Leaves
document.addEventListener("mouseleave", () => {
  ball.style.width = "0";
  ball.style.height = "0";
});

// Cursor Enters
document.addEventListener("mouseenter", () => {
  ball.style.width = "15px";
  ball.style.height = "15px";
});

// Enlarging Cursor hovering
textElements.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    ball.style.width = "55px";
    ball.style.height = "55px";
    ball.style.backgroundColor = "white";
    ball.style.mixBlendMode = "difference";
  });

  text.addEventListener("mouseleave", () => {
    ball.style.width = "15px";
    ball.style.height = "15px";
    ball.style.backgroundColor = "var(--secondaryColor)";
    ball.style.mixBlendMode = "normal";
  });
});

const selectBox = document.querySelector(".custom-select");
const icon = document.querySelector(".arrowIcon");

selectBox.addEventListener(
  "focus",
  () => (icon.style.transform = "rotate(180deg)")
);
selectBox.addEventListener(
  "blur",
  () => (icon.style.transform = "rotate(0deg)")
);
selectBox.addEventListener("change", () => {
  icon.style.transform = "rotate(0deg)";
});

// FlatPicker DatePicker
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#datePicker", {
    dateFormat: "d-M-Y",
    minDate: "today",
    allowInput: true,
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY > 50) {
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   });
// });


// Email sending EmailJS Code Start
// Email sending EmailJS Code End
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("EzekblhteHAOuXaU0"); // Replace with your EmailJS Public Key

  document.getElementById("appointmentFormBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission & page reload

    const name = document.getElementById("name").value.trim();
    const emailid = document.getElementById("emailid").value.trim();
    const mobileNo = document.getElementById("mobileNo").value.trim();
    const serverType = document.getElementById("serverType").value;
    const datePicker = document.getElementById("datePicker").value.trim();

    // Regular expressions for validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mobilePattern = /^[0-9]{10}$/; // Only 10-digit numbers

    // Validation checks
    if (!name) {
      showToast("Please enter your name!", "error");
      return;
    }
    if (!emailid) {
      showToast("Please enter your email!", "error");
      return;
    }
    if (!emailPattern.test(emailid)) {
      showToast("Invalid email format!", "error");
      return;
    }
    if (!mobileNo) {
      showToast("Please enter your mobile number!", "error");
      return;
    }
    if (!mobilePattern.test(mobileNo)) {
      showToast("Mobile number must be 10 digits!", "error");
      return;
    }
    if (!serverType) {
      showToast("Please select a service!", "error");
      return;
    }
    if (!datePicker) {
      showToast("Please select a date!", "error");
      return;
    }


    const templateParams = {
      name: name,
      emailid: emailid,  // Ensure email is included
      mobileNo: mobileNo,
      serverType: serverType,
      datePicker: datePicker,
    };

    emailjs.send("service_za9xn8u", "template_8npc73k", templateParams)
      .then(function (response) {
        showToast("Email sent successfully! Check You Mail", "success");
        console.log("EmailJS Response:", response);
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);
        if (error.status === 422) {
          showToast("Email ID does not exist!", "error");
        } else {
          showToast("Email sending failed!", "error");
        }
      });
  });

  function showToast(message, type) {
    const toastEl = document.getElementById("toastMessage");
    if (!toastEl) return;

    const toastBody = toastEl.querySelector(".toast-body");
    toastBody.textContent = message;

    toastEl.classList.remove("bg-success", "bg-danger");
    toastEl.classList.add(type === "success" ? "bg-success" : "bg-danger");

    if (typeof bootstrap !== "undefined") {
      const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
      toast.show();
    } else {
      console.error("Bootstrap is not loaded.");
    }
  }
});
