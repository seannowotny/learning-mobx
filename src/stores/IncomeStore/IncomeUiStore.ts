
import { action, observable } from "mobx";
import { persist } from "mobx-persist";

export default class IncomeUiStore
{
   @persist @observable ShouldShowCalculations = false;
   
   @action ShowCalculation() 
   {
      this.ShouldShowCalculations = true;
   }
}