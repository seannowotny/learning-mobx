
import * as React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';

const App = ({ IncomeDomainStore, IncomeUiStore } ) =>
{
  const getCalculation = () =>
  {
    return IncomeUiStore.ShouldShowCalculations 
    ? (
        <div>
          <p>Income: ${IncomeDomainStore.IncomeBeforeTax}.00</p>
          <p>Tax percentage: {IncomeDomainStore.CalculatedTaxPercentage}%</p>
          <p>Income after tax: {IncomeDomainStore.CalculatedIncomeAfterTax}</p>
        </div>
      )
    : null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" 
        onChange={event => IncomeDomainStore.SetIncome(event.target.value)}
        placeholder="Income" 
        className="income-input"/>

        <button type="button" 
        onClick={() => IncomeUiStore.ShowCalculation()} 
        className="calculate-btn"
        >
          Calculate
        </button>

        {getCalculation()}
      </header>
    </div>
  );
}

export default inject('IncomeDomainStore', 'IncomeUiStore')(observer(App));
