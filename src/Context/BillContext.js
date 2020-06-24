import React, { useState, createContext, useEffect, Component } from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {

    const [bills, setBills] = useState([]);


    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('my-bills')) || []);
    }, [setBills]);


    useEffect(() => {
        console.log(bills)
    }, [bills])

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



    return (
        <BillContext.Provider value={{
            bills,
            updateBills,
            editBill
        }}>
            {children}
        </BillContext.Provider>
    );
}


export {
    BillContext,
    BillProvider
}