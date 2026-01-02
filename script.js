
(() => {
  const root = document.documentElement;
  const body = document.body;

  // Cursor glow (subtle, mindblow-y)
  const setMouse = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    root.style.setProperty("--mx", `${x}%`);
    root.style.setProperty("--my", `${y}%`);
  };
  window.addEventListener("pointermove", setMouse, { passive: true });

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) ent.target.classList.add("in");
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Active nav link (only on index with hashes)
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"))
    .filter((a) => a.getAttribute("href")?.startsWith("#"));

  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.getAttribute("id");
          const link = navLinks.find((a) => a.getAttribute("href") === `#${id}`);
          if (!link) return;
          if (e.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-20% 0px -72% 0px", threshold: 0.01 }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
