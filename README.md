# Investment Calculator

Simulador de investimentos em React (Prática em Aula 03).

## Notas de estudo — `src/util/investment.js`

- `calculateInvestmentResults` é uma função pura: depende só dos argumentos, sem `fetch`, `useState` ou acesso à interface. Por isso fica em `util/`, fora dos componentes.
- Regra do cálculo, para cada ano:
  - `juros do ano = saldo no início do ano × (taxa / 100)`
  - `saldo no fim do ano = saldo anterior + juros do ano + aporte anual`
- O resultado é um **array** com um objeto por ano (`year`, `interest`, `valueEndOfYear`, `annualInvestment`), o que permite usar `map()` para gerar as linhas da tabela.
- Exemplo (1000 / 100 / 10% / 2 anos): ano 1 → juros 100, saldo 1.200; ano 2 → juros 120, saldo 1.420.
- `formatter` só formata a exibição em USD (`en-US`, sem casas decimais); não altera o valor matemático.
- Com `duration < 1` o array vem vazio; por isso a validação da task 10.
