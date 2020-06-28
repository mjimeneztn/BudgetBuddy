import React, {useContext}from 'react';
import './App.css';
import AddBill from '../AddBills/AddBill';
import {  BillContext } from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';
import EditBills from '../EditBills/EditBills';

// changed function component to arrow function. prefer es6 syntax
const App = () => {
  const {editModeEnabled}= useContext(BillContext)
  return (
 <div className='budget-container'>



     {
       editModeEnabled ? <EditBills /> :  <span>
       <BillOptions></BillOptions>
       <AddBill></AddBill>
       <BillTotal></BillTotal>
       <BillList></BillList>

     </span>
     }


</div>

  );
}

export default App;
