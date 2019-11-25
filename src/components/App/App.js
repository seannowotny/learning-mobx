// @flow

import React, { useContext } from 'react';
import type { Node } from 'react';
import './App.css';
import { incomeDomainContext } from '../../stores/IncomeStore/IncomeDomainStore';
import { incomeUiContext } from '../../stores/IncomeStore/IncomeUiStore';
import { observer } from 'mobx-react-lite';

export default observer((): Node =>
{
  const incomeUiStore = useContext(incomeUiContext);
  const incomeDomainStore = useContext(incomeDomainContext);

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
        onChange={event => incomeDomainStore.SetIncome(event.target.value)}
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
});
