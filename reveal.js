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

// Fade-in de imagem ao carregar. Imagem já em cache (ou back-navigation)
// aparece instantânea — não há o que revelar; só o carregamento fresco
// recebe os 400ms definidos no CSS. Erro de rede também libera a imagem,
// para nunca deixá-la presa em opacity:0 mostrando só um retângulo vazio.
(function () {
  document.querySelectorAll('img').forEach(function (img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('no-fade', 'is-loaded');
      return;
    }
    img.addEventListener('load', function () { img.classList.add('is-loaded'); }, { once: true });
    img.addEventListener('error', function () { img.classList.add('is-loaded'); }, { once: true });
  });
})();

// Corrige o salto para âncora quando a página já carrega com #hash na URL.
// O navegador pula assim que consegue — antes da fonte Sora trocar (FOUT) e
// das fotos assentarem a altura do layout — então o alvo se move sob o
// usuário depois do pulo. Espera as fontes e um frame de respiro, e
// reposiciona. scrollIntoView já respeita o scroll-margin-top do CSS.
(function () {
  if (!location.hash) return;
  var alvo = document.getElementById(location.hash.slice(1));
  if (!alvo) return;

  function reposiciona() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        alvo.scrollIntoView({ block: 'start', behavior: 'auto' });
      });
    });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(reposiciona);
  } else {
    reposiciona();
  }
})();
