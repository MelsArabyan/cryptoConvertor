import * as React from 'react';

import { InputAdornment, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { ToggleButtonCrypto, cryptoSymbolType } from './ToggleButtonCrypto';

export type formSymbolType = 'to'|'from'

export const FormCrypto = ({handleChange, onChange, cryptoSymbol, formSymbol, value}:{
    handleChange: (event: React.MouseEvent<HTMLElement>, newCryptoSymbol: cryptoSymbolType) => void,
    onChange: (value:string) => void,
    cryptoSymbol: cryptoSymbolType,
    formSymbol: formSymbolType,
    value:string
}) => {

   
    return(
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 15
            }}
        >
            <ToggleButtonGroup
            
                color="primary"
                value={cryptoSymbol}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                >
                    <ToggleButtonCrypto cryptoSymbol='BTC' onChange={handleChange} value={cryptoSymbol}/>
                    <ToggleButtonCrypto cryptoSymbol='ETH' onChange={handleChange} value={cryptoSymbol}/>
                    <ToggleButtonCrypto cryptoSymbol='USDT' onChange={handleChange} value={cryptoSymbol}/>
            </ToggleButtonGroup>
            <TextField
                type='number'
                label={formSymbol}
                id="outlined-start-adornment"
                sx={{ 
                    width: '27ch', 
                }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{cryptoSymbol}</InputAdornment>,
                }}
                value = {value}
                onChange = {(e) => onChange(e.target.value)}
            />
        </div>
    )
}