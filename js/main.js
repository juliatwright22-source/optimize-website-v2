/* ============================================================
   Optimize Strategic Advisors v2 — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Scroll: add class to header when past hero ----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      navMobile.classList.toggle('open');
    });
  }

  // ---- Mobile dropdown toggles (About Us) ----
  const mobileDropdownTriggers = document.querySelectorAll('.nav-mobile__dropdown-trigger');
  mobileDropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = trigger.closest('li');
      const dropdown = parent.querySelector('.nav-mobile-dropdown');
      if (dropdown) dropdown.classList.toggle('open');
    });
  });

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const allNavLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');
  allNavLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href === currentPage) {
      link.classList.add('active');
      const parentLi = link.closest('.has-dropdown') || link.closest('li');
      if (parentLi) parentLi.classList.add('active');
    }
  });

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal-rise, .reveal-slide');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  // ---- HubSpot contact form submission ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // ============================================================
      // INSERT YOUR HUBSPOT PORTAL ID AND FORM GUID BELOW
      const HUBSPOT_PORTAL_ID = '242578018';
      const HUBSPOT_FORM_GUID = '83344a54-8958-46eb-a414-1ef8ebe8dba3';
      // ============================================================

      const firstName  = document.getElementById('cf-first-name').value.trim();
      const lastName   = document.getElementById('cf-last-name').value.trim();
      const email      = document.getElementById('cf-email').value.trim();
      const phone      = document.getElementById('cf-phone').value.trim();
      const message    = document.getElementById('cf-message').value.trim();

      const payload = {
        fields: [
          { name: 'firstname', value: firstName },
          { name: 'lastname',  value: lastName },
          { name: 'email',     value: email },
          { name: 'phone',     value: phone },
          { name: 'message',   value: message }
        ],
        context: {
          pageUri:  window.location.href,
          pageName: document.title
        }
      };

      const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

      const submitBtn = contactForm.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      fetch(endpoint, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload)
      })
      .then(function (res) {
        if (res.ok) {
          contactForm.reset();
          const successMsg = document.getElementById('contact-success');
          if (successMsg) successMsg.style.display = 'block';
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        } else {
          return res.json().then(function (data) { throw data; });
        }
      })
      .catch(function () {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        alert('There was a problem submitting the form. Please try again or email us directly.');
      });
    });
  }

});
