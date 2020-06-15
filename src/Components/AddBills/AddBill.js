import React, { useContext, useState } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const AddBill = () => {
    const [BillTitle, setBillTitle] = useState('');
    const [BillCost, setBillCost] = useState('');

    // const updateBills = () => {
    //     console.log(BillTitle, BillCost)
    // }
    const { updateBills } = useContext(BillContext)

    const billObjectValid = () => {
        // BillCost is truthy and is a number
        const costValid = BillCost && Number.parseFloat(BillCost)

        //BillTitle is truthy and not only whitespace characters
        const titleValid = BillTitle && BillTitle.split('').find(char => char !== ' ');
        return titleValid && costValid;
    };

    const clearForm = () => {
        setBillCost('');
        setBillTitle('');
    };
    return (
        <div className='add-bill-container'>
            <input className='add-bill-form-control form-control'
                placeholder='Enter Bill Title'
                type='text'
                value={BillTitle}
                onChange={(e) => setBillTitle(e.target.value)}></input>
            <input className='add-bill-form-control form-control'
                placeholder='Enter Bill Monthly Cost'
                type='number'
                value={BillCost}
                onChange={(e) => setBillCost(e.target.value)}></input>
            <button className='add-bill-form-control btn btn-primary'
                onClick={() => {
                    if (billObjectValid()) {
                        updateBills({
                            title: BillTitle,
                            monthlyCost: BillCost,
                            enabled: true
                        });
                        clearForm();
                    }
                }}> Add Bill</button>
        </div>
    );
};
export default AddBill;