# Prompts Midjourney — símbolo Allevo

Conceitos: **nutrição · longevidade · vínculo**.
Escala de referência: Royal Canin — símbolo pequeno, uma cor, vive a 20px no header.

---

# Com `--sref 2930206942`

## A regra que muda tudo

Com style reference, **o prompt textual descreve a FORMA e o sref traz o ESTILO**. Se você escrever estilo no texto (monoline, flat, black on white) e também mandar um sref, os dois brigam e o resultado fica lavado. Então os prompts abaixo são mais curtos e mais geométricos que os da versão sem sref.

## Parâmetros

```
--sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, typography, mascot, photo, realistic
```

**`--sw` é o botão que você vai girar.** Ele controla quanta força o estilo tem, de 0 a 1000, e o padrão é 100.

| `--sw` | Quando usar |
|---|---|
| `30–50` | Se o sref estiver dominando e sujando a geometria do símbolo |
| `60` | **Comece aqui.** Estilo presente, forma ainda limpa |
| `100–150` | Se o resultado sair genérico demais e você quiser mais do caráter do sref |

Faça a primeira rodada com **o mesmo prompt em `--sw 30`, `60` e `120`**. Você vai enxergar em um minuto onde o estilo ajuda e onde ele atrapalha. Só depois vale variar o conceito.

**Não use `--style raw` junto com sref.** O raw suprime interpretação estilística — é justamente o que você está tentando trazer com o sref. Um cancela o outro.

---

## Os quatro conceitos

**1 · O elo**
```
two interlocking open arcs forming a continuous link, geometric brand symbol, centered, generous negative space --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

**2 · O ciclo aberto**
```
an incomplete circular ring with one end curving upward, a single small dot at the center, geometric brand symbol, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

**3 · O abrigo**
```
one large arc sheltering a smaller arc beneath it, both open at the bottom, geometric brand symbol, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

**4 · A semente dupla**
```
two solid seed shapes joined at the base, rotating around a shared center, geometric brand symbol, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

---

## Exploratórios — para achar uma quinta direção

```
abstract yeast cell wall structure reduced to its simplest geometric form, brand symbol, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

```
two abstract forms of different sizes leaning toward each other without touching, brand symbol, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

```
a single continuous spiral opening outward as it grows, brand symbol, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no text, letters, words, mascot, photo
```

```
the lowercase letter a built from two geometric arcs, its counter shaped like a droplet, monogram, centered --sref 2930206942 --sw 60 --v 7 --ar 1:1 --no mascot, photo, realistic
```

---

## O risco que você precisa saber antes de gerar

Não sei o que o `2930206942` produz. Se ele for **ilustrativo, texturizado ou pictórico** — pintura, grão, cor rica — ele vai brigar com a natureza de um símbolo. Logo é redução extrema; sref artístico adiciona detalhe. Os sintomas de que isso está acontecendo:

- o traço sai irregular, com espessura variável
- aparecem sombras, textura ou profundidade
- a forma some quando você reduz a imagem para 20px

**Se acontecer, o sref não é ruim — ele é bom para outra coisa.** Guarde-o para as ilustrações do blog e para as capas de material técnico, onde textura é qualidade. Para o símbolo, caia para `--sw 30` ou volte aos prompts sem sref.

---

## Sem sref — se o estilo não colar

Mesmos conceitos, com o estilo escrito no texto:

```
minimal flat vector logo icon, two interlocking open arcs forming an infinite link, monoline geometric construction, uniform thick stroke weight, rounded stroke caps, pure black on pure white, centered, generous negative space, swiss design, biotechnology brand mark --style raw --v 7 --ar 1:1 --no text, letters, words, typography, gradient, shadow, 3d, mascot, photo
```

Troque a descrição da forma pelas dos outros três conceitos. Aqui o `--style raw` volta a ser útil, porque não há sref competindo.

---

## Depois de gerar

1. Gere 20 a 40 e escolha **3 direções**, não 3 imagens.
2. **Teste a 20px antes de se apaixonar** — reduza no Finder. Se some ou vira borrão, morreu.
3. Vetorize: Illustrator com *Image Trace* em Black and White Logo, ou Vectorizer.ai. Depois **redesenhe por cima** com círculos e arcos de verdade — não deixe o traço rastreado.
4. Me mande o SVG que eu aplico no header, favicon e rodapé das seis páginas.

Os quatro em `logo/` já são SVG limpo e pronto para produção, entre 210 e 273 bytes. Use o Midjourney para descobrir a direção que nenhum de nós pensou — é aí que ele ganha da prancheta.

## O que nunca pedir

`logo design`, `logo template`, `vector logo set` — traz aquelas pranchas com dezenas de marcas genéricas e mascotes. Sempre `brand symbol` no singular.
