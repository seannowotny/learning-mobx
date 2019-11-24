import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import IncomeDomainStore from './stores/IncomeStore/IncomeDomainStore';
import IncomeUiStore from './stores/IncomeStore/IncomeUiStore';
import { create } from "mobx-persist";

const incomeDomainStore = new IncomeDomainStore();
const incomeUiStore = new IncomeUiStore();

const hydrate = create({
   storage: localStorage,
   jsonify: true
});

 hydrate('incomeUiStore', incomeUiStore).then(() => console.log('incomeUiStore has been hydrated'));

ReactDOM.render(
   <Provider 
   incomeDomainStore={incomeDomainStore}
   incomeUiStore={incomeUiStore}
   >
      <App />
   </Provider>, 
   document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
