// @flow

import { action, computed, observable } from 'mobx';

class IncomeDomainStore 
{
   taxBracket = 20000;

   @observable IncomeBeforeTax = 0  
   
   @action SetIncome (incomeAmount: number) 
   {
     this.IncomeBeforeTax = parseInt(incomeAmount)
   }

   @computed get CalculatedTaxPercentage () 
   {
      return this.IncomeBeforeTax < this.taxBracket ? 10 : 20;
   }

   @computed get CalculatedIncomeAfterTax () 
   {
      if (this.IncomeBeforeTax < this.taxBracket) 
      {
        return this.IncomeBeforeTax * 0.9;
      }  
      else
      {
         return this.IncomeBeforeTax * 0.8;
      }
   };
 }

export default new IncomeDomainStore();