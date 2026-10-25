import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{resultsData[0].year}</td>
          <td>{formatter.format(resultsData[0].valueEndOfYear)}</td>
          <td>{formatter.format(resultsData[0].interest)}</td>
          <td>{formatter.format(resultsData[0].interest)}</td>
          <td>{formatter.format(initialInvestment + resultsData[0].annualInvestment)}</td>
        </tr>
      </tbody>
    </table>
  );
}
