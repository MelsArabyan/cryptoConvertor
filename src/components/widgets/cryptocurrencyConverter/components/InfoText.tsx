import React from 'react'
import { cryptoSymbolType } from './ToggleButtonCrypto'

enum CryptoName {
    USDT = 'Tether',
    BTC = 'Bitcoin',
    ETH = 'Ethereum'
}

export const InfoText = ({valueFrom, valueTo, cryptoSymbolFrom, cryptoSymbolTo}:{
    valueFrom:string,
    valueTo:string,
    cryptoSymbolFrom: cryptoSymbolType,
    cryptoSymbolTo: cryptoSymbolType,
}) => {


    
    if(!valueFrom || !valueTo){
        return null
    }

    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric',
        month: 'numeric', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false, 
        timeZoneName: 'short', 
        timeZone: 'Europe/Moscow'
     }

    
      const currentDate = new Date();

    return(
        <div
            style={{
                paddingTop: 7
            }}
        >
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                }}
            >
                {valueFrom +' '+ CryptoName[cryptoSymbolFrom]+' = '+valueTo +' '+ CryptoName[cryptoSymbolTo]}
            </div>
            <div
                style={{
                    color: '#969696',
                    fontSize: 13
                }}
            >
                {'Данные носят ознакомительный характер'+' '+ currentDate.toLocaleString('en-US', options) }
            </div>
        </div>
    )
}

