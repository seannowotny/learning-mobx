
import * as React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import IncomeUiStore from '../../stores/IncomeStore/IncomeUiStore';
import IncomeDomainStore from '../../stores/IncomeStore/IncomeDomainStore';


const App = ({ incomeDomainStore, incomeUiStore }: { incomeDomainStore: IncomeDomainStore, incomeUiStore: IncomeUiStore }) =>
{
  const getCalculation = () =>
  {
    return incomeUiStore.ShouldShowCalculations 
    ? (
        <div>
          <p>Income: ${incomeDomainStore.IncomeBeforeTax}.00</p>
          <p>Tax percentage: {incomeDomainStore.CalculatedTaxPercentage}%</p>
          <p>Income after tax: {incomeDomainStore.CalculatedIncomeAfterTax}</p>
        </div>
      )
    : null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" 
        onChange={event => incomeDomainStore.SetIncome(parseInt(event.target.value))}
        placeholder="Income" 
        className="income-input"/>

        <button type="button" 
        onClick={() => incomeUiStore.ShowCalculation()} 
        className="calculate-btn"
        >
          Calculate
        </button>

        {getCalculation()}
      </header>
    </div>
  );
}

export default inject('incomeDomainStore', 'incomeUiStore')(observer(App));
