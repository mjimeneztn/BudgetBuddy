import React from 'react';
import './App.css';
import AddBill from '../AddBills/AddBill';
import { BillProvider } from '../../Context/BillContext';
import BillList from '../BillList/BillList';

// changed function component to arrow function. prefer es6 syntax
const App = () => {
  return (
 <div className='budget-container'>
   <BillProvider>
     <AddBill />
     <BillList />
     </BillProvider>

</div>

  );
}

export default App;
