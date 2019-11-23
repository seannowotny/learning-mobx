// @flow

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
 });
 
 const incomeUiStore = new IncomeUiStore();
 export default incomeUiStore;
 hydrate('incomeUiStore', incomeUiStore).then(() => console.log('incomeUiStore has been hydrated'));