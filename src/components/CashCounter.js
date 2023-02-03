import React, { useState } from 'react';
import "./../index.css";


const CashCounter = () => {
    const CASH_GOAL = 13;
    const [cashValue, setCashValue] = useState(0);
    //click handler function
    //handle click and disable button once CASH_GOAL has been met
    const incrementCash = () => {
        if (cashValue <= CASH_GOAL) {
            setCashValue(cashValue + 1);
        }
    };

    return (
        <div className="App">
            <main>
                <section className='--center-all --bg-primary'>
                    <h3 className='--text-lg --text-light'>Total Cash : {cashValue}</h3>
                    <div>
                        <button className='--btn --btn-success --btn-lg --mb2' type="button" onClick={incrementCash} disabled={cashValue === CASH_GOAL}>Increase Cash</button>
                    </div>
                    <p className='--my2 --text-md --text-light'>{cashValue === CASH_GOAL ? "Cash Goal Has Been Met" : null}</p>
                </section>
            </main>
        </div>
    );
};

export default CashCounter;
