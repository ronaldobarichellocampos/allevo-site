// Reveal por seção. Sem stagger nos filhos: os cards têm transição própria de
// hover, e um transition-delay herdado atrasaria o hover para sempre.
(function () {
  var targets = document.querySelectorAll('.reveal');

  function mostrarTudo() {
    targets.forEach(function (t) { t.classList.add('is-in'); });
  }

  if (!('IntersectionObserver' in window)) {
    mostrarTudo();
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

  // Rede de segurança: se o observer existir mas nunca disparar — aba aberta em
  // background, bug de engine, extensão que interfere — o conteúdo aparece
  // assim mesmo. Conteúdo institucional não pode depender de JS para existir.
  setTimeout(mostrarTudo, 2500);
})();
