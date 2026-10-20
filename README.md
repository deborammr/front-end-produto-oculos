# Anti-Social Spec™

> Estilo inconfundível por fora. Paz e discrição por dentro.

Landing page de um produto fictício, feita em React com CSS Modules e organizada em Feature-Sliced Design (FSD). O enunciado da atividade está em [ENUNCIADO.md](ENUNCIADO.md).

## Integrantes

- Débora Marsal
- Isabel Lin

## Sobre o produto

O **Anti-Social Spec™** é um óculos de sol inteligente com lentes fotocromáticas de altíssima velocidade. Ele identifica rostos conhecidos (vizinhos, ex-namorados, colegas de trabalho) a até 15 metros e escurece a lente em 99% para você fingir, com 100% de firmeza, que não viu ninguém.

- **Público:** pessoas introvertidas (ou só sem paciência para small talk) que circulam por ruas, mercados e elevadores.
- **Proposta:** evitar conversas fiadas com elegância e alta tecnologia.
- **CTA e carrinho:** "Garantir Meu Modo Invisível" abre um configurador (plano → acabamento → quantidade) que adiciona o item ao carrinho. É possível comprar várias unidades e óculos de acabamentos e planos diferentes; o carrinho calcula o total e leva ao checkout fictício (nome e e-mail → confirmação).
- **Componente interativo:** o botão "Simular Vizinho se Aproximando" escurece as lentes do óculos na tela.

Tudo é mockado e roda 100% no navegador. Nenhuma compra é realizada e nenhum dado é enviado.

## Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build`.

## Arquitetura: Feature-Sliced Design

```
src/
├── app/        # entrada da aplicação, providers e estilos globais
├── pages/      # landing (compõe os widgets)
├── widgets/    # seções da página: header, hero, benefits, how-it-works,
│               # product-showcase, testimonials, pricing, faq, final-cta, footer
├── features/   # ações do usuário: purchase-modal (configurador), cart (drawer e botão),
│               # checkout, simulate-neighbor, faq-accordion
├── entities/   # dados e cards do domínio: benefit, plan, testimonial, faq-item, frame,
│               # cart-item (estado do carrinho e cálculo de totais)
└── shared/     # UI reutilizável (Button, Modal, GlassCard, Glasses...) e utilitários
```

Cada slice expõe uma API pública em `index.js`. Os imports só vão de camadas superiores para inferiores (`pages → widgets → features → entities → shared`). Os dados mockados ficam na pasta `model/` de cada slice, e cada componente tem seu próprio arquivo `.module.css`.

## Identidade visual

Minimalista e tecnológica, inspirada nas páginas de produto da Apple: fundo escuro, muito espaço negativo, tipografia grande, glassmorphism discreto e um único destaque em ciano (`#38BDF8`), com roxo (`#A855F7`) em gradientes sutis. Fonte: SF Pro / Inter. O óculos é um SVG feito à mão, sem imagens externas.

## Jornada de construção

### Ideia inicial

A ideia surgiu da vontade de criar um site para vender um item de vestuário que se conectasse com tecnologia. Inicialmente, consideramos criar um boné inteligente (Anti-Pensamento Ruim). Mas, evoluindo a discussão, optamos pelos óculos inteligentes (*Anti-Social Spec™*). Percebemos que os óculos nos dariam muito mais oportunidades criativas e visuais na aplicação.


### Pesquisa e referências

A referência principal de estilo foram as páginas de produto da Apple, por serem minimalistas,discretas, e que transmitem modernidade.

### Ferramentas utilizadas

- React + Vite
- CSS Modules
- VS Code
- Claude Code Sonnet 5.5

### Uso de IA

- **Claude Sonnet 5.5:** planejamento da arquitetura FSD, geração inicial do código a partir do briefing e realização de ajustes.

### Evolução da solução

- **Evolução do fluxo de CTA e Pré-Venda:** Na ideia inicial, a landing page contava apenas com um registro simples de interesse para um único item selecionado. No entanto, percebemos que poderíamos aproximar ainda mais a experiência de um e-commerce real. Solicitamos à IA que implementasse a funcionalidade de um **carrinho completo e modal de checkout**, permitindo ao usuário personalizar o plano, selecionar diferentes modelos de armação SVG e simular a adição de múltiplos itens antes de confirmar a pré-venda.

### Resultado final

**Como vocês avaliam o resultado?**
Avaliamos o resultado final de forma extremamente positiva. Escolhemos de um modelo de IA intermediário da Anthropic (Claude Sonnet 5.5) e o resultado foi uma surpresa positiva, pois o modelo compreendeu com precisão a arquitetura FSD (Feature-Sliced Design), o uso de CSS Modules e a identidade visual, exigindo pouquíssimos ajustes manuais durante o desenvolvimento.

**O que fariam diferente se tivessem mais tempo?**
Se tivéssemos mais tempo, investiríamos no desenvolvimento de mais interfaces interativas e demonstrativas do produto. Por exemplo, criaríamos um configurador 3D/interativo da armação do óculos em tempo real, novos modos de simulação ambiental (como um "Modo Elevador" ou "Modo Supermercado") e mais animações de transição suave utilizando bibliotecas como Framer Motion.
