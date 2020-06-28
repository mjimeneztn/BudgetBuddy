import React from 'react';
import './App.css';
import AddBill from '../AddBills/AddBill';
import { BillProvider } from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';

// changed function component to arrow function. prefer es6 syntax
const App = () => {
  return (
 <div className='budget-container'>
   <BillProvider>
     <BillOptions></BillOptions>
     <AddBill />
     <BillTotal></BillTotal>
     <BillList />
     </BillProvider>

</div>

  );
}

export default App;
