import React from 'react';
import './App.css';
import AddBill from '../AddBills/AddBill';

// changed function component to arrow function. prefer es6 syntax
const App = () => {
  return (
 <div className='budget-container'>
<AddBill />
</div>

  );
}

export default App;
