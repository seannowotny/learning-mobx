
import { action, observable } from "mobx";
import { persist, create } from "mobx-persist";

export default class IncomeUiStore
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

//  hydrate('incomeUiStore', incomeUiStore).then(() => console.log('incomeUiStore has been hydrated'));