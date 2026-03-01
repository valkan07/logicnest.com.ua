/* ═══════════════════════════════════════════════
   LogicNest — Landing Page Scripts
   ═══════════════════════════════════════════════ */

(function () {
    'use strict';

    // ── Language Toggle ──
    let lang = 'uk';
    const toggle = document.getElementById('langToggle');
    const indicator = document.getElementById('langIndicator');
    const mobileToggleLang = document.getElementById('mobileLangToggle');
    const mobileIndicator = document.getElementById('mobileLangIndicator');

    function setLang(newLang) {
        lang = newLang;
        var label = lang.toUpperCase();
        indicator.textContent = label;
        mobileIndicator.textContent = label;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-uk]').forEach(function (el) {
            el.textContent = el.getAttribute('data-' + lang);
        });
    }

    function switchLang() {
        setLang(lang === 'uk' ? 'en' : 'uk');
    }

    toggle.addEventListener('click', switchLang);
    mobileToggleLang.addEventListener('click', switchLang);

    // ── Mobile Menu ──
    const mobileBtn = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    mobileBtn.addEventListener('click', function () {
        mobileBtn.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(function (link) {
        link.addEventListener('click', function () {
            mobileBtn.classList.remove('active');
            mobileMenu.classList.remove('open');
        });
    });

    // ── Nav Scroll ──
    var nav = document.getElementById('nav');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
        var y = window.scrollY;
        if (y > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = y;
    }, { passive: true });

    // ── Reveal on Scroll ──
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(function (el) { observer.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('visible'); });
    }
})();
