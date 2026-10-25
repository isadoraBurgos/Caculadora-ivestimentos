# Investment Calculator

Simulador de investimentos em React (Prática em Aula 03), construído com **Vite 8** e **React 19**.

O usuário informa investimento inicial, aporte anual, rendimento anual esperado e duração. A aplicação calcula a evolução ano a ano e mostra uma tabela com valor acumulado, juros do ano, juros totais e capital investido. Ao alterar qualquer campo, a tabela é recalculada. Com duração menor que 1, a tabela some e aparece uma orientação ao usuário.

> Os dados são ilustrativos e a aplicação não oferece recomendações financeiras. A simulação usa taxa constante e aportes no fim de cada ano, sem impostos, taxas ou inflação. Valores exibidos em USD.

## Requisitos

Node.js `^20.19.0` ou `>=22.12.0` (exigência do Vite 8).

## Como executar

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (pasta dist/)
npm run preview  # visualizar o build
```

## Estrutura

```
src/
├── assets/investment-calculator-logo.png
├── components/
│   ├── Header.jsx      # logo e título
│   ├── UserInput.jsx   # formulário (inputs controlados via props)
│   └── Results.jsx     # tabela de resultados (dados derivados)
├── util/investment.js  # cálculo anual e formatador USD
├── App.jsx             # estado compartilhado e validação da duração
├── index.css
└── index.jsx
```

## Conceitos aplicados

Componentização e JSX, props, `useState` com atualização imutável, lifting state up, `map()` com `key`, dados derivados e renderização condicional.

## Notas de estudo — `src/util/investment.js`

- `calculateInvestmentResults` é uma função pura: depende só dos argumentos, sem `fetch`, `useState` ou acesso à interface. Por isso fica em `util/`, fora dos componentes.
- Regra do cálculo, para cada ano:
  - `juros do ano = saldo no início do ano × (taxa / 100)`
  - `saldo no fim do ano = saldo anterior + juros do ano + aporte anual`
- O resultado é um **array** com um objeto por ano (`year`, `interest`, `valueEndOfYear`, `annualInvestment`), o que permite usar `map()` para gerar as linhas da tabela.
- Exemplo (1000 / 100 / 10% / 2 anos): ano 1 → juros 100, saldo 1.200; ano 2 → juros 120, saldo 1.420.
- `formatter` só formata a exibição em USD (`en-US`, sem casas decimais); não altera o valor matemático.
- Com `duration < 1` o array vem vazio; por isso a validação em `App.jsx`.
