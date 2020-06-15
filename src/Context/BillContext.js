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
        localStorage.setItem('my-bills', JSON.stringify(updateBills));
        setBills(updateBills)
    };
    return (
        <BillContext.Provider value={{
            bills,
            updateBills
        }}>
            {children}
        </BillContext.Provider>
    );
}


export {
    BillContext,
    BillProvider
}