import { action, observable } from "mobx";

class IncomeUiStore
{
   constructor()
   {
      this.ShouldShowCalculations = false;
   };

   @observable ShouldShowCalculations = false;
   
   @action ShowCalculation() 
   {
      this.ShouldShowCalculations = true;
   }
 }
 
 export default IncomeUiStore;