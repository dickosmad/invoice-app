import React from 'react' ;
import './InvoiceList.css'

function InvoiceList(){
    return(
        <div className='invoice-list-container' >
            <ul className='invoice-card'>
                <li className='invoice-id'>#<span>RT2123</span> </li>
                <li className='invoice-date'>Due 12 Oct 2012 </li>
                <li className='invoice-owner'> Jhon Doe </li>
                <li className='invoice-price'>£102.2 </li>
                <li className='invoice-status'> Pending 
                <span>
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1l4 4-4 4" stroke="#7C5DFA" stroke-width="2" fill="none" fill-rule="evenodd"/>
                    </svg>
                </span> 
                </li>
                
            </ul>
        </div>
    )
}

export default InvoiceList;