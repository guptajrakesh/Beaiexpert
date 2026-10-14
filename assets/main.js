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
  var targets = document.querySelectorAll(".card, .article-card, .steps li, .split > div, details, .cta");
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

  // Article category filter (articles index). Honors #fundamentals etc. in the URL.
  var filters = document.querySelectorAll(".filter");
  var cards = document.querySelectorAll("#article-list .article-card");
  function applyFilter(name) {
    filters.forEach(function (btn) {
      var active = btn.dataset.filter === name;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
    cards.forEach(function (card) {
      card.hidden = name !== "all" && card.dataset.category !== name;
    });
  }
  if (filters.length) {
    filters.forEach(function (btn) {
      btn.addEventListener("click", function () { applyFilter(btn.dataset.filter); });
    });
    var hash = location.hash.slice(1);
    var known = Array.prototype.some.call(filters, function (b) { return b.dataset.filter === hash; });
    if (known) applyFilter(hash);
  }

  // Reading progress bar (article pages)
  var bar = document.querySelector(".progress__bar");
  if (bar) {
    var update = function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  // Copy buttons on code blocks
  if (navigator.clipboard) {
    document.querySelectorAll(".prose pre").forEach(function (pre) {
      var btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.textContent = "Copy";
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(pre.querySelector("code").innerText).then(function () {
          btn.textContent = "Copied!";
          setTimeout(function () { btn.textContent = "Copy"; }, 1500);
        });
      });
      pre.appendChild(btn);
    });
  }
})();
