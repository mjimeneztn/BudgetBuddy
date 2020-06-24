import React, { useContext, useState } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';


const BillList = () => {


    const { bills } = useContext(BillContext);
    return (
        <div className='bill-list-container'>
            {
                bills.map((bill, index) => {
                 return(
                 <div key={index} className='bill-list-row'>
                     <input type="checkbox" className='form-check-input'>

                     </input>
                <div className='bill-list-row-content'>
                    {bill.title} - ${bill.monthlycost}
                </div>
            </div>

                 );
             })
            }
        </div>

    );
};

export default BillList;