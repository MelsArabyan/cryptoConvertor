import React from 'react'
import { ToggleButton } from "@mui/material"

import { ReactComponent as BTCIcon } from '../assets/bitcoin-logo-svgrepo.svg'
import { ReactComponent as ETHIcon } from '../assets/eth-svgrepo.svg'
import { ReactComponent as USDTIcon } from '../assets/usdt-svgrepo.svg'

export type cryptoSymbolType = 'BTC'|'ETH'|'USDT'

export const ToggleButtonCrypto = (
    {cryptoSymbol, value, onChange }:{
        cryptoSymbol:cryptoSymbolType, 
        value:cryptoSymbolType,
        onChange: (event: React.MouseEvent<HTMLElement>, newAlignment: cryptoSymbolType) => void
    }
    ) => {
        
    return(
        <ToggleButton 
            value={cryptoSymbol} 
            onClick={(event) => onChange(event, cryptoSymbol)}
            style={{ 
                backgroundColor: value === cryptoSymbol ? '#1C1B2D' : '#F5F5F5',
                color: value === cryptoSymbol ? '#F5F5F5' : '#1C1B2D',
            }}
        >
            <div
            style={{
                display:'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                gap:5
            }}
            >
            {
                cryptoSymbol === 'BTC'?
                    <BTCIcon height={17} width={17}/>
                :cryptoSymbol === 'ETH'?
                    <ETHIcon height={17} width={17}/>
                :<USDTIcon height={17} width={17}/>
            }
            {cryptoSymbol}
            </div>
        </ToggleButton>
    )
}