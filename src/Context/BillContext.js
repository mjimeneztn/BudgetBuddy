import React, { useState, createContext, useEffect} from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {

    const [bills, setBills] = useState([]);
    const [selectedCostInterval, setSelectedCostInterval]= useState('Monthly');
    const [editModeEnabled, setEditModeEnabled]= useState(false);


    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('my-bills')) || []);
    }, [setBills]);




    const updateBills = (bill) => {
        const updatedBills = [
            ...bills,
            bill
        ];
        localStorage.setItem('my-bills', JSON.stringify(updatedBills));
        setBills(updatedBills)
    };

    const alphabeticalOrder= (bills)=> {
        return bills.sort((a,b)=>
        a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0);
    }


    const editBill = (billToUpdate) => {
        const billsFiltered = bills.filter((bill) => bill.title !== billToUpdate.title);
        const updatedBills = alphabeticalOrder([
            ...billsFiltered,
            billToUpdate
        ]);
        localStorage.setItem('my-bills', JSON.stringify(updatedBills));
        setBills(updatedBills)
    };

    const deleteBill = (billToDelete)=> {
        const updatedBills = bills.filter((bill) => bill.title !== billToDelete.title);
        localStorage.setItem('my-bills', JSON.stringify(updatedBills));
        setBills(updatedBills)
    };

    return (
        <BillContext.Provider value={{
            bills,
            updateBills,
            editBill,
            selectedCostInterval,
            setSelectedCostInterval,
            setEditModeEnabled,
            editModeEnabled,
            deleteBill

        }}>
            {children}
        </BillContext.Provider>
    );
}


export {
    BillContext,
    BillProvider
}