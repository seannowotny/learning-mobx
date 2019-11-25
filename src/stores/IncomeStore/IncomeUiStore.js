// @flow

import { createContext } from 'react';
import { action, observable } from "mobx";
import { persist, create } from "mobx-persist";

class IncomeUiStore
{
   @persist @observable ShouldShowCalculations = false;

   @action ShowCalculation() 
   {
      this.ShouldShowCalculations = true;
   }
}

const hydrate = create({
   storage: localStorage,
   jsonify: true
})
 
export const incomeUiStore = new IncomeUiStore();
hydrate('incomeUiStore', incomeUiStore).then(() => console.log('incomeUiStore has been hydrated'));

export const incomeUiContext = createContext<IncomeUiStore>(incomeUiStore);