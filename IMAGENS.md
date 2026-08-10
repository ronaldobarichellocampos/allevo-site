# Imagens do site Allevo

Toda fotografia do site vive em **preto e branco** — o filtro é aplicado no CSS
pela classe `.bw`, então pode gerar colorido no Midjourney que o site converte.
A única cor da interface é o azul Allevo `#2B5B8C`.

## Em uso hoje

| Arquivo | Proporção | Onde aparece |
|---|---|---|
| `filhote-retrato.png` | 4:5 | Mosaico do hero (célula grande, 2×2) |
| `husky-correndo.png` | 4:5 | Mosaico do hero · Ato 2 (split) · página Cães |
| `gato-cobertor.png` | 4:5 | Mosaico do hero · card do blog · página Gatos |
| `gatinho-janela.png` | 4:5 | Mosaico do hero |
| `labrador-senior.png` | 1:1 | Mosaico do hero · card do blog · página Ingredientes |
| `jack-russell-capim.png` | 4:5 | Mosaico do hero |
| `golden-tutor.png` | 21:9 | Mosaico do hero · Ato 3 · card do blog · página Sobre |
| `filhote-jardim.png` | 21:9 | Ato 1 |
| `ciencia-vidraria.png` | 3:2 | Seção Nossa ciência · hero do blog |

## Para gerar depois

Substituir um arquivo pelo mesmo nome atualiza o site inteiro — nenhum HTML
precisa mudar.

**Ato 2, dedicada** (hoje reaproveita o husky do mosaico) — 21:9
> black and white photography, australian shepherd running toward camera on a
> trail, owner's legs blurred in background, motion energy, high contrast,
> natural light --ar 21:9

**Gatos, hero próprio** (hoje usa o gato do cobertor) — 21:9
> black and white photography, cat stretching on a windowsill, soft directional
> daylight, calm domestic scene, high contrast --ar 21:9

**Mosaico, células extras** — 4:5, para ampliar a variedade do hero
> black and white editorial photography, senior cat portrait looking at camera,
> high contrast, natural light --ar 4:5
> black and white photography, two puppies playing, motion blur, low angle --ar 4:5

**Ciência e blog** — 3:2
> black and white macro photography, fermentation vessel with rising bubbles,
> laboratory setting, dramatic side light, high contrast --ar 3:2
> black and white macro photography, dry kibble texture close-up, studio light,
> high contrast --ar 3:2

## Regras

- **Nunca** aplicar filtro P&B na exportação do Midjourney: o CSS faz isso, e
  manter o original colorido preserva a opção de mudar de ideia.
- Enquadramento com **espaço negativo à esquerda** nas 21:9 — é onde o texto do
  ato entra, sobre gradiente escuro.
- Evitar pets olhando para fora do quadro em direção à borda de texto.
- Nada de fundo branco estourado nas 21:9: o gradiente precisa de matéria escura
  para o texto branco assentar.
