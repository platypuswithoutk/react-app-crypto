import React from 'react';

const CryptoList = (props) => {

    let cryptoCollection = props.cryptoList.map(elem=>{
        return <li key={elem.currency} className="crypto-item">
                    Last rate: <span className={elem.colorClass}>{elem.last}</span>
                    {elem.currency} {elem.symbol}
                </li> 
    })

    return (
        <ul className="crypto-list">
            {cryptoCollection} 
           
        </ul>
    )
}


export default CryptoList;