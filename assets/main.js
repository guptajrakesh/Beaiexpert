(function () {
  // Current year in footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Reveal-on-scroll
  var targets = document.querySelectorAll(".card, .path, .steps li, .split > div, details, .cta");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // Waitlist signup. Static hosting has no backend, so set FORM_ENDPOINT to a
  // form service URL (e.g. Formspree) to collect signups; until then it falls
  // back to opening the visitor's email client.
  var FORM_ENDPOINT = "";
  var form = document.getElementById("signup");
  var msg = document.getElementById("signup-msg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        msg.textContent = "Please enter a valid email address.";
        form.email.focus();
        return;
      }
      if (!FORM_ENDPOINT) {
        window.location.href =
          "mailto:hello@beaiexpert.com?subject=" +
          encodeURIComponent("Join the BeAIExpert waitlist") +
          "&body=" + encodeURIComponent("Please add " + email + " to the waitlist.");
        msg.textContent = "Opening your email app to confirm your spot…";
        return;
      }
      msg.textContent = "Submitting…";
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: email })
      })
        .then(function (res) {
          if (!res.ok) throw new Error(res.status);
          form.reset();
          msg.textContent = "You're on the list! Watch your inbox. 🎉";
        })
        .catch(function () {
          msg.textContent = "Something went wrong. Please email hello@beaiexpert.com.";
        });
    });
  }
})();
