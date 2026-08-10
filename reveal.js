// Reveal por seção. Sem stagger nos filhos: os cards têm transição própria de
// hover, e um transition-delay herdado atrasaria o hover para sempre.
(function () {
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (t) { t.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '-60px 0px -10% 0px' });
  targets.forEach(function (t) { io.observe(t); });
})();
